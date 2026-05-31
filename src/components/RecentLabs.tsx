import Link from 'next/link';
import { getSortedLabsData } from '@/lib/labs';

export default function RecentLabs() {
  // Recuperiamo i lab dai file MDX
  const labs = getSortedLabsData();

  return (
    <section className="max-w-5xl mx-auto px-8 py-16 border-t border-zinc-800">
      <h2 className="text-3xl font-bold text-white font-mono mb-10">
        &gt; RECENT_LABS
      </h2>

      {labs.length === 0 ? (
        <p className="text-zinc-500 font-mono italic">Nessun lab trovato in /content/labs...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab: any) => (
            <Link 
              href={`/labs/${lab.slug}`} 
              key={lab.slug}
              className="group border border-zinc-800 bg-zinc-900/30 p-6 rounded-xl hover:border-emerald-500/50 transition-all flex flex-col gap-4"
            >
              <div className="flex justify-between items-start">
                <span className="text-[12px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                  {lab.tech}
                </span>
                <span className="text-[12px] text-zinc-500 font-mono">{lab.date}</span>
              </div>
              
              <h3 className="text-white font-bold group-hover:text-emerald-400 transition-colors">
                {lab.title}
              </h3>
              
              <p className="text-sm text-zinc-400 leading-relaxed flex-grow">
                {lab.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {lab.tags.map((tag: string) => (
                  <span key={tag} className="text-[12px] text-emerald-400 font-mono border border-zinc-800 px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}