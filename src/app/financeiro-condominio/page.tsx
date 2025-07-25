// Página gerada: /financeiro-condominio
import React from 'react';

export default function FinanceiroCondominio() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>FinanceiroCondominio</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-BR"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Financeiro do Condomínio</title>
        <style>
          body {
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f6f8;
          }
          header {
            background-color: #304ffe;
            color: white;
            padding: 1rem;
            text-align: center;
          }
          .filtros {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            padding: 1rem;
            background-color: white;
          }
          .filtros select {
            padding: 0.5rem;
            border-radius: 4px;
            border: 1px solid #ccc;
            flex: 1;
            min-width: 120px;
          }
          .resumo {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 2rem 1rem;
            background-color: #fff;
          }
          .resumo .valor {
            font-size: 1.2rem;
            color: #333;
          }
          .grafico {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: conic-gradient(#4caf50 45%, #f44336 55%);
          }
          .acoes {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            padding: 1rem;
            background-color: white;
          }
          .acoes button {
            padding: 0.6rem 1rem;
            border: none;
            background-color: #304ffe;
            color: white;
            border-radius: 4px;
            cursor: pointer;
          }
          .lancamentos {
            padding: 1rem;
          }
          .card {
            background-color: white;
            padding: 1rem;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            margin-bottom: 1rem;
          }
          .card h4 {
            margin: 0 0 0.5rem;
            color: #304ffe;
          }
          .card .info {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            color: #555;
          }
      
          @media (max-width: 600px) {
            .resumo {
              flex-direction: column;
              text-align: center;
            }
            .acoes {
              flex-direction: column;
              align-items: stretch;
            }
          }
        </style>
      </head>
      <body>
      
        <header>
          <h1>Financeiro do Condomínio</h1>
        </header>
      
        <section className="filtros">
          <select>
            <option>Período: Mensal</option>
            <option>Trimestral</option>
            <option>Personalizado</option>
          </select>
          <select>
            <option>Tipo: Todos</option>
            <option>Receitas</option>
            <option>Despesas</option>
          </select>
          <select>
            <option>Categoria: Todas</option>
            <option>Manutenção</option>
            <option>Eventos</option>
            <option>Contas fixas</option>
          </select>
        </section>
      
        <section className="resumo">
          <div title="Gráfico circular" className="grafico"></div>
          <div className="valor">💰 Receita: R$ 8.420,00</div>
          <div className="valor">💸 Despesa: R$ 6.120,00</div>
          <div className="valor">📈 Saldo: R$ 2.300,00</div>
        </section>
      
        <section className="acoes">
          <button>➕ Novo lançamento</button>
          <button>📤 Exportar .csv</button>
          <button>📄 Gerar relatório</button>
        </section>
      
        <section className="lancamentos">
          <div className="card">
            <h4>Pagamento de energia</h4>
            <div className="info">
              <span>🗓️ 05/07/2025</span>
              <span>💸 R$ 1.200,00</span>
              <span>🔧 Contas fixas</span>
              <span>✅ Pago</span>
            </div>
          </div>
          <div className="card">
            <h4>Aluguel do salão</h4>
            <div className="info">
              <span>🗓️ 08/07/2025</span>
              <span>💰 R$ 400,00</span>
              <span>🎉 Eventos</span>
              <span>⏳ Pendente</span>
            </div>
          </div>
          <div className="card">
            <h4>Serviço de jardinagem</h4>
            <div className="info">
              <span>🗓️ 10/07/2025</span>
              <span>💸 R$ 380,00</span>
              <span>🌿 Manutenção</span>
              <span>📅 Previsto</span>
            </div>
          </div>
        </section>
      
      
      
      </body></html>

    </div>
  );
}
