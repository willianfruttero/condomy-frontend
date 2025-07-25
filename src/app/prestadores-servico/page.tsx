// Página gerada: /prestadores-servico
import React from 'react';

export default function PrestadoresServico() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>PrestadoresServico</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Prestadores de Serviço</title>
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
          }
      
          textarea {
            resize: vertical;
            height: 80px;
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
      
          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
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
      
            input, select, textarea {
              font-size: 16px;
            }
          }
        </style>
      </head>
      <body>
      
        <h1>🔧 Prestadores de Serviço</h1>
        <p><strong>Gerente:</strong> Ana Souza — Condomínio Estilo Viva</p>
      
        <section>
          <h2>Filtros de agendamentos</h2>
          <div className="filtros">
            <div>
              <label for="tipo-servico">Tipo de serviço</label>
              <select id="tipo-servico">
                <option>Todos</option>
                <option>Limpeza</option>
                <option>Jardinagem</option>
                <option>Manutenção</option>
                <option>Segurança</option>
              </select>
            </div>
            <div>
              <label for="status">Status</label>
              <select id="status">
                <option>Todos</option>
                <option>Agendado</option>
                <option>Concluído</option>
                <option>Cancelado</option>
              </select>
            </div>
            <div>
              <label for="data-servico">Período</label>
              <input type="month" id="data-servico">
            </div>
          </div>
        </section>
      
        <section>
          <h2>📋 Agendamentos existentes</h2>
          <div className="cards">
            <div className="card">
              <h3>Alpha Limpeza</h3>
              <p><strong>Serviço:</strong> Faxina semanal</p>
              <p><strong>Data:</strong> 12/07/2025</p>
              <p><strong>Valor:</strong> R$ 320,00</p>
              <p><strong>Nota Fiscal:</strong> Sim</p>
              <p><strong>Status de pagamento:</strong> Pago</p>
              <button>Ver detalhes</button>
            </div>
      
            <div className="card">
              <h3>JR Elétrica</h3>
              <p><strong>Serviço:</strong> Reparo na iluminação externa</p>
              <p><strong>Data:</strong> 08/07/2025</p>
              <p><strong>Valor:</strong> R$ 180,00</p>
              <p><strong>Nota Fiscal:</strong> Não</p>
              <p><strong>Status de pagamento:</strong> Pendente</p>
              <button>Ver detalhes</button>
            </div>
          </div>
        </section>
      
        <section>
          <h2>➕ Novo agendamento</h2>
          <form>
            <label for="nome-prestador">Nome do prestador</label>
            <input type="text" id="nome-prestador" placeholder="Ex: Alpha Limpeza">
      
            <label for="servico">Serviço</label>
            <input type="text" id="servico" placeholder="Ex: Faxina semanal">
      
            <label for="data">Data do serviço</label>
            <input type="date" id="data">
      
            <label for="horario">Horário</label>
            <input type="time" id="horario">
      
            <label for="valor">Valor do serviço (R$)</label>
            <input type="number" id="valor" placeholder="Ex: 320.00">
      
            <label for="nota-fiscal">Nota fiscal foi emitida?</label>
            <select id="nota-fiscal">
              <option>Não</option>
              <option>Sim</option>
            </select>
      
            <label for="nota-upload">Anexar nota fiscal (PDF ou imagem)</label>
            <input type="file" id="nota-upload" accept=".pdf,image/*">
      
            <label for="pagamento-status">Status do pagamento</label>
            <select id="pagamento-status">
              <option>Pendente</option>
              <option>Pago</option>
              <option>Aguardando nota fiscal</option>
            </select>
      
            <label for="contato">Contato (telefone ou email)</label>
            <input type="text" id="contato" placeholder="(11) 91234-5678 ou contato@empresa.com">
      
            <label for="obs">Observações</label>
            <textarea id="obs" placeholder="Observações gerais sobre o agendamento..."></textarea>
      
            <button type="submit">Salvar agendamento</button>
          </form>
        </section>
      
      
      
      </body></html>

    </div>
  );
}
