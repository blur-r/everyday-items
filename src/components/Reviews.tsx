const Reviews: React.FC = () => {
    return (
        <div className="bg-white shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-2xl p-5 w-[400px] flex flex-col gap-1.5">
            <div className="flex gap-2.5 items-center">
                <div className="rounded-full w-[50px] h-[50px] bg-[#10B981] font-bold text-white text-3xl flex justify-center items-center">
                    <p>E</p>
                </div>
                <div>
                    <p className="font-semibold text-2xl">Eleanor Collins</p>
                    <p className="italic">eleanor.collins@x.dummyjson.com</p>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-gray-300"></i>
                <i className="fas fa-star text-gray-300"></i>
                <span className="text-xl ml-2 font-semibold">(3/5)</span>
            </div>
            <p className="text-lg">Would not recommend!</p>
        </div>
    )
}

export default Reviews