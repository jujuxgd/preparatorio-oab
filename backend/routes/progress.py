from flask import Blueprint, jsonify, request
from datetime import datetime, date, timedelta
from backend.database import get_db
import json

bp = Blueprint('progress', __name__)


def _ensure_progress(db, day_id):
    db.execute(
        "INSERT OR IGNORE INTO progress (day_id) VALUES (?)", (day_id,)
    )


def _calc_streak(db):
    rows = db.execute(
        """SELECT data_conclusao FROM progress
           WHERE completo = 1 AND data_conclusao IS NOT NULL
           ORDER BY data_conclusao DESC"""
    ).fetchall()
    if not rows:
        return 0
    streak = 0
    check = date.today()
    for row in rows:
        d = datetime.fromisoformat(row['data_conclusao']).date()
        if d == check or d == check - timedelta(days=1):
            streak += 1
            check = d - timedelta(days=1)
        elif d < check - timedelta(days=1):
            break
    return streak


@bp.route('', methods=['GET'])
def get_progress():
    db = get_db()
    rows = db.execute(
        """SELECT p.*, d.numero, d.materia, d.titulo
           FROM progress p
           JOIN days d ON d.id = p.day_id"""
    ).fetchall()
    total = db.execute("SELECT COUNT(*) as n FROM days").fetchone()['n']
    concluidos = db.execute(
        "SELECT COUNT(*) as n FROM progress WHERE completo = 1"
    ).fetchone()['n']
    streak = _calc_streak(db)
    db.close()
    pct = round((concluidos / total) * 100) if total else 0
    return jsonify({
        'total': total,
        'concluidos': concluidos,
        'pct': pct,
        'streak': streak,
        'dias': {str(r['numero']): dict(r) for r in rows}
    })


@bp.route('/<int:numero>', methods=['GET'])
def get_day_progress(numero):
    db = get_db()
    row = db.execute(
        """SELECT p.* FROM progress p
           JOIN days d ON d.id = p.day_id
           WHERE d.numero = ?""", (numero,)
    ).fetchone()
    db.close()
    if not row:
        return jsonify({'completo': False, 'tempo_estudado': 0, 'checklist': {}})
    data = dict(row)
    data['checklist'] = json.loads(data.get('checklist') or '{}')
    return jsonify(data)


@bp.route('', methods=['POST'])
def save_progress():
    body = request.get_json(silent=True) or {}
    numero = body.get('numero')
    if not numero:
        return jsonify({'error': 'numero obrigatório'}), 400

    db = get_db()
    day = db.execute("SELECT id FROM days WHERE numero = ?", (numero,)).fetchone()
    if not day:
        db.close()
        return jsonify({'error': 'Dia não encontrado'}), 404

    day_id = day['id']
    _ensure_progress(db, day_id)

    completo = body.get('completo', False)
    tempo = body.get('tempo_estudado', 0)
    nota = body.get('nota')
    checklist = json.dumps(body.get('checklist', {}))
    now = datetime.now().isoformat()

    db.execute("""
        UPDATE progress SET
            completo = ?,
            tempo_estudado = COALESCE(tempo_estudado, 0) + ?,
            data_conclusao = CASE WHEN ? = 1 AND data_conclusao IS NULL THEN ? ELSE data_conclusao END,
            nota = COALESCE(?, nota),
            checklist = ?
        WHERE day_id = ?
    """, (completo, tempo, completo, now, nota, checklist, day_id))

    # Create review card when day is completed
    if completo:
        existing = db.execute(
            "SELECT id FROM review_cards WHERE day_id = ?", (day_id,)
        ).fetchone()
        if not existing:
            proxima = (date.today() + timedelta(days=1)).isoformat()
            db.execute(
                "INSERT INTO review_cards (day_id, intervalo, proxima_revisao) VALUES (?, 1, ?)",
                (day_id, proxima)
            )

    db.commit()
    db.close()
    return jsonify({'ok': True})


@bp.route('/<int:numero>', methods=['PUT'])
def update_progress(numero):
    body = request.get_json(silent=True) or {}
    db = get_db()
    day = db.execute("SELECT id FROM days WHERE numero = ?", (numero,)).fetchone()
    if not day:
        db.close()
        return jsonify({'error': 'Dia não encontrado'}), 404

    day_id = day['id']
    _ensure_progress(db, day_id)

    fields, vals = [], []
    if 'tempo_estudado' in body:
        fields.append('tempo_estudado = ?')
        vals.append(body['tempo_estudado'])
    if 'nota' in body:
        fields.append('nota = ?')
        vals.append(body['nota'])
    if 'checklist' in body:
        fields.append('checklist = ?')
        vals.append(json.dumps(body['checklist']))
    if 'ultima_revisao' in body:
        fields.append('ultima_revisao = ?')
        vals.append(body['ultima_revisao'])
    if 'completo' in body:
        fields.append('completo = ?')
        vals.append(body['completo'])

    if fields:
        vals.append(day_id)
        db.execute(f"UPDATE progress SET {', '.join(fields)} WHERE day_id = ?", vals)
        db.commit()

    db.close()
    return jsonify({'ok': True})
