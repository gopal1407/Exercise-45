import React, { useState } from 'react';
import CharacterList from './components/characterList';
import CharacterDetail from './components/CharacterDetail';
const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🦸 Marvel Characters</h1>
      <CharacterList onCharacterSelect={setSelectedCharacterId} />
      <CharacterDetail characterId={selectedCharacterId} />
    </div>
  );
};

export default App;
