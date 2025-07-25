// Página gerada: /agenda-comunicados
import React from 'react';

export default function AgendaComunicados() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>AgendaComunicados</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Agenda de Comunicados</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
          body { background-color: #f9fafb; color: #333; padding: 20px; }
          header {
            background-color: #2d3748; color: white;
            padding: 10px 20px; border-radius: 8px;
            display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;
          }
          header h1 { font-size: 1.5rem; }
          .usuario-logado {
            font-size: 0.95rem; font-weight: bold; color: #cbd5e0;
          }
          nav a {
            margin-left: 15px; color: #fbd38d; text-decoration: none; font-weight: bold;
          }
          nav a:hover { color: #fff; text-decoration: underline; }
          main section { margin: 30px 0; }
          .filtros form {
            display: flex; flex-wrap: wrap; gap: 20px;
            margin-top: 10px;
          }
          .filtros input, .filtros select, .filtros button {
            padding: 8px; border: 1px solid #cbd5e0;
            border-radius: 5px; min-width: 180px;
          }
          .filtros button {
            background-color: #2b6cb0; color: white; cursor: pointer;
          }
          .filtros button:hover { background-color: #2c5282; }
          .cards-controls {
            display: flex; justify-content: flex-end; align-items: center; margin-bottom: 10px;
          }
          .cards-controls label {
            font-size: 0.9rem;
          }
          .cards-controls select {
            margin-left: 8px; padding: 6px; border-radius: 4px; border: 1px solid #cbd5e0;
          }
          .cards-area {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            max-height: 420px; overflow-y: auto;
            border: 1px solid #e2e8f0; border-radius: 8px; background-color: #fff;
            padding: 15px;
          }
          .card {
            background-color: #edf2f7; border-radius: 8px;
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.03);
            border-left: 5px solid #2b6cb0;
          }
          .card h3 {
            font-size: 1rem;
            margin-bottom: 8px;
            color: #2b6cb0;
          }
          .card p {
            font-size: 0.95rem;
            margin-bottom: 5px;
          }
          .card-footer {
            margin-top: 10px;
            font-size: 0.85rem;
            color: #718096;
          }
          .urgente {
            border-left: 5px solid #c53030;
            background-color: #fff5f5;
          }
          footer {
            text-align: center; margin-top: 40px;
            font-size: 0.9rem; color: #718096;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Agenda de Comunicados</h1>
          <div className="usuario-logado">👤 Logado como: José Pereira</div>
          <nav>
            <a href="visao-geral-condominio.html">🏠 Visão Geral</a>
            <a href="painel-financeiro.html">💰 Financeiro</a>
            <a href="perfil-financeiro.html">👤 Meu Perfil</a>
          </nav>
        </header>
      
        <main>
          <section className="filtros">
            <h2>🔍 Filtrar Comunicados</h2>
            <form>
              <label>Período:<input type="month"></label>
              <label>Tipo:
                <select><option>Todos</option><option>Reunião</option><option>Manutenção</option><option>Aviso Geral</option></select>
              </label>
              <label>CPF:<input type="text" placeholder="000.000.000-00"></label>
              <label>Bloco:
                <select><option>Todos</option><option>A</option><option>B</option><option>C</option></select>
              </label>
              <label>Apartamento:<input type="text" placeholder="203"></label>
              <button type="submit">Filtrar</button>
            </form>
          </section>
      
          <section className="cards-listagem">
            <h2>📋 Comunicados</h2>
            <div className="cards-controls">
              <label>Mostrar:
                <select>
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option selected="">Todos</option>
                </select>
              </label>
            </div>
      
            <div className="cards-area">
              <div className="card">
                <h3>📅 Reunião Ordinária</h3>
                <p>Dia 22/07 às 19h no salão de festas.</p>
                <p>Assunto: Prestação de contas e próximos investimentos.</p>
                <div className="card-footer">Publicado em: 15/07</div>
              </div>
              <div className="card urgente">
                <h3>🔧 Interdição da piscina</h3>
                <p>Manutenção emergencial na bomba. A piscina ficará interditada até 25/07.</p>
                <div className="card-footer">Publicado em: 18/07</div>
              </div>
              <div className="card">
                <h3>🛠️ Pintura dos corredores - Bloco C</h3>
                <p>Início em 24/07, das 8h às 17h.</p>
                <p>Evite deixar objetos próximos às paredes.</p>
                <div className="card-footer">Publicado em: 17/07</div>
              </div>
              <!-- Adicione mais cards se quiser testar rolagem -->
            </div>
          </section>
        </main>
      
        <footer>
          <p>© 2025 Sistema Condomínio</p>
        </footer>
      
      
      </body></html>

    </div>
  );
}
