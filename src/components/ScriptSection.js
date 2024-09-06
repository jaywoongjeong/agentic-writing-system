import React, { useState } from 'react';

function ScriptSection() {
  const [scriptFormat, setScriptFormat] = useState('play');
  const [scriptOutput, setScriptOutput] = useState('');

  const handleConvertScript = () => {
    // Here you would implement the script conversion logic
    // For now, we'll just set a placeholder message
    setScriptOutput(`Converted to ${scriptFormat} format`);
  };

  return (
    <section id="script">
      <h2>Converted Script</h2>
      <select value={scriptFormat} onChange={(e) => setScriptFormat(e.target.value)}>
        <option value="play">연극 대본</option>
        <option value="tv">TV 시나리오</option>
        <option value="movie">영화 대본</option>
      </select>
      <button onClick={handleConvertScript} className="convert-button">Convert</button>
      <textarea value={scriptOutput} readOnly />
    </section>
  );
}

export default ScriptSection;
