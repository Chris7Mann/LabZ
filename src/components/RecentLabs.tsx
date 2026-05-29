import Link from 'next/link';

export default function RecentLabs() {
  const labs = [
    {
      date: "2026-05-29",
      tech: "CISCO",
      title: "Router-on-a-Stick Lab",
      desc: "Implementazione inter-VLAN routing utilizzando un'unica interfaccia trunk.",
      tags: ["PACKET-TRACER"]
    },
    {
      date: "2026-05-27",
      tech: "DOCKER",
      title: "Docker Stack: Jellyfin",
      desc: "Media server in container con persistenza dati e gestione volumi.",
      tags: ["DOCKER", "LINUX"]
    },
    {
      date: "2026-05-25",
      tech: "SECURITY",
      title: "Secure SSH Tunneling",
      desc: "Tunnel crittografato tra endpoint remoti con Tailscale e SSH.",
      tags: ["LINUX"]
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <div className="flex items-baseline justify-between mb-10">
        <h2 className="text-2xl font-bold text-white tracking-tight font-mono">
          {"> RECENT_LAB_REPORTS"}
        </h2>
        <Link href="/labs" className="text-emerald-500 text-xs font-mono hover:text-emerald-400">
          SHOW_ALL_LABS →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labs.map((lab, index) => (
          <div key={index} className="group border border-zinc-800 bg-zinc-900/30 p-6 hover:border-emerald-500/50 transition-all duration-300">
            <div className="text-zinc-500 text-[10px] font-mono mb-3">{lab.date} | {lab.tech}</div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400">{lab.title}</h3>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{lab.desc}</p>
            <div className="flex gap-2">
              {lab.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}