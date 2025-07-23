#!/usr/bin/env node
/**
 * scripts/generate-react.js
 * Gera pages Next.js em src/app/ a partir de cada HTML em public/mock-screens/
 */

const fs      = require('fs');
const path    = require('path');
const cheerio = require('cheerio');

// 1) Caminhos base
const MOCK_DIR = path.join(__dirname, '../public/mock-screens');
const APP_DIR  = path.join(__dirname, '../src/app');

// 2) Rotas que não têm HTML (placeholders)
const EXTRA = ['login','acesso-negado','upgrade','admin-global','admin-global/status','admin-global/pagamentos'];

// 3) Lista arquivos .html e retira a extensão
const files = fs.readdirSync(MOCK_DIR)
  .filter(f => f.endsWith('.html'))
  .map(f => f.slice(0, -5));

// 4) Junta HTMLs + rotas extras, sem repetir
const routes = Array.from(new Set([...files, ...EXTRA]));

// 5) Para cada rota, cria a pasta e o page.tsx
routes.forEach(route => {
  const dir = path.join(APP_DIR, route);
  fs.mkdirSync(dir, { recursive: true });

  // nome do componente (e.g. 'login' → 'Login')
  const compName = route
    .split(/[-\/]/)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join('');

  // cabeçalho do componente
  let content = `// Página gerada: /${route}\n`;
  content += `import React from 'react';\n\n`;
  content += `export default function ${compName}() {\n`;
  content += `  return (\n`;
  content += `    <div style={{ padding: '2rem' }}>\n`;
  content += `      <h1>${compName}</h1>\n\n`;

  // injeta o HTML se existir, convertendo class → className
  const htmlPath = path.join(MOCK_DIR, `${route}.html`);
  if (fs.existsSync(htmlPath)) {
    const $ = cheerio.load(fs.readFileSync(htmlPath, 'utf8'));
    $('[class]').each((_, el) => {
      const cls = $(el).attr('class');
      $(el).attr('className', cls).removeAttr('class');
    });
    const jsx = $.root().html()
      .split('\n')
      .map(line => '      ' + line)
      .join('\n');
    content += `      {/* mockscreen */}\n${jsx}\n\n`;
  } else {
    content += `      <p>Placeholder para /${route}</p>\n\n`;
  }

  // fecha JSX e função
  content += `    </div>\n`;
  content += `  );\n`;
  content += `}\n`;

  // salva o arquivo
  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
  console.log(`✔ Gerado: src/app/${route}/page.tsx`);
});
