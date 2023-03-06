import { useState, useContext } from 'react';
import questions from '../Questions/questions';
import AuthContext from '../context/authContext';

function Quiz() {
  const { score, setScore, setGameState } = useContext(AuthContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionChosen, setQuestionChosen] = useState('');

  const currentOptions = questions[currentQuestion].options;

  const option = Object.keys(currentOptions).map((key) => (
    // <option onClick={() => setQuestionChosen(key)} key={key} value={key}>
    //   {currentOptions[key]}
    // </option>
    <>
      <input type='radio' name='option' id={key} value={key} />
      <label onClick={() => setQuestionChosen(key)} htmlFor={key}>{currentOptions[key]}</label>
    </>
  ));

  const nextQuestion = () => {
    if (questions[currentQuestion].answer === questionChosen) {
      setScore(score + 1);
    }
    if (questionChosen.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const finishQuiz = () => {
    if (questions[currentQuestion].answer === questionChosen) {
      setScore(score + 1);
    }
    if (questionChosen.length) {
      setGameState('endScreen');
    }
  };

  return (
    <div className='Quiz'>
      <h1>{questions[currentQuestion].prompt}</h1>
      {/* <select name="q" id=""> */}
      {/* </select> */}
      {option}
      {questions.length - 1 === currentQuestion ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
