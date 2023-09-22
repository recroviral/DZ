import React, { useState } from 'react';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <div className={`business-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
        <div className="front">
          <img src="/front-image.png" alt="Front of Business Card" />
        </div>
        <div className="back">
          <img src="/back-image.png" alt="Front of Business Card" />
        </div>
      </div>
    </div>
  );
}

export default App;