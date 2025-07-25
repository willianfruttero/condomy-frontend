// Página gerada: /solicitacoes-gerente
import React from 'react';

export default function SolicitacoesGerente() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>SolicitacoesGerente</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Solicitações dos Condôminos</title>
        <style>
          body {
            font-family: "Segoe UI", sans-serif;
            margin: 0;
            padding: 20px;
            background: #f4f6f9;
            color: #333;
          }
      
          h1 {
            margin-bottom: 10px;
          }
      
          section {
            background: #fff;
            padding: 20px;
            margin-bottom: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.06);
          }
      
          label {
            display: block;
            margin: 12px 0 6px;
          }
      
          input, select, textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
            box-sizing: border-box;
            min-width: 150px;
          }
      
          textarea {
            resize: vertical;
            height: 100px;
          }
      
          button {
            background: #4285f4;
            color: white;
            border: none;
            padding: 10px 18px;
            margin-top: 15px;
            border-radius: 6px;
            cursor: pointer;
          }
      
          .filtros {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
      
          .filtros > div {
            flex: 1 1 200px;
            min-width: 180px;
          }
      
          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            overflow-x: auto;
          }
      
          .card {
            background: #e9f3ff;
            padding: 15px;
            border-left: 6px solid #4285f4;
            border-radius: 6px;
          }
      
          .card h3 {
            margin-top: 0;
          }
      
          .card p {
            margin: 6px 0;
          }
      
          @media (max-width: 768px) {
            .filtros {
              flex-direction: column;
            }
          }
        </style>
      </head>
      <body>
      
        <h1>📬 Solicitações dos Condôminos</h1>
        <p><strong>Gerente:</strong> Ana Souza — Condomínio Estilo Viva</p>
      
        <section>
          <h2>Filtros de solicitações</h2>
          <div className="filtros">
            <div>
              <label for="tipo-solicitacao">Tipo</label>
              <select id="tipo-solicitacao">
                <option>Todos</option>
                <option>Manutenção</option>
                <option>Dúvida</option>
                <option>Reclamação</option>
                <option>Sugestão</option>
              </select>
            </div>
            <div>
              <label for="status">Status</label>
              <select id="status">
                <option>Todos</option>
                <option>Nova</option>
                <option>Em andamento</option>
                <option>Resolvida</option>
              </select>
            </div>
            <div>
              <label for="data">Período</label>
              <input type="month" id="data">
            </div>
            <div>
              <label for="bloco">Bloco</label>
              <select id="bloco">
                <option>Todos</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
            <div>
              <label for="apto">Apartamento</label>
              <input type="text" id="apto" placeholder="Ex: 203">
            </div>
          </div>
        </section>
      
        <section>
          <h2>📋 Histórico de solicitações</h2>
          <div className="cards">
            <div className="card">
              <h3>João Silva — Apto 203</h3>
              <p><strong>Bloco:</strong> B</p>
              <p><strong>Tipo:</strong> Manutenção</p>
              <p><strong>Data:</strong> 14/07/2025</p>
              <p><strong>Status:</strong> Nova</p>
              <p><strong>Descrição:</strong> Lâmpada queimada no hall do bloco B.</p>
              <button>Responder / Encaminhar</button>
            </div>
      
            <div className="card">
              <h3>Maria Costa — Apto 305</h3>
              <p><strong>Bloco:</strong> A</p>
              <p><strong>Tipo:</strong> Sugestão</p>
              <p><strong>Data:</strong> 10/07/2025</p>
              <p><strong>Status:</strong> Resolvida</p>
              <p><strong>Descrição:</strong> Sugestão de colocar lixeiras recicláveis nos andares.</p>
              <button>Ver resposta</button>
            </div>
          </div>
        </section>
      
        <section>
          <h2>📤 Responder / Encaminhar Solicitação</h2>
          <form>
            <label for="condomino">Condômino</label>
            <input type="text" id="condomino" value="João Silva — Apto 203 (Bloco B)" disabled="">
      
            <label for="resposta">Mensagem de resposta ou ação</label>
            <textarea id="resposta" placeholder="Ex: Solicitação encaminhada à manutenção, previsão de execução em até 48h."></textarea>
      
            <label for="novo-status">Atualizar status</label>
            <select id="novo-status">
              <option>Nova</option>
              <option>Em andamento</option>
              <option>Resolvida</option>
              <option>Encaminhada</option>
            </select>
      
            <button type="submit">Salvar resposta</button>
          </form>
        </section>
      
      
      
      </body></html>

    </div>
  );
}
