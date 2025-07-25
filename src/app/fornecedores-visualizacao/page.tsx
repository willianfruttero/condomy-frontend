// Página gerada: /fornecedores-visualizacao
import React from 'react';

export default function FornecedoresVisualizacao() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>FornecedoresVisualizacao</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-BR"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Visualização de Fornecedores</title>
        <style>
          body {
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            background-color: #f0f2f5;
          }
          header {
            background-color: #009688;
            color: white;
            text-align: center;
            padding: 1rem;
          }
          .filtros {
            background-color: white;
            padding: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
          .filtros input, .filtros select {
            flex: 1;
            min-width: 160px;
            padding: 0.6rem;
            border-radius: 4px;
            border: 1px solid #ccc;
          }
          .container {
            padding: 1rem;
          }
          .card {
            background-color: white;
            padding: 1rem;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.08);
            margin-bottom: 1rem;
          }
          .card h3 {
            margin-top: 0;
            color: #009688;
          }
          .card .info {
            font-size: 0.9rem;
            color: #555;
            margin: 0.4rem 0;
          }
          .status {
            font-weight: bold;
          }
          .ativo { color: #4caf50; }
          .inativo { color: #f44336; }
          .avaliacao { color: #ff9800; }
          .acoes-card {
            margin-top: 0.8rem;
            display: flex;
            gap: 0.5rem;
          }
          .acoes-card button {
            border: none;
            padding: 0.5rem 0.9rem;
            background-color: #eee;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.9rem;
          }
      
          @media (max-width: 600px) {
            .filtros {
              flex-direction: column;
            }
          }
        </style>
      </head>
      <body>
      
        <header>
          <h1>Fornecedores Cadastrados</h1>
        </header>
      
        <section className="filtros">
          <input type="text" placeholder="🔍 Buscar por nome...">
          <select>
            <option>Filtrar por serviço</option>
            <option>Limpeza</option>
            <option>Segurança</option>
            <option>Manutenção</option>
            <option>Outros</option>
          </select>
          <select>
            <option>Filtrar por status</option>
            <option>Ativo</option>
            <option>Inativo</option>
            <option>Em avaliação</option>
          </select>
        </section>
      
        <main className="container">
          <div className="card">
            <h3>EcoLimpeza</h3>
            <div className="info">🧽 Serviço: Limpeza</div>
            <div className="info">📞 (11) 91234-5678 · ✉️ contato@ecolimpeza.com</div>
            <div className="info status ativo">✅ Status: Ativo</div>
            <div className="acoes-card">
              <button>✏️ Editar</button>
              <button>📋 Avaliar</button>
              <button>🗑️ Suspender</button>
            </div>
          </div>
      
          <div className="card">
            <h3>GuardProtec</h3>
            <div className="info">🛡️ Serviço: Segurança</div>
            <div className="info">📞 (11) 99876-5432 · ✉️ adm@guardprotec.com</div>
            <div className="info status avaliacao">🕒 Status: Em avaliação</div>
            <div className="acoes-card">
              <button>✏️ Editar</button>
              <button>📋 Avaliar</button>
              <button>🗑️ Suspender</button>
            </div>
          </div>
      
          <div className="card">
            <h3>Manutec</h3>
            <div className="info">🔧 Serviço: Manutenção predial</div>
            <div className="info">📞 (11) 93456-7890 · ✉️ suporte@manutec.com.br</div>
            <div className="info status inativo">🚫 Status: Inativo</div>
            <div className="acoes-card">
              <button>✏️ Editar</button>
              <button>📋 Avaliar</button>
              <button>🗑️ Reativar</button>
            </div>
          </div>
        </main>
      
      
      
      </body></html>

    </div>
  );
}
