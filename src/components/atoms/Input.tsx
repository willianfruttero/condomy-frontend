/**
 * Input.tsx
 * Átomo: campo de texto simples
 */

// Importa React
import React from 'react'

// Define propriedades do input (como placeholder, type, onChange...)
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// Função que retorna o campo de texto
export function Input(props: InputProps) {
  return (
    // className define o visual com Tailwind
    <input
      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...props}
    />
  )
}
