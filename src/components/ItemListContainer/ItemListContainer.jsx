/* eslint-disable no-unused-vars */ 
import React, { useState, useEffect, Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

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
        const gamesCollection = collection(db, 'juegos');
        const gamesSnapshot = await getDocs(gamesCollection);

        const gamesData = gamesSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setGames(gamesData);

        // Filtrar los juegos según la categoría seleccionada
        const filtered = selectedCategory
          ? gamesData.filter(game => game.category === selectedCategory)
          : gamesData; 

        setFilteredGames(filtered);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los juegos desde Firestore:', error);
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
              {/* Opciones de categorías dinámicas */}
              {[...new Set(games.map(game => game.category))].map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <ItemList games={filteredGames} />
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default ItemListContainer;