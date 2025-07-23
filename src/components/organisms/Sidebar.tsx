import React from 'react';
import Link from 'next/link';

/**
 * Sidebar: menu lateral com links para as páginas administrativas.
 */
export function Sidebar() {
  return (
    <nav className="w-60 bg-gray-800 text-white h-full p-4">
      <h2 className="mb-6 text-xl font-semibold">Admin Global</h2>
      <ul>
        <li className="mb-2"><Link href="/dashboard-admin-global">Dashboard</Link></li>
        <li className="mb-2"><Link href="/admin-global/status">Status</Link></li>
        <li><Link href="/admin-global/pagamentos">Pagamentos</Link></li>
      </ul>
    </nav>
  );
}
