// Página gerada: /painel-financeiro
import React from 'react';

export default function PainelFinanceiro() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>PainelFinanceiro</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Painel Financeiro</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      </head>
      <body className="bg-light">
      
        <div className="container py-4">
          <h1 className="mb-4">Painel Financeiro</h1>
      
          <!-- Filtros de período e data -->
          <form className="row g-3 align-items-end mb-4">
            <div className="col-md-3">
              <label for="periodo" className="form-label fw-bold">Tipo de período</label>
              <select id="periodo" className="form-select">
                <option value="mensal" selected="">Mensal</option>
                <option value="semanal">Semanal</option>
                <option value="anual">Anual</option>
                <option value="customizado">Personalizado</option>
              </select>
            </div>
            <div className="col-md-3">
              <label for="dataInicio" className="form-label fw-bold">Data inicial</label>
              <input type="date" id="dataInicio" className="form-control">
            </div>
            <div className="col-md-3">
              <label for="dataFim" className="form-label fw-bold">Data final</label>
              <input type="date" id="dataFim" className="form-control">
            </div>
            <div className="col-md-3">
              <button type="submit" className="btn btn-primary w-100">Aplicar Filtro</button>
            </div>
          </form>
      
          <!-- Cards resumo -->
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card text-bg-success">
                <div className="card-body">
                  <h5 className="card-title">Receita Total</h5>
                  <p className="card-text">R$ 85.420,00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-bg-danger">
                <div className="card-body">
                  <h5 className="card-title">Despesas</h5>
                  <p className="card-text">R$ 38.700,00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-bg-primary">
                <div className="card-body">
                  <h5 className="card-title">Saldo Atual</h5>
                  <p className="card-text">R$ 46.720,00</p>
                </div>
              </div>
            </div>
          </div>
      
          <!-- Gráfico -->
          <div className="mb-4">
            <canvas id="financeChart" height="150"></canvas>
          </div>
      
          <!-- Eventos recentes -->
          <div className="card">
            <div className="card-header fw-bold">Eventos Financeiros Recentes</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Pagamento de fornecedor - R$ 3.200,00</li>
              <li className="list-group-item">Recebimento de cotas - R$ 12.000,00</li>
              <li className="list-group-item">Multa aplicada - R$ 500,00</li>
            </ul>
          </div>
      
          <!-- Botões de ação -->
          <div className="mt-4 d-flex gap-2 flex-wrap">
            <a href="#" className="btn btn-outline-secondary">Perfil Financeiro</a>
            <a href="#" className="btn btn-outline-primary">Histórico de Despesas</a>
            <a href="#" className="btn btn-outline-success">Nova Solicitação</a>
          </div>
        </div>
      
        <!-- Chart.js -->
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script>
          const ctx = document.getElementById('financeChart').getContext('2d');
          const financeChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
              datasets: [
                {
                  label: 'Receita',
                  data: [12000, 11000, 10500, 13000, 12500, 14000],
                  backgroundColor: 'rgba(25, 135, 84, 0.8)'
                },
                {
                  label: 'Despesa',
                  data: [8000, 9500, 8700, 9100, 9800, 9200],
                  backgroundColor: 'rgba(220, 53, 69, 0.8)'
                }
              ]
            },
            options: {
              responsive: true,
              scales: {
                y: { beginAtZero: true }
              }
            }
          });
        </script>
      
      
      </body></html>

    </div>
  );
}
