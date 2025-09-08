import Header from "../components/Header"
import Reviews from "../components/Reviews"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"

const ProductDetailPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="px-5 py-0 h-full">
                <div className="flex flex-col gap-5 sm:flex-row sm:h-[65vh]">
                    <div className="flex flex-col gap-1.5 sm:w-1/2">
                        <img
                            src="/images/236.png"
                            alt="Luxury Sun Shades"
                            className="w-full object-cover rounded-lg sm:h-[85%] sm:rounded-3xl"
                        />
                        <div className="flex gap-1 mt-1.5 ml-1.5 sm:w-1/2">
                            <img
                                src="/images/236.png"
                                alt="Luxury Sun Shades"
                                className="flex-1 h-20 object-cover rounded-lg"
                            />
                            <img
                                src="/images/236.png"
                                alt="Luxury Sun Shades"
                                className="flex-1 h-20 object-cover rounded-lg"
                            />
                            <img
                                src="/images/236.png"
                                alt="Luxury Sun Shades"
                                className="flex-1 h-20 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col sm:w-1/2 sm:h-[60%]">
                        <div className="flex flex-col gap-2.5 sm:justify-center">
                            <h1 className="text-3xl font-bold">
                                Gucci Bag
                            </h1>
                            <p className="text-[#343333] sm:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            <div className="flex items-center gap-1">
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-yellow-400"></i>
                                <i className="fas fa-star text-gray-300"></i>
                                <i className="fas fa-star text-gray-300"></i>
                                <span className="text-2xl ml-2">(3/5)</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-truck text-blue-600"></i>
                                    <p>Shipping in one week</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-shield-alt text-blue-600"></i>
                                    <p>2 Year Warranty Included</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-times-circle text-red-600"></i>
                                    <p>No Return Policy</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <p className="text-4xl font-bold">₦5000</p>
                                <span className="text-xs px-4 py-2 bg-green-100 text-green-600 rounded-full">
                                    In Stock
                                </span>
                            </div>
                            <p className="font-semibold">
                                Minimum order quantity - 48 Pieces
                            </p>
                            <div className="flex gap-2 sm:flex-col">
                                <button className="flex items-center justify-center text-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm px-7 py-2 shadow-md rounded-md sm:text-xl sm:font-semibold">
                                    <i className="fas fa-shopping-cart"></i>
                                    Add to Cart
                                </button>
                                <button className="flex items-center justify-center text-center gap-2 w-full bg-white hover:bg-gray-300 text-black text-sm px-7 py-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-md sm:text-xl sm:font-semibold">
                                    <i className="far fa-heart"></i>
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="mt-10 pb-5 text-3xl font-bold sm:mt-15 sm:text-4xl">Reviews</h1>
                <div className="flex gap-2 overflow-auto scroll-auto py-2 px-1">
                    <Reviews />
                    <Reviews />
                    <Reviews />
                    <Reviews />
                </div>
                <h1 className="mt-10 pb-5 text-3xl font-bold sm:mt-10 sm:text-4xl">Simlar Products</h1>
                <div className="flex gap-4.5 overflow-auto scroll-auto py-2 px-1">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default ProductDetailPage