import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ContactForm from './components/ContactForm/ContactForm';
import About from './components/About/About';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartPage from './components/Cart/CartPage';
import Checkout from './components/Checkout/Checkout'; // Asegúrate de importar Checkout
import { CartProvider } from './context/CartContext';

function App() {
  React.createElement('div'); 

  return (
    <Fragment>
      <CartProvider> 
        <BrowserRouter>
          <NavBar /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<ItemListContainer />} /> 
            <Route path="/juego/:id" element={<ItemDetailContainer />} /> 
            <Route path="/contacto" element={<ContactForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/carrito" element={<CartPage />} /> 
            <Route path="/checkout" element={<Checkout />} /> {/* Nueva ruta para Checkout */}
          </Routes>
          <Outlet /> 
        </BrowserRouter>
      </CartProvider>
    </Fragment>
  );
}

export default App;