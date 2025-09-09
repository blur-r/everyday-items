import { useState } from "react";
import { useProductsContext } from "../context/ProductsContext";

const Search: React.FC = () => {
    const { setSearch, setCategory } = useProductsContext();
    const [query, setQuery] = useState("");
    const [filterDropdown, setFilterDropdown] = useState(false)
    const [categoriesDropdown, setCategoriesDropdown] = useState(false)
    const categories = [
        "beauty",
        "fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "mobile-accessories",
        "motorcycle",
        "skin-care",
        "smartphones",
        "sports-accessories",
        "sunglasses",
        "tablets",
        "tops",
        "vehicle",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches"
    ]

    return (
        <div className="bg-white shadow-md px-4 py-5 w-11/12 mx-auto rounded-md relative top-[-15px] items-center sm:flex gap-1.5 sm:h-20 ">
            <div className="flex items-center gap-3 bg-[#F2F2F2] pl-3 py-1 rounded-md h-10 sm:w-1/2">
                {query && (
                    <button
                        onClick={() => {
                            setQuery("");
                            setSearch("");
                        }}
                        className="text-gray-500 hover:text-gray-800 ml-2"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                )}
                <input type="text" className="p-1 outline-none" placeholder="Search Products" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-auto cursor-pointer" onClick={() => {
                    if (query.trim() === "") {
                        setSearch("");
                        setQuery("");
                    } else {
                        setSearch(query);
                    }
                }}>
                    <i className="fas fa-search text-[18px] text-white mr-2"></i>
                    Search
                </button>
            </div>
            <div className="flex gap-1 mt-1.5 sm:w-1/2 sm:mt-0">
                <div className="w-1/2 relative">
                    <button onClick={() => setCategoriesDropdown(!categoriesDropdown)} className="bg-[#F2F2F2] w-full rounded-md px-3 h-9 flex justify-between items-center cursor-pointer ">
                        <span className="text-black/40">Categories</span>
                        <i className="fas fa-angle-down text-black/40"></i>
                    </button>

                    {categoriesDropdown && (
                        <div className="w-77 z-20 flex flex-wrap absolute mt-2 bg-white rounded-md shadow-lg py-3 px-1.5 border border-gray-200 sm:w-170 sm:px-3">
                            {categories.map((category) => (
                                <label
                                    key={category}
                                    className="flex items-center gap-1 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                                >
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        onChange={() => {
                                            setCategory(category);
                                            setCategoriesDropdown(false);
                                            setQuery("");
                                        }}
                                    />
                                    <span className="text-gray-700 text-sm capitalize font-semibold">{category}</span>
                                </label>
                            ))}
                        </div>

                    )}
                </div>

                <div className="w-1/2 relative">
                    <button onClick={() => setFilterDropdown(!filterDropdown)} className="bg-[#F2F2F2] w-full rounded-md px-3 py-1.5 flex justify-between items-center cursor-pointer">
                        <span className="text-black/40">Filters</span>
                        <i className="fas fa-angle-down text-black/40"></i>
                    </button>

                    {filterDropdown && (
                        <div className="absolute z-20 mt-2 w-40 bg-white rounded-md shadow-lg py-3 px-1.5  border border-gray-200 sm:w-56 sm:px-3">
                            <p className="text-xs font-semibold text-gray-500 mb-2">Filter by</p>

                            <label className="flex items-center gap-1 p-2 rounded-md cursor-pointer hover:bg-gray-100 sm:gap-3">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-gray-700 text-[13px] sm:text-sm">Price (High → Low)</span>
                            </label>

                            <label className="flex items-center gap-1 p-2 rounded-md cursor-pointer hover:bg-gray-100 sm:gap-3">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-gray-700 text-[13px] sm:text-sm">Price (Low → High)</span>
                            </label>

                            <label className="flex items-center gap-1 p-2 rounded-md cursor-pointer hover:bg-gray-100 sm:gap-3">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-gray-700 text-[13px] sm:text-sm">Ratings</span>
                            </label>
                        </div>

                    )}
                </div>

            </div>
        </div>
    )
}

export default Search 