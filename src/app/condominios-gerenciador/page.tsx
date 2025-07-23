// Página gerada: /condominios-gerenciador
import React from 'react';

export default function CondominiosGerenciador() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>CondominiosGerenciador</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Condomínios Gerenciador</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f5f7fa;
          }
          h1 {
            margin-bottom: 20px;
          }
          .search-bar {
            margin-bottom: 20px;
          }
          input[type="text"] {
            padding: 8px;
            width: 300px;
            font-size: 14px;
          }
          button {
            padding: 8px 12px;
            font-size: 14px;
            margin-left: 10px;
            cursor: pointer;
          }
          .condominio-card {
            background: white;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          }
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .card-body {
            margin-top: 10px;
          }
          .link-acesso {
            margin-top: 10px;
            display: block;
            color: blue;
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>Gerenciador de Condomínios</h1>
      
        <div className="search-bar">
          <input type="text" placeholder="Buscar por nome, cidade ou CNPJ">
          <button>Buscar</button>
          <button>Cadastrar Novo Condomínio</button>
        </div>
      
        <div className="condominio-card">
          <div className="card-header">
            <strong>Residencial Palmeiras</strong>
            <span>Unidades: 48 | Moradores ativos: 45 | Inadimplentes: 3</span>
          </div>
          <div className="card-body">
            <p><strong>Administrador:</strong> João Silva · (11) 91234-5678</p>
            <p><strong>Síndico:</strong> Ana Souza · (11) 99876-5432</p>
            <a href="#" className="link-acesso">Ver dados completos</a>
          </div>
        </div>
      
        <div className="condominio-card">
          <div className="card-header">
            <strong>Edifício Horizonte</strong>
            <span>Unidades: 60 | Moradores ativos: 60 | Inadimplentes: 0</span>
          </div>
          <div className="card-body">
            <p><strong>Administrador:</strong> Marcos Tavares · (21) 93333-2222</p>
            <p><strong>Síndico:</strong> Carla Mendes · (21) 98888-4444</p>
            <a href="#" className="link-acesso">Ver dados completos</a>
          </div>
        </div>
      
      
      </body></html>

    </div>
  );
}
