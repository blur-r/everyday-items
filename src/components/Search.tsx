// import { useState } from "react";

function Search() {
    return (
        <div className="bg-white shadow-md px-4 py-5 w-11/12 mx-auto rounded-md relative top-[-15px] sm:flex gap-1.5 items-center">
            <div className="flex gap-3 bg-[#F2F2F2] px-3 py-2 rounded-md sm:w-1/2">
                <i className="fas fa-search text-[20px] text-black/40"></i>
                <input type="text" placeholder="Search Products" />
            </div>
            <div className="flex gap-1 mt-1.5 sm:w-1/2">
                <button className="bg-[#F2F2F2] w-1/2 rounded-md px-3 py-1 flex justify-between items-center cursor-pointer ">
                    <span className="text-black/40">Categories</span>
                    <i className="fas fa-angle-down text-black/40"></i>
                </button>
                <button className="bg-[#F2F2F2] w-1/2 rounded-md px-3 py-1 flex justify-between items-center cursor-pointer">
                    <span className="text-black/40">Filters</span>
                    <i className="fas fa-angle-down text-black/40"></i>
                </button>

            </div>


        </div>
    )
}

export default Search