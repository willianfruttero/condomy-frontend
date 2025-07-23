// Página gerada: /perfil-financeiro
import React from 'react';

export default function PerfilFinanceiro() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>PerfilFinanceiro</h1>

      {/* mockscreen */}
      <!-- perfil-financeiro.html (granular + perfil do usuário) --><!DOCTYPE html><html lang="pt-BR"><head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Perfil Financeiro da Unidade</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
          <link rel="stylesheet" href="../styles/perfil-financeiro.css">
        </head>
        <body>
          <div className="container py-4">
            <h2 className="mb-4">👤 Perfil Financeiro da Unidade</h2>
      
            <!-- Perfil do usuário logado -->
            <div className="card mb-4 border-info">
              <div className="card-body">
                <h6 className="card-title">🧾 Informações da Unidade</h6>
                <p className="mb-0">Unidade: <strong>102B - Bloco A</strong></p>
                <p className="mb-0">Perfil: <strong>Condômino Proprietário</strong></p>
                <small>Último acesso: 19/07/2025 às 12:15</small>
              </div>
            </div>
      
            <!-- Saldo e próxima cobrança -->
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="card bg-primary text-white">
                  <div className="card-body">
                    <h4 className="card-title">💰 Saldo Atual</h4>
                    <p className="fs-3">R$ 200,00</p>
                    <small>Atualizado em 19/07/2025</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-secondary">
                  <div className="card-body">
                    <h6 className="card-title">🔔 Próxima Cobrança (estimada)</h6>
                    <p className="fs-5">R$ 460,00 em 05/08/2025</p>
                    <small>Inclui taxa ordinária e previsão de rateio</small>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Histórico -->
            <h5 className="mb-3">📅 Pagamentos e Inadimplência</h5>
            <div className="table-responsive mb-4">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Data</th>
                    <th>Referência</th>
                    <th>Tipo</th>
                    <th>Valor (R$)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>05/07/2025</td>
                    <td>Julho/2025</td>
                    <td>Ordinária</td>
                    <td>450,00</td>
                    <td><span className="badge bg-success">Pago</span></td>
                  </tr>
                  <tr>
                    <td>05/06/2025</td>
                    <td>Junho/2025</td>
                    <td>Ordinária</td>
                    <td>450,00</td>
                    <td><span className="badge bg-danger">Inadimplente</span></td>
                  </tr>
                  <tr>
                    <td>20/05/2025</td>
                    <td>Rateio Extra</td>
                    <td>Extraordinária</td>
                    <td>180,00</td>
                    <td><span className="badge bg-success">Pago</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
      
            <!-- Indicador de pontualidade -->
            <div className="alert alert-secondary mb-4">
              ⏱️ Pagamentos em dia: <strong>2 de 3 últimos meses</strong>
            </div>
      
            <!-- Comparativo -->
            <h5 className="mb-3">📊 Comparativo com Média do Condomínio</h5>
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="card border-secondary">
                  <div className="card-body">
                    <h6 className="card-title">Média Condominial</h6>
                    <p className="fs-5">R$ 465,00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-secondary">
                  <div className="card-body">
                    <h6 className="card-title">Sua Média</h6>
                    <p className="fs-5">R$ 426,66</p>
                    <span className="badge bg-warning text-dark">Abaixo da média</span>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Recomendações estáticas -->
            <h5 className="mb-3">🧠 Recomendações</h5>
            <div className="alert alert-info">
              💡 Mantenha seu saldo acima de R$ 500,00 em meses com rateios extraordinários.
            </div>
            <div className="alert alert-warning">
              📍 Verifique se há pagamentos atrasados ou não lançados no sistema.
            </div>
          </div>
        
      
      </body></html>

    </div>
  );
}
