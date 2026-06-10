import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import "./globals.css";
import Script from "next/script";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head> 
          <script type="text/javascript" charSet="UTF-8" src="//cdn.cookie-script.com/s/a4d6726a3edf8c4804ae6fcda03756d4.js"></script>
      </head>
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