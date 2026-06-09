#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_caderno.py
Converts extracted Google Drive PDF text (JSON) into formatted HTML JS files
for the OAB study website.
"""

import json
import re
import os
import sys
import io

# Force UTF-8 output on Windows
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

# ── Subject configuration ─────────────────────────────────────────────────────
SUBJECTS = [
    {
        "id": "civil",
        "name": "Direito Civil",
        "var": "CL_CIVIL",
        "out": "cl-civil.js",
        "src": r"C:\Users\julia\.claude\projects\C--Users-julia-OneDrive-Desktop-files\c0a4291a-b52d-454b-b242-a8fc1d2ef9a5\tool-results\mcp-claude_ai_Google_Drive-read_file_content-1780756791682.txt",
    },
    {
        "id": "proc_civil",
        "name": "Proc. Civil",
        "var": "CL_PROC_CIVIL",
        "out": "cl-proc_civil.js",
        "src": r"C:\Users\julia\.claude\projects\C--Users-julia-OneDrive-Desktop-files\c0a4291a-b52d-454b-b242-a8fc1d2ef9a5\tool-results\mcp-claude_ai_Google_Drive-read_file_content-1780757386779.txt",
    },
    {
        "id": "tributario",
        "name": "Tributário",
        "var": "CL_TRIBUTARIO",
        "out": "cl-tributario.js",
        "src": r"C:\Users\julia\.claude\projects\C--Users-julia-OneDrive-Desktop-files\c0a4291a-b52d-454b-b242-a8fc1d2ef9a5\tool-results\mcp-claude_ai_Google_Drive-read_file_content-1780757388027.txt",
    },
    {
        "id": "administrativo",
        "name": "Administrativo",
        "var": "CL_ADMINISTRATIVO",
        "out": "cl-administrativo.js",
        "src": r"C:\Users\julia\.claude\projects\C--Users-julia-OneDrive-Desktop-files\c0a4291a-b52d-454b-b242-a8fc1d2ef9a5\tool-results\mcp-claude_ai_Google_Drive-read_file_content-1780757389458.txt",
    },
    {
        "id": "proc_penal",
        "name": "Proc. Penal",
        "var": "CL_PROC_PENAL",
        "out": "cl-proc_penal.js",
        "src": r"C:\Users\julia\.claude\projects\C--Users-julia-OneDrive-Desktop-files\c0a4291a-b52d-454b-b242-a8fc1d2ef9a5\tool-results\mcp-claude_ai_Google_Drive-read_file_content-1780757410895.txt",
    },
    {
        "id": "trabalho",
        "name": "Trabalho",
        "var": "CL_TRABALHO",
        "out": "cl-trabalho.js",
        "src": r"C:\Users\julia\.claude\projects\C--Users-julia-OneDrive-Desktop-files\c0a4291a-b52d-454b-b242-a8fc1d2ef9a5\tool-results\mcp-claude_ai_Google_Drive-read_file_content-1780757411509.txt",
    },
    {
        "id": "proc_trabalho",
        "name": "Proc. Trabalho",
        "var": "CL_PROC_TRABALHO",
        "out": "cl-proc_trabalho.js",
        "src": r"C:\Users\julia\.claude\projects\C--Users-julia-OneDrive-Desktop-files\c0a4291a-b52d-454b-b242-a8fc1d2ef9a5\tool-results\mcp-claude_ai_Google_Drive-read_file_content-1780757412307.txt",
    },
    {
        "id": "cdc",
        "name": "Consumidor",
        "var": "CL_CDC",
        "out": "cl-cdc.js",
        "src": r"C:\Users\julia\.claude\projects\C--Users-julia-OneDrive-Desktop-files\c0a4291a-b52d-454b-b242-a8fc1d2ef9a5\tool-results\toolu_01SyZ1nbmhxrkiStSTiUsui2.txt",
    },
]

OUTPUT_DIR = r"C:\Users\julia\OneDrive\Desktop\files"

# ── Regex patterns ─────────────────────────────────────────────────────────────
RE_WATERMARK_NAME = re.compile(r'Nome:\s*sara ester dias.*', re.IGNORECASE)
RE_WATERMARK_CPF  = re.compile(r'CPF:.*IP:.*', re.IGNORECASE)
RE_CADERNO_HEADER = re.compile(r'Caderno Legislativo.*VDE.*', re.IGNORECASE)
RE_PAGE_NUM       = re.compile(r'^\s*\d+\s*$')
RE_ART            = re.compile(r'^(Art\.?\s*\d+[°º\.]?\s*(?:[A-Z]-\d+)?\s*(?:CC|CPC|CP|CTN|CLT|CF|CDC|CPC/15|NCPC)?\.?)', re.IGNORECASE)
RE_PARAGRAFO_UN   = re.compile(r'^Parágrafo único\.?\s*', re.IGNORECASE)
RE_PARAGRAFO_N    = re.compile(r'^§\s*(\d+)[°º]?\s*', re.IGNORECASE)
RE_INCISO         = re.compile(r'^(I{1,3}V?|VI{0,3}|IX|XI{0,3}|XIV|XV|XVI{0,3}|XIX|XX|XXI{0,3}|XXIV|XXV|XXVI{0,3}|XXIX|XXX)\s*[–\-]\s*', re.IGNORECASE)
RE_ALINEA         = re.compile(r'^([a-z])\)\s*')
RE_OAB_BADGE      = re.compile(r'\*?\*?CAIU NA OAB\s+(\w+)\*?\*?', re.IGNORECASE)
RE_ALL_CAPS_LINE  = re.compile(r'^[A-ZÁÉÍÓÚÀÂÊÎÔÛÃÕÇ\s\-\/\.,:\'\"]+$')
RE_PART_SECTION   = re.compile(r'^(\d+)\s+([A-ZÁÉÍÓÚÀÂÊÎÔÛÃÕÇ\s\-\/\.,:\'\"]+)$|^([A-ZÁÉÍÓÚÀÂÊÎÔÛÃÕÇ\s\-\/\.,:\'\"]+)\s+(\d+)$')
RE_SUMARIO_START  = re.compile(r'^SUMÁRIO\s*$', re.IGNORECASE)


def is_all_caps_section(line):
    """Returns True if line looks like an ALL CAPS section header (not a single word or number)."""
    stripped = line.strip()
    if len(stripped) < 3:
        return False
    if RE_PAGE_NUM.match(stripped):
        return False
    if RE_ART.match(stripped):
        return False
    # Must have at least one letter, no lowercase letters
    if not any(c.isalpha() for c in stripped):
        return False
    if any(c.islower() for c in stripped):
        return False
    return True


def is_part_header(line):
    """
    Returns (True, title) if line matches 'PARTE GERAL 2' or '2 PARTE GERAL' patterns.
    """
    stripped = line.strip()
    # Pattern: NUMBER + SPACE + ALL_CAPS_WORDS
    m = re.match(r'^(\d+)\s+([A-ZÁÉÍÓÚÀÂÊÎÔÛÃÕÇ][A-ZÁÉÍÓÚÀÂÊÎÔÛÃÕÇ\s\-]+)$', stripped)
    if m:
        return True, m.group(2).strip()
    # Pattern: ALL_CAPS_WORDS + SPACE + NUMBER
    m = re.match(r'^([A-ZÁÉÍÓÚÀÂÊÎÔÛÃÕÇ][A-ZÁÉÍÓÚÀÂÊÎÔÛÃÕÇ\s\-]+)\s+(\d+)$', stripped)
    if m:
        return True, m.group(1).strip()
    return False, None


def apply_oab_badges(text):
    """Replace OAB markers with badge HTML."""
    def replacer(m):
        exam = m.group(1)
        return f'<span class="cl-oab-badge">Caiu OAB {exam}</span>'
    return RE_OAB_BADGE.sub(replacer, text)


def escape_for_js(text):
    """Escape backticks and ${} for JS template literals."""
    text = text.replace('\\', '\\\\')
    text = text.replace('`', '\\`')
    text = text.replace('${', '\\${')
    return text


def clean_text(raw_text):
    """Remove watermarks, headers, page numbers, and SUMÁRIO section."""
    lines = raw_text.splitlines()
    cleaned = []
    in_sumario = False

    for line in lines:
        # Remove watermarks
        if RE_WATERMARK_NAME.search(line):
            continue
        if RE_WATERMARK_CPF.search(line):
            continue
        # Remove caderno header lines
        if RE_CADERNO_HEADER.search(line):
            continue
        # Remove isolated page numbers
        if RE_PAGE_NUM.match(line):
            continue

        # Detect and skip SUMÁRIO section
        if RE_SUMARIO_START.match(line.strip()):
            in_sumario = True
            continue

        if in_sumario:
            # Stop SUMÁRIO at first Art. or a numbered section header
            stripped = line.strip()
            if RE_ART.match(stripped):
                in_sumario = False
                cleaned.append(line)
                continue
            # Stop at numbered section like "2 PARTE GERAL" or a clearly non-TOC heading
            m_part, _ = is_part_header(stripped)
            if m_part and len(stripped) > 5:
                in_sumario = False
                cleaned.append(line)
                continue
            # Also stop at pure ALL CAPS headers that look like content (not page-number TOC entries)
            if is_all_caps_section(stripped) and not re.search(r'\d', stripped):
                in_sumario = False
                cleaned.append(line)
                continue
            continue  # Still in SUMÁRIO, skip line

        cleaned.append(line)

    return '\n'.join(cleaned)


def convert_to_html(text):
    """Convert cleaned plain text to structured HTML."""
    lines = text.splitlines()
    html_parts = ['<div class="cl-native-content">']
    i = 0
    n = len(lines)

    while i < n:
        line = lines[i]
        stripped = line.strip()

        # Skip empty lines (but keep paragraph spacing via CSS)
        if not stripped:
            i += 1
            continue

        # ── Part headers (PARTE GERAL 2 / 2 PARTE GERAL) ──────────────────
        is_part, part_title = is_part_header(stripped)
        if is_part and len(stripped) > 5:
            part_title_html = apply_oab_badges(escape_for_js(part_title))
            html_parts.append(f'<h2 class="cl-part">{part_title_html}</h2>')
            i += 1
            continue

        # ── Article lines ──────────────────────────────────────────────────
        m_art = RE_ART.match(stripped)
        if m_art:
            art_num = m_art.group(1).rstrip()
            art_body = stripped[m_art.end():].strip()
            art_body_html = apply_oab_badges(escape_for_js(art_body))
            art_num_html = escape_for_js(art_num)
            html_parts.append(
                f'<div class="cl-artigo">'
                f'<strong class="cl-art-num">{art_num_html}</strong> '
                f'<span class="cl-art-texto">{art_body_html}</span>'
                f'</div>'
            )
            i += 1
            continue

        # ── Parágrafo único ────────────────────────────────────────────────
        if RE_PARAGRAFO_UN.match(stripped):
            body = RE_PARAGRAFO_UN.sub('', stripped).strip()
            body_html = apply_oab_badges(escape_for_js(body))
            html_parts.append(
                f'<p class="cl-paragrafo"><strong>Parágrafo único.</strong> {body_html}</p>'
            )
            i += 1
            continue

        # ── § N paragraphs ─────────────────────────────────────────────────
        m_par = RE_PARAGRAFO_N.match(stripped)
        if m_par:
            num = m_par.group(1)
            body = stripped[m_par.end():].strip()
            body_html = apply_oab_badges(escape_for_js(body))
            html_parts.append(
                f'<p class="cl-paragrafo"><strong>§ {num}°</strong> {body_html}</p>'
            )
            i += 1
            continue

        # ── Incisos (I -, II -, etc.) ──────────────────────────────────────
        m_inc = RE_INCISO.match(stripped)
        if m_inc:
            inc_num = m_inc.group(0).rstrip('- ').rstrip()
            # Normalise dash
            body = stripped[m_inc.end():].strip()
            body_html = apply_oab_badges(escape_for_js(body))
            inc_num_html = escape_for_js(inc_num + ' –')
            html_parts.append(
                f'<p class="cl-inciso"><span class="cl-inc-num">{inc_num_html}</span> {body_html}</p>'
            )
            i += 1
            continue

        # ── Alíneas (a), b), etc.) ─────────────────────────────────────────
        m_alinea = RE_ALINEA.match(stripped)
        if m_alinea:
            letter = m_alinea.group(1)
            body = stripped[m_alinea.end():].strip()
            body_html = apply_oab_badges(escape_for_js(body))
            html_parts.append(
                f'<p class="cl-alinea">{escape_for_js(letter)}) {body_html}</p>'
            )
            i += 1
            continue

        # ── ALL CAPS section headers ───────────────────────────────────────
        if is_all_caps_section(stripped):
            header_html = apply_oab_badges(escape_for_js(stripped))
            html_parts.append(f'<h3 class="cl-section">{header_html}</h3>')
            i += 1
            continue

        # ── Regular text paragraph ─────────────────────────────────────────
        text_html = apply_oab_badges(escape_for_js(stripped))
        html_parts.append(f'<p class="cl-texto">{text_html}</p>')
        i += 1

    html_parts.append('</div>')
    return '\n'.join(html_parts)


def process_subject(subject):
    src_path = subject["src"]
    out_path = os.path.join(OUTPUT_DIR, subject["out"])
    var_name = subject["var"]
    name = subject["name"]

    print(f"\n-- Processing: {name} ({subject['id']}) --")
    print(f"   Source: {src_path}")

    # Read JSON file
    try:
        with open(src_path, encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"   ERROR reading file: {e}")
        return False, 0

    # Extract fileContent
    if isinstance(data, dict) and 'fileContent' in data:
        raw_text = data['fileContent']
    elif isinstance(data, str):
        raw_text = data
    else:
        print(f"   ERROR: unexpected JSON structure — keys: {list(data.keys()) if isinstance(data, dict) else type(data)}")
        return False, 0

    print(f"   Raw text length: {len(raw_text):,} chars")

    # Clean text
    cleaned = clean_text(raw_text)
    print(f"   Cleaned text length: {len(cleaned):,} chars")

    # Convert to HTML
    html = convert_to_html(cleaned)
    print(f"   HTML length: {len(html):,} chars")

    # Wrap in JS template literal
    # Note: backticks in raw text were already escaped by escape_for_js inside convert_to_html
    js_content = f"const {var_name} = `\n{html}\n`;\n"

    # Write output file
    try:
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(js_content)
        size_kb = os.path.getsize(out_path) / 1024
        print(f"   Written: {out_path} ({size_kb:.1f} KB)")
        return True, len(html)
    except Exception as e:
        print(f"   ERROR writing file: {e}")
        return False, 0


def main():
    print("=" * 60)
    print("  build_caderno.py - OAB Caderno Legislativo Builder")
    print("=" * 60)

    results = []
    for subject in SUBJECTS:
        ok, html_len = process_subject(subject)
        results.append({
            "id": subject["id"],
            "name": subject["name"],
            "out": subject["out"],
            "ok": ok,
            "html_len": html_len,
        })

    print("\n" + "=" * 60)
    print("  SUMMARY")
    print("=" * 60)
    for r in results:
        status = "OK" if r["ok"] else "FAILED"
        size_kb = r["html_len"] / 1024 if r["ok"] else 0
        print(f"  [{status}] {r['id']:15s} → {r['out']:25s} | {r['html_len']:>10,} chars HTML | {size_kb:6.1f} KB")

    errors = [r for r in results if not r["ok"]]
    if errors:
        print(f"\n  {len(errors)} subject(s) FAILED!")
        sys.exit(1)
    else:
        print(f"\n  All {len(results)} subjects processed successfully.")


if __name__ == "__main__":
    main()
