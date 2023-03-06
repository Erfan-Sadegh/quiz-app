import { useContext } from 'react';
import AuthContext from '../context/authContext';

function MainMenu() {
  const { setGameState } = useContext(AuthContext)

  return (
    <div className='Menu'>
      <button onClick={() => setGameState('quiz')}>Start Quiz</button>
    </div>
  );
}

export default MainMenu;
