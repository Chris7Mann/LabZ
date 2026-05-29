import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-zinc-950 text-zinc-300 min-h-screen font-mono p-8">
        <div className="max-w-5xl mx-auto flex flex-col min-h-[90vh] overflow-x-hidden">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer className="mt-12 border-t border-zinc-800 pt-6 text-xs text-zinc-600 font-mono">
            SECURE_CONNECTION_ESTABLISHED // © 2026 LAB_CORE
          </footer>
        </div>
      </body>
    </html>
  );
}