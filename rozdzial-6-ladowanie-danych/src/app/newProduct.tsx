"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "@base-ui/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PRODUCT_CATEGORIES, type NewProductInput } from "@/types/product";

export function NewProduct() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState<string>(PRODUCT_CATEGORIES[0]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async (newProduct: NewProductInput) => {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        throw new Error("Nie udało się dodać produktu.");
      }

      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      setTitle("");
      setPrice("");
      setCategory(PRODUCT_CATEGORIES[0]);
      setErrorMessage(null);
    },
    onError: (err: Error) => {
      setErrorMessage(err.message || "Wystąpił błąd podczas dodawania.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedPrice = parseFloat(price);
    if (!title.trim() || isNaN(parsedPrice) || parsedPrice <= 0) {
      setErrorMessage("Podaj prawidłowy tytuł oraz cenę wieksza od zera.");
      return;
    }

    mutate({
      title: title.trim(),
      price: parsedPrice,
      category,
    });
  };

  return (
    <Card className="max-w-lg mx-auto shadow-sm border">
      <form onSubmit={handleSubmit}>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-center">Dodaj nowy produkt</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          {errorMessage && (
            <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
              {errorMessage}
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Tytuł produktu
            </label>
            <Input
              type="text"
              placeholder="np. Iphone"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isPending}
              required
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Cena ($)
            </label>
            <Input
              type="number"
              step="0.01"
              min="0.01"
              placeholder="np. 10.99"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              disabled={isPending}
              required
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Kategoria
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={isPending}
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-ring capitalize"
            >
              {PRODUCT_CATEGORIES.map((cat) => (
                <option key={cat} value={cat} className="capitalize">
                  {cat.replace("-", " ")}
                </option>
              ))}
            </select>
          </div>
        </CardContent>

        <CardFooter className="mt-5 pt-2 flex justify-center">
            <button
                type="submit"
                className="inline-flex hover:bg-gray-100 border items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Dodaj produkt
            </button>
        </CardFooter>
      </form>
    </Card>
  );
}