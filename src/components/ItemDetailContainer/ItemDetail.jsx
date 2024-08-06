/* eslint-disable no-unused-vars */ 
import React, { useState, Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import './ItemDetail.css';
import CartContext from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ game }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem, isInCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (quantity > 0 && quantity <= game.stock) {
      addItem(game, quantity);
    } else {
      alert('Cantidad inválida. Por favor, selecciona una cantidad entre 1 y el stock disponible.');
    }
  };

  return (
    <Fragment>
      <div className="item-detail">
        <img src={game.image} alt={game.title} />
        <h2>{game.title}</h2>
        <p>{game.description}</p>
        <p>Precio: ${game.price}</p>
        <p>Stock disponible: {game.stock}</p>
        <ItemCount stock={game.stock} initial={1} onAdd={handleAddToCart} />
      </div>
    </Fragment>
  );
}

ItemDetail.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
  }).isRequired
};

export default ItemDetail;
