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
    "/shop",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/shop" ? 0.9 : 0.8,
  }));
}
