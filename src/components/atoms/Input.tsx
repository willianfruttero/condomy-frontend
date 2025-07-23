import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Input: campo de texto com borda e foco colorido.
 */
export function Input(props: InputProps) {
  return (
    <input
      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...props}
    />
  );
}
