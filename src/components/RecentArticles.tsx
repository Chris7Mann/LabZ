import Link from 'next/link';
import { getSortedArticlesData } from '@/lib/articles';

export default function RecentArticles() {
    const articles = getSortedArticlesData();

    // Escludiamo quelli già in evidenza per non duplicarli
    const recentArticles = articles
        .filter((article: any) => !article.featured)
        .slice(0, 6);

    if (recentArticles.length === 0) return null;

    return (
        <section className="max-w-5xl mx-auto px-8 py-16 border-t border-zinc-800">
            <h2 className="text-3xl font-bold text-white font-mono mb-10">
                &gt; ULTIMI_ARTICOLI
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentArticles.map((article: any) => (
                    <Link
                        href={`/articles/${article.slug}`}
                        key={article.slug}
                        className="group border border-zinc-800 bg-zinc-900/30 p-6 rounded-xl hover:border-emerald-500/50 transition-all flex flex-col gap-4"
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
                        <div className="flex flex-col gap-1">
                            <h3 className="text-white font-bold group-hover:text-emerald-400 transition-colors">
                                {article.title}
                            </h3>
                            <span className="text-[12px] text-zinc-500 font-mono">
                                {article.date} {article.author && `• By ${article.author}`}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto pt-4">
                            {article.tags && article.tags.map((tag: string) => (
                                <span key={tag} className="text-[12px] text-emerald-400 font-mono border border-zinc-800 px-2 py-0.5 rounded">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}