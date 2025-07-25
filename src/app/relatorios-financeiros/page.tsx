// Página gerada: /relatorios-financeiros
import React from 'react';

export default function RelatoriosFinanceiros() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>RelatoriosFinanceiros</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Relatórios Financeiros</title>
        <style>
          :root {
            --azul: #4285f4;
            --cinza-claro: #f4f6f9;
            --fundo-card: #e9f3ff;
            --texto: #333;
            --branco: #fff;
          }
      
          * {
            box-sizing: border-box;
          }
      
          body {
            font-family: "Segoe UI", sans-serif;
            margin: 0;
            padding: 20px;
            background: var(--cinza-claro);
            color: var(--texto);
          }
      
          h1 {
            margin-bottom: 10px;
          }
      
          h2 {
            margin-top: 0;
          }
      
          .filtros, .indicadores, .grafico, .tabela {
            margin-bottom: 30px;
            background: var(--branco);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          }
      
          .filtros label {
            display: block;
            margin-bottom: 15px;
          }
      
          .filtros input, .filtros select {
            padding: 8px;
            margin-left: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            min-width: 160px;
          }
      
          .indicadores {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
          }
      
          .card {
            background: var(--fundo-card);
            padding: 15px;
            border-left: 6px solid var(--azul);
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
      
          .card h3 {
            margin: 0 0 10px;
          }
      
          .grafico img {
            width: 100%;
            max-height: 300px;
            object-fit: contain;
            border-radius: 6px;
          }
      
          .tabela {
            overflow-x: auto;
          }
      
          table {
            width: 100%;
            border-collapse: collapse;
            min-width: 640px;
          }
      
          th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
      
          th {
            background: var(--azul);
            color: var(--branco);
            position: sticky;
            top: 0;
          }
      
          @media (max-width: 768px) {
            .filtros label {
              display: flex;
              flex-direction: column;
            }
      
            .filtros input, .filtros select {
              margin-left: 0;
              margin-top: 5px;
            }
          }
        </style>
      </head>
      <body>
      
        <h1>📊 Relatórios Financeiros</h1>
      
        <div className="filtros">
          <h2>Filtros avançados</h2>
          <label>Intervalo de datas:
            <input type="month"> até <input type="month">
          </label>
          <label>Status do boleto:
            <select>
              <option>Todos</option>
              <option>Pago</option>
              <option>Em aberto</option>
              <option>Inadimplente</option>
            </select>
          </label>
          <label>Mês:
            <select>
              <option>Todos</option>
              <option>Janeiro</option>
              <option>Fevereiro</option>
              <option>Março</option>
            </select>
          </label>
          <label>Ano:
            <select>
              <option>2025</option>
              <option>2024</option>
            </select>
          </label>
          <label>Unidade específica:
            <input type="text" placeholder="Ex: Apto 203">
          </label>
        </div>
      
        <div className="indicadores">
          <div className="card">
            <h3>🧾 Total Arrecadado</h3>
            <p>R$ 85.320,00</p>
          </div>
          <div className="card">
            <h3>📉 Inadimplência</h3>
            <p>12,5%</p>
          </div>
          <div className="card">
            <h3>💸 Despesas Recorrentes</h3>
            <p>R$ 47.500,00</p>
          </div>
        </div>
      
        <div className="grafico">
          <h2>Gráfico comparativo</h2>
          <img src="public/mock-screens/grafico-financeiro-exemplo.png" alt="Gráfico receitas vs despesas">
        </div>
      
        <div className="tabela">
          <h2>Histórico mensal</h2>
          <table>
            <thead>
              <tr>
                <th>Mês</th>
                <th>Receita</th>
                <th>Despesa</th>
                <th>Saldo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Junho</td>
                <td>R$ 12.000</td>
                <td>R$ 9.500</td>
                <td>R$ 2.500</td>
                <td>Parcial</td>
              </tr>
              <tr>
                <td>Maio</td>
                <td>R$ 10.800</td>
                <td>R$ 9.100</td>
                <td>R$ 1.700</td>
                <td>Fechado</td>
              </tr>
              <tr>
                <td>Abril</td>
                <td>R$ 11.200</td>
                <td>R$ 10.000</td>
                <td>R$ 1.200</td>
                <td>Aberto</td>
              </tr>
            </tbody>
          </table>
        </div>
      
      
      
      </body></html>

    </div>
  );
}
