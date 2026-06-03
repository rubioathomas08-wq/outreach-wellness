"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-7 py-3 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-300";

  const variants = {
    primary:
      "bg-gold-metallic text-dark-bg shadow-[0_2px_12px_rgba(212,175,55,0.18)]",
    secondary:
      "border border-gold text-gold hover:bg-gold-metallic hover:text-dark-bg hover:border-transparent",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    const safeRel =
      target === "_blank" ? (rel ?? "noopener noreferrer") : rel;
    return (
      <a href={href} className={combinedStyles} target={target} rel={safeRel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
