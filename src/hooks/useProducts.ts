import { useEffect, useState } from "react";
import type { Product, ProductsResponse, UseProductsOptions } from "../types/types";

export const useProducts = (options: UseProductsOptions = {}) => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = "https://dummyjson.com/products";

                if (options.category) {
                    url = `https://dummyjson.com/products/category/${options.category}`;
                }

                // If user passed in a search
                else if (options.search) {
                    url = `https://dummyjson.com/products/search?q=${options.search}`;
                }

                const res = await fetch(url);
                const data: ProductsResponse = await res.json();

                let fetchedProducts = data.products;

                if (options.sortBy) {
                    fetchedProducts = [...fetchedProducts].sort((a, b) => {
                        const field = options.sortBy as keyof Product;
                        if (options.order === "desc") {
                            return (b[field] as number) - (a[field] as number);
                        }
                        return (a[field] as number) - (b[field] as number);
                    });
                }

                setProducts(fetchedProducts);
                setLoading(false);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [options])

    return { products, loading, error }
}