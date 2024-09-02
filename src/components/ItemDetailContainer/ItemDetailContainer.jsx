/* eslint-disable no-unused-vars */ 
import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function ItemDetailContainer() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'juegos', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setGame({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.error('No such document!');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los detalles del juego desde Firestore:', error);
      }
    };

    fetchData(); // Llama a fetchData una sola vez dentro del useEffect
  }, [id]); 

  return (
    <div>
      {loading && <p>Cargando detalles del juego...</p>}

      {!loading && game && <ItemDetail game={game} />} 
    </div>
  );
}

export default ItemDetailContainer;