import Header from "../components/Header"
import Search from "../components/Search"

function Home() {
    return (
        <div>
            <Header />
            <div className="bg-[#2563EB] py-6">
                <h1 className="text-center text-white text-2xl font-bold pb-1 sm:text-4xl">
                    Discover Premium Products
                </h1>
                <p className="text-center text-sm text-white font-semibold sm:text-xl">
                    Curated collection of high-quality items for your lifestyle
                </p>
            </div>
            <Search />
        </div>
    )
}

export default Home 