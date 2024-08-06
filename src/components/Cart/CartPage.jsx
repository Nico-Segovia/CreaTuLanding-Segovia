/* eslint-disable no-unused-vars */ 
import React, { useContext, Fragment } from 'react';
import CartContext from '../../context/CartContext';
import './CartPage.css';

function CartPage() {
  const { cart, removeItem, clearCart, totalQuantity } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <Fragment>
      <div className="cart-page">
        <h2>Carrito de Compras</h2>

        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
              </div>
            ))}
            <p>Precio total: ${totalPrice.toFixed(2)}</p>
            <button onClick={handleClearCart}>Vaciar carrito</button>
            <button>Proceder al pago</button> 
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default CartPage;
