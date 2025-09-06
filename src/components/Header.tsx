import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Header: React.FC = () => {
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
                ${isScrolled ? "bg-blue-600 text-white shadow-md" : "bg-transparent text-black"}`}
        >
            <Link to="/">
                <p className="text-xl font-extrabold sm:text-2xl lg:text-4xl">
                    Everyday Items
                </p>
            </Link>
            <div className="flex gap-4 sm:gap-7 lg:gap-8">
                <Link to="/cart">
                    <i className={`fas fa-shopping-cart text-[20px] sm:text-[24px] lg:text-[30px]`} />
                </Link>
                <Link to="/wishlist">
                    <i className={`far fa-heart text-[20px] sm:text-[24px] lg:text-[30px]`} />
                </Link>
                <i className={`fas fa-moon text-[20px] sm:text-[24px] lg:text-[30px]`} />
            </div>
        </div>
    )
}

export default Header
