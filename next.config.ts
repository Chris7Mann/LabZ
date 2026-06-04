/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabilita la cache aggressiva in dev per vedere i cambiamenti CSS
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;