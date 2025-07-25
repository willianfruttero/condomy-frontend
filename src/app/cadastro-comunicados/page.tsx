// Página gerada: /cadastro-comunicados
import React from 'react';

export default function CadastroComunicados() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>CadastroComunicados</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-BR"><head>
          <meta charset="UTF-8">
          <title>Cadastro de Comunicados</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            :root {
              --primary-color: #0078d4;
              --hover-color: #005fa3;
              --bg-color: #f4f4f4;
              --card-bg: #fff;
              --text-color: #333;
              --subtext-color: #666;
              --border-radius: 8px;
              --padding: 1rem;
              --gap: 1.2rem;
            }
      
            * {
              box-sizing: border-box;
            }
      
            body {
              margin: 0;
              font-family: 'Segoe UI', sans-serif;
              background-color: var(--bg-color);
              color: var(--text-color);
            }
      
            .tela-nomavene {
              max-width: 960px;
              margin: 2rem auto;
              background-color: var(--card-bg);
              border-radius: var(--border-radius);
              padding: 2rem;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
              display: flex;
              flex-direction: column;
              gap: var(--gap);
            }
      
            .cabecalho {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              align-items: center;
            }
      
            .titulo {
              font-size: 1.8rem;
              font-weight: bold;
            }
      
            .usuario-logado {
              font-size: 0.95rem;
              color: var(--subtext-color);
            }
      
            .formulario.padrao.platinum {
              display: flex;
              flex-direction: column;
              gap: var(--gap);
            }
      
            .campo {
              display: flex;
              flex-direction: column;
              gap: 0.4rem;
            }
      
            label {
              font-weight: 600;
            }
      
            input[type="text"],
            input[type="datetime-local"],
            input[type="file"],
            textarea,
            select {
              padding: 0.6rem;
              border: 1px solid #ccc;
              border-radius: 4px;
              font-size: 1rem;
            }
      
            textarea {
              resize: vertical;
              min-height: 100px;
            }
      
            .grupo-checkboxes {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
            }
      
            .checkbox-item {
              display: flex;
              align-items: center;
              gap: 0.4rem;
            }
      
            .campo-check {
              display: flex;
              align-items: center;
              gap: 0.6rem;
            }
      
            .botao {
              background-color: var(--primary-color);
              color: white;
              font-weight: bold;
              padding: 0.8rem 1.6rem;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.3s ease;
              align-self: flex-start;
            }
      
            .botao:hover {
              background-color: var(--hover-color);
            }
      
            @media (max-width: 600px) {
              .cabecalho {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
              }
      
              .grupo-checkboxes {
                flex-direction: column;
              }
            }
          </style>
        </head>
        <body>
          <div className="tela-nomavene">
            <header className="cabecalho">
              <h1 className="titulo">Novo Comunicado</h1>
              <p className="usuario-logado">Logado como: Administrador</p>
            </header>
      
            <form id="novoComunicado" className="formulario padrao platinum">
              <div className="campo">
                <label for="titulo">Título *</label>
                <input type="text" id="titulo" name="titulo" required="">
              </div>
      
              <div className="campo">
                <label for="descricao">Descrição *</label>
                <textarea id="descricao" name="descricao" required=""></textarea>
              </div>
      
              <div className="campo">
                <label for="tipo">Tipo *</label>
                <select id="tipo" name="tipo" required="">
                  <option value="">Escolha</option>
                  <option value="urgente">Urgente</option>
                  <option value="informativo">Informativo</option>
                  <option value="evento">Evento</option>
                </select>
              </div>
      
              <div className="campo">
                <label for="agendamento">Agendamento *</label>
                <input type="datetime-local" id="agendamento" name="agendamento" required="">
              </div>
      
              <div className="campo">
                <label for="cpf">Filtro por CPF</label>
                <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00">
              </div>
      
              <div className="campo">
                <label for="bloco">Filtro por Bloco</label>
                <input type="text" id="bloco" name="bloco" placeholder="Ex: A, B, C...">
              </div>
      
              <div className="campo">
                <label for="apartamento">Filtro por Apartamento</label>
                <input type="text" id="apartamento" name="apartamento" placeholder="Ex: 101, 202...">
              </div>
      
              <div className="campo">
                <label>Público alvo *</label>
                <div className="grupo-checkboxes">
                  <div className="checkbox-item">
                    <input type="checkbox" id="todos" name="publico[]" value="todos">
                    <label for="todos">Todos</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="bloco-a" name="publico[]" value="bloco-a">
                    <label for="bloco-a">Bloco A</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="bloco-b" name="publico[]" value="bloco-b">
                    <label for="bloco-b">Bloco B</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="bloco-c" name="publico[]" value="bloco-c">
                    <label for="bloco-c">Bloco C</label>
                  </div>
                </div>
              </div>
      
              <div className="campo">
                <label for="anexo">Anexo (opcional)</label>
                <input type="file" id="anexo" name="anexo" accept=".pdf,.jpg,.png">
              </div>
      
              <div className="campo-check">
                <input type="checkbox" id="urgente" name="urgente">
                <label for="urgente">Marcar como urgente</label>
              </div>
      
              <button type="submit" className="botao">Salvar Comunicado</button>
            </form>
          </div>
        
      
      </body></html>

    </div>
  );
}
