// Página gerada: /ocorrencias
import React from 'react';

export default function Ocorrencias() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Ocorrencias</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-br"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ocorrências do Condomínio</title>
        <style>
          body {
            font-family: "Segoe UI", sans-serif;
            margin: 0;
            padding: 20px;
            background: #f4f6f9;
            color: #333;
          }
      
          h1 {
            margin-bottom: 15px;
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
      
          input, select, textarea {
            width: 100%;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
          }
      
          textarea {
            height: 100px;
            resize: vertical;
          }
      
          button {
            background: #4285f4;
            color: white;
            border: none;
            padding: 10px 20px;
            margin-top: 15px;
            border-radius: 6px;
            cursor: pointer;
          }
      
          .historico {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }
      
          .ocorrencia-card {
            background: #e9f3ff;
            padding: 15px;
            border-left: 6px solid #4285f4;
            border-radius: 6px;
          }
      
          .ocorrencia-card h3 {
            margin-top: 0;
          }
      
          .ocorrencia-card p {
            margin: 6px 0;
          }
      
          #multas-campos {
            background: #f0f8ff;
            padding: 15px;
            border: 1px solid #c2dcff;
            border-radius: 6px;
            margin-top: 10px;
          }
      
          @media (max-width: 768px) {
            input, select, textarea {
              font-size: 16px;
            }
          }
        </style>
      </head>
      <body>
      
        <h1>📢 Ocorrências do Condomínio</h1>
      
        <section>
          <h2>Reportar nova ocorrência</h2>
          <form>
            <label for="descricao">Descrição</label>
            <textarea id="descricao" placeholder="Ex: Luz queimada no corredor do 3º andar"></textarea>
      
            <label for="imagem">Foto (opcional)</label>
            <input type="file" id="imagem" accept="image/*">
      
            <label for="prioridade">Prioridade</label>
            <select id="prioridade">
              <option>Baixa</option>
              <option>Média</option>
              <option>Alta</option>
            </select>
      
            <label for="infracao">Esta ocorrência gerou infração?</label>
            <select id="infracao">
              <option>Não</option>
              <option>Sim — passível de multa</option>
            </select>
      
            <div id="multas-campos" style="display: none;">
              <label for="valor-multa">Valor da multa (R$)</label>
              <input type="number" id="valor-multa" placeholder="Ex: 150.00">
      
              <label for="vencimento-multa">Vencimento da multa</label>
              <input type="date" id="vencimento-multa">
      
              <label for="morador-responsavel">Morador responsável</label>
              <input type="text" id="morador-responsavel" placeholder="Ex: Apto 203 - João Silva">
            </div>
      
            <button type="submit">Enviar ocorrência</button>
          </form>
        </section>
      
        <section>
          <h2>📋 Histórico de ocorrências</h2>
          <div className="historico">
            <div className="ocorrencia-card">
              <h3>Portão com falha</h3>
              <p><strong>Status:</strong> Em andamento</p>
              <p><strong>Data:</strong> 05/07/2025</p>
              <p><strong>Prioridade:</strong> Alta</p>
              <p><strong>Resposta:</strong> Técnico foi acionado, aguardando peças.</p>
            </div>
      
            <div className="ocorrencia-card">
              <h3>Vazamento na garagem</h3>
              <p><strong>Status:</strong> Resolvida</p>
              <p><strong>Data:</strong> 28/06/2025</p>
              <p><strong>Prioridade:</strong> Média</p>
              <p><strong>Resposta:</strong> Reparos concluídos dia 01/07.</p>
            </div>
          </div>
        </section>
      
        <script>
          const selectInfracao = document.getElementById("infracao");
          const camposMulta = document.getElementById("multas-campos");
      
          selectInfracao.addEventListener("change", () => {
            camposMulta.style.display = selectInfracao.value.includes("Sim") ? "block" : "none";
          });
        </script>
      
      
      
      </body></html>

    </div>
  );
}
