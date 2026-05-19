import { TEMPLATE_SLUGS } from "./libs/templateDocuments.mjs";

const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/docs-upload-form",
        destination: "https://script.google.com/macros/s/AKfycbySqIeM4yU09BcMNRHBdQHNugCvWqcerBq2oMrTannVv7GJySkS0dTqCB1PAXTW1sC0tg/exec",
        permanent: true
      }
    ];
  },

  async rewrites() {
    return TEMPLATE_SLUGS.flatMap((slug) => ([
      {
        source: `/${slug}`,
        destination: `/templatesurat/${slug}`,
      },
      {
        source: `/templates/${slug}`,
        destination: `/templatesurat/${slug}`,
      },
      {
        source: `/templates/${slug}/`,
        destination: `/templatesurat/${slug}`,
      },
      {
        source: `/${slug}/`,
        destination: `/templatesurat/${slug}`,
      },
    ]));
  },
  // output: 'export',

};

export default nextConfig;

