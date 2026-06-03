/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy slug — Casey reorganized services in 2026: injectables now live
      // under IV Therapy & Injectables; the standalone aesthetics page lives at
      // /services/aesthetics. Permanent 301 preserves any inbound SEO/links.
      {
        source: "/services/injectables-aesthetics",
        destination: "/services/aesthetics",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
