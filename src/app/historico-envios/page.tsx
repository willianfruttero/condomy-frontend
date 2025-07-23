// Página gerada: /historico-envios
import React from 'react';

export default function HistoricoEnvios() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>HistoricoEnvios</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-BR"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Histórico de Envios</title>
        <style>
          :root {
            --cor-primaria: #264e75;
            --cor-secundaria: #f4f6f8;
            --cor-card: #ffffff;
            --cor-borda: #dcdcdc;
            --cor-destaque: #1a73e8;
            --fonte: 'Segoe UI', sans-serif;
          }
      
          body {
            margin: 0;
            font-family: var(--fonte);
            background: var(--cor-secundaria);
            padding: 20px;
          }
      
          h1 {
            color: var(--cor-primaria);
            font-size: 24px;
            margin: 20px 0;
          }
      
          .perfil-logado {
            background: var(--cor-card);
            border: 1px solid var(--cor-borda);
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 16px;
          }
      
          .perfil-logado p {
            margin: 4px 0;
            font-size: 15px;
            color: #333;
          }
      
          .filtros {
            background: var(--cor-card);
            border: 1px solid var(--cor-borda);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 12px;
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          }
      
          .filtros label {
            font-size: 14px;
            font-weight: 600;
            color: var(--cor-primaria);
            display: block;
            margin-bottom: 4px;
          }
      
          .filtros input,
          .filtros select {
            width: 100%;
            padding: 8px;
            border: 1px solid var(--cor-borda);
            border-radius: 4px;
            font-size: 14px;
          }
      
          .aplicar-filtros {
            text-align: right;
            margin-top: 8px;
          }
      
          #aplicar-filtros {
            background: var(--cor-destaque);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            font-size: 14px;
            cursor: pointer;
          }
      
          .controle-quantidade {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 8px;
            margin: 16px 0 8px;
          }
      
          .tabela-dados {
            max-height: 400px;
            overflow-y: auto;
            border: 1px solid var(--cor-borda);
            border-radius: 8px;
            background: var(--cor-card);
          }
      
          table {
            width: 100%;
            border-collapse: collapse;
          }
      
          th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid var(--cor-borda);
          }
      
          thead th {
            position: sticky;
            top: 0;
            background: var(--cor-secundaria);
            color: var(--cor-primaria);
            font-weight: 600;
            z-index: 1;
          }
      
          td button {
            background: var(--cor-destaque);
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            margin-right: 6px;
            cursor: pointer;
            font-size: 13px;
          }
      
          @media (max-width: 768px) {
            .filtros {
              grid-template-columns: 1fr;
            }
          }
        </style>
      </head>
      <body>
      
        <section className="perfil-logado">
          <p><strong>Usuário logado:</strong> João da Silva</p>
          <p><strong>Bloco:</strong> D &nbsp;|&nbsp; <strong>Apto:</strong> 34</p>
          <p><strong>CPF:</strong> 123.456.789-00</p>
        </section>
      
        <h1>📨 Histórico de Comunicados Enviados</h1>
      
        <section className="filtros">
          <div>
            <label for="tipo">Tipo:</label>
            <select id="tipo">
              <option>Todos</option>
              <option>Urgente</option>
              <option>Informativo</option>
              <option>Comunicado Geral</option>
            </select>
          </div>
          <div>
            <label for="periodo-de">Período (de):</label>
            <input type="date" id="periodo-de">
          </div>
          <div>
            <label for="periodo-ate">Período (até):</label>
            <input type="date" id="periodo-ate">
          </div>
          <div>
            <label for="status">Status:</label>
            <select id="status">
              <option>Todos</option>
              <option>Enviado</option>
              <option>Editado</option>
              <option>Agendado</option>
            </select>
          </div>
        </section>
      
        <div className="aplicar-filtros">
          <button id="aplicar-filtros">Aplicar Filtros</button>
        </div>
      
        <div className="controle-quantidade">
          <label for="quantidade">Exibir:</label>
          <select id="quantidade">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="todos">Todos</option>
          </select>
        </div>
      
        <section className="tabela-dados">
          <table>
            <thead>
              <tr>
                <th>Comunicado</th>
                <th>Tipo</th>
                <th>Data</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reunião de Condôminos</td>
                <td>Informativo</td>
                <td>05/07</td>
                <td>Enviado</td>
                <td>
                  <button>Visualizar</button>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Troca de portaria</td>
                <td>Urgente</td>
                <td>03/07</td>
                <td>Editado</td>
                <td>
                  <button>Visualizar</button>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Campanha de reciclagem</td>
                <td>Comunicado Geral</td>
                <td>01/07</td>
                <td>Agendado</td>
                <td>
                  <button>Visualizar</button>
                  <button>Editar</button>
                </td>
              </tr>
              <!-- + outros registros -->
            </tbody>
          </table>
        </section>
      
      
      
      </body></html>

    </div>
  );
}
