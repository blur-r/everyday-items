import { Link } from "react-router-dom"

const ProductCard: React.FC = () => {
    return (
        <Link to="/pdp">
            <div className="bg-white rounded-xl shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] overflow-hidden p-3 min-w-[300px]">
                <div className="relative">
                    <img
                        src="/images/236.png"
                        alt="Luxury Sun Shades"
                        className="w-full h-55 object-cover rounded-lg"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full w-6 h-6  px-1">
                        <button className=" text-gray-600 hover:text-red-500">
                            <i className="fas fa-heart"></i>
                        </button>
                    </div>

                </div>

                <div className="py-3">
                    <h2 className="text-lg font-bold text-gray-800">Luxury Sun Shades</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                            Accessory
                        </span>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                            Beauty
                        </span>
                    </div>

                    <p className="text-sm text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                        ligula eget dolor. Aenean massa.
                    </p>

                    <div className="flex items-center justify-between mt-5">
                        <span className="text-lg font-bold text-black">₦5000</span>
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-7 py-2 rounded-full">
                            <i className="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard