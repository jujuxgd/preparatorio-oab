// ============================================
// OAB · API Client
// Conecta com backend Flask (localhost:5000)
// Fallback automático para localStorage
// ============================================

const API_BASE = 'http://localhost:5000/api';
let _backendOk = null; // null = não testado, true/false = resultado

async function _checkBackend() {
  if (_backendOk !== null) return _backendOk;
  try {
    const r = await fetch(`${API_BASE}/health`, { signal: AbortSignal.timeout(800) });
    _backendOk = r.ok;
  } catch {
    _backendOk = false;
  }
  return _backendOk;
}

async function _api(method, path, body) {
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(5000),
  };
  if (body) opts.body = JSON.stringify(body);
  const r = await fetch(`${API_BASE}${path}`, opts);
  if (!r.ok) throw new Error(`API ${r.status}`);
  return r.json();
}

// ── DIAS ──────────────────────────────────────────────────────────

export async function getDays() {
  if (await _checkBackend()) return _api('GET', '/days');
  // fallback: retorna do PLANO_OAB
  if (typeof PLANO_OAB !== 'undefined') return PLANO_OAB;
  return [];
}

export async function getDay(numero) {
  if (await _checkBackend()) return _api('GET', `/days/${numero}`);
  if (typeof getDadosDia === 'function') return getDadosDia(numero);
  return null;
}

// ── PROGRESSO ─────────────────────────────────────────────────────

export async function getProgress() {
  if (await _checkBackend()) return _api('GET', '/progress');
  // fallback localStorage
  if (typeof carregarProgresso === 'function') {
    const p = carregarProgresso();
    const stats = typeof calcularStats === 'function' ? calcularStats() : {};
    return { ...stats, dias: p.dias, streak: p.streak };
  }
  return {};
}

export async function getDayProgress(numero) {
  if (await _checkBackend()) return _api('GET', `/progress/${numero}`);
  if (typeof obterDia === 'function') return obterDia(numero);
  return {};
}

export async function saveProgress(data) {
  if (await _checkBackend()) return _api('POST', '/progress', data);
  // fallback
  if (typeof concluirDia === 'function' && data.completo) {
    concluirDia(data.numero, data.nota);
  }
  return { ok: true };
}

export async function updateProgress(numero, data) {
  if (await _checkBackend()) return _api('PUT', `/progress/${numero}`, data);
  if (typeof salvarNota === 'function' && data.nota) salvarNota(numero, data.nota);
  return { ok: true };
}

// ── BANCO DE ERROS ────────────────────────────────────────────────

export async function saveError(data) {
  if (await _checkBackend()) return _api('POST', '/errors', data);
  // fallback: salva em localStorage como JSON
  const erros = _lsGet('oab_erros', []);
  erros.unshift({ ...data, id: Date.now(), data_erro: new Date().toISOString(), dominada: false });
  _lsSet('oab_erros', erros);
  return { ok: true };
}

export async function getErrors(params = {}) {
  if (await _checkBackend()) {
    const qs = new URLSearchParams(params).toString();
    return _api('GET', `/errors${qs ? '?' + qs : ''}`);
  }
  return _lsGet('oab_erros', []);
}

export async function getErrorsByDay(numero) {
  if (await _checkBackend()) return _api('GET', `/errors/day/${numero}`);
  return _lsGet('oab_erros', []).filter(e => e.day_numero === numero);
}

export async function markErrorDominada(id) {
  if (await _checkBackend()) return _api('PUT', `/errors/${id}`, { dominada: true });
  const erros = _lsGet('oab_erros', []);
  const e = erros.find(x => x.id === id);
  if (e) { e.dominada = true; e.data_dominada = new Date().toISOString(); }
  _lsSet('oab_erros', erros);
  return { ok: true };
}

export async function deleteError(id) {
  if (await _checkBackend()) return _api('DELETE', `/errors/${id}`);
  _lsSet('oab_erros', _lsGet('oab_erros', []).filter(x => x.id !== id));
  return { ok: true };
}

// ── HIGHLIGHTS ────────────────────────────────────────────────────

