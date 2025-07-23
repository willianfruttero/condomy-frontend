import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // 'primary' = azul, 'secondary' = cinza
  variant?: 'primary' | 'secondary';
}

export function Button({
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) {
  // tamanho e borda arredondada
  const base = 'px-4 py-2 font-semibold rounded';
  // cores de fundo e texto
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  // retorna o botão com as classes combinadas
  return (
    <button className={`${base} ${styles}`} {...rest}>
      {children}
    </button>
  );
}
