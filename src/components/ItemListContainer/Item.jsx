/* eslint-disable no-unused-vars */ 
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import DetailButton from '../DetailButton/DetailButton'; 

function Item({ game }) {
  return (
    <Fragment>
      <div className="item-card">
        <img src={game.image} alt={game.title} />
        <h3>{game.title}</h3>
        <p>${game.price}</p>
        <DetailButton to={`/juego/${game.id}`} /> 
      </div>
    </Fragment>
  );
}

Item.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default Item;
