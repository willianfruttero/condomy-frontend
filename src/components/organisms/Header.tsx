import React from 'react';

/**
 * Header: topo fixo com logo e informações do usuário.
 */
export function Header() {
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <div className="font-bold text-lg">Condomy</div>
      <div className="text-gray-600">Usuário • Sair</div>
    </header>
  );
}
