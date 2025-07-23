// Página gerada: /visao-geral-condominio
import React from 'react';

export default function VisaoGeralCondominio() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>VisaoGeralCondominio</h1>

      {/* mockscreen */}
      <!-- visao-geral-condominio.html --><!DOCTYPE html><html lang="pt-BR"><head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Visão Geral do Condomínio</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
      
      <body>
          <div className="container my-4">
              <h1 className="mb-4 text-center">🏢 Visão Geral do Condomínio</h1>
      
              <!-- Resumo de Notificações -->
              <section className="mb-4">
                  <h4>🔔 Notificações</h4>
                  <div className="row text-center">
                      <div className="col-md-3">
                          <div className="card border-primary">
                              <div className="card-body">
                                  <h5 className="card-title">Pendentes</h5>
                                  <p className="card-text fs-4 text-primary">12</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="card border-success">
                              <div className="card-body">
                                  <h5 className="card-title">Lidas</h5>
                                  <p className="card-text fs-4 text-success">34</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="card border-warning">
                              <div className="card-body">
                                  <h5 className="card-title">Multas</h5>
                                  <p className="card-text fs-4 text-warning">5</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="card border-info">
                              <div className="card-body">
                                  <h5 className="card-title">Boletos</h5>
                                  <p className="card-text fs-4 text-info">8</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
      
              <!-- Status Financeiro -->
              <section className="mb-4">
                  <h4>💰 Financeiro</h4>
                  <div className="row">
                      <div className="col-md-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Inadimplência</h5>
                                  <p className="card-text">Gráfico de pizza será integrado aqui futuramente</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="card">
                              <div className="card-body">
                                  <h5 className="card-title">Balanço Mensal</h5>
                                  <p className="card-text">Receita: R$ 38.250 | Despesa: R$ 35.400</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
      
              <!-- Eventos Próximos -->
              <section className="mb-4">
                  <h4>📅 Eventos Próximos</h4>
                  <ul className="list-group">
                      <li className="list-group-item">🔧 Manutenção elevador – 20/07</li>
                      <li className="list-group-item">🗣️ Assembleia geral – 25/07</li>
                      <li className="list-group-item">📢 Aviso de pintura externa – 28/07</li>
                  </ul>
              </section>
      
              <!-- Acesso Rápido -->
              <section className="mb-4">
                  <h4>🚀 Acesso Rápido</h4>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <button className="btn btn-outline-primary">Editar Perfil</button>
                      <button className="btn btn-outline-secondary">Histórico de Notificações</button>
                      <button className="btn btn-outline-success">Nova Solicitação</button>
                  </div>
              </section>
      
              <!-- Perfil Logado -->
              <section className="mt-5">
                  <p className="text-muted">🔐 Perfil atual: <strong>Admin</strong> (exemplo)</p>
              </section>
          </div>
      
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      
      
      </body></html>

    </div>
  );
}
