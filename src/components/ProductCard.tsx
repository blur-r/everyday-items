import { Link } from "react-router-dom";
import type { Product } from "../types/types";

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { id, images, title, description, tags, price } = product;

    return (
        <div className="bg-white rounded-xl shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] overflow-hidden p-3 max-w-[300px] min-w-[300px]">
            <div className="relative">
                <Link to={`/pdp/${id}`}>
                    <img
                        src={images[0]}
                        alt="Luxury Sun Shades"
                        className="w-full h-55 object-contain rounded-lg bg-[#F2F2F2] hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                <div className="absolute top-3 right-3 bg-white rounded-full w-6 h-6  px-1">
                    <button className=" text-gray-600 hover:text-red-500">
                        <i className="fas fa-heart"></i>
                    </button>
                </div>

            </div>

            <div className="py-3">
                <Link to={`/pdp/${id}`}>
                    <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                </Link>

                <div className="flex flex-wrap gap-2 mt-2">
                    {tags[0] && (
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                            {tags[0]}
                        </span>
                    )}
                    {tags[1] && (
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                            {tags[1]}
                        </span>
                    )}
                </div>
                <Link to={`/pdp/${id}`}>
                    <p className="text-sm text-gray-600 mt-2">
                        {description.length > 60 ? description.slice(0, 60) + "..." : description}
                    </p>
                </Link>
                <div className="flex items-center justify-between mt-5">
                    <span className="text-lg font-bold text-black">₦{price}</span>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-7 py-2 rounded-full">
                        <i className="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard