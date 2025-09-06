import Header from "../components/Header"
import Footer from "../components/Footer"
import CartCard from "../components/CartCard"
const Cart: React.FC = () => {
    return (
        <div>
            <Header />
            <h1 className="text-xl font-semibold sm:text-3xl text-center mt-7 border-b-2 pb-3">
                Your Cart
            </h1>

            <div className="px-5 pt-9 flex flex-col gap-5 items-center justify-center sm:flex-row sm:items-start lg:w-[70%] lg:mx-auto">
                <div className="sm:w-[70%] flex flex-col gap-2.5">
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>
                <div className="bg-white shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-md py-5 pb-7 w-[70%] sm:w-[30%]">
                    <p className="text-center text-2xl font-bold">
                        Total
                    </p>
                    <div className="px-4 mt-2">
                        <div className="flex justify-between mb-2.5">
                            <p className="font-semibold text-[#7B7878] ">
                                Gucci purse
                            </p>
                            <p className="font-semibold ">
                                -
                            </p>
                            <p className="font-semibold ">
                                #20,000
                            </p>
                        </div>
                        <div className="flex justify-between mb-2.5">
                            <p className="font-semibold text-[#7B7878]">
                                Gucci purse
                            </p>
                            <p className="font-semibold ">
                                -
                            </p>
                            <p className="font-semibold ">
                                #20,000
                            </p>
                        </div>
                        <div className="flex justify-between mb-2.5">
                            <p className="font-semibold text-[#7B7878] ">
                                Gucci purse
                            </p>
                            <p className="font-semibold ">
                                -
                            </p>
                            <p className="font-semibold ">
                                #20,000
                            </p>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-center mb-2.5 gap-6">
                        <p className="font-bold ">
                            Total
                        </p>
                        <p className="font-semibold ">
                            -
                        </p>
                        <p className="font-semibold ">
                            #20,000
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2.5 justify-center items-center">
                            <button className="flex items-center justify-center w-[80%] text-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 shadow-md rounded-md sm:font-semibold sm:px-2">
                                <i className="fas fa-arrow-right"></i>
                                Proceed to Checkout
                            </button>
                            <button className="flex items-center justify-center  w-[80%] text-center gap-2 bg-white hover:bg-gray-300 text-black text-sm px-7 py-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-md  sm:font-semibold sm:px-2">
                                <i className="fas fa-shopping-bag"></i>
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart