"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { ProductsResponse } from "@/types/product";
import { ProductGrid } from "@/components/product-grid";
import { ProductCard } from "@/components/product-card";
import { ProductErrorState } from "@/components/product-error-state";
import { ProductEmptyState } from "@/components/product-empty-state";
import { ProductCardSkeleton, ProductListSkeleton } from "@/components/product-card-skeleton";

interface ProductsListProps {
  initialData: ProductsResponse;
}

export default function ProductsList({ initialData }: ProductsListProps) {
  // Opcjonalny stan ulubionych produktów dla interaktywności ProductCard
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const { data, isLoading, isError, error, refetch } = useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error("Wystąpił problem podczas pobierania listy produktów.");
      }
      return res.json();
    },
    initialData,
  });

  if (isError) {
    return (
      <ProductErrorState error={error} onRetry={() => refetch()}/>
    );
  }

  if (isLoading || !data) {
    return <ProductListSkeleton count={8} />;
  }

  if (data.products.length === 0) {
    return <ProductEmptyState />;
  }

  
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Produkty</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Przeglądaj dostępne produkty z katalogu
          </p>
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          Znaleziono: {data.products.length}
        </span>
      </div>

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
    </section>
  );
}