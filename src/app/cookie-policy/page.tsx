export default function CookiePolicy() {
  return (
    <div className="max-w-3xl mx-auto p-8 font-mono">
      <h1 className="text-2xl text-emerald-500 mb-8">// COOKIE_POLICY_v0.1</h1>
      
      <section className="space-y-4 text-zinc-400">
        <h2 className="text-white">1. COSA SONO I COOKIE</h2>
        <p>Piccoli file di testo necessari per il corretto funzionamento dell'infrastruttura di rete di questo sito.</p>

        <h2 className="text-white mt-6">2. COOKIE UTILIZZATI</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Tecnici:</strong> Necessari per la navigazione.</li>
          <li><strong>Terze Parti:</strong> CookieScript (gestione consensi), Vercel (infrastruttura hosting).</li>
        </ul>

        <h2 className="text-white mt-6">3. GESTIONE</h2>
        <p>Puoi modificare le preferenze in ogni momento cliccando il tasto con l'icona dei cookie.</p>
      </section>
    </div>
  );
}