const Header: React.FC = () => {
    return (
        <div className="flex justify-between px-4 py-7 items-center sm:px-8 lg:px-9" >
            <p className="text-xl font-extrabold sm:text-2xl lg:text-4xl">Everyday Items</p>
            <div className="flex gap-4  sm:gap-7 lg:gap-8">
                <i className="fas fa-shopping-cart text-[20px] text-black  sm:text-[24px] lg:text-[30px]"></i>
                <i className="far fa-heart text-[20px] text-black sm:text-[24px] lg:text-[30px]"></i>
                <i className="fas fa-moon text-[20px] text-black sm:text-[24px] lg:text-[30px]"></i>
            </div>
        </div>
    )
}

export default Header