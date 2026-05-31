import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { StepCard } from '@/components/mdx/StepCard';
import { Note } from '@/components/mdx/Note';
import { Terminal } from '@/components/mdx/Terminal';

const components = {
  StepCard,
  Note,
  Terminal,
};


export default async function LabPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/labs', `${slug}.mdx`);
  
  // Legge il file
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <article className="max-w-3xl mx-auto px-8 py-20 text-zinc-300">
      <h1 className="text-4xl font-bold text-white mb-4">{data.title}</h1>
      <div className="prose prose-invert prose-emerald">
        {/* Passiamo i componenti qui */}
        <MDXRemote 
            source={content} 
            components={components} />
      </div>
    </article>
  );
}