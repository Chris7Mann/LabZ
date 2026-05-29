'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "DASHBOARD", href: "/" },
    { name: "NETWORK", href: "/network" },
    { name: "SYSTEM", href: "/system" },
  ];

  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
        {/* Hamburger */}
        <div className="space-y-1.5">
           <div className="w-6 h-0.5 bg-white" />
           <div className="w-6 h-0.5 bg-white" />
           <div className="w-6 h-0.5 bg-white" />
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-zinc-950 z-50 flex flex-col items-center justify-center gap-8 text-2xl font-mono">
          {links.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
              [{link.name}]
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}