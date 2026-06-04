import { getSortedLabsData } from '@/lib/labs';
import Link from 'next/link';
import Breadcrumb from "@/components/Breadcrumb";

export default function WorkshopsPage() {
  const labs = getSortedLabsData();

  return (
    <main className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb items={[
          { label: "HOME", href: "/" },
          { label: "NETWORKING", href: "/tags/networking" },
          { label: "LINUX", href: "/tags/linux" },
        ]} />
        {/* Header di Sezione */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Laboratori di Networking</h1>
          <p className="text-zinc-500 font-mono">
            Archivio tecnico: configurazioni, infrastrutture e implementazioni reali.
          </p>
        </div>
        
        {/* Griglia Laboratori */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab: any) => (
            <Link 
              key={lab.slug} 
              href={`/labs/${lab.slug}`}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-500 transition-all hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] block"
            >
              {/* Area Immagine */}
              <div className="h-48 w-full overflow-hidden bg-zinc-950">
                <img 
                  src={lab.coverImage || "/images/default-lab.jpg"} 
                  alt={lab.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Area Contenuto */}
              <div className="p-6">
                <span className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase border border-emerald-500/20 px-2 py-1 rounded">
                  {lab.tech}
                </span>
                <h3 className="text-white font-bold text-lg mt-4 group-hover:text-emerald-400 transition-colors">
                  {lab.title}
                </h3>
                
                {/* Visualizzazione opzionale descrizione se presente nei tuoi dati */}
                {lab.description && (
                   <p className="text-zinc-500 text-sm mt-2 line-clamp-2">{lab.description}</p>
                )}

                <div className="mt-6 text-emerald-600 text-xs font-mono group-hover:translate-x-2 transition-transform">
                  VIEW DOCUMENTATION →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
