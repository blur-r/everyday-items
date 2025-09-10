import Header from "../components/Header"
import Footer from "../components/Footer"
import CartCard from "../components/CartCard"
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
    const { cart, darkMode } = useAppContext();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const finalTotalPrice = totalPrice.toFixed(2);

    return (
        <div className={`flex flex-col min-h-screen ${darkMode ? "bg-[#111827] text-white" : "bg-white text-black"}`}>
            <Header />
            <h1 className="text-xl font-semibold sm:text-3xl text-center mt-7 border-b-2 pb-3">
                Your Cart
            </h1>
            <main className="flex-1">
                {cart.length > 0 ? (<div className={`px-5 pt-9 pb-4 flex flex-col gap-5 items-center justify-center sm:flex-row sm:items-start lg:w-[70%] lg:mx-auto ${darkMode ? "bg-[#111827]" : "bg-white"}`}>
                    <div className="sm:w-[70%] flex flex-col gap-2.5">
                        {cart.map((item) => {
                            return <CartCard key={item.id} cartItem={item} />
                        })}
                    </div>
                    <div className={`shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-md py-5 pb-7 w-full sm:w-[30%] ${darkMode ? "bg-[#1F2937]" : "bg-white"}`}>
                        <p className="text-center text-2xl font-bold">
                            Total
                        </p>
                        <div className="px-4 mt-2">
                            <div className="flex flex-col justify-between mb-2.5">
                                {cart.length > 0 && cart.map((item) => (
                                    <div key={item.id} className="flex gap-2 justify-between">
                                        <p className={`font-semibold  ${darkMode ? "text-[#b8b4b4]" : "text-[#7B7878]"}`}>{item.title}</p>
                                        <p className="font-semibold">-</p>
                                        <p className="font-semibold">₦{item.price}</p>
                                    </div>
                                ))}
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
                                ₦{finalTotalPrice}
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                                <button className={`flex items-center justify-center w-[80%] text-center gap-2  text-white text-sm px-3 py-2 shadow-md rounded-md sm:font-semibold sm:px-2 ${darkMode ? "bg-[#131922] hover:bg-[#273447]" : " bg-blue-600 hover:bg-blue-700"}`}>
                                    <i className="fas fa-arrow-right"></i>
                                    Proceed to Checkout
                                </button>
                                <Link to="/" className="w-[80%]">
                                    <button className={`flex items-center justify-center w-full  text-center gap-2  text-black text-sm px-7 py-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-md  sm:font-semibold sm:px-2 ${darkMode ? "bg-[#4B5563] text-white hover:bg-[#6a778a]" : " bg-white hover:bg-gray-300"}`}>
                                        <i className="fas fa-shopping-bag"></i>
                                        Continue Shopping
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>) : (<p className="text-center text-gray-500 text-2xl mt-7">
                    Your cart is empty.
                </p>)}
            </main>
            < Footer />
        </div>
    )
}

export default Cart