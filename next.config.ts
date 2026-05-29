import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Rimuovi il blocco 'experimental.turbo' se ti dà errore, 
  // o correggilo seguendo la sintassi ufficiale di Next.js 16
  allowedDevOrigins: ['192.168.2.204'], 
};

export default nextConfig;