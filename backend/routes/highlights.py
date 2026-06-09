from flask import Blueprint, jsonify, request
from backend.database import get_db

bp = Blueprint('highlights', __name__)


@bp.route('', methods=['POST'])
def add_highlight():
    body = request.get_json(silent=True) or {}
    day_numero = body.get('day_numero')
    texto = body.get('texto', '').strip()
    cor = body.get('cor', 'rosa')
    if not day_numero or not texto:
        return jsonify({'error': 'day_numero e texto obrigatórios'}), 400

    db = get_db()
    day = db.execute("SELECT id FROM days WHERE numero = ?", (day_numero,)).fetchone()
    if not day:
        db.close()
        return jsonify({'error': 'Dia não encontrado'}), 404

    db.execute(
        "INSERT INTO highlights (day_id, texto, cor, pagina) VALUES (?, ?, ?, ?)",
        (day['id'], texto, cor, body.get('pagina', ''))
    )
    db.commit()
    hid = db.execute("SELECT last_insert_rowid() as id").fetchone()['id']
    db.close()
    return jsonify({'ok': True, 'id': hid}), 201


@bp.route('/<int:numero>', methods=['GET'])
def get_highlights(numero):
    db = get_db()
    rows = db.execute("""
        SELECT h.* FROM highlights h
        JOIN days d ON d.id = h.day_id
        WHERE d.numero = ?
        ORDER BY h.created_at
    """, (numero,)).fetchall()
    db.close()
    return jsonify([dict(r) for r in rows])


@bp.route('/<int:hid>', methods=['DELETE'])
def delete_highlight(hid):
    db = get_db()
    db.execute("DELETE FROM highlights WHERE id = ?", (hid,))
    db.commit()
    db.close()
    return jsonify({'ok': True})
