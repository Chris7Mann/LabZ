import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-zinc-950 text-zinc-300 min-h-screen font-mono p-8 overflow-x-hidden">
        <div className="max-w-5xl mx-auto flex flex-col min-h-[90vh]">
          <Navbar />
          <main className="flex-grow pb-16">{children}
            <BackToTop />
          </main>
          
        </div>
      </body>
    </html>
  );
}