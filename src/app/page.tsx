import Hero from "@/components/Hero";
import RecentLabs from "@/components/RecentLabs";
import About from "@/components/About";
import FeaturedArticles from '@/components/FeaturedArticles';
import RecentArticles from '@/components/RecentArticles';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <RecentLabs />
      <About />
      <FeaturedArticles />
      <RecentArticles />
    </main>
  );
}