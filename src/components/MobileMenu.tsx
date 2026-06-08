'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu({ links }: { links: { name: string, href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  // Blocca lo scroll quando il menu è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup in caso il componente venga smontato
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Bottone Hamburger - Z-index alto per essere sempre cliccabile */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="text-white p-2 z-[60] relative"
        aria-label="Apri menu"
      >
        <div className="space-y-1.5">
           <div className="w-6 h-0.5 bg-white" />
           <div className="w-6 h-0.5 bg-white" />
           <div className="w-6 h-0.5 bg-white" />
        </div>
      </button>

      {/* Overlay Menu - Z-index estremo per sovrapporsi a tutto */}
      {isOpen && (
        <div className="fixed inset-0 z-[999999] bg-zinc-950 flex flex-col items-center justify-center gap-8 text-2xl font-mono">
          {/* Pulsante Chiudi - Posizionato correttamente */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-8 right-8 text-emerald-500 hover:text-white transition-colors"
            aria-label="Chiudi menu"
          >
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