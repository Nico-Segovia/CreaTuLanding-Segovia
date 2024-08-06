import React, { Fragment, useState } from 'react';
import './Home.css';

function Home() {
  const games = [ 
    {
        id: 1,
        title: 'Super Mario 3',
        image: '/images/imagen1.jpg', 
        price: 20.00
      },
      {
        id: 2,
        title: 'Doom',
        image: '/images/imagen2.jpg', 
        price: 24.99
    },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (game) => {
    setCart([...cart, game]); 
    console.log('Carrito actualizado:', cart);
  };

  return (
    <Fragment>
      <div className="home">
        <h2>Juegos Destacados</h2>
        <div className="game-gallery">
          {games.map((game) => (
            <React.Fragment key={game.id}> {/* Usa React.Fragment para cada juego */}
              <div className="game-card">
                <img src={game.image} alt={game.title} />
                <h3>{game.title}</h3>
                <p>${game.price}</p>
                <button onClick={() => handleAddToCart(game)}>Agregar al carrito</button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Home; 
