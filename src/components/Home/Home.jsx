/* eslint-disable no-unused-vars */ 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import DetailButton from '../DetailButton/DetailButton';

function Home() {
  const games = [
    {
      id: 1,
      title: 'Super Mario Bros.',
      image: '/images/imagen1.jpg',
      price: 19.99
    },
    {
      id: 2,
      title: 'Doom',
      category: 'Acción',
      image: '/images/imagen2.jpg',
      price: 24.99
    },
    // Agrega más juegos aquí
  ];

  return (
    <div className="home">
      <h2>Destacados</h2>
      <div className="game-gallery">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <p>${game.price}</p>
            <DetailButton to={`/juego/${game.id}`} /> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
