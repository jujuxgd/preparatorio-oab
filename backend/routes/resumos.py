from flask import Blueprint, jsonify, request
from datetime import datetime
from backend.database import get_db

bp = Blueprint('resumos', __name__)


@bp.route('', methods=['POST'])
def save_resumo():
    body = request.get_json(silent=True) or {}
    day_numero = body.get('day_numero')
    texto = body.get('texto', '').strip()
    if not day_numero or not texto:
        return jsonify({'error': 'day_numero e texto obrigatórios'}), 400

    db = get_db()
    day = db.execute("SELECT id FROM days WHERE numero = ?", (day_numero,)).fetchone()
    if not day:
        db.close()
        return jsonify({'error': 'Dia não encontrado'}), 404

    now = datetime.now().isoformat()
    db.execute("""
        INSERT INTO resumos (day_id, texto, created_at, updated_at)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(day_id) DO UPDATE SET texto = excluded.texto, updated_at = excluded.updated_at
    """, (day['id'], texto, now, now))
    db.commit()
    db.close()
    return jsonify({'ok': True}), 201


@bp.route('/<int:numero>', methods=['GET'])
def get_resumo(numero):
    db = get_db()
    row = db.execute("""
        SELECT r.* FROM resumos r
        JOIN days d ON d.id = r.day_id
        WHERE d.numero = ?
    """, (numero,)).fetchone()
    db.close()
    if not row:
        return jsonify({'texto': '', 'updated_at': None})
    return jsonify(dict(row))


@bp.route('/<int:rid>', methods=['PUT'])
def update_resumo(rid):
    body = request.get_json(silent=True) or {}
    texto = body.get('texto', '').strip()
    if not texto:
        return jsonify({'error': 'texto obrigatório'}), 400
    db = get_db()
    db.execute(
        "UPDATE resumos SET texto = ?, updated_at = ? WHERE id = ?",
        (texto, datetime.now().isoformat(), rid)
    )
    db.commit()
    db.close()
    return jsonify({'ok': True})
