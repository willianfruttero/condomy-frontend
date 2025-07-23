/**
 * page.tsx
 * Página de login: usa Input e Button
 */

import React from 'react'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'

export default function LoginPage() {
  return (
    // centraliza o formulário na tela
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-8 rounded shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Entrar</h1>
        <label className="block mb-4">
          <span>E-mail</span>
          <Input type="email" placeholder="seu@exemplo.com" />
        </label>
        <label className="block mb-6">
          <span>Senha</span>
          <Input type="password" placeholder="••••••••" />
        </label>
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}
