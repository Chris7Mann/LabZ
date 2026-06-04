import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '' 
}: ButtonProps) {
  
  const baseStyle = "px-8 py-3 font-bold transition-all duration-300 font-mono";
  const variants = {
    primary: "bg-emerald-500 text-black hover:bg-emerald-400 hover:scale-105",
    secondary: "bg-transparent border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10"
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={combinedClasses}>{children}</a>;
  }

  return <button className={combinedClasses}>{children}</button>;
}