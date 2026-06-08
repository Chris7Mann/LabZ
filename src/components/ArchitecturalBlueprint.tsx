export default function ArchitecturalBlueprint() {
  return (
    <div className="fixed inset-0 -z-10 bg-zinc-950 overflow-hidden">
      {/* Linee guida asimmetriche */}
      <svg className="absolute w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Linee di costruzione (il tocco da architetto) */}
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <div className="absolute top-[20%] left-[-10%] w-[120%] h-[1px] bg-emerald-500/7 rotate-3"></div>
        <div className="absolute top-[60%] left-[-10%] w-[120%] h-[1px] bg-emerald-500/7 -rotate-2"></div>
        <div className="absolute left-[22%] top-0 w-[1px] h-full bg-emerald-500/7"></div>
        <div className="absolute right-[22%] top-0 w-[1px] h-full bg-emerald-500/7"></div>
      </div>
        <div className="fixed bottom-20 right-10 font-mono text-[10px] text-emerald-500/30 uppercase">
            Project: LabZ_Core_Architecture<br/>
            Status: Draft_v0.1
        </div>
      
      {/* Glow leggero per dare profondità */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px]"></div>
    </div>
  );
}