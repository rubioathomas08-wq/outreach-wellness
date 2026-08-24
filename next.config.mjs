/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Thorne dispensary shop removed 2026-07 at Casey's request — catch
      // any saved/shared /shop links. Temporary (307) in case it returns.
      {
        source: "/shop",
        destination: "/",
        permanent: false,
      },
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
