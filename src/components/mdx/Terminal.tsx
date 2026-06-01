export function Terminal({ code }: { code?: string }) {
 
  const displayCode = code || "# Codice mancante o errore di caricamento";

  return (
    <div className="terminal-block font-mono text-base my-4">
      {displayCode.split('\n').map((line, index) => (
        <div key={index} className={line.trim().startsWith('#') ? 'text-slate-500 italic' : 'text-emerald-400' + ' text-base'}>
          {line}
        </div>
      ))}
    </div>
  );
}