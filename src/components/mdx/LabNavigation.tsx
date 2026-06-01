import Link from 'next/link';

export function LabNavigation({ prev, next }: { prev?: any, next?: any }) {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-8 mt-12">
      {prev ? (
        <Link href={`/labs/${prev.slug}`} className="p-4 border border-zinc-800 rounded-lg hover:border-emerald-500">
          <span className="text-xs text-zinc-500">← PREVIOUS</span>
          <p className="text-sm font-bold text-white">{prev.title}</p>
        </Link>
      ) : <div />}
      
      {next ? (
        <Link href={`/labs/${next.slug}`} className="p-4 border border-zinc-800 rounded-lg hover:border-emerald-500 text-right">
          <span className="text-xs text-zinc-500">NEXT →</span>
          <p className="text-sm font-bold text-white">{next.title}</p>
        </Link>
      ) : <div />}
    </div>
  );
}