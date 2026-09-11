"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { ProductsResponse } from "@/types/product";
import { ProductGrid } from "@/components/product-grid";
import { ProductCard } from "@/components/product-card";
import { ProductErrorState } from "@/components/product-error-state";
import { ProductEmptyState } from "@/components/product-empty-state";
import { ProductCardSkeleton, ProductListSkeleton } from "@/components/product-card-skeleton";
import { Search } from "lucide-react";
import { Input } from "@base-ui/react";
import { NewProduct } from "./newProduct";

interface ProductsListProps {
  initialData: ProductsResponse;
}

export default function ProductsList({ initialData }: ProductsListProps) {

  const [favorites, setFavorites] = useState<number[]>([]);
  const [search, setSearch] = useState("");

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const { data, isLoading, isError, error, refetch } = useQuery<ProductsResponse>({
    queryKey: ["products", search],
    queryFn: async () => {
        const url = search.trim()
            ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search.trim())}`
            : "https://dummyjson.com/products";
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Wystąpił problem podczas pobierania listy produktów.");
        }
        return res.json();
    },
    initialData: search.trim() === "" ? initialData : undefined,
    staleTime: 60_000,
  });

  if (isError) {
    return (
      <ProductErrorState error={error} onRetry={() => refetch()}/>
    );
  }


  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sklep</h1>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Szukaj produktów..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 border-b"
          />
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          Znaleziono: {data?.products.length ?? 0}
        </span>
      </div>

      <NewProduct />

        {(isLoading || !data) && (
            <ProductListSkeleton count={8} />
        )}

        {!isLoading && data?.products.length === 0 && (
        <ProductEmptyState />
      )}

      {!isLoading && data && data.products.length > 0 && (
        <ProductGrid>
          {data.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </ProductGrid>
      )}
    </section>
  );
}