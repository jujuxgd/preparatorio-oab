from flask import Blueprint, jsonify, request
from datetime import datetime, date, timedelta
from backend.database import get_db

bp = Blueprint('review', __name__)

INTERVALS = {
    'lembrei':        30,
    'mais_ou_menos':  7,
    'esqueci':        1,
}

NEXT_INTERVAL = {1: 7, 7: 15, 15: 30, 30: 30}


@bp.route('/due', methods=['GET'])
def get_due():
    today = date.today().isoformat()
    db = get_db()
    rows = db.execute("""
        SELECT rc.*, d.numero, d.titulo, d.materia, d.emoji
        FROM review_cards rc
        JOIN days d ON d.id = rc.day_id
        WHERE rc.proxima_revisao <= ?
        ORDER BY rc.proxima_revisao
    """, (today,)).fetchall()
    db.close()
    return jsonify([dict(r) for r in rows])


@bp.route('/feedback', methods=['POST'])
def save_feedback():
    body = request.get_json(silent=True) or {}
    card_id = body.get('card_id')
    feedback = body.get('feedback')

    if not card_id or feedback not in INTERVALS:
        return jsonify({'error': 'card_id e feedback (lembrei/mais_ou_menos/esqueci) obrigatórios'}), 400

    db = get_db()
    card = db.execute("SELECT * FROM review_cards WHERE id = ?", (card_id,)).fetchone()
    if not card:
        db.close()
        return jsonify({'error': 'Card não encontrado'}), 404

    current_interval = card['intervalo']
    if feedback == 'lembrei':
        next_interval = NEXT_INTERVAL.get(current_interval, 30)
    elif feedback == 'mais_ou_menos':
        next_interval = max(current_interval, 7)
    else:
        next_interval = 1

    proxima = (date.today() + timedelta(days=next_interval)).isoformat()
    now = datetime.now().isoformat()

    db.execute("""
        UPDATE review_cards
        SET intervalo = ?, proxima_revisao = ?, ultimo_feedback = ?, updated_at = ?
        WHERE id = ?
    """, (next_interval, proxima, feedback, now, card_id))
    db.commit()
    db.close()
    return jsonify({'ok': True, 'proxima_revisao': proxima, 'intervalo': next_interval})
