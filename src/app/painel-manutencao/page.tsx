// Página gerada: /painel-manutencao
import React from 'react';

export default function PainelManutencao() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>PainelManutencao</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Painel de Manutenção</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:400,600&amp;display=swap">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
          body { background: #f0f2f5; padding: 20px; color: #333; }
          h1 { font-size: 24px; margin-bottom: 20px; }
      
          .painel-filtros { display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 25px; }
          .painel-filtros select, .painel-filtros input {
            padding: 10px; border: 1px solid #ccc; border-radius: 6px;
            min-width: 200px;
          }
      
          .painel-lista { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
          .bloco {
            background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            padding: 16px; display: flex; flex-direction: column; gap: 10px;
          }
          .bloco h3 { font-size: 18px; margin-bottom: 5px; }
          .bloco span { font-size: 14px; color: #666; }
          .status { font-weight: bold; font-size: 14px; border-radius: 4px; padding: 4px 8px; width: fit-content; }
      
          .pendente { background: #fce4ec; color: #c2185b; }
          .em-andamento { background: #fff3e0; color: #ef6c00; }
          .concluido { background: #e0f2f1; color: #00796b; }
      
          .acoes { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
          .acoes button {
            padding: 8px 12px; border: none; border-radius: 5px; cursor: pointer;
            font-size: 14px;
          }
          .btn-editar { background: #2980b9; color: #fff; }
          .btn-concluir { background: #27ae60; color: #fff; }
          .btn-comentario { background: #bdc3c7; color: #333; }
      
          @media (max-width: 500px) {
            .painel-filtros { flex-direction: column; }
            .painel-filtros select, .painel-filtros input { width: 100%; }
          }
        </style>
      </head>
      <body>
        <h1>🔧 Painel de Manutenção</h1>
      
        <div className="painel-filtros">
          <select>
            <option>Todos os blocos</option>
            <option>Bloco A</option>
            <option>Bloco B</option>
          </select>
          <select>
            <option>Tipo de serviço</option>
            <option>Elétrica</option>
            <option>Hidráulica</option>
            <option>Limpeza</option>
          </select>
          <select>
            <option>Status</option>
            <option>Pendente</option>
            <option>Em andamento</option>
            <option>Concluído</option>
          </select>
        </div>
      
        <div className="painel-lista">
          <div className="bloco">
            <h3>Verificação de fiação Bloco A</h3>
            <span>Responsável: Manutenção Elite</span>
            <span>Início: 17/07/2025</span>
            <span className="status em-andamento">Em andamento</span>
            <div className="acoes">
              <button className="btn-concluir">Concluir</button>
              <button className="btn-editar">Editar</button>
              <button className="btn-comentario">Comentários</button>
            </div>
          </div>
      
          <div className="bloco">
            <h3>Limpeza de calhas Bloco B</h3>
            <span>Responsável: Limpeza Central</span>
            <span>Agendado: 19/07/2025</span>
            <span className="status pendente">Pendente</span>
            <div className="acoes">
              <button className="btn-editar">Editar</button>
              <button className="btn-comentario">Comentários</button>
            </div>
          </div>
      
          <div className="bloco">
            <h3>Troca de lâmpadas estacionamento</h3>
            <span>Responsável: Elétrica Fácil</span>
            <span>Finalizado: 14/07/2025</span>
            <span className="status concluido">Concluído</span>
            <div className="acoes">
              <button className="btn-comentario">Comentários</button>
            </div>
          </div>
        </div>
      
      
      </body></html>

    </div>
  );
}
