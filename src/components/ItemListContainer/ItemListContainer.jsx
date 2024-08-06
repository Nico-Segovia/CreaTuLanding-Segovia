/* eslint-disable no-unused-vars */ 
import React, { useState, useEffect, Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css'; // Importa el CSS

function ItemListContainer() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get('categoria');

  useEffect(() => {
    setSelectedCategory(categoriaParam);
  }, [categoriaParam]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 10));

        const data = [
          { id: 1, title: 'Super Mario Bros.', category: 'Plataforma', image: '/images/imagen1.jpg', price: 19.99 },
          { id: 2, title: 'Doom', category: 'Acción', image: '/images/imagen2.jpg', price: 24.99 }
        ];

        setGames(data);
        if (!selectedCategory) {
          setFilteredGames(data);
        } else {
          const filtered = games.filter(game => game.category === selectedCategory);
          setFilteredGames(filtered);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los juegos:', error);
      }
    };

    fetchData();
  }, [selectedCategory, games]); 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Fragment>
      <div className="item-list-container">
        <h2>Catálogo de Juegos</h2>

        {loading && <p>Cargando juegos...</p>}

        {!loading && ( 
          <div>
            <select onChange={(e) => handleCategoryChange(e.target.value)}>
              <option value="">Todas las categorías</option>
              <option value="Plataforma">Plataforma</option>
              <option value="Acción">Acción</option>
            </select>

            <ItemList games={filteredGames} /> 
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default ItemListContainer;
