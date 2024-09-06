import React, { useState } from 'react';

function CharacterModal({ isOpen, onClose, addCharacter }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [personality, setPersonality] = useState('');

  const handleSubmit = () => {
    if (name) {
      addCharacter({ name, age, gender, occupation, personality });
      onClose();
      // Clear input fields
      setName('');
      setAge('');
      setGender('');
      setOccupation('');
      setPersonality('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Character</h2>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="gender">Gender:</label>
          <input id="gender" type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="occupation">Occupation:</label>
          <input id="occupation" type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="personality">Personality:</label>
          <input id="personality" type="text" value={personality} onChange={(e) => setPersonality(e.target.value)} />
        </div>
        <div className="button-group">
          <button onClick={handleSubmit}>Add Character</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default CharacterModal;
