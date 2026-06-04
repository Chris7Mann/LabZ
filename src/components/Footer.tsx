export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-emerald-600 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Colonna 1: Logo/Brand */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-emerald-500 font-mono tracking-tighter">
            &gt; LABZ_TEST
          </h2>
          <p className="text-zinc-500 text-sm">
            Architetture di rete, sicurezza e infrastrutture IT. 
            Costruito per documentare, testare e condividere.
          </p>
        </div>

        {/* Colonna 2: Navigazione */}
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase text-sm tracking-widest">Navigation</h3>
          <ul className="space-y-2 text-zinc-500 text-sm">
            <li><a href="/" className="hover:text-emerald-400 transition-colors">Home</a></li>
            <li><a href="/system" className="hover:text-emerald-400 transition-colors">System (About)</a></li>
            <li><a href="/workshops" className="hover:text-emerald-400 transition-colors">Workshops</a></li>
          </ul>
        </div>

        {/* Colonna 3: Social/Contatti */}
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase text-sm tracking-widest">Connect</h3>
          <ul className="space-y-2 text-zinc-500 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a></li>
            <li><a href="mailto:tuo-email@example.com" className="hover:text-emerald-400 transition-colors">Email</a></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-emerald-600 text-zinc-600 text-xs font-mono">
        © SECURE_CONNECTION_ESTABLISHED // © 2026 LABZ_CORE
      </div>
    </footer>
  );
}