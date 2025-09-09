import { Link } from "react-router-dom";
import type { Product } from "../types/types";
import { useAppContext } from "../context/AppContext";

type ProductCardProps = {
    product: Product;
    onRemove?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { id, images, title, description, tags, price } = product;

    const { removeFromWishlist, addToWishlist, addToCart, removeFromCart, isInCart, isInWishlist, darkMode } = useAppContext();
    const isLoved = isInWishlist(id);
    const handleWishlist = () => {
        if (isLoved) {
            removeFromWishlist(id);
        } else {
            addToWishlist(product);
        }
    };

    const isCart = isInCart(id);
    const handleCart = () => {
        if (isCart) {
            removeFromCart(id);
        } else {
            addToCart(product);
        }
    };

    return (
        <div className={`${darkMode ? "bg-[#1F2937]" : "bg-white"} rounded-xl shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] overflow-hidden p-3 max-w-[300px] min-w-[300px]`}>
            <div className="relative">
                <Link to={`/pdp/${id}`}>
                    <img
                        src={images[0]}
                        alt="Luxury Sun Shades"
                        className="w-full h-55 object-contain rounded-lg bg-[#F2F2F2] hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                <div className="absolute top-3 right-3 bg-white rounded-full w-6 h-6 px-1">
                    <button
                        className={`hover:scale-110 transition-transform duration-200 ${isLoved ? "text-red-500" : "text-gray-600 hover:text-red-500"
                            }`}
                        onClick={handleWishlist}
                    >
                        <i className={`fas fa-heart ${isLoved ? "text-red-500" : "text-black"}`}></i>
                    </button>
                </div>

            </div>

            <div className="py-3">
                <Link to={`/pdp/${id}`}>
                    <h2 className={`${darkMode ? "text-white" : "text-gray-800"} text-lg font-bold `}>{title}</h2>
                </Link>

                <div className="flex flex-wrap gap-2 mt-2">
                    {tags[0] && (
                        <span className={`${darkMode ? "bg-[#10B981] text-white" : "bg-green-100 text-green-600"} text-xs px-3 py-1  rounded-full`}>
                            {tags[0]}
                        </span>
                    )}
                    {tags[1] && (
                        <span className={`${darkMode ? "text-white bg-[#4B5563]" : "bg-blue-100 text-blue-600"} text-xs px-3 py-1 rounded-full`}>
                            {tags[1]}
                        </span>
                    )}
                </div>
                <Link to={`/pdp/${id}`}>
                    <p className={`${darkMode ? "text-[#8A919E]" : "text-gray-600"} text-sm  mt-2`}>
                        {description.length > 60 ? description.slice(0, 60) + "..." : description}
                    </p>
                </Link>
                <div className="flex items-center justify-between mt-5">
                    <span className={`${darkMode ? "text-[#10B981]" : "text-black"} text-lg font-bold`}>₦{price}</span>
                    <button className={`${darkMode ? "bg-[#111C38]" : "bg-blue-600"} flex items-center gap-2 text-white text-sm px-7 py-2 rounded-full`} onClick={handleCart}>
                        <i className="fas fa-shopping-cart"></i>
                        {isCart ? "Remove From Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard