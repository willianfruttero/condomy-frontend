// Página gerada: /visao-geral-comunicados
import React from 'react';

export default function VisaoGeralComunicados() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>VisaoGeralComunicados</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-BR"><head>
        <meta charset="UTF-8">
        <title>Visão Geral de Comunicados</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          :root {
            --primary-color: #0078d4;
            --hover-color: #005fa3;
            --alert-color: #c62828;
            --bg-color: #f4f4f4;
            --card-bg: #fff;
            --text-color: #333;
            --subtext-color: #666;
            --border-radius: 8px;
            --padding: 1rem;
            --gap: 1.2rem;
          }
      
          * {
            box-sizing: border-box;
          }
      
          body {
            margin: 0;
            font-family: 'Segoe UI', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
          }
      
          .tela-nomavene {
            max-width: 960px;
            margin: 2rem auto;
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 2rem;
            box-shadow: 0 0 10px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
            gap: var(--gap);
          }
      
          .cabecalho {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
          }
      
          .titulo {
            font-size: 1.8rem;
            font-weight: bold;
          }
      
          .usuario-logado {
            font-size: 0.95rem;
            color: var(--subtext-color);
          }
      
          .filtros,
          .controle-quantidade {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 0.5rem;
            align-items: flex-end;
          }
      
          .filtros label,
          .controle-quantidade label {
            font-weight: 600;
            display: block;
            margin-bottom: 0.3rem;
          }
      
          .filtros input,
          .filtros select,
          .controle-quantidade select {
            padding: 0.5rem;
            font-size: 0.95rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            min-width: 140px;
          }
      
          .comunicados-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
      
          .lista-comunicados {
            max-height: 600px;
            overflow-y: auto;
            padding-right: 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
      
          .card-comunicado {
            background-color: var(--card-bg);
            border: 1px solid #ddd;
            border-left: 5px solid var(--primary-color);
            border-radius: 6px;
            padding: 1rem;
            box-shadow: 0 0 4px rgba(0,0,0,0.04);
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            transition: border-color 0.3s ease;
          }
      
          .card-comunicado.urgente {
            border-left-color: var(--alert-color);
          }
      
          .card-comunicado h2 {
            font-size: 1.2rem;
            margin: 0;
          }
      
          .card-comunicado p {
            margin: 0.2rem 0;
            font-size: 0.95rem;
            color: #555;
          }
      
          .acoes {
            display: flex;
            gap: 0.6rem;
            margin-top: 0.4rem;
          }
      
          .acoes button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 4px;
            padding: 0.4rem 0.8rem;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background-color 0.2s ease;
          }
      
          .acoes button:hover {
            background-color: var(--hover-color);
          }
      
          .lista-comunicados::-webkit-scrollbar {
            width: 6px;
          }
      
          .lista-comunicados::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 4px;
          }
      
          @media (max-width: 600px) {
            .cabecalho {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.5rem;
            }
      
            .filtros,
            .controle-quantidade {
              flex-direction: column;
              align-items: stretch;
            }
      
            .acoes {
              flex-wrap: wrap;
            }
          }
        </style>
      </head>
      <body>
        <div className="tela-nomavene">
          <header className="cabecalho">
            <h1 className="titulo">Visão Geral de Comunicados</h1>
            <p className="usuario-logado">Logado como: Administrador</p>
          </header>
      
          <section className="filtros">
            <div>
              <label for="filtroTipo">Tipo</label>
              <select id="filtroTipo">
                <option value="">Todos</option>
                <option value="urgente">Urgente</option>
                <option value="informativo">Informativo</option>
                <option value="evento">Evento</option>
              </select>
            </div>
            <div>
              <label for="filtroUrgencia">Urgência</label>
              <select id="filtroUrgencia">
                <option value="">Todos</option>
                <option value="urgente">Somente urgentes</option>
                <option value="normal">Normais</option>
              </select>
            </div>
            <div>
              <label for="filtroPeriodo">Período</label>
              <input type="date" id="filtroPeriodo">
            </div>
            <div>
              <label for="filtroBloco">Bloco</label>
              <input type="text" id="filtroBloco" placeholder="Ex: A, B...">
            </div>
            <div>
              <label for="filtroCPF">CPF</label>
              <input type="text" id="filtroCPF" placeholder="000.000.000-00">
            </div>
            <div>
              <label for="filtroApto">Apartamento</label>
              <input type="text" id="filtroApto" placeholder="Ex: 101">
            </div>
          </section>
      
          <section className="comunicados-container">
            <div className="controle-quantidade">
              <label for="quantidade">Mostrar:</label>
              <select id="quantidade">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
      
            <div id="listaComunicados" className="lista-comunicados">
              <div className="card-comunicado urgente">
                <h2>Comunicado urgente de manutenção</h2>
                <p>Agendado para: 22/07/2025 às 08:00</p>
                <p>Público: Bloco B / Apto 101</p>
                <p>Status: Aguardando leitura</p>
                <div className="acoes">
                  <button>Editar</button>
                  <button>Ver Detalhes</button>
                </div>
              </div>
      
              <div className="card-comunicado">
                <h2>Evento comunitário — Festa Julina</h2>
                <p>Agendado para: 27/07/2025 às 18:30</p>
                <p>Público: Todos os moradores</p>
                <p>Status: Confirmado</p>
                <div className="acoes">
                  <button>Editar</button>
                  <button>Ver Detalhes</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      
      
      </body></html>

    </div>
  );
}
