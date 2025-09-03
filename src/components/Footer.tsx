const Footer: React.FC = () => {

    return (
        <div className="flex flex-col justify-center items-center bg-[#2563EB] gap-5 px-10 py-5 mt-3">
            <div className="flex gap-5 items-center justify-center">
                <p className="text-white text-2xl font-bold">Everyday Items</p>
                <p className="text-white underline text-lg">Cart</p>
                <p className="text-white underline text-lg">Wishlist</p>
            </div>
            <div>
                <p className="text-white">@ [2025]. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer