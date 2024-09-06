import React from 'react';

function CharacterSection({ characters, openModal, addRandomCharacter }) {
  return (
    <section id="characters">
      <h2>Characters</h2>
      <button onClick={openModal}>Add Character</button>
      <button onClick={addRandomCharacter}>Add Random TV Character</button>
      <div id="characterList">
        {characters.map((char, index) => (
          <div key={index}>
            <h3>{char.name}</h3>
            <p>Age: {char.age}, Gender: {char.gender}</p>
            <p>Occupation: {char.occupation}</p>
            <p>Personality: {char.personality}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CharacterSection;
