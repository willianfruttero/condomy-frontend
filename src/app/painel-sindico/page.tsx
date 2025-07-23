// Página gerada: /painel-sindico
import React from 'react';

export default function PainelSindico() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>PainelSindico</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-BR"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Painel do Síndico</title>
        <style>
          :root {
            --azul: #005eaa;
            --vermelho: #dc3545;
            --cinza-bg: #f4f6f8;
            --cinza-card: #f0f2f5;
            --cinza-borda: #ccc;
          }
          * { box-sizing: border-box; }
          body {
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            background-color: var(--cinza-bg);
            color: #333;
          }
          header {
            background-color: var(--azul);
            color: white;
            padding: 1rem 2rem;
          }
          .container {
            max-width: 960px;
            margin: 2rem auto;
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.05);
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
            margin-bottom: 2rem;
          }
          label {
            font-weight: bold;
            display: block;
            margin-top: 0.8rem;
          }
          input, select, textarea {
            width: 100%;
            padding: 0.6rem;
            margin-top: 0.3rem;
            border: 1px solid var(--cinza-borda);
            border-radius: 4px;
          }
          textarea {
            resize: vertical;
            min-height: 80px;
          }
          .grid-3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
          .btn {
            margin-top: 1rem;
            background-color: var(--azul);
            color: white;
            padding: 0.8rem 1.2rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
          }
          .btn:hover {
            background-color: #003f80;
          }
          .alerta {
            background-color: var(--cinza-card);
            padding: 0.8rem;
            border-left: 5px solid var(--vermelho);
            margin-top: 1rem;
            border-radius: 4px;
            font-size: 0.95rem;
            color: #444;
          }
          @media (max-width: 768px) {
            .container { padding: 1rem; }
            .grid-3 { grid-template-columns: 1fr; }
            .btn { width: 100%; }
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Painel do Síndico</h1>
          <p>Gestão de Ocorrências e Multas</p>
        </header>
      
        <div className="container">
          <h2>📋 Registro de Multa Condominial</h2>
      
          <!-- Filtros -->
          <div className="section">
            <h3>🔍 Filtrar Morador</h3>
            <div className="grid-3">
              <div>
                <label>CPF</label>
                <input type="text" placeholder="Ex: 123.456.789-00">
              </div>
              <div>
                <label>Bloco</label>
                <select>
                  <option>Selecione</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div>
                <label>Apartamento</label>
                <input type="text" placeholder="Ex: 202">
              </div>
            </div>
            <button className="btn">🔎 Buscar Morador</button>
          </div>
      
          <!-- Registro -->
          <div className="section">
            <label>Morador Identificado</label>
            <select>
              <option disabled="" selected="">Selecione após aplicar os filtros</option>
              <option>José da Silva - Apto 202 / Bloco B</option>
              <option>Ana Souza - Apto 104 / Bloco A</option>
              <!-- Populado dinamicamente -->
            </select>
      
            <label>Tipo de Infração</label>
            <select>
              <option>Barulho Excessivo</option>
              <option>Vandalismo</option>
              <option>Animais Soltos</option>
              <option>Uso Indevido de Área Comum</option>
              <option>Outros</option>
            </select>
      
            <label>Data da Ocorrência</label>
            <input type="date">
      
            <label>Descrição da Ocorrência</label>
            <textarea placeholder="Descreva os detalhes e contexto da infração..."></textarea>
      
            <label>Valor da Multa (R$)</label>
            <input type="number" min="0" step="10" placeholder="Ex: 200">
      
            <div className="alerta">
              ⚠️ Esta multa será vinculada automaticamente ao próximo boleto do condômino e será enviada por e-mail junto à cobrança.
            </div>
      
            <button className="btn">💾 Registrar Multa</button>
          </div>
        </div>
      
      
      </body></html>

    </div>
  );
}
