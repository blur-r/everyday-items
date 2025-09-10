import { Link } from "react-router-dom"
import type { CartItem } from "../types/types";
import { useAppContext } from "../context/AppContext";

type CartCardProps = {
    cartItem: CartItem;
    onClick?: () => void;
};

const CartCard: React.FC<CartCardProps> = ({ cartItem }) => {

    const { removeFromCart, darkMode } = useAppContext();

    const { id, thumbnail, title, price, tags, description } = cartItem;
    return (
        <div className={`flex justify-between px-4 py-3 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] items-center gap-2.5 rounded-md ${darkMode ? "bg-[#1F2937]" : "bg-white"}`}>
            <div className="w-[25%]">
                <img
                    src={thumbnail}
                    alt="Luxury Sun Shades"
                    className="w-full h-20 object-contain rounded-md bg-[#f2f2f2]"
                />
            </div>
            <div className="flex flex-col gap-1 w-[75%]">
                <div className="flex justify-between">
                    <Link to={`/pdp/${id}`}>
                        <p className="font-bold">{title}</p>
                    </Link>
                    <button className={` underline ${darkMode ? "text-[#c74949]" : "text-[red]"}`} onClick={() => removeFromCart(id)}>remove</button>
                </div>
                <Link to={`/pdp/${id}`}>
                    <p className={`text-sm ${darkMode ? "text-[#8A919E]" : "text-[#7B7878]"}`}>
                        {description}
                    </p>
                </Link>
                <div className="flex justify-between items-center">
                    <p className="font-bold text-2xl">
                        ₦{price}
                    </p>
                    <div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tags[0] && (
                                <span className={`${darkMode ? "bg-[#10B981] text-white" : "bg-green-100 text-green-600"} text-xs px-3 py-1  rounded-full`}>
                                    {tags[0]}
                                </span>
                            )}
                            {tags[1] && (
                                <span className={`${darkMode ? "text-white bg-[#4B5563]" : "bg-blue-100 text-blue-600"} text-xs px-3 py-1 rounded-full`}>
                                    {tags[1]}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard