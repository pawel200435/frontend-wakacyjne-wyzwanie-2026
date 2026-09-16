import ProductsList from "./ProductList";
import type { ProductsResponse } from "@/types/product";

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products", {
    next: {
      revalidate: 60,
      tags: ["products"],
    },
  });

  if (!res.ok) {
    throw new Error("Nie udało się pobrać produktów z serwera");
  }

  const initialProducts: ProductsResponse = await res.json();

  return (
    <>
      <ProductsList initialData={initialProducts} />
      
    </>
  )
}