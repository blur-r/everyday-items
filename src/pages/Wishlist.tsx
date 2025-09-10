import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Wishlist: React.FC = () => {
    const { wishlist, removeFromWishlist, cart, addToCart, darkMode } = useAppContext();

    // function: move all wishlist items to cart
    const moveAllToCart = () => {
        wishlist.forEach((item) => {
            if (!cart.some((c) => c.id === item.id)) {
                addToCart(item);
            }
        });
    };

    // calculate total price of wishlist
    const totalPrice = wishlist.reduce((acc, item) => acc + item.price, 0);
    const finalTotalPrice = totalPrice.toFixed(2);

    return (
        <div className={`flex flex-col min-h-screen ${darkMode ? "bg-[#111827] text-white" : "bg-white text-black"}`}>
            <Header />

            <main className="flex-1">
                <div className="flex justify-between border-b-2 pb-3 px-5 mt-7">
                    <h1 className="text-xl font-semibold sm:text-3xl">Your Wishlist</h1>
                    <p className="text-xl font-semibold sm:text-3xl">
                        {wishlist.length} Items
                    </p>
                </div>

                <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(300px,300px))] py-4 px-10 justify-center mt-5">
                    {wishlist.length > 0 ? (
                        wishlist.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onRemove={() => removeFromWishlist(product.id)} // allow removing items
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">
                            Your wishlist is empty.
                        </p>
                    )}
                </div>

                {wishlist.length > 0 && <div className="flex flex-col justify-between px-5 mt-[60px] sm:flex-row sm:items-center">
                    <div className="flex justify-center mb-2.5 gap-6">
                        <p className="font-semibold sm:text-2xl">Estimated total</p>
                        <p className="font-semibold sm:text-2xl">-</p>
                        <p className="font-semibold sm:text-2xl">₦{finalTotalPrice}</p>
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <button
                                onClick={moveAllToCart}
                                disabled={wishlist.length === 0}
                                className={`flex items-center justify-center text-center gap-2 text-white text-sm px-3 py-2 shadow-md rounded-md sm:text-xl sm:font-semibold sm:px-7 disabled:opacity-50 disabled:cursor-not-allowed ${darkMode ? "bg-[#1F2937] hover:bg-[#273447]" : " bg-blue-600 hover:bg-blue-700"}`}
                            >
                                <i className="fas fa-shopping-cart"></i>
                                Add all items to Cart
                            </button>
                            <Link to="/">
                                <button className={`flex items-center justify-center text-center gap-2 text-black text-sm px-7 py-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-md sm:text-xl sm:font-semibold ${darkMode ? "bg-[#4B5563] text-white hover:bg-[#6a778a]" : " bg-white hover:bg-gray-300"}`}>
                                    <i className="fas fa-shopping-bag"></i>
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>}
            </main>


            <Footer />
        </div>
    );
};

export default Wishlist;
