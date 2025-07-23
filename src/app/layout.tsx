import './globals.css';
import React from 'react';
import { Sidebar } from '@/components/organisms/Sidebar';
import { Header } from '@/components/organisms/Header';

/**
 * RootLayout: aplica Sidebar e Header em todas as páginas.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 bg-gray-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
