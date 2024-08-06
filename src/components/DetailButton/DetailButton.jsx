/* eslint-disable no-unused-vars */ 
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './DetailButton.css';

function DetailButton({ to }) {
  return (
    <Link to={to} className="detail-button">
      Ver detalles
    </Link>
  );
}

DetailButton.propTypes = {
  to: PropTypes.string.isRequired
};

export default DetailButton;
