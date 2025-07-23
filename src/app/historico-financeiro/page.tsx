// Página gerada: /historico-financeiro
import React from 'react';

export default function HistoricoFinanceiro() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>HistoricoFinanceiro</h1>

      {/* mockscreen */}
      <!-- historico-financeiro.html (com filtros avançados de gestão) --><!DOCTYPE html><html lang="pt-BR"><head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Histórico Financeiro</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
          <link rel="stylesheet" href="../styles/historico-financeiro.css">
        </head>
        <body>
          <div className="container py-4">
            <h2 className="mb-4">📊 Histórico Financeiro</h2>
      
            <!-- Filtros (dinâmicos por perfil) -->
            <div className="row g-3 mb-4">
              <div className="col-md-3">
                <label for="filtroData" className="form-label">Período</label>
                <select id="filtroData" className="form-select">
                  <option>Últimos 3 meses</option>
                  <option>Últimos 6 meses</option>
                  <option>Ano atual</option>
                  <option>Personalizado</option>
                </select>
              </div>
              <div className="col-md-3">
                <label for="tipoMovimento" className="form-label">Tipo</label>
                <select id="tipoMovimento" className="form-select">
                  <option>Todos</option>
                  <option>Receita</option>
                  <option>Despesa</option>
                  <option>Rateio</option>
                </select>
              </div>
              <!-- Filtros extras (visíveis para perfis de gestão) -->
              <div className="col-md-3">
                <label for="filtroBloco" className="form-label">Bloco/Torre</label>
                <select id="filtroBloco" className="form-select">
                  <option>Todos</option>
                  <option>Bloco A</option>
                  <option>Bloco B</option>
                  <option>Bloco C</option>
                </select>
              </div>
              <div className="col-md-3">
                <label for="filtroUnidade" className="form-label">Unidade/Apto</label>
                <input type="text" id="filtroUnidade" placeholder="Ex: 102B" className="form-control">
              </div>
              <div className="col-md-3 d-flex align-items-end">
                <button className="btn btn-primary w-100">🔍 Filtrar</button>
              </div>
            </div>
      
            <!-- Tabela de lançamentos -->
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-light">
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Valor (R$)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>05/07/2025</td>
                    <td>Pagamento de taxa condominial</td>
                    <td>Receita</td>
                    <td>450,00</td>
                    <td><span className="badge bg-success">Pago</span></td>
                  </tr>
                  <tr>
                    <td>01/07/2025</td>
                    <td>Manutenção da bomba d'água</td>
                    <td>Despesa</td>
                    <td>1.200,00</td>
                    <td><span className="badge bg-warning text-dark">Pendente</span></td>
                  </tr>
                  <tr>
                    <td>26/06/2025</td>
                    <td>Rateio extraordinário</td>
                    <td>Rateio</td>
                    <td>300,00</td>
                    <td><span className="badge bg-info text-dark">Em análise</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
      
            <!-- Botões de exportação -->
            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-outline-secondary me-2">📄 Exportar PDF</button>
              <button className="btn btn-outline-secondary">📊 Exportar CSV</button>
            </div>
          </div>
        
      
      </body></html>

    </div>
  );
}
