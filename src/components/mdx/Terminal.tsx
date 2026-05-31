export function Terminal({ code }: { code?: string }) {
  // Se code è undefined, usiamo una stringa di fallback per vedere se funziona
  const displayCode = code || "# Codice mancante o errore di caricamento";

  return (
    <div className="terminal-block font-mono text-sm my-4">
      {displayCode.split('\n').map((line, index) => (
        <div key={index} className={line.trim().startsWith('#') ? 'text-slate-500 italic' : 'text-slate-100'}>
          {line}
        </div>
      ))}
    </div>
  );
}