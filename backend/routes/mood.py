from flask import Blueprint, jsonify, request
from datetime import date
from backend.database import get_db

bp = Blueprint('mood', __name__)


@bp.route('', methods=['POST'])
def save_mood():
    body = request.get_json(silent=True) or {}
    emoji = body.get('emoji', '').strip()
    dia = body.get('data', date.today().isoformat())
    if not emoji:
        return jsonify({'error': 'emoji obrigatório'}), 400

    db = get_db()
    db.execute("""
        INSERT INTO moods (data, emoji) VALUES (?, ?)
        ON CONFLICT(data) DO UPDATE SET emoji = excluded.emoji
    """, (dia, emoji))
    db.commit()
    db.close()
    return jsonify({'ok': True})


@bp.route('/history', methods=['GET'])
def get_history():
    db = get_db()
    rows = db.execute(
        "SELECT * FROM moods ORDER BY data DESC LIMIT 90"
    ).fetchall()
    db.close()
    return jsonify([dict(r) for r in rows])


@bp.route('/today', methods=['GET'])
def get_today():
    db = get_db()
    row = db.execute(
        "SELECT * FROM moods WHERE data = ?", (date.today().isoformat(),)
    ).fetchone()
    db.close()
    return jsonify(dict(row) if row else {'emoji': None})
