import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import { AppProvider } from './context/AppContext';

function App() {

  return (
    <AppProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pdp/:id' element={<ProductDetailPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
    </AppProvider>
  )
}

export default App
