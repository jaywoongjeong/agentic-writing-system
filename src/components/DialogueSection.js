import React, { useState } from 'react';

function DialogueSection({ characters, isAgentDialogue, setIsAgentDialogue }) {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [myCharacter, setMyCharacter] = useState('');
  const [situation, setSituation] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleStartDialogue = () => {
    if (selectedCharacters.length === 0 || (!isAgentDialogue && !myCharacter)) {
      alert('Please select characters for the dialogue.');
      return;
    }
    setChatMessages([{ type: 'situation', content: situation }]);
    // Here you would typically start the dialogue generation
  };

  const handleSendUserDialogue = () => {
    if (userInput) {
      setChatMessages([...chatMessages, { type: 'user', character: myCharacter, content: userInput }]);
      setUserInput('');
      // Here you would typically trigger the AI response
    }
  };

  return (
    <section id="dialogue">
      <h2>Dialogue</h2>
      <div>
        <label>
          <input
            type="radio"
            name="dialogueType"
            value="agent"
            checked={isAgentDialogue}
            onChange={() => setIsAgentDialogue(true)}
          /> Agent Dialogue
        </label>
        <label>
          <input
            type="radio"
            name="dialogueType"
            value="participatory"
            checked={!isAgentDialogue}
            onChange={() => setIsAgentDialogue(false)}
          /> Participatory Dialogue
        </label>
      </div>
      <div>
        <h3>Select Characters:</h3>
        {characters.map((char, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={char.name}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedCharacters([...selectedCharacters, char.name]);
                } else {
                  setSelectedCharacters(selectedCharacters.filter(name => name !== char.name));
                }
              }}
            /> {char.name}
          </label>
        ))}
      </div>
      {!isAgentDialogue && (
        <div>
          <h3>Select Your Character:</h3>
          <select value={myCharacter} onChange={(e) => setMyCharacter(e.target.value)}>
            <option value="">Select Your Character</option>
            {characters.map((char, index) => (
              <option key={index} value={char.name}>{char.name}</option>
            ))}
          </select>
        </div>
      )}
      <textarea
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        placeholder="Set a situation for the dialogue..."
      />
      <button onClick={handleStartDialogue}>Start Dialogue</button>
      <div id="chatBox">
        {chatMessages.map((msg, index) => (
          <p key={index}>
            {msg.type === 'situation' ? <em>{msg.content}</em> : <><strong>{msg.character}:</strong> {msg.content}</>}
          </p>
        ))}
      </div>
      {!isAgentDialogue && (
        <div>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your dialogue..."
          />
          <button onClick={handleSendUserDialogue}>Send</button>
        </div>
      )}
    </section>
  );
}

export default DialogueSection;
