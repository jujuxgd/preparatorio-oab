@echo off
chcp 65001 >nul
title OAB Backend
echo.
echo  OAB Preparatorio - Backend
echo  Iniciando servidor em http://localhost:5000
echo  Pressione Ctrl+C para parar
echo.
cd /d "%~dp0"
python backend/app.py
pause
