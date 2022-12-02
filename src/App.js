import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import Cart from "./components/Cart";
import CartProvider from './components/CartContex';
import Checkout from './components/Checkount';
import Footer from './components/Footer';

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
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkount" element={<Checkout />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;