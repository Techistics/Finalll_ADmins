// Button.tsx
import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: "button" | "submit";
  className?: string;
};

const Button = ({ text, onClick, type = "button", className }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded transition duration-200 bg-primary text-white hover:bg-hover-active ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
