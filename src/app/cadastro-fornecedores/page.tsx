// Página gerada: /cadastro-fornecedores
import React from 'react';

export default function CadastroFornecedores() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>CadastroFornecedores</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-BR"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cadastro de Fornecedores</title>
        <style>
          body {
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f4f6;
          }
          header {
            background-color: #00bcd4;
            color: white;
            padding: 1rem;
            text-align: center;
          }
          main {
            padding: 1rem;
          }
          form {
            background-color: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          input, select, textarea {
            padding: 0.7rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1rem;
          }
          button {
            padding: 0.7rem 1rem;
            background-color: #00bcd4;
            border: none;
            color: white;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
          }
          .acoes {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          }
          .lista {
            margin-top: 2rem;
          }
          .card {
            background-color: white;
            padding: 1rem;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            margin-bottom: 1rem;
          }
          .card h3 {
            margin: 0 0 0.5rem;
            color: #00bcd4;
          }
          .card .info {
            font-size: 0.9rem;
            color: #555;
            margin-bottom: 0.5rem;
          }
          .card .status {
            font-weight: bold;
          }
          .card .acoes-card {
            margin-top: 0.5rem;
            display: flex;
            gap: 0.5rem;
          }
          .card .acoes-card button {
            background-color: #eee;
            color: #333;
            border: none;
            padding: 0.4rem 0.8rem;
            border-radius: 4px;
            cursor: pointer;
          }
      
          @media (max-width: 600px) {
            .acoes {
              flex-direction: column;
            }
          }
        </style>
      </head>
      <body>
      
        <header>
          <h1>Cadastro de Fornecedores</h1>
        </header>
      
        <main>
          <form>
            <input type="text" placeholder="Nome do fornecedor" required="">
            <select>
              <option>Tipo de serviço</option>
              <option>Limpeza</option>
              <option>Manutenção</option>
              <option>Segurança</option>
              <option>Outros</option>
            </select>
            <input type="tel" placeholder="Telefone">
            <input type="email" placeholder="Email">
            <input type="text" placeholder="CNPJ / CPF">
            <select>
              <option>Status</option>
              <option>Ativo</option>
              <option>Inativo</option>
              <option>Em avaliação</option>
            </select>
            <textarea rows="3" placeholder="Observações adicionais"></textarea>
            <div className="acoes">
              <button type="submit">💾 Salvar</button>
              <button type="reset">🧹 Limpar</button>
              <button type="button">📤 Exportar</button>
            </div>
          </form>
      
          <section className="lista">
            <div className="card">
              <h3>EcoLimpeza</h3>
              <div className="info">🧽 Serviço: Limpeza</div>
              <div className="info">📞 (11) 91234-5678 | ✉️ contato@ecolimpeza.com</div>
              <div className="info status">✅ Status: Ativo</div>
              <div className="acoes-card">
                <button>✏️ Editar</button>
                <button>🗑️ Excluir</button>
              </div>
            </div>
      
            <div className="card">
              <h3>GuardProtec</h3>
              <div className="info">🛡️ Serviço: Segurança</div>
              <div className="info">📞 (11) 99876-5432 | ✉️ adm@guardprotec.com</div>
              <div className="info status">🕒 Status: Em avaliação</div>
              <div className="acoes-card">
                <button>✏️ Editar</button>
                <button>🗑️ Excluir</button>
              </div>
            </div>
          </section>
        </main>
      
      
      
      </body></html>

    </div>
  );
}
