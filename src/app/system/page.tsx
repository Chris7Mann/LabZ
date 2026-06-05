import {SectionTitle} from "../../components/mdx/SectionTitle";
import Breadcrumb from "@/components/Breadcrumb";
export default function SystemPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={[
            { label: "HOME", href: "/" },
            { label: "SYSTEM", href: "#" },
            { label: "WORKSHOPS", href: "/workshops" }
          ]} />
        <SectionTitle> System Identity </SectionTitle>

        {/* Sezione About Us con foto */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Dall'assistenza umana alla gestione dei sistemi.</h2>
            <p className="mb-4 text-zinc-400">
              Il mio percorso professionale inizia nel mondo sanitario come OSS. Questa esperienza mi ha insegnato la precisione, la responsabilità e l'importanza di gestire situazioni critiche con calma.
            </p>
            <p className="text-zinc-400">
              Oggi, quella stessa attitudine la applico all'architettura delle reti e all'infrastruttura IT. Gestire un server o configurare una VLAN richiede la stessa dedizione nel risolvere problemi che prima dedicavo alle persone.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img className="iubenda-no-cmp w-full h-auto object-cover"
              src="/images/my-img.jpg" 
              alt="About Christian Mannella" 
              
            />
          </div>
        </section>

        {/* Sezione Expertise */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-4">Core Expertise</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Networking", desc: "Routing, Switching, BGP, OSPF" },
              { title: "Linux Systems", desc: "Ubuntu, Debian, Server hardening" },
              { title: "Virtualization", desc: "Proxmox VE, VMware, Container" },
              { title: "Infrastructure", desc: "Docker, Automation, Scripting" },
              { title: "Security", desc: "Firewalling, ACL, VPN" },
              { title: "Hardware", desc: "Home Lab, Cisco, Dell PowerEdge" },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-emerald-500 transition-colors">
                <h4 className="text-emerald-400 font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Filosofia Home Lab */}
        <section className="p-8 bg-emerald-500/5 rounded-2xl border border-emerald-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Il mio Home Lab</h3>
          <p className="text-zinc-400 leading-relaxed">
            Il laboratorio non è solo un passatempo, è la mia palestra. Qui testo in ambienti isolati le configurazioni che poi porto nel mondo reale. 
            Dall'automazione dei servizi con Docker al monitoraggio costante della rete, ogni tecnologia che citi in questo sito è stata "spaccata" e ricostruita più volte nel mio ambiente virtualizzato.
          </p>
        </section>
      </div>
    </main>
  );
}