import React, { useState } from 'react';
import './styles.css';
import CharacterSection from './components/CharacterSection';
import DialogueSection from './components/DialogueSection';
import ScriptSection from './components/ScriptSection';
import CharacterModal from './components/CharacterModal';
import { tvShowCharacters } from './data/tvShowCharacters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCharacter = (character) => {
    setCharacters([...characters, character]);
  };

  const getUniqueRandomCharacter = () => {
    const allCharacters = Object.values(tvShowCharacters).flat();
    const existingCharacterNames = characters.map(char => char.name);
    const availableCharacters = allCharacters.filter(char => !existingCharacterNames.includes(char.name));

    if (availableCharacters.length === 0) {
      return null;
    }

    return availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
  };

  return (
    <div className="App">
      <header>
        <h1>Agentic Writing System</h1>
      </header>
      <main>
        <CharacterSection 
          characters={characters}
          openModal={() => setIsModalOpen(true)}
          addRandomCharacter={() => {
            const randomChar = getUniqueRandomCharacter();
            if (randomChar) addCharacter(randomChar);
          }}
        />
        <DialogueSection characters={characters} />
        <ScriptSection />
      </main>
      <CharacterModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addCharacter={addCharacter}
      />
    </div>
  );
}

export default App;
