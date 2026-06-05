'use client';
import { useState } from 'react';
import Link from 'next/link';

// Accettiamo i links come 'prop' (proprietà)
export default function MobileMenu({ links }: { links: { name: string, href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 z-[60] relative">
        <div className="space-y-1.5">
           <div className="w-6 h-0.5 bg-white" />
           <div className="w-6 h-0.5 bg-white" />
           <div className="w-6 h-0.5 bg-white" />
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-zinc-950 z-50 flex flex-col items-center justify-center gap-8 text-2xl font-mono">
          {/* Pulsante Chiudi */}
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-emerald-500">
             [CLOSE]
          </button>
          
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="hover:text-emerald-400 transition-colors"
            >
              [{link.name}]
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}