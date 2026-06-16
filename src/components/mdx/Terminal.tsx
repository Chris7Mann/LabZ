export function Terminal({ code }: { code?: string }) {
  const displayCode = code || '# Codice mancante o errore di caricamento';

  return (
    <div className='terminal-block font-mono text-base my-4'>
      <div className='terminal-header flex items-center justify-end gap-2 px-4 py-3'>
        <span className='h-3 w-3 rounded-full bg-emerald-500' aria-hidden='true' />
        <span className='h-3 w-3 rounded-full bg-orange-400' aria-hidden='true' />
        <span className='h-3 w-3 rounded-full bg-red-500' aria-hidden='true' />
      </div>

      <div className='terminal-body px-6 pb-6 pt-2'>
        {displayCode.split(String.fromCharCode(10)).map((line, index) => (
          <div
            key={index}
            className={line.trim().startsWith('#') ? 'text-slate-500 italic' : 'text-emerald-400 text-base'}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
