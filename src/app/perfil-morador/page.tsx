// Página gerada: /perfil-morador
import React from 'react';

export default function PerfilMorador() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>PerfilMorador</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-BR"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Perfil do Morador</title>
        <style>
          :root {
            --azul: #005eaa;
            --azul-claro: #0074d9;
            --cinza-bg: #f4f6f8;
            --cinza-card: #f0f2f5;
            --cinza-borda: #ccc;
            --texto-claro: #666;
          }
          * { box-sizing: border-box; }
          body {
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            background: var(--cinza-bg);
            color: #333;
          }
          header {
            padding: 1rem 2rem;
            background-color: var(--azul);
            color: white;
          }
          .container {
            max-width: 960px;
            margin: 2rem auto;
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          }
          h2 {
            margin-top: 0;
            font-size: 1.6rem;
            color: var(--azul);
          }
          h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
          .section {
            margin-bottom: 2.5rem;
          }
          label {
            display: block;
            margin-top: 0.8rem;
            font-weight: bold;
          }
          input, select {
            width: 100%;
            padding: 0.6rem;
            margin-top: 0.3rem;
            border: 1px solid var(--cinza-borda);
            border-radius: 4px;
            background-color: white;
          }
          .readonly {
            background-color: var(--cinza-card);
            color: var(--texto-claro);
          }
          .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          .info {
            font-size: 0.9rem;
            color: var(--texto-claro);
            margin-top: 0.4rem;
          }
          button {
            background: var(--azul-claro);
            color: white;
            padding: 0.8rem 1.4rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.2s ease;
          }
          button:hover {
            background: var(--azul);
          }
          @media (max-width: 768px) {
            .grid-2 {
              grid-template-columns: 1fr;
            }
            .container {
              padding: 1rem;
            }
            button {
              width: 100%;
            }
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Área do Morador</h1>
          <p>Bem-vindo, <strong>José da Silva</strong> | Apto 202 - Bloco B</p>
        </header>
      
        <div className="container">
          <h2>Perfil do Morador</h2>
      
          <!-- Dados Oficiais -->
          <div className="section">
            <h3>📇 Dados Oficiais</h3>
            <div className="grid-2">
              <div>
                <label>Nome Completo</label>
                <input type="text" value="José da Silva" readonly="" className="readonly">
              </div>
              <div>
                <label>CPF</label>
                <input type="text" value="123.456.789-00" readonly="" className="readonly">
              </div>
            </div>
            <p className="info">Dados cadastrados pela administração. Não editáveis pelo usuário.</p>
          </div>
      
          <!-- Contatos Oficiais -->
          <div className="section">
            <h3>📞 Contatos Oficiais</h3>
            <div className="grid-2">
              <div>
                <label>E-mail Principal</label>
                <input type="email" value="jose.silva@email.com" readonly="" className="readonly">
              </div>
              <div>
                <label>Telefone Principal</label>
                <input type="tel" value="(11) 91234-5678" readonly="" className="readonly">
              </div>
            </div>
            <p className="info">Usados para comunicação oficial com a administração do condomínio.</p>
          </div>
      
          <!-- Contatos Extras -->
          <div className="section">
            <h3>📬 Contatos Extras</h3>
            <label>E-mails Secundários (até 3)</label>
            <input type="email" placeholder="E-mail 1">
            <input type="email" placeholder="E-mail 2">
            <input type="email" placeholder="E-mail 3">
            <label>Telefones Secundários (até 3)</label>
            <input type="tel" placeholder="Telefone 1">
            <input type="tel" placeholder="Telefone 2">
            <input type="tel" placeholder="Telefone 3">
            <p className="info">Você receberá notificações adicionais nesses contatos, caso ativado.</p>
          </div>
      
          <!-- Preferências -->
          <div className="section">
            <h3>⚙️ Preferências de Comunicação</h3>
            <label><input type="checkbox" checked=""> Receber por E-mail</label>
            <label><input type="checkbox"> Receber nos contatos extras</label>
            <label><input type="checkbox" disabled=""> Receber por WhatsApp <span className="info">(exclusivo plano PLATINUM)</span></label>
            <label><input type="checkbox"> Não receber notificações</label>
          </div>
      
          <button>Salvar Alterações</button>
        </div>
      
      
      </body></html>

    </div>
  );
}
