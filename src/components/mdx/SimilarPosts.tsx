import Link from 'next/link';

export function SimilarPosts({ posts }: { posts: any[] }) {
  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold text-white mb-6 border-b border-zinc-800 pb-2">Similar Posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link href={`/labs/${post.slug}`} key={post.slug} className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
            <h4 className="font-bold text-white">{post.title}</h4>
            <span className="text-xs text-zinc-500">{post.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}