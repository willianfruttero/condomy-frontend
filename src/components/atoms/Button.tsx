/**
 * Button.tsx
 * Átomo: botão simples que muda de cor
 */

// Importa o React para poder criar componentes
import React from 'react'

// Define as propriedades que o botão pode receber
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // tipo de cor: 'primary' = azul, 'secondary' = cinza
  variant?: 'primary' | 'secondary'
}

// Função que cria o botão
export function Button({ variant = 'primary', children, ...rest }: ButtonProps) {
  // base = tamanho e borda do botão
  const base = 'px-4 py-2 font-semibold rounded'
  // estilos extras de cor
  const styles = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  // retorna o JSX do botão
  return (
    <button className={\`\${base} \${styles}\`} {...rest}>
      {children}
    </button>
  )
}
