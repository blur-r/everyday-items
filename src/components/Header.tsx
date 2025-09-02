function Header() {
    return (
        <div className="flex justify-between px-9 py-7 items-center" >
            <p className="text-3xl font-extrabold">Everyday Items</p>
            <div className="flex gap-7">
                <i className="fas fa-shopping-cart text-[28px] text-black"></i>
                <i className="far fa-heart text-[28px] text-black"></i>
                <i className="fas fa-moon text-[28px] text-black"></i>
            </div>
        </div>
    )
}

export default Header