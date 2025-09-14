import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      // Removed forced `w-full` so buttons size to their content by default.
      // Consumers can still pass `w-full` via `className` when a full-width
      // button is desired (e.g., in forms on narrow screens).
      className={`inline-flex items-center px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
