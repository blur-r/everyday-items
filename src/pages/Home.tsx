import Header from "../components/Header"
import Search from "../components/Search"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer";
import { useProducts } from "../hooks/useProducts";
import { useProductsContext } from "../context/ProductsContext";
import { useAppContext } from "../context/AppContext";

const Home: React.FC = () => {
    const { darkMode } = useAppContext();
    const { search, category } = useProductsContext();
    const { products, loading } = useProducts({ search, category: category || undefined });
    return (
        <div className={`min-h-screen ${darkMode ? "bg-[#111827] text-white" : "bg-white text-black"}`}>
            <Header />

            {loading && <p>Loading...</p>}

            <div className={` py-6 ${darkMode ? "bg-[#1F2937] text-white" : "bg-[#2563EB]"}`}>
                <h1 className="text-center text-white text-2xl font-bold pb-1 sm:text-4xl">
                    Discover Premium Products
                </h1>
                <p className="text-center text-sm text-white font-semibold sm:text-xl">
                    Curated collection of high-quality items for your lifestyle
                </p>
            </div>
            <Search />
            <div className="
                grid gap-6 py-4 px-4 justify-center
                [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]
                max-[500px]:[grid-template-columns:repeat(auto-fill,minmax(90%,1fr))]">

                {products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Home 