import os
from flask import Blueprint, jsonify, request, current_app
from datetime import datetime
from backend.database import get_db

bp = Blueprint('user', __name__)


@bp.route('/stats', methods=['GET'])
def get_stats():
    db = get_db()
    concluidos = db.execute(
        "SELECT COUNT(*) as n FROM progress WHERE completo = 1"
    ).fetchone()['n']
    total_erros = db.execute("SELECT COUNT(*) as n FROM errors").fetchone()['n']
    dominados = db.execute(
        "SELECT COUNT(*) as n FROM errors WHERE dominada = 1"
    ).fetchone()['n']
    total_tempo = db.execute(
        "SELECT COALESCE(SUM(tempo_estudado), 0) as t FROM progress"
    ).fetchone()['t']
    pendentes_revisao = db.execute(
        "SELECT COUNT(*) as n FROM review_cards WHERE proxima_revisao <= date('now')"
    ).fetchone()['n']
    db.close()
    return jsonify({
        'dias_concluidos': concluidos,
        'pct_concluido': round((concluidos / 60) * 100),
        'total_erros': total_erros,
        'erros_dominados': dominados,
        'tempo_total_minutos': total_tempo,
        'pendentes_revisao': pendentes_revisao,
    })


@bp.route('/config', methods=['GET'])
def get_config():
    db = get_db()
    row = db.execute("SELECT * FROM user_config WHERE id = 1").fetchone()
    db.close()
    return jsonify(dict(row) if row else {})


@bp.route('/config', methods=['PUT'])
def update_config():
    body = request.get_json(silent=True) or {}
    db = get_db()
    fields, vals = [], []
    for col in ('nome', 'theme', 'foto_perfil'):
        if col in body:
            fields.append(f'{col} = ?')
            vals.append(body[col])
    if fields:
        fields.append('updated_at = ?')
        vals.append(datetime.now().isoformat())
        vals.append(1)
        db.execute(f"UPDATE user_config SET {', '.join(fields)} WHERE id = ?", vals)
        db.commit()
    db.close()
    return jsonify({'ok': True})


@bp.route('/photo', methods=['POST'])
def upload_photo():
    if 'photo' not in request.files:
        return jsonify({'error': 'Arquivo não enviado'}), 400
    f = request.files['photo']
    if not f.filename:
        return jsonify({'error': 'Nome de arquivo vazio'}), 400

    ext = os.path.splitext(f.filename)[1].lower()
    if ext not in ('.jpg', '.jpeg', '.png', '.webp', '.gif'):
        return jsonify({'error': 'Formato inválido'}), 400

    uploads = os.path.join(current_app.root_path, '..', 'backend', 'uploads')
    os.makedirs(uploads, exist_ok=True)
    path = os.path.join(uploads, f'perfil{ext}')
    f.save(path)

    db = get_db()
    db.execute(
        "UPDATE user_config SET foto_perfil = ?, updated_at = ? WHERE id = 1",
        (f'backend/uploads/perfil{ext}', datetime.now().isoformat())
    )
    db.commit()
    db.close()
    return jsonify({'ok': True, 'path': f'backend/uploads/perfil{ext}'})
