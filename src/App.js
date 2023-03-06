import { useState } from 'react';
import './App.css';
import { MainMenu, Quiz, EndScreen } from './components';
import AuthContext from './context/authContext';

function App() {
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);

  return (
    <div className='App'>
      <h1>Quiz App</h1>

      <AuthContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
