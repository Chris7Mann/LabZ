import Link from 'next/link';
import MobileMenu from "@/components/MobileMenu"; // Assicurati che il percorso sia corretto

export default function Navbar() {
  // Aggiunti i link per le categorie dinamiche
  const links = [
    { name: "DASHBOARD", href: "/" },
    { name: "NETWORKING", href: "/tags/networking" },
    { name: "LINUX", href: "/tags/linux" },
    { name: "WORKSHOPS", href: "/workshops" },
    { name: "SYSTEM", href: "/system" },
  ];

  return (
    <header className="border-b border-zinc-800 pb-6 mb-8 flex justify-between items-end">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tighter">LabZ</h1>
        <p className="text-emerald-500 font-mono text-xs">READY_FOR_INPUT</p>
      </div>

      {/* Menu Desktop: visibile solo da lg in su */}
      <nav className="hidden lg:flex gap-6 font-mono text-xs">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-emerald-400 transition-colors opacity-50">
            [{link.name}]
          </Link>
        ))}
      </nav>

      {/* Menu Mobile: visibile solo sotto lg */}
      <div className="lg:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}