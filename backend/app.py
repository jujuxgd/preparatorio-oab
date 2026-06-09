import sys
import os

# Allow `python backend/app.py` from project root
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
from backend.database import init_db
from backend.routes import days, progress, errors, highlights, comments, resumos, review, mood, user

app = Flask(__name__, static_folder='..', static_url_path='')
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Initialize database on startup
with app.app_context():
    init_db()

# Blueprints
app.register_blueprint(days.bp,       url_prefix='/api/days')
app.register_blueprint(progress.bp,   url_prefix='/api/progress')
app.register_blueprint(errors.bp,     url_prefix='/api/errors')
app.register_blueprint(highlights.bp, url_prefix='/api/highlights')
app.register_blueprint(comments.bp,   url_prefix='/api/comments')
app.register_blueprint(resumos.bp,    url_prefix='/api/resumos')
app.register_blueprint(review.bp,     url_prefix='/api/review')
app.register_blueprint(mood.bp,       url_prefix='/api/mood')
app.register_blueprint(user.bp,       url_prefix='/api/user')


@app.route('/api/health')
def health():
    return jsonify({'status': 'ok', 'version': '1.0'})


# Serve frontend static files
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    root = os.path.join(app.root_path, '..')
    target = os.path.join(root, path)
    if path and os.path.exists(target) and os.path.isfile(target):
        return send_from_directory(root, path)
    return send_from_directory(root, 'index.html')


@app.errorhandler(404)
def not_found(e):
    return jsonify({'error': 'Não encontrado'}), 404


@app.errorhandler(500)
def server_error(e):
    return jsonify({'error': 'Erro interno'}), 500


if __name__ == '__main__':
    print("OAB Backend iniciando em http://localhost:5000")
    app.run(debug=True, port=5000, use_reloader=False)
