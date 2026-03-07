const baseUrl = "https://www.uniskai.id";

const publicRoutes = [
  "/",
  "/blog/",
  "/contact/",
  "/terms/termsofservice/",
  "/terms/returnandrefundpolicy/",
];

export default function sitemap() {
  const now = new Date();

  return publicRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
