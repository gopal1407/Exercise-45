import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PUBLIC_KEY = '27d74b528cafea17c1d6c531de2b5827';
const HASH = '0b4562d9fd5a7ebac51d7a4d0348b6c9';
const BASE_URL = 'https://gateway.marvel.com/v1/public/characters?ts=1';


const CharacterList = ({ onCharacterSelect }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {characters.map((char) => (
        <div
          key={char.id}
          onClick={() => onCharacterSelect(char.id)}
          style={{
            width: '150px',
            margin: '10px',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          <img
            src={`${char.thumbnail.path}/standard_medium.${char.thumbnail.extension}`}
            alt={char.name}
            style={{ width: '100%' }}
          />
          <p>{char.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
