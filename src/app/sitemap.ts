import { siteConfig } from "@/data/site-config";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/services",
    "/skills",
    "/experience",
    "/projects",
    "/certifications",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
