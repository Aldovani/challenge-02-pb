import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to: string;
}

export function Button({ children, to }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <h1 className="text-white w-[190px] h-[60px] flex justify-center items-center bg-primary-lunar-green" onClick={handleClick}>
      {children}
    </h1>
  );
}
