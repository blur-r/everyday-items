import Header from "../components/Header"
import Reviews from "../components/Reviews"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import type { Product } from "../types/types"
import { useAppContext } from "../context/AppContext";

const ProductDetailPage: React.FC = () => {
    const { darkMode } = useAppContext();
    const { id } = useParams<{ id: string }>()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)
    const [similarProducts, setSimilarProducts] = useState<Product[]>([])
    const [selectedimage, setSelectedImage] = useState<string | null>(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data: Product = await res.json();
                setProduct(data);

                if (data.images && data.images.length > 0) {
                    setSelectedImage(data.images[0]);
                }

                const res2 = await fetch("https://dummyjson.com/products");
                const allProductsData = await res2.json();
                const allProducts: Product[] = allProductsData.products;
                const similar = allProducts.filter(
                    (p) => p.category === data.category && p.id !== data.id
                );
                setSimilarProducts(similar);
            } catch (err) {
                console.error("Error fetching product:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p className="p-5">Loading...</p>;
    if (!product) return <p className="p-5">Product not found</p>;

    return (
        <div className={`${darkMode ? "bg-[#111827]" : "bg-white"} min-h-screen flex flex-col `}>
            <Header />
            <div className="px-5 py-0 h-full">
                <div className="flex flex-col gap-5 sm:flex-row sm:h-[65vh]">
                    <div className="flex flex-col gap-1.5 sm:w-1/2">
                        <img
                            src={selectedimage ?? ""}
                            alt="Luxury Sun Shades"
                            className="w-full object-contain rounded-lg sm:h-[85%] sm:rounded-3xl bg-[#f2f2f2]"
                        />
                        <div className="flex gap-1 mt-1.5 ml-1.5 sm:w-1/2">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${product.title} ${index}`}
                                    className={`h-20 object-cover rounded-lg bg-[#f2f2f2] cursor-pointer 
                                    ${img === selectedimage ? "ring-2 ring-blue-500" : ""}`}
                                    onClick={() => setSelectedImage(img)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:w-1/2 sm:h-[60%]">
                        <div className="flex flex-col gap-2.5 sm:justify-center">
                            <h1 className={`${darkMode ? "text-white" : "text-gray-800"} text-3xl font-bold `}>
                                {product?.title}
                            </h1>
                            <p className={`text-[#343333] sm:text-lg ${darkMode ? "text-[#b8b4b4]" : ""}`}>{product.description}</p>
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <i
                                        key={i}
                                        className={`fas fa-star ${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                    ></i>
                                ))}
                                <span className={`text-2xl ml-2 ${darkMode ? "text-white" : ""}`}>({product.rating}/5)</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-truck text-blue-600"></i>
                                    <p className={`${darkMode ? "text-white" : ""}`}>{product.shippingInformation}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-shield-alt text-blue-600"></i>
                                    <p className={`${darkMode ? "text-white" : ""}`}>{product.warrantyInformation}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="fas fa-times-circle text-red-600"></i>
                                    <p className={`${darkMode ? "text-white" : ""}`}>No Return Policy</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <p className={`text-4xl font-bold ${darkMode ? "text-white" : ""}`}>₦{product.price}</p>
                                <span className={`text-xs px-4 py-2 rounded-full ${darkMode ? "bg-[#10B981] text-white" : " bg-green-100 text-green-600"}`}>
                                    {product.availabilityStatus}
                                </span>
                            </div>
                            <p className={`"font-semibold ${darkMode ? "text-white" : "text-black"}`}>
                                Minimum order quantity - {product.minimumOrderQuantity} Pieces
                            </p>
                            <div className="flex gap-2 sm:flex-col">
                                <button className={`flex items-center justify-center text-center gap-2 w-full text-white text-sm px-7 py-2 shadow-md rounded-md sm:text-xl sm:font-semibold ${darkMode ? "bg-[#1F2937] hover:bg-[#273447]" : " bg-blue-600 hover:bg-blue-700"}`}>
                                    <i className="fas fa-shopping-cart"></i>
                                    Add to Cart
                                </button>
                                <button className={`flex items-center justify-center text-center gap-2 w-ful text-black text-sm px-7 py-2 shadow-[0_0_11px_-1px_rgba(0,0,0,0.25)] rounded-md sm:text-xl sm:font-semibold ${darkMode ? "bg-[#4B5563] text-white hover:bg-[#6a778a]" : " bg-white hover:bg-gray-300"}`}>
                                    <i className="far fa-heart"></i>
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className={`${darkMode ? "text-white" : "text-gray-800"} mt-10 pb-5 text-3xl font-bold sm:mt-15 sm:text-4xl`}>Reviews</h1>
                <div className="flex gap-2 overflow-auto scroll-auto py-2 px-1">
                    {product.reviews && product.reviews.length > 0 ? product.reviews.map((review, index) => (
                        <Reviews key={index} review={review} />
                    )) : <p>No reviews available.</p>}
                </div>
                <h1 className={`${darkMode ? "text-white" : "text-gray-800"} mt-10 pb-5 text-3xl font-bold sm:mt-15 sm:text-4xl`}>Simlar Products</h1>
                <div className="flex gap-4.5 overflow-auto scroll-auto py-2 px-1">
                    {similarProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>

            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default ProductDetailPage