import Link from 'next/link';

export default function Breadcrumb({ items }: { items: { label: string, href: string }[] }) {
  return (
    <nav className="flex items-center text-xs font-mono text-zinc-500 mb-8" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          <Link href={item.href} className="hover:text-emerald-400 transition-colors">
            {item.label}
          </Link>
          {index < items.length - 1 && (
            <span className="mx-2 text-zinc-700">/</span>
          )}
        </div>
      ))}
    </nav>
  );
}