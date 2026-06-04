import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc'; 
import {Terminal} from "@/components/mdx/Terminal";
const matter = require('gray-matter');
import Comments from "@/components/Comments";


// Funzione per leggere il singolo file MDX
async function getArticle(slug: string) {
    const articlesDirectory = path.join(process.cwd(), 'content/articles');
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return { data, content };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    // 1. Risolviamo i parametri asincroni
    const resolvedParams = await params;

    // 2. Recuperiamo l'articolo
    const article = await getArticle(resolvedParams.slug);

    // 3. Se l'articolo non esiste, mostriamo la pagina 404
    if (!article) {
        notFound();
    }

    const { data, content } = article;

    return (
        <main className="min-h-screen bg-black py-20">
            <article className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-zinc-300">

                {/* Immagine di copertina (stile largo come nei lab) */}
                {data.coverImage && (
                    <div className="w-full mb-12">
                        <img
                            src={data.coverImage}
                            alt={data.title}
                            className="w-full h-auto max-h-[450px] object-cover rounded-xl border border-zinc-800"
                        />
                    </div>
                )}

                {/* Titolo e Metadati manuali */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {data.title}
                </h1>

                <div className="flex gap-4 text-zinc-500 font-mono mb-12 text-sm border-b border-zinc-800 pb-8">
                    {data.date && <span>{data.date}</span>}
                    {data.date && data.author && <span>•</span>}
                    {data.author && <span>By {data.author}</span>}
                </div>

                {/* Corpo dell'articolo MDX */}
                <div className="article-content">
                    <MDXRemote source={content} components={{ Terminal }}/>
                </div>
                <Comments />
            </article>
        </main>
    );
}