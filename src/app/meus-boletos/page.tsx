// Página gerada: /meus-boletos
import React from 'react';

export default function MeusBoletos() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>MeusBoletos</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meus Boletos</title>
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
      
          .identidade {
            font-size: 16px;
            margin-bottom: 25px;
          }
      
          section {
            margin-bottom: 30px;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          }
      
          label {
            display: block;
            margin: 12px 0 8px;
          }
      
          select {
            padding: 8px;
            border-radius: 6px;
            border: 1px solid #ccc;
            width: 100%;
            max-width: 200px;
          }
      
          .filtros {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
      
          .boletos-tabela {
            overflow-x: auto;
          }
      
          table {
            width: 100%;
            border-collapse: collapse;
            min-width: 780px;
          }
      
          th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
      
          th {
            background: #4285f4;
            color: white;
          }
      
          .status {
            padding: 6px 10px;
            border-radius: 4px;
            font-weight: bold;
            color: white;
          }
      
          .pago { background: #2e7d32; }
          .aberto { background: #f9a825; }
          .atrasado { background: #c62828; }
      
          .btn-baixar {
            background: #4285f4;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
      
          @media (max-width: 768px) {
            .filtros {
              flex-direction: column;
            }
      
            select {
              width: 100%;
            }
          }
        </style>
      </head>
      <body>
      
        <h1>💳 Meus Boletos</h1>
        <p className="identidade"><strong>Condômino:</strong> João Silva — Apto 203</p>
      
        <section>
          <h2>Filtros</h2>
          <div className="filtros">
            <div>
              <label for="mes">Mês</label>
              <select id="mes">
                <option>Todos</option>
                <option>Janeiro</option>
                <option>Fevereiro</option>
                <option>Março</option>
                <option>Abril</option>
                <option>Maio</option>
              </select>
            </div>
            <div>
              <label for="ano">Ano</label>
              <select id="ano">
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
            <div>
              <label for="status">Status</label>
              <select id="status">
                <option>Todos</option>
                <option>Pago</option>
                <option>Em aberto</option>
                <option>Atrasado</option>
              </select>
            </div>
            <div>
              <label for="tipo-cobranca">Tipo de cobrança</label>
              <select id="tipo-cobranca">
                <option>Todos</option>
                <option>Mensalidade</option>
                <option>Multa</option>
                <option>Extraordinária</option>
              </select>
            </div>
          </div>
        </section>
      
        <section className="boletos-tabela">
          <h2>📋 Histórico de Boletos</h2>
          <table>
            <thead>
              <tr>
                <th>Mês</th>
                <th>Valor</th>
                <th>Vencimento</th>
                <th>Status</th>
                <th>Tipo</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maio</td>
                <td>R$ 480,00</td>
                <td>10/05/2025</td>
                <td><span className="status pago">Pago</span></td>
                <td>Mensalidade</td>
                <td><button className="btn-baixar">Baixar comprovante</button></td>
              </tr>
              <tr>
                <td>Junho</td>
                <td>R$ 480,00</td>
                <td>10/06/2025</td>
                <td><span className="status aberto">Em aberto</span></td>
                <td>Mensalidade</td>
                <td><button className="btn-baixar">Baixar 2ª via</button></td>
              </tr>
              <tr>
                <td>Julho</td>
                <td>R$ 150,00</td>
                <td>15/07/2025</td>
                <td><span className="status atrasado">Atrasado</span></td>
                <td>Multa</td>
                <td><button className="btn-baixar">Baixar 2ª via</button></td>
              </tr>
            </tbody>
          </table>
        </section>
      
      
      
      </body></html>

    </div>
  );
}
