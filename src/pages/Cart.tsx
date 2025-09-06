import Header from "../components/Header"
import Footer from "../components/Footer"
const Cart: React.FC = () => {
    return (
        <div>
            <Header />
            <h1 className="text-xl font-semibold sm:text-3xl text-center mt-7 border-b-2 pb-3">
                Your Cart
            </h1>
            <Footer />
        </div>
    )
}

export default Cart