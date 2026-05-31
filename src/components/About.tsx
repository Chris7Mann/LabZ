export default function About() {
  const skills = [
    { 
      name: "Networking", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
      ), 
      details: "Cisco OSPF, VLANs, BGP, STP" 
    },
    { 
      name: "Containerization", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
      ), 
      details: "Docker, Compose, Microservices" 
    },
    { 
      name: "Cybersecurity", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      ), 
      details: "SSH Tunneling, Hardening, Nmap" 
    },
    { 
      name: "Automation", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      ), 
      details: "Bash Scripting, Linux Admin" 
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-8 py-20 border-t border-zinc-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight font-mono mb-4">
              {"> WHO_AM_I"}
            </h2>
            <div className="prose prose-invert text-zinc-400 space-y-4">
              <p>
                Sono un appassionato di networking e sistemi Linux, con un focus particolare sulla 
                documentazione di laboratori complessi. LabZ nasce dall'esigenza di creare un 
                archivio tecnico dove ogni configurazione non è solo codice, ma un'esperienza replicabile.
              </p>
              <p>
                Il mio approccio è "root-level": non mi accontento che una cosa funzioni, voglio 
                capire perché funziona e come ottimizzarla a livello di pacchetto.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight font-mono mb-4">
              {"> THE_MISSION"}
            </h2>
            <p className="text-zinc-400">
              Democratizzare l'accesso alla cultura tech attraverso laboratori pratici, 
              testati e pronti per essere implementati in ambienti di produzione reali.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 space-y-8 shadow-2xl">
          <h3 className="text-xl font-bold text-emerald-500 font-mono italic decoration-emerald-500/30">
            SYSTEM_CAPABILITIES
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="group p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-emerald-500/50 transition-all">
                <div className="flex items-center gap-3 text-emerald-400 mb-2">
                  {skill.icon}
                  <span className="font-bold text-xs uppercase tracking-widest">{skill.name}</span>
                </div>
                <p className="text-[11px] text-zinc-500 font-mono leading-relaxed">
                  {skill.details}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-800">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-zinc-500">COMMUNITY_REACH</span>
              <span className="text-emerald-500 font-bold">4,800,000+ MEMBERS</span>
            </div>
            <div className="w-full bg-zinc-800 h-1.5 mt-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[95%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}