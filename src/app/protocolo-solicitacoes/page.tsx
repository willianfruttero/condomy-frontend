// Página gerada: /protocolo-solicitacoes
import React from 'react';

export default function ProtocoloSolicitacoes() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>ProtocoloSolicitacoes</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Protocolo de Solicitações</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:400,600&amp;display=swap" rel="stylesheet">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
          body { background: #f4f7fb; padding: 20px; color: #333; }
          h1 { font-size: 24px; margin-bottom: 20px; }
      
          .filtros {
            display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 25px;
          }
          .filtros select, .filtros input {
            padding: 10px; border-radius: 6px; border: 1px solid #ccc;
            min-width: 180px; font-size: 14px;
          }
      
          .grid-solicitacoes {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
          }
      
          .card {
            background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            padding: 16px; display: flex; flex-direction: column; gap: 6px;
          }
      
          .card h3 { font-size: 18px; margin-bottom: 5px; }
          .card span { font-size: 14px; color: #555; }
      
          .status {
            font-weight: bold; font-size: 13px; padding: 4px 8px;
            border-radius: 4px; width: fit-content; margin-top: 4px;
          }
      
          .pendente { background: #fef4e5; color: #e67e22; }
          .resolvido { background: #eafaf1; color: #27ae60; }
          .em-analise { background: #d0e6f7; color: #2980b9; }
      
          .acoes {
            display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap;
          }
          .acoes button {
            font-size: 13px; padding: 8px 12px; border: none; border-radius: 5px;
            cursor: pointer;
          }
      
          .btn-ver { background: #3498db; color: white; }
          .btn-resolver { background: #27ae60; color: white; }
          .btn-comentar { background: #bdc3c7; color: #333; }
      
          @media (max-width: 500px) {
            .filtros { flex-direction: column; }
            .filtros select, .filtros input { width: 100%; }
          }
        </style>
      </head>
      <body>
        <h1>🗂️ Protocolo de Solicitações</h1>
      
        <div className="filtros">
          <select>
            <option>Tipo de solicitação</option>
            <option>Documentos</option>
            <option>Manutenção</option>
            <option>Eventos</option>
            <option>Financeiro</option>
          </select>
          <select>
            <option>Status</option>
            <option>Pendente</option>
            <option>Em análise</option>
            <option>Resolvido</option>
          </select>
          <select>
            <option>Perfil solicitante</option>
            <option>Condômino</option>
            <option>Síndico</option>
          </select>
          <input type="date">
        </div>
      
        <div className="grid-solicitacoes">
          <div className="card">
            <h3>Solicitação de ata - Reunião 15/06</h3>
            <span>Tipo: Documentos</span>
            <span>Perfil: Condômino</span>
            <span>Data: 16/07/2025</span>
            <span className="status em-analise">Em análise</span>
            <div className="acoes">
              <button className="btn-ver">Ver detalhes</button>
              <button className="btn-resolver">Marcar como resolvido</button>
              <button className="btn-comentar">Comentar</button>
            </div>
          </div>
      
          <div className="card">
            <h3>Problema elétrico - Bloco B</h3>
            <span>Tipo: Manutenção</span>
            <span>Perfil: Síndico</span>
            <span>Data: 14/07/2025</span>
            <span className="status pendente">Pendente</span>
            <div className="acoes">
              <button className="btn-ver">Ver detalhes</button>
              <button className="btn-comentar">Comentar</button>
            </div>
          </div>
      
          <div className="card">
            <h3>Revisão de balancete</h3>
            <span>Tipo: Financeiro</span>
            <span>Perfil: Gerente</span>
            <span>Data: 10/07/2025</span>
            <span className="status resolvido">Resolvido</span>
            <div className="acoes">
              <button className="btn-ver">Ver detalhes</button>
            </div>
          </div>
        </div>
      
      
      </body></html>

    </div>
  );
}
