import React from 'react';

export default function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 p-4 border-l-4 border-amber-500 bg-amber-500/10 text-amber-500 font-mono text-sm rounded-r-lg flex items-start gap-4">
      <span className="text-xl">⚠️</span>
      <div>
        <strong className="block uppercase tracking-widest text-xs mb-1">Warning</strong>
        {children}
      </div>
    </div>
  );
}