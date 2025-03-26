import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PUBLIC_KEY = '27d74b528cafea17c1d6c531de2b5827';
const HASH = '0b4562d9fd5a7ebac51d7a4d0348b6c9';
const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (!characterId) return;

    axios
      .get(`${BASE_URL}/${characterId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`)
      .then((response) => {
        setCharacter(response.data.data.results[0]);
      })
      .catch((error) => {
        console.error('Error fetching character detail:', error);
      });
  }, [characterId]);

  if (!character) return <p>Select a character to see details</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{character.name}</h2>
      <p>{character.description || 'No description available.'}</p>
      <h3>Comics:</h3>
      <ul>
        {character.comics.items.map((comic, index) => (
          <li key={index}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
