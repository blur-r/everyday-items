const CartCard: React.FC = () => {
    return (
        <div className="flex justify-between px-4 py-3 bg-white shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] items-center gap-2.5 rounded-md">
            <div className="w-[25%]">
                <img
                    src="/images/236.png"
                    alt="Luxury Sun Shades"
                    className="w-full h-20 object-cover rounded-md"
                />
            </div>
            <div className="flex flex-col gap-1 w-[75%]">
                <div className="flex justify-between">
                    <p className="font-bold">Gucci Bag</p>
                    <button className="text-[red] underline">remove</button>
                </div>
                <p className="text-[#7B7878] text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ....
                </p>
                <div className="flex justify-between items-center">
                    <p className="font-bold text-2xl">
                        #5000
                    </p>
                    <div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                                Accessory
                            </span>
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                                Beauty
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard