import Hero from "@/components/Hero";
import RecentLabs from "@/components/RecentLabs";
import About from "@/components/About";
import FeaturedArticles from '@/components/FeaturedArticles';
import RecentArticles from '@/components/RecentArticles';
import MarqueeBar from '@/components/MarqueeBar';
import Footer from "@/components/Footer";
import HeroBackgroundWrapper from "@/components/HeroBackgroundWrapper";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ pointerEvents: 'auto' }}>
      <HeroBackgroundWrapper />
      <Hero />
      <RecentLabs />
      <About />
      <FeaturedArticles />
      <RecentArticles />
      
      <MarqueeBar />
      <Footer />
    </main>
  );
}