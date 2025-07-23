import React from 'react';

interface StatsCardProps {
  title: string;
  value: number | string;
}

/**
 * StatsCard: mostra um título pequeno e um valor grande.
 */
export function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
