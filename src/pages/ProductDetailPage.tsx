import Header from "../components/Header"
const ProductDetailPage: React.FC = () => {
    return (
        <div >
            <Header />
            <div className="px-5 py-0">
                <div className="flex flex-col gap-5 sm:flex-row ">
                    <div className="flex flex-col gap-1.5 sm:w-1/2 
                    [@media(min-width:640px)_and_(max-width:800px)]:h-full
                    ">
                        <img
                            src="/images/236.png"
                            alt="Luxury Sun Shades"
                            className="w-full object-cover rounded-lg sm:h-3/5 sm:rounded-3xl"
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
                    <div className="flex flex-col sm:w-1/2">
                        <div className="flex flex-col gap-2.5">
                            <h1 className="text-3xl font-semibold">
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
                                    Accessory
                                </span>
                            </div>
                            <p className="font-semibold">
                                Minimum order quantity - 48 Pieces
                            </p>
                            <div className="flex gap-2">
                                <button className="flex items-center justify-center text-center gap-2 w-1/2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-7 py-2 shadow-md rounded-md">
                                    <i className="fas fa-shopping-cart"></i>
                                    Add to Cart
                                </button>

                                <button className="flex items-center justify-center text-center gap-2 w-1/2 bg-white hover:bg-gray-300 text-black text-sm px-7 py-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-md">
                                    <i className="far fa-heart"></i>
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetailPage