import React from 'react';
//components 
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startQuiz = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Virtual Pub Quiz</h1>
      <button className='start' onClick={startQuiz}>Start</button>
      <p className="score">Score</p>
      <p>Loading questions...</p>
    </div>
  );
}

export default App;
