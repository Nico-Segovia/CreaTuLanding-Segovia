/* eslint-disable no-unused-vars */ 
import React, { useContext, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './Checkout.css';

function Checkout() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación del formulario
    const errors = {};
    if (!buyer.name.trim()) {
      errors.name = 'El nombre es obligatorio';
    }
    if (!buyer.email.trim()) {
      errors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(buyer.email)) {
      errors.email = 'El email no es válido';
    }
    if (!buyer.phone.trim()) {
      errors.phone = 'El teléfono es obligatorio';
    } else if (!/^\d+$/.test(buyer.phone)) {
      errors.phone = 'El teléfono solo debe contener números';
    }
    if (!buyer.address.trim()) {
      errors.address = 'La dirección es obligatoria';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
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
            {formErrors.name && <p className="error-message">{formErrors.name}</p>} 
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={buyer.email} onChange={handleChange} required />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>} 
          </div>
          <div>
            <label htmlFor="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" value={buyer.phone} onChange={handleChange} required />
            {formErrors.phone && <p className="error-message">{formErrors.phone}</p>} 
          </div>
          <div>
            <label htmlFor="address">Dirección:</label>
            <input type="text" id="address" name="address" value={buyer.address} onChange={handleChange} required />
            {formErrors.address && <p className="error-message">{formErrors.address}</p>} 
          </div>

          <h3>Resumen de la compra</h3>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item-summary">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>Precio unitario: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
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