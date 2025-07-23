/**
 * StatsCard.tsx
 * Molécula: cartão que mostra um título e um valor
 */

import React from 'react'

// Propriedades: título e valor a exibir
interface StatsCardProps {
  title: string
  value: number | string
}

// Componente que mostra título e valor
export function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  )
}
