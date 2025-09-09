import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/types";

// Context type
type AppContextType = {
    cart: Product[];
    wishlist: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    isInCart: (productId: number) => boolean;
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: number) => void;
    isInWishlist: (productId: number) => boolean;
    darkMode: boolean;
    setDarkMode: (val: boolean) => void;
};

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Props for provider
type AppProviderProps = {
    children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    // --- CART ---
    const [cart, setCart] = useState<Product[]>([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("cart");
        if (stored) setCart(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeFromCart = (productId: number) => {
        setCart((prev) => prev.filter((product) => product.id !== productId));
    };

    const isInCart = (productId: number) => {
        return cart.some((product) => product.id === productId);
    };

    // --- WISHLIST ---
    const [wishlist, setWishlist] = useState<Product[]>([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("wishlist");
        if (storedFavs) setWishlist(JSON.parse(storedFavs));
    }, []);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product: Product) => {
        setWishlist((prev) => [...prev, product]);
    };

    const removeFromWishlist = (productId: number) => {
        setWishlist((prev) => prev.filter((product) => product.id !== productId));
    };

    const isInWishlist = (productId: number) => {
        return wishlist.some((product) => product.id === productId);
    };

    return (
        <AppContext.Provider
            value={{
                cart,
                wishlist,
                addToCart,
                removeFromCart,
                isInCart,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                darkMode,
                setDarkMode
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);  // <-- useContext IS used here
    if (!context) {
        throw new Error("useAppContext must be used within AppProvider");
    }
    return context;
};

