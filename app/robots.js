import { TEMPLATE_SLUGS } from "@/libs/templateDocuments.mjs";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          ...TEMPLATE_SLUGS.map((slug) => `/${slug}`),
          "/visa/",
        ],
      },
    ],
    sitemap: "https://www.uniskai.id/sitemap.xml",
    host: "https://www.uniskai.id",
  };
}
