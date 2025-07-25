// Página gerada: /eventos-condominio
import React from 'react';

export default function EventosCondominio() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>EventosCondominio</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Eventos do Condomínio</title>
        <style>
          body {
            font-family: "Segoe UI", sans-serif;
            margin: 0;
            padding: 20px;
            background: #f4f6f9;
            color: #333;
          }
      
          h1 {
            margin-bottom: 20px;
          }
      
          section {
            margin-bottom: 40px;
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
            width: 100%;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
          }
      
          .calendario {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 10px;
            text-align: center;
            margin-top: 20px;
          }
      
          .dia {
            background: #e9f3ff;
            padding: 15px;
            border-radius: 6px;
            cursor: pointer;
            border-left: 4px solid #4285f4;
          }
      
          .dia.evento {
            background: #d0e8ff;
            font-weight: bold;
          }
      
          .eventos-lista {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }
      
          .evento-card {
            background: #e9f3ff;
            padding: 15px;
            border-left: 6px solid #4285f4;
            border-radius: 6px;
          }
      
          .evento-card h3 {
            margin-top: 0;
          }
      
          .evento-card p {
            margin: 6px 0;
          }
      
          @media (max-width: 768px) {
            select {
              font-size: 16px;
            }
      
            .calendario {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        </style>
      </head>
      <body>
      
        <h1>📅 Eventos do Condomínio</h1>
      
        <section>
          <h2>Filtrar por tipo de evento</h2>
          <label for="filtro-evento">Tipo:</label>
          <select id="filtro-evento">
            <option>Todos</option>
            <option>Reunião</option>
            <option>Festa</option>
            <option>Manutenção</option>
            <option>Assembleia</option>
          </select>
        </section>
      
        <section>
          <h2>Calendário de eventos - Julho/2025</h2>
          <div className="calendario">
            <div className="dia">01</div>
            <div className="dia evento">03<br><small>Manutenção</small></div>
            <div className="dia">04</div>
            <div className="dia evento">10<br><small>Assembleia</small></div>
            <div className="dia">15</div>
            <div className="dia evento">20<br><small>Festa Junina</small></div>
            <div className="dia">25</div>
          </div>
        </section>
      
        <section>
          <h2>📋 Próximos eventos</h2>
          <div className="eventos-lista">
            <div className="evento-card">
              <h3>Assembleia Ordinária</h3>
              <p><strong>Data:</strong> 10/07/2025 às 19h</p>
              <p><strong>Local:</strong> Salão de festas</p>
              <p><strong>Descrição:</strong> Discussão sobre orçamento e regras internas.</p>
            </div>
      
            <div className="evento-card">
              <h3>Festa Junina</h3>
              <p><strong>Data:</strong> 20/07/2025 às 16h</p>
              <p><strong>Local:</strong> Área externa do condomínio</p>
              <p><strong>Descrição:</strong> Comidas típicas, música e brincadeiras para todos.</p>
            </div>
          </div>
        </section>
      
      
      
      </body></html>

    </div>
  );
}
