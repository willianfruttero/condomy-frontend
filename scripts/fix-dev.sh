#!/usr/bin/env bash
# ==============================================================================
# scripts/fix-dev.sh
# ------------------------------------------------------------------------------
# Garante que o 'dev' no package.json use 'next dev' e não só o nome do projeto.
# Depois instala dependências e inicia o servidor.
# ==============================================================================

set -e  # Se der erro, para tudo

echo "🔍 Verificando se estamos na pasta do frontend..."
if [ ! -f package.json ]; then
  echo "❌ Não achei package.json. Rode este script dentro de /condomy-frontend!"
  exit 1
fi

echo "✏️  Corrigindo script de dev no package.json..."
# Versão que funciona em Windows/Git Bash e Unix:
# - Cria backup package.json.bak
# - Substitui a linha "dev": "qualquer coisa" por "dev": "next dev"
sed -i.bak \
  -e 's#"dev":[[:space:]]*"[^"]*"#"dev": "next dev"#' \
  package.json

echo "✅ package.json atualizado. Veja:"
grep '"dev"' package.json

echo "📦 Instalando (ou checando) dependências..."
npm install

echo "🚀 Iniciando o Next.js em modo dev..."
npm run dev
