/* eslint-disable no-unused-vars */ 
import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulo demora de consulta
        await new Promise(resolve => setTimeout(resolve, 10));

        // Simulo una lista de juegos
        const gamesData = [
          { id: 1, title: 'Super Mario Bros.', description: 'Un juego de plataformas clásico donde Mario debe rescatar a la Princesa Peach.', image: '/images/imagen1.jpg', price: 19.99, stock: 10 },
          { id: 2, title: 'Doom', description: 'Un juego de disparos en primera persona clásico.', image: '/images/imagen2.jpg', price: 24.99, stock: 5 }
        ];

        const gameData = gamesData.find(game => game.id === parseInt(id));

        if (gameData) {
          setGame(gameData);
        } else {
          console.error('Juego no encontrado');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los detalles del juego:', error);
      }
    };

    fetchData();
  }, [id]); 

  return (
    <div>
      {loading && <p>Cargando detalles del juego...</p>}

      {!loading && game && <ItemDetail game={game} />} 
    </div>
  );
}

export default ItemDetailContainer;
