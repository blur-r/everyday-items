import Header from "../components/Header"
import Search from "../components/Search"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer";

const Home: React.FC = () => {
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
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] py-4 px-10 justify-center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <Footer />
        </div>
    )
}

export default Home 