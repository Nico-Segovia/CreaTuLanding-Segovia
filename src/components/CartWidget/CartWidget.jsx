/* eslint-disable no-unused-vars */ 
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../context/CartContext';
import './CartWidget.css';

function CartWidget() {
  const { cart, totalQuantity } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} className="text-white" /> 
      <span className="cart-count">{totalQuantity}</span> 
      <FontAwesomeIcon icon={faBell} className="text-white" /> 
    </div>
  );
}

export default CartWidget;
