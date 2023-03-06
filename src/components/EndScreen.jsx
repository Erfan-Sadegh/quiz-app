import { useContext } from 'react';
import AuthContext from '../context/authContext';

function EndScreen() {
  const { setScore , score, setGameState } = useContext(AuthContext);

  const restartQuiz = () => {
    setScore(0)
    setGameState('menu')
  }

  return (
    <div className='EndScreen'>
      <h1>Your Score: {score} / 3</h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
