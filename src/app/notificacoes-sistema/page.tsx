// Página gerada: /notificacoes-sistema
import React from 'react';

export default function NotificacoesSistema() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>NotificacoesSistema</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Central de Notificações – Síndico</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
          body {
            background: #f4f6f9;
            font-family: 'Segoe UI', sans-serif;
          }
          .context-bar {
            background: #fff;
            padding: 1rem;
            margin-bottom: 1rem;
            box-shadow: 0 1px 4px rgba(0,0,0,0.06);
            border-left: 5px solid #0d6efd;
          }
          .filter-section {
            background: #fff;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            margin-bottom: 1.5rem;
          }
          .notification-card {
            background: #fff;
            border-left: 5px solid #0d6efd;
            padding: 1rem;
            margin-bottom: 1rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          }
          .notification-header {
            font-weight: 600;
            font-size: 1rem;
          }
          .notification-meta {
            font-size: 0.875rem;
            color: #6c757d;
          }
          .notification-actions {
            margin-top: 0.5rem;
          }
          .btn-action {
            font-size: 0.85rem;
            margin-right: 0.5rem;
          }
          .reply-box {
            margin-top: 0.5rem;
            display: none;
          }
        </style>
      </head>
      <body>
        <div className="container py-4">
      
          <!-- ✅ Contexto de Usuário Logado -->
          <div className="context-bar">
            <strong>👤 Perfil:</strong> Síndico &nbsp;&nbsp; 🏢 Bloco: B &nbsp;&nbsp; 🔐 Acesso: Gerencial
          </div>
      
          <!-- 🎛️ Filtros Avançados -->
          <div className="filter-section">
            <div className="row g-3">
              <div className="col-md-3">
                <select className="form-select">
                  <option>Status: Todos</option>
                  <option>Pendente</option>
                  <option>Resolvido</option>
                  <option>Revisar</option>
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>Tipo: Todos</option>
                  <option>Multa</option>
                  <option>Pagamento</option>
                  <option>Evento</option>
                  <option>Ocorrência</option>
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>Categoria: Todas</option>
                  <option>Barulho</option>
                  <option>Limpeza</option>
                  <option>Segurança</option>
                  <option>Obras</option>
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>Prioridade: Todas</option>
                  <option>Alta</option>
                  <option>Média</option>
                  <option>Baixa</option>
                </select>
              </div>
            </div>
          </div>
      
          <!-- 🔔 Notificação: Multa com resposta -->
          <div className="notification-card border-danger">
            <div className="notification-header">🚫 Multa: som alto após as 22h</div>
            <div className="notification-meta">Apto 302 • Categoria: Barulho • Prioridade: Média • Emitida em: 17/07/2025</div>
            <div className="notification-actions">
              <button onclick="toggleReply(this)" className="btn btn-sm btn-outline-primary btn-action">📄 Ver evidência</button>
              <button className="btn btn-sm btn-outline-danger btn-action">📝 Registrar resposta</button>
              <button className="btn btn-sm btn-outline-success btn-action">✔️ Marcar como resolvida</button>
            </div>
            <div className="reply-box">
              <p><strong>Relato:</strong> Relatório anexado com foto e descrição da ocorrência.</p>
              <button className="btn btn-sm btn-secondary mt-2">🖼️ Abrir anexo</button>
            </div>
          </div>
      
          <!-- 🔔 Notificação: Pagamento realizado -->
          <div className="notification-card border-success">
            <div className="notification-header">🧾 Pagamento efetuado – Faxina salão de festas</div>
            <div className="notification-meta">Valor: R$ 300,00 • Categoria: Limpeza • Pago em: 16/07/2025</div>
            <div className="notification-actions">
              <button className="btn btn-sm btn-outline-secondary btn-action">📎 Comprovante</button>
              <button className="btn btn-sm btn-outline-warning btn-action">🔄 Reenviar nota</button>
            </div>
          </div>
      
          <!-- 🔔 Notificação: Evento agendado -->
          <div className="notification-card">
            <div className="notification-header">📅 Reunião: prestação de contas do condomínio</div>
            <div className="notification-meta">Data: 25/07/2025 às 20h • Local: Salão social • Prioridade: Alta</div>
            <div className="notification-actions">
              <button className="btn btn-sm btn-outline-info btn-action">✏️ Editar evento</button>
              <button className="btn btn-sm btn-outline-danger btn-action">🗑️ Cancelar evento</button>
              <button className="btn btn-sm btn-outline-primary btn-action">📣 Comunicar moradores</button>
            </div>
          </div>
      
        </div>
      
        <script>
          function toggleReply(button) {
            const box = button.closest('.notification-card').querySelector('.reply-box');
            box.style.display = box.style.display === 'none' ? 'block' : 'none';
          }
        </script>
      
      
      </body></html>

    </div>
  );
}
