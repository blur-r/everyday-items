import { createContext, useContext, useState } from "react";

type ProductsContextType = {
    search: string;
    setSearch: (val: string) => void;
    category: string | null;
    setCategory: (val: string | null) => void;
};

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState<string | null>(null);

    return (
        <ProductsContext.Provider value={{ search, setSearch, category, setCategory }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => {
    const ctx = useContext(ProductsContext);
    if (!ctx) throw new Error("useProductsContext must be used within ProductsProvider");
    return ctx;
};

