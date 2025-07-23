import React from 'react';
import { StatsCard } from '@/components/molecules/StatsCard';

/**
 * DashboardAdminGlobal: mostra vários StatsCards.
 */
export default function DashboardAdminGlobal() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Dashboard Global</h2>
      <div className="grid grid-cols-4 gap-4">
        <StatsCard title="Condomínios" value={128} />
        <StatsCard title="Boletos Pendentes" value={24} />
        <StatsCard title="Moradores Ativos" value={2345} />
        <StatsCard title="Comunicações" value={58} />
      </div>
    </>
  );
}
