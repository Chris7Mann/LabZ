import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head> 
        <Script 
          src="https://embeds.iubenda.com/widgets/b1bf577d-c360-4a68-91da-dc36fa9cfcd2.js" 
          strategy="afterInteractive" // Importante: non blocca l'idratazione
          async
        />
        <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" />
        <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" />
        
        <Script id="iubenda-config" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              const images = document.querySelectorAll('img');
              images.forEach(img => img.classList.add('iubenda-no-cmp'));
            });
          `}</Script>
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