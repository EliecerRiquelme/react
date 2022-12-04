import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import ItemListContainer from "./components/Item/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import Cart from "./components/Cart/Cart";
import CartProvider from './components/Context/CartContext';
import Checkout from './components/Cart/Checkout';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoria" element={<ItemListContainer />} />
            <Route path="/product/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;