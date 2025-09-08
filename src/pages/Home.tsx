import Header from "../components/Header"
import Search from "../components/Search"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer";
import { useProducts } from "../hooks/useProducts";

const Home: React.FC = () => {

    const { products, loading, error } = useProducts({})
    return (
        <div>
            <Header />

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="bg-[#2563EB] py-6">
                <h1 className="text-center text-white text-2xl font-bold pb-1 sm:text-4xl">
                    Discover Premium Products
                </h1>
                <p className="text-center text-sm text-white font-semibold sm:text-xl">
                    Curated collection of high-quality items for your lifestyle
                </p>
            </div>
            <Search />
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(300px,300px))] py-4 px-10 justify-center">
                {products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Home 