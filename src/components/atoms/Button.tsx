import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

/**
 * Button: um botão simples com duas cores:
 * - primary: azul
 * - secondary: cinza
 */
export function Button({
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) {
  const base = 'px-4 py-2 font-semibold rounded';
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  return (
    <button className={`${base} ${styles}`} {...rest}>
      {children}
    </button>
  );
}
