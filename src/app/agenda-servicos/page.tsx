// Página gerada: /agenda-servicos
import React from 'react';

export default function AgendaServicos() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>AgendaServicos</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Agenda de Serviços</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:400,600&amp;display=swap">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
          body { background: #f5f6fa; padding: 20px; color: #333; }
          h1 { font-size: 24px; margin-bottom: 20px; }
      
          .filtros { display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 25px; }
          .filtros select, .filtros input {
            padding: 10px; border: 1px solid #ccc; border-radius: 6px;
            min-width: 200px;
          }
      
          .agenda-lista { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
          .card {
            background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            padding: 16px; display: flex; flex-direction: column; gap: 8px;
          }
          .card h3 { font-size: 18px; margin-bottom: 5px; }
          .card span { font-size: 14px; color: #666; }
          .status { font-weight: bold; color: #00875a; }
          .acoes { margin-top: 10px; display: flex; gap: 10px; flex-wrap: wrap; }
          .acoes button {
            padding: 8px 12px; border: none; border-radius: 5px; cursor: pointer;
            font-size: 14px;
          }
          .btn-concluir { background: #00875a; color: #fff; }
          .btn-cancelar { background: #e74c3c; color: #fff; }
          .btn-reagendar { background: #f1c40f; color: #333; }
      
          @media (max-width: 500px) {
            .filtros { flex-direction: column; }
            .filtros select, .filtros input { width: 100%; }
          }
        </style>
      </head>
      <body>
        <h1>📅 Agenda de Serviços</h1>
      
        <div className="filtros">
          <input type="date" placeholder="Filtrar por data">
          <select>
            <option>Todos os fornecedores</option>
            <option>Limpeza Central</option>
            <option>Manutenção Elite</option>
          </select>
          <select>
            <option>Todos os serviços</option>
            <option>Limpeza</option>
            <option>Manutenção elétrica</option>
          </select>
          <select>
            <option>Status</option>
            <option>Agendado</option>
            <option>Concluído</option>
            <option>Cancelado</option>
          </select>
        </div>
      
        <div className="agenda-lista">
          <div className="card">
            <h3>Limpeza de área comum</h3>
            <span>Fornecedor: Limpeza Central</span>
            <span>Data: 22/07/2025</span>
            <span className="status">Agendado</span>
            <div className="acoes">
              <button className="btn-concluir">Concluir</button>
              <button className="btn-reagendar">Reagendar</button>
              <button className="btn-cancelar">Cancelar</button>
            </div>
          </div>
      
          <div className="card">
            <h3>Revisão elétrica bloco B</h3>
            <span>Fornecedor: Manutenção Elite</span>
            <span>Data: 25/07/2025</span>
            <span style="color:#999" className="status">Concluído</span>
            <div className="acoes">
              <button className="btn-reagendar">Reagendar</button>
            </div>
          </div>
        </div>
      
      
      </body></html>

    </div>
  );
}
