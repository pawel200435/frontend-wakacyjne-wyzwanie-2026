import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "http://localhost:3000";
  const products = await getProducts();

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
  }));

  return [
    {
      url: `${baseUrl}/`,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      priority: 0.5,
    },
    ...productEntries,
  ];
}