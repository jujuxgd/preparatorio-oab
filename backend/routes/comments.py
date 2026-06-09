from flask import Blueprint, jsonify, request
from backend.database import get_db

bp = Blueprint('comments', __name__)


@bp.route('', methods=['POST'])
def add_comment():
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

    db.execute("INSERT INTO comments (day_id, texto) VALUES (?, ?)", (day['id'], texto))
    db.commit()
    cid = db.execute("SELECT last_insert_rowid() as id").fetchone()['id']
    db.close()
    return jsonify({'ok': True, 'id': cid}), 201


@bp.route('/<int:numero>', methods=['GET'])
def get_comments(numero):
    db = get_db()
    rows = db.execute("""
        SELECT c.* FROM comments c
        JOIN days d ON d.id = c.day_id
        WHERE d.numero = ?
        ORDER BY c.created_at DESC
    """, (numero,)).fetchall()
    db.close()
    return jsonify([dict(r) for r in rows])


@bp.route('/<int:cid>', methods=['DELETE'])
def delete_comment(cid):
    db = get_db()
    db.execute("DELETE FROM comments WHERE id = ?", (cid,))
    db.commit()
    db.close()
    return jsonify({'ok': True})
