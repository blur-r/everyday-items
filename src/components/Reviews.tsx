import type { Review } from "../types/types"

type ReviewsProp = {
    review: Review
}
const Reviews: React.FC<ReviewsProp> = ({ review }) => {

    const { rating, comment, reviewerName, reviewerEmail } = review
    const firstLetter = reviewerName.charAt(0);

    return (
        <div className="bg-white shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-2xl p-5 w-[400px] flex flex-col gap-1.5">
            <div className="flex gap-2.5 items-center">
                <div className="rounded-full w-[50px] h-[50px] bg-[#10B981] font-bold text-white text-3xl flex justify-center items-center">
                    <p>{firstLetter}</p>
                </div>
                <div>
                    <p className="font-semibold text-2xl">{reviewerName}</p>
                    <p className="italic">{reviewerEmail}</p>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-gray-300"></i>
                <i className="fas fa-star text-gray-300"></i>
                <span className="text-xl ml-2 font-semibold">({rating}/5)</span>
            </div>
            <p className="text-lg">{comment}</p>
        </div>
    )
}

export default Reviews