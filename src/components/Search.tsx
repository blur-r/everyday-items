import { useState } from "react";

function Search() {

    const [open, setOpen] = useState(false);

    const options = Array.from({ length: 20 }, (_, i) => `Option ${i + 1}`);

    return (
        <div className="bg-white shadow-md px-4 py-5 w-11/12 mx-auto rounded-md">
            <div className="flex gap-3 bg-[#F2F2F2] px-3 py-2 rounded-md">
                <i className="fas fa-search text-[20px] text-black/40"></i>
                <input type="text" placeholder="Search Products" />
            </div>
            <div className="flex gap-1 mt-1.5">
                <div className="bg-[#F2F2F2] w-1/2 rounded-md px-3 py-1">
                    <select name="" id="">
                        <option value="">Categories</option>
                    </select>
                </div>
                <div className="bg-[#F2F2F2] w-1/2 rounded-md px-3 py-1">
                    <select name="" id="">
                        <option value="" className="text-[#f2f2f2]">Filters</option>
                    </select>
                </div>
            </div>

            {/* <div className="w-64">
                <select id="options"
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Option One</option>
                    <option>Option Two</option>
                    <option>Option Three</option>
                </select>
            </div> */}

            <div className="relative inline-block text-left">
                {/* Dropdown Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                >
                    Options
                </button>

                {/* Dropdown Menu */}
                {open && (
                    <div className="absolute mt-2 w-[500px] bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                        <div className="grid grid-cols-4 gap-2">
                            {options.map((option, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="block px-2 py-1 text-gray-700 rounded hover:bg-gray-100"
                                >
                                    {option}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search