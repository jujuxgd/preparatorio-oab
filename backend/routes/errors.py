from flask import Blueprint, jsonify, request
from datetime import datetime
from backend.database import get_db

bp = Blueprint('errors', __name__)


@bp.route('', methods=['POST'])
def add_error():
    body = request.get_json(silent=True) or {}
    materia = body.get('materia', '')
    if not materia:
        return jsonify({'error': 'materia obrigatória'}), 400

    db = get_db()
    day_id = None
    if body.get('day_numero'):
        row = db.execute(
            "SELECT id FROM days WHERE numero = ?", (body['day_numero'],)
        ).fetchone()
        if row:
            day_id = row['id']

    db.execute("""
        INSERT INTO errors (day_id, questao_id, materia, assunto, enunciado)
        VALUES (?, ?, ?, ?, ?)
    """, (day_id, body.get('questao_id'), materia,
          body.get('assunto', ''), body.get('enunciado', '')))
    db.commit()
    eid = db.execute("SELECT last_insert_rowid() as id").fetchone()['id']
    db.close()
    return jsonify({'ok': True, 'id': eid}), 201


@bp.route('', methods=['GET'])
def list_errors():
    materia = request.args.get('materia')
    dominada = request.args.get('dominada')
    db = get_db()
    q = "SELECT e.*, d.numero as day_numero FROM errors e LEFT JOIN days d ON d.id = e.day_id WHERE 1=1"
    params = []
    if materia:
        q += " AND e.materia = ?"
        params.append(materia)
    if dominada is not None:
        q += " AND e.dominada = ?"
        params.append(1 if dominada == '1' else 0)
    q += " ORDER BY e.data_erro DESC"
    rows = db.execute(q, params).fetchall()
    db.close()
    return jsonify([dict(r) for r in rows])


@bp.route('/day/<int:numero>', methods=['GET'])
def errors_by_day(numero):
    db = get_db()
    rows = db.execute("""
        SELECT e.* FROM errors e
        JOIN days d ON d.id = e.day_id
        WHERE d.numero = ?
        ORDER BY e.data_erro DESC
    """, (numero,)).fetchall()
    db.close()
    return jsonify([dict(r) for r in rows])


@bp.route('/<int:eid>', methods=['PUT'])
def update_error(eid):
    body = request.get_json(silent=True) or {}
    db = get_db()
    row = db.execute("SELECT id FROM errors WHERE id = ?", (eid,)).fetchone()
    if not row:
        db.close()
        return jsonify({'error': 'Erro não encontrado'}), 404

    if body.get('dominada'):
        db.execute(
            "UPDATE errors SET dominada = 1, data_dominada = ? WHERE id = ?",
            (datetime.now().isoformat(), eid)
        )
    else:
        fields, vals = [], []
        for col in ('materia', 'assunto', 'enunciado', 'questao_id'):
            if col in body:
                fields.append(f'{col} = ?')
                vals.append(body[col])
        if fields:
            vals.append(eid)
            db.execute(f"UPDATE errors SET {', '.join(fields)} WHERE id = ?", vals)

    db.commit()
    db.close()
    return jsonify({'ok': True})


@bp.route('/<int:eid>', methods=['DELETE'])
def delete_error(eid):
    db = get_db()
    db.execute("DELETE FROM errors WHERE id = ?", (eid,))
    db.commit()
    db.close()
    return jsonify({'ok': True})
