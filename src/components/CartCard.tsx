import { Link } from "react-router-dom"
import type { CartItem } from "../types/types";
import { useAppContext } from "../context/AppContext";

type CartCardProps = {
    cartItem: CartItem;
    onClick?: () => void;
};

const CartCard: React.FC<CartCardProps> = ({ cartItem }) => {

    const { removeFromCart } = useAppContext();

    const { id, thumbnail, title, price, tags, description } = cartItem;
    return (
        <div className="flex justify-between px-4 py-3 bg-white shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] items-center gap-2.5 rounded-md">
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
                    <button className="text-[red] underline" onClick={() => removeFromCart(id)}>remove</button>
                </div>
                <Link to={`/pdp/${id}`}>
                    <p className="text-[#7B7878] text-sm">
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
                                <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                                    {tags[0]}
                                </span>
                            )}
                            {tags[1] && (
                                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
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