import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

function CartWidget() {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} className="text-white" /> 
      <span className="cart-count">0</span> 
      <FontAwesomeIcon icon={faBell} className="text-white" /> 
    </div>
  );
}

export default CartWidget;
