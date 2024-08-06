/* eslint-disable no-unused-vars */ 
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function ItemList({ games }) {
  return (
    <Fragment>
      <div className="item-list">
        {games.map((game) => (
          <Item key={game.id} game={game} />
        ))}
      </div>
    </Fragment>
  );
}

ItemList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired
};

export default ItemList;
