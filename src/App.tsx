import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pdp' element={<ProductDetailPage />} />

      </Routes>
    </>
  )
}

export default App
