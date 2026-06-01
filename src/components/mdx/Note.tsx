export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-6 bg-teal-900/10 border border-teal-500/20 rounded-lg text-gray-300 my-8 shadow-sm">
      <span className="flex-shrink-0 text-teal-400 font-bold text-lg select-none">{'>'}</span>
      
      {/* Rimuoviamo il CSS inline e usiamo una classe specifica per il tag strong */}
      <div className="prose prose-sm prose-invert max-w-none w-full 
                      prose-p:my-2 prose-li:my-0.5 
                      [&_strong]:!text-teal-400 
                      [&_strong]:font-bold">
        {children}
      </div>
    </div>
  );
}