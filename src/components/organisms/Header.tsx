/**
 * Header.tsx
 * Organismo: topo fixo com logo e usuário
 */

import React from 'react'

// Função do cabeçalho
export function Header() {
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between">
      <div className="font-bold text-lg">Condomy</div>
      <div className="text-gray-600">Usuário • Sair</div>
    </header>
  )
}
