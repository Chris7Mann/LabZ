import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getSortedLabsData } from '@/lib/labs'; // Assicurati che questo esista
import { StepCard } from '@/components/mdx/StepCard';
import { Note } from '@/components/mdx/Note';
import { Terminal } from '@/components/mdx/Terminal';
import { Text } from "@/components/mdx/Text";
import { SectionTitle } from "@/components/mdx/SectionTitle";
import { LabNavigation } from '@/components/mdx/LabNavigation';
import { SimilarPosts } from '@/components/mdx/SimilarPosts';
import Comments from "@/components/Comments";

const components = {
  StepCard,
  Note,
  Terminal,
  Text,
  SectionTitle,
};

export default async function LabPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/labs', `${slug}.mdx`);

  // 1. Caricamento dati lab corrente
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // 2. Logica per Navigazione e Post Simili
  const allLabs = getSortedLabsData();
  const currentIndex = allLabs.findIndex(l => l.slug === slug);
  const prev = allLabs[currentIndex - 1] || null;
  const next = allLabs[currentIndex + 1] || null;

  // Filtra lab simili (stessi tag, escluso quello attuale)
  const similar = allLabs
    .filter(l => l.tags?.some((t: string) => data.tags?.includes(t)) && l.slug !== slug)
    .slice(0, 3);

  return (
    <article className="max-w-3xl mx-auto px-8 py-20 text-zinc-300">
      {data.coverImage && (
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-64 object-cover rounded-xl mb-10 border border-zinc-800" />
      )}

      {/* Titolo e Data */}
      <h1 className="text-4xl font-bold text-white mb-2">{data.title}</h1>
      <p className="text-zinc-500 font-mono mb-8">{data.date} • {data.author} • {data.tech} • {data.difficulty}</p>

      <div className="prose prose-invert prose-emerald max-w-none">
        <MDXRemote
          source={content}
          components={components} />
      </div>

      {/* Sezioni aggiuntive */}
      <LabNavigation prev={prev} next={next} />
      <SimilarPosts posts={similar} />
      <Comments />
    </article>
  );
}