export async function saveHighlight(data) {
  if (await _checkBackend()) return _api('POST', '/highlights', data);
  const hl = _lsGet('oab_highlights', []);
  hl.push({ ...data, id: Date.now(), created_at: new Date().toISOString() });
  _lsSet('oab_highlights', hl);
  return { ok: true };
}

export async function getHighlights(numero) {
  if (await _checkBackend()) return _api('GET', `/highlights/${numero}`);
  return _lsGet('oab_highlights', []).filter(h => h.day_numero === numero);
}

export async function deleteHighlight(id) {
  if (await _checkBackend()) return _api('DELETE', `/highlights/${id}`);
  _lsSet('oab_highlights', _lsGet('oab_highlights', []).filter(h => h.id !== id));
  return { ok: true };
}

// ── COMENTÁRIOS ───────────────────────────────────────────────────

export async function saveComment(data) {
  if (await _checkBackend()) return _api('POST', '/comments', data);
  const cs = _lsGet('oab_comments', []);
  cs.unshift({ ...data, id: Date.now(), created_at: new Date().toISOString() });
  _lsSet('oab_comments', cs);
  return { ok: true };
}

export async function getComments(numero) {
  if (await _checkBackend()) return _api('GET', `/comments/${numero}`);
  return _lsGet('oab_comments', []).filter(c => c.day_numero === numero);
}

export async function deleteComment(id) {
  if (await _checkBackend()) return _api('DELETE', `/comments/${id}`);
  _lsSet('oab_comments', _lsGet('oab_comments', []).filter(c => c.id !== id));
  return { ok: true };
}

// ── RESUMOS ───────────────────────────────────────────────────────

export async function saveResumo(data) {
  if (await _checkBackend()) return _api('POST', '/resumos', data);
  _lsSet(`oab_resumo_${data.day_numero}`, { texto: data.texto, updated_at: new Date().toISOString() });
  return { ok: true };
}

export async function getResumo(numero) {
  if (await _checkBackend()) return _api('GET', `/resumos/${numero}`);
  return _lsGet(`oab_resumo_${numero}`, { texto: '', updated_at: null });
}

// ── REVISÃO ESPAÇADA ──────────────────────────────────────────────

export async function getReviewDue() {
  if (await _checkBackend()) return _api('GET', '/review/due');
  return [];
}

export async function sendReviewFeedback(card_id, feedback) {
  if (await _checkBackend()) return _api('POST', '/review/feedback', { card_id, feedback });
  return { ok: true };
}

// ── MOOD ──────────────────────────────────────────────────────────

function _dataLocal(d) {
  d = d || new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

export async function saveMood(emoji, data) {
  const today = data || _dataLocal();
  if (await _checkBackend()) return _api('POST', '/mood', { emoji, data: today });
  _lsSet(`mood_${today}`, emoji);
  return { ok: true };
}

export async function getMoodHistory() {
  if (await _checkBackend()) return _api('GET', '/mood/history');
  // Fallback: reconstruct from localStorage keys
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('mood_')) {
      result.push({ data: key.replace('mood_', ''), emoji: localStorage.getItem(key) });
    }
  }
  return result.sort((a, b) => b.data.localeCompare(a.data));
}

export async function getMoodToday() {
  if (await _checkBackend()) return _api('GET', '/mood/today');
  const today = _dataLocal();
  return { emoji: localStorage.getItem(`mood_${today}`) || null };
}

// ── USUÁRIO ───────────────────────────────────────────────────────

export async function getUserStats() {
  if (await _checkBackend()) return _api('GET', '/user/stats');
  if (typeof calcularStats === 'function') return calcularStats();
  return {};
}

export async function getUserConfig() {
  if (await _checkBackend()) return _api('GET', '/user/config');
  return { nome: 'Júlia', theme: localStorage.getItem('theme') || 'light' };
}

export async function updateUserConfig(data) {
  if (await _checkBackend()) return _api('PUT', '/user/config', data);
  if (data.theme) localStorage.setItem('theme', data.theme);
  return { ok: true };
}

// ── HELPERS ───────────────────────────────────────────────────────

function _lsGet(key, def) {
  try { return JSON.parse(localStorage.getItem(key)) ?? def; } catch { return def; }
}
function _lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// Status do backend (para debug)
export async function backendStatus() {
  const ok = await _checkBackend();
  return { online: ok, url: API_BASE };
}
