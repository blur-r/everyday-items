import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext";

const Header: React.FC = () => {
    const { darkMode, setDarkMode, cart, wishlist } = useAppContext();
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            className={`sticky top-0 z-50 flex justify-between px-4 py-7 items-center sm:px-8 lg:px-9 transition-colors duration-300
    ${darkMode
                    ? isScrolled
                        ? "bg-[#111C38] text-white shadow-md"
                        : "bg-[#111827] text-white"
                    : isScrolled
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-transparent text-black"
                }`}
        >
            <Link to="/">
                <p className="text-xl font-extrabold sm:text-2xl lg:text-4xl">
                    Everyday Items
                </p>
            </Link>
            <div className="flex gap-4 sm:gap-7 lg:gap-8">
                <Link to="/cart">
                    <div className="relative">
                        {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                            {cart.length}
                        </span>}
                        <i className={`fas fa-shopping-cart text-[20px] sm:text-[24px] lg:text-[30px]`} />
                    </div>

                </Link>
                <Link to="/wishlist">
                    <div className="relative">
                        {wishlist.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                            {wishlist.length}
                        </span>}
                        <i className={`fa-solid fa-heart text-[20px] sm:text-[24px] lg:text-[30px]`} />
                    </div>
                </Link>
                {
                    darkMode ? <button className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
                        <i className="fas fa-sun text-[20px] sm:text-[24px] lg:text-[30px]" />
                    </button> : <button className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
                        <i className="fas fa-moon text-[20px] sm:text-[24px] lg:text-[30px]" />
                    </button>
                }


            </div>
        </div>
    )
}

export default Header
