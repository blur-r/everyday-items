import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"

const Wishlist: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-between border-b-2 pb-3 px-5 mt-7">
                <h1 className="text-xl font-semibold sm:text-3xl">Your Wishlist</h1>
                <p className="text-xl font-semibold sm:text-3xl">5 Items</p>
            </div>
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] py-4 px-10 justify-center mt-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="flex flex-col justify-between px-5 sm:flex-row sm:items-center">
                <div className="flex justify-center mb-2.5 gap-6">
                    <p className="font-semibold sm:text-2xl">
                        Esitmated total
                    </p>
                    <p className="font-semibold sm:text-2xl">
                        -
                    </p>
                    <p className="font-semibold sm:text-2xl">
                        #20,000
                    </p>
                </div>
                <div>
                    <div className="flex gap-2 ">
                        <button className="flex items-center justify-center text-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 shadow-md rounded-md sm:text-xl sm:font-semibold sm:px-7">
                            <i className="fas fa-shopping-cart"></i>
                            Add all items to Cart
                        </button>
                        <button className="flex items-center justify-center text-center gap-2 bg-white hover:bg-gray-300 text-black text-sm px-7 py-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-md sm:text-xl sm:font-semibold">
                            <i className="fas fa-shopping-bag"></i>
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Wishlist