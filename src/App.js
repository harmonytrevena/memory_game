import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Memory Game
        </h1>
        <h2 className="subtitle">
          Memory Cards to Win
        </h2>
      </header>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
    </div>
  );
}

export default App;
