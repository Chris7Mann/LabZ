const nextConfig = {
  // Disabilita la cache aggressiva in dev per vedere i cambiamenti CSS
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Ignora gli errori di linting e TypeScript durante la build su Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;