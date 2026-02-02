import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import NotFoundPage from './pages/NotFoundPage';
import CartPage from "./pages/CartPage";
import ProductCard from "./components/ProductCard";
import CartCard from "./components/CartCard";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <>
      <div className="container">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>


      </div>
    </>
  )
}

export default App
