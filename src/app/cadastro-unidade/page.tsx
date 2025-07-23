// Página gerada: /cadastro-unidade
import React from 'react';

export default function CadastroUnidade() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>CadastroUnidade</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-BR"><head>
          <meta charset="UTF-8">
          <title>Cadastro de Unidade</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
          <div className="container my-5">
            <h1 className="mb-4 text-center">🏘️ Cadastro de Unidade</h1>
      
            <form id="formUnidade">
              <div className="mb-3">
                <label for="nome" className="form-label">Nome do Morador</label>
                <input type="text" id="nome" required="" className="form-control">
              </div>
      
              <div className="mb-3">
                <label for="apto" className="form-label">Apartamento</label>
                <input type="text" id="apto" required="" className="form-control">
              </div>
      
              <!-- GOLD: Bloco e contato -->
              <div id="campoBloco" className="mb-3 d-none">
                <label for="bloco" className="form-label">Bloco</label>
                <input type="text" id="bloco" className="form-control">
              </div>
      
              <div id="campoContato" className="mb-3 d-none">
                <label for="contato" className="form-label">Telefone/Celular</label>
                <input type="text" id="contato" className="form-control">
              </div>
      
              <!-- PLATINUM: Histórico e ERP -->
              <div id="campoHistorico" className="mb-3 d-none">
                <label for="historico" className="form-label">Histórico de Ocupação</label>
                <textarea id="historico" rows="2" className="form-control"></textarea>
              </div>
      
              <div id="campoERP" className="mb-3 d-none">
                <label for="erp" className="form-label">Código ERP</label>
                <input type="text" id="erp" className="form-control">
              </div>
      
              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-success">Salvar Unidade</button>
              </div>
            </form>
          </div>
      
          <script>
            // Simula versão ativa — substitua pelo config.ts real
            const VERSION = "platinum";
      
            // Exibe campos conforme versão
            if (VERSION === "gold" || VERSION === "platinum") {
              document.getElementById("campoBloco").classList.remove("d-none");
              document.getElementById("campoContato").classList.remove("d-none");
            }
            if (VERSION === "platinum") {
              document.getElementById("campoHistorico").classList.remove("d-none");
              document.getElementById("campoERP").classList.remove("d-none");
            }
          </script>
      
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        
      
      </body></html>

    </div>
  );
}
