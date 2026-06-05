import React from 'react';

export default function Info({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 p-4 border-l-4 border-emerald-500 bg-emerald-500/5 text-emerald-100 font-mono text-sm rounded-r-lg flex items-start gap-4">
      <span className="text-xl">ℹ️</span>
      <div>
        <strong className="block uppercase tracking-widest text-emerald-500 text-xs mb-1">Info</strong>
        {children}
      </div>
    </div>
  );
}