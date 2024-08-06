/* eslint-disable no-unused-vars */ 
import React, { useContext, Fragment } from 'react';
import CartContext from '../../context/CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeItem, clearCart, totalQuantity, updateItemQuantity } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    updateItemQuantity(itemId, newQuantity);
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <Fragment>
      <div className="cart">
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
                <div>
                  <label htmlFor={`quantity-${item.id}`}>Cantidad:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    min="1"
                    max={item.stock} 
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                </div>
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

export default Cart;
