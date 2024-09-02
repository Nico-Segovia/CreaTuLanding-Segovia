/* eslint-disable no-unused-vars */ 
import React, { useContext, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import './Checkout.css';

function Checkout() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone || !buyer.address) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const order = {
      buyer,
      items: cart,
      total: totalPrice,
      date: serverTimestamp() 
    };

    try {
      const ordersCollection = collection(db, 'ordenes');
      await addDoc(ordersCollection, order);

      clearCart();
      alert('¡Gracias por tu compra! Tu orden ha sido procesada.');
      navigate('/');
    } catch (error) {
      console.error('Error al generar la orden:', error);
      alert('Hubo un problema al procesar tu compra. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <Fragment>
      <div className="checkout">
        <h2>Finalizar Compra</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={buyer.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={buyer.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" value={buyer.phone} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="address">Dirección:</label>
            <input type="text" id="address" name="address" value={buyer.address} onChange={handleChange} required />
          </div>

          <h3>Resumen de la compra</h3>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.title} x {item.quantity} - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice.toFixed(2)}</p>

          <button type="submit">Finalizar compra</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Checkout;