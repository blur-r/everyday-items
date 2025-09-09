import { Link } from "react-router-dom"
import { useAppContext } from "../context/AppContext";

const Footer: React.FC = () => {
    const { darkMode } = useAppContext();
    return (
        <div className={`${darkMode ? "bg-[#1F2937] text-white" : "bg-[#2563EB]"} flex flex-col justify-center items-center gap-5 px-10 py-5 mt-3 sm:flex-row sm:gap-7 relative bottom-0`}>
            <div className="flex gap-5 items-center justify-center sm:gap-7">
                <Link to="/">
                    <p className="text-white text-2xl font-bold">Everyday Items</p>
                </Link>
                <Link to="/cart">
                    <p className="text-white underline text-lg">Cart</p>
                </Link>
                <Link to="/wishlist">
                    <p className="text-white underline text-lg">Wishlist</p>
                </Link>
            </div>
            <div>
                <p className="text-white">@ [2025]. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer