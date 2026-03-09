import { TEMPLATE_SLUGS } from "@/libs/templateDocuments.mjs";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/templates",
          "/templatesurat/",
          ...TEMPLATE_SLUGS.map((slug) => `/templatesurat/${slug}`),
          "/visa/",
        ],
      },
    ],
    sitemap: "https://www.uniskai.id/sitemap.xml",
    host: "https://www.uniskai.id",
  };
}
