import Hero from "@/components/Hero";
import RecentLabs from "@/components/RecentLabs"; 
import About from "@/components/About";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <RecentLabs /> 
      <About />
    </main>
  );
}