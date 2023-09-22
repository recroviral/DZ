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
        <div className="card">
          <div className={`front ${isFlipped ? 'hidden' : ''}`}>
            <img src="images/back-image.png" alt="Front of Business Card" />
          </div>
          <div className={`back ${isFlipped ? '' : 'hidden'}`}>
            <img src="images/back-image.png" alt="Back of Business Card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
