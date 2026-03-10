import { TEMPLATE_SLUGS } from "./libs/templateDocuments.mjs";

const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
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

