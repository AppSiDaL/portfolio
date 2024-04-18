import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  style,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        ...style,
      }}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}
