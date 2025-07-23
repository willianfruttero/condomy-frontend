/**
 * page.tsx
 * Dashboard Admin Global: usa Header, Sidebar e StatsCard
 */

import React from 'react'
import { StatsCard } from '@/components/molecules/StatsCard'

export default function DashboardAdminGlobal() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard Global</h2>
      {/* Grade de cartões */}
      <div className="grid grid-cols-4 gap-4">
        <StatsCard title="Condomínios" value={128} />
        <StatsCard title="Boletos Pendentes" value={24} />
        <StatsCard title="Moradores Ativos" value={2345} />
        <StatsCard title="Comunicações" value={58} />
      </div>
    </div>
  )
}
