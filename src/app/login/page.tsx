// Página gerada: /login
import React from 'react';

export default function Login() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>

      {/* mockscreen */}
      <!DOCTYPE html><html lang="pt-BR"><head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Login | Condominium</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Condominium</h1>
            <p className="text-gray-600 mt-2">Plataforma inteligente para gestão de condomínios</p>
            <p className="text-sm text-gray-500">Ideal para síndicos, moradores e administradoras</p>
            <p className="text-sm text-gray-500 mt-1">Gestão segura, moderna e conectada</p>
          </header>
      
          <main className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Acesso ao sistema</h2>
            <form className="space-y-4">
              <div>
                <label for="email" className="block text-sm font-medium text-gray-700">Seu email</label>
                <input type="email" id="email" name="email" placeholder="email@exemplo.com" required="" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              </div>
              <div>
                <label for="password" className="block text-sm font-medium text-gray-700">Sua senha</label>
                <input type="password" id="password" name="password" placeholder="••••••••" required="" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              </div>
              <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">
                Entrar
              </button>
            </form>
          </main>
      
          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>📱 WhatsApp: (11) 91234-5678</p>
            <p>✉️ Email: suporte@condominium.com.br</p>
            <a href="#" className="text-indigo-600 hover:underline">🔒 Política de Privacidade</a>
            <p className="mt-2">© 2025 Condominium. Todos os direitos reservados.</p>
          </footer>
        
      
      </body></html>

    </div>
  );
}
