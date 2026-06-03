import Link from 'next/link';
import { getSortedArticlesData } from '@/lib/articles';

export default function FeaturedArticles() {
    const articles = getSortedArticlesData();
    
    // Inserisci qui lo slug esatto dell'articolo che vuoi grande (senza .mdx)
    const HERO_SLUG = "cmd-linux"; 

    // 1. Estrai l'articolo grande
    const heroArticle = articles.find((article: any) => article.slug === HERO_SLUG);
    
    // 2. Estrai i 3 articoli piccoli in evidenza (escludendo quello grande)
    const featuredSmall = articles
        .filter((article: any) => article.featured && article.slug !== HERO_SLUG)
        .slice(0, 3);

    return (
        <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 border-t border-zinc-800">
            <h2 className="text-3xl font-bold text-white font-mono mb-10">
                &gt; IN_EVIDENZA
            </h2>
            
            {/* 1. ARTICOLO GRANDE (HERO) */}
            {heroArticle && (
                <div className="mb-12">
                    <Link
                        href={`/articles/${heroArticle.slug}`}
                        className="group relative block w-full h-[400px] rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-all"
                    >
                        {heroArticle.coverImage && (
                            <img
                                src={heroArticle.coverImage}
                                alt={heroArticle.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        )}
                        <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="text-3xl font-bold text-white mb-2">{heroArticle.title}</h3>
                            <span className="text-sm text-emerald-400 font-mono">LEGGI ARTICOLO &gt;</span>
                        </div>
                    </Link>
                </div>
            )}

            {/* 2. I 3 ARTICOLI PICCOLI IN EVIDENZA */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredSmall.map((article: any) => (
                    <Link
                        href={`/articles/${article.slug}`}
                        key={article.slug}
                        className="group border border-zinc-800 bg-zinc-900/30 rounded-xl hover:border-emerald-500/50 transition-all flex flex-col overflow-hidden"
                    >
                        {/* Immagine della card */}
                        {article.coverImage && (
                            <div className="w-full h-40 overflow-hidden">
                                <img
                                    src={article.coverImage}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        )}
                        
                        {/* Contenuto della card */}
                        <div className="p-6 flex flex-col flex-grow gap-4">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex gap-2">
                                    {article.tags && article.tags.map((tag: string) => (
                                        <span key={tag} className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded uppercase">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-[12px] text-zinc-500 font-mono">
                                    {article.date}
                                </span>
                            </div>
                            
                            <h3 className="text-white font-bold group-hover:text-emerald-400 transition-colors">
                                {article.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}