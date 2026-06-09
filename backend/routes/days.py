from flask import Blueprint, jsonify
from backend.database import get_db

bp = Blueprint('days', __name__)


@bp.route('', methods=['GET'])
def list_days():
    db = get_db()
    rows = db.execute(
        "SELECT * FROM days ORDER BY numero"
    ).fetchall()
    db.close()
    return jsonify([dict(r) for r in rows])


@bp.route('/<int:numero>', methods=['GET'])
def get_day(numero):
    db = get_db()
    row = db.execute(
        "SELECT * FROM days WHERE numero = ?", (numero,)
    ).fetchone()
    db.close()
    if not row:
        return jsonify({'error': 'Dia não encontrado'}), 404
    return jsonify(dict(row))
