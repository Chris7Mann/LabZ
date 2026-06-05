import Link from 'next/link';
import { getSortedArticlesData } from '@/lib/articles';
import Breadcrumb from "@/components/Breadcrumb";

// Aggiunto "async" e aggiornato il tipo di params a Promise
export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
    // Attendiamo che i parametri siano disponibili
    const resolvedParams = await params;

    // Ora possiamo estrapolare il tag in sicurezza
    const tag = resolvedParams.tag.toLowerCase();

    // Recuperiamo tutti gli articoli
    const allArticles = getSortedArticlesData();

    // Filtriamo solo quelli che hanno questo tag nel loro frontmatter
    const filteredArticles = allArticles.filter((article: any) => {
        if (!article.tags) return false;
        const lowerCaseTags = article.tags.map((t: string) => t.toLowerCase());
        return lowerCaseTags.includes(tag);
    });

    return (
        <main className="min-h-screen bg-black py-24">
            <section className="max-w-5xl mx-auto px-8">
                <Breadcrumb items={[
                    { label: "HOME", href: "/" },
                    { label: "WORKSHOPS", href: "/workshops" }, // Oppure dove preferisci
                    { label: tag.toUpperCase(), href: "#" }
                ]} />

                {/* Intestazione della pagina */}
                <div className="mb-16 border-b border-zinc-800 pb-8">
                    <h1 className="text-4xl font-bold text-white font-mono uppercase mb-4">
                        &gt; CATEGORIA: {tag}
                    </h1>
                    <p className="text-zinc-400 font-mono text-sm">
                        Trovati {filteredArticles.length} articoli per la categoria <span className="text-emerald-500">#{tag}</span>
                    </p>
                </div>

                {/* Griglia degli articoli filtrati */}
                {filteredArticles.length === 0 ? (
                    <p className="text-zinc-500 font-mono italic">
                        Nessun articolo trovato per questa categoria al momento...
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredArticles.map((article: any) => (
                           <Link
                                href={`/articles/${article.slug}`}
                                key={article.slug}
                                className="group border border-zinc-800 bg-zinc-900/30 rounded-xl hover:border-emerald-500/50 transition-all flex flex-col overflow-hidden">
                                {/* Contenitore immagine con overflow-hidden per bloccare lo zoom */}
                                {article.coverImage && (
                                    <div className="w-full h-40 overflow-hidden">
                                        <img
                                            src={article.coverImage}
                                            alt={article.title}
                                            className="iubenda-no-cmpw-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}

                                {/* Padding spostato qui per gestire il contenuto sotto l'immagine */}
                                <div className="p-6 flex flex-col flex-grow gap-4">
                                    <h3 className="text-white font-bold group-hover:text-emerald-400 transition-colors">
                                        {article.title}
                                    </h3>

                                    <div className="flex justify-between items-center mt-auto pt-4">
                                        <span className="text-[12px] text-zinc-500 font-mono">
                                            {article.date}
                                        </span>
                                        <span className="text-[12px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded">
                                            LEGGI &gt;
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}