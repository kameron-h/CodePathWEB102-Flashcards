import './App.css';
import React from 'react';
import { useState } from 'react';

export default function Card(){
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardNum, setCardNum] = useState(0);
  const [checkAnswer, setCheckAnswer] = useState('');
  const [guess, setGuess] = useState('');
  const questions = ['How many planets are in our solar system?',
                    'What is the biggest planet in our solar system?',
                    'True or False: There is no sound in space.',
                    'Fill in the blank: To support life, planets must be located in the _________ Zone.',
                    'Which planet is known for its brilliant rings?',
                    'True or False: Black holes are so powerful that not even light can escape them.',
                    'True or False: Pluto is considered a planet.',
                    'Earth is located in which galaxy?',
                    'Fill in the blank: _________ is an umbrella term for any planet that is NOT a member of our solar system.',
                    'Which of these terms refers to the scientific study of space: \"Astronomy\" or \"Astrology\"'];
  const answers = ['8',
                  'Jupiter', 
                  'True', 
                  'Goldilocks',
                  'Saturn',
                  'True',
                  'False',
                  'Milky Way Galaxy',
                  'Exoplanet',
                  'Astronomy'];
  const altAnswers = ['Eight',
                  '', 
                  '', 
                  'Habitable',
                  '',
                  '',
                  '',
                  'Milky Way',
                  'Extrasolar',
                  ''];
  
  const handleFlip = () => {setIsFlipped(!isFlipped);}

  const handleNext = () => {
    if (cardNum + 1 < questions.length) setCardNum(cardNum + 1);
    if (isFlipped) handleFlip();

    setGuess('');
    setCheckAnswer('');
  }

  const handlePrev = () => {
    if (cardNum - 1 >= 0) setCardNum(cardNum - 1);
    if (isFlipped) handleFlip();

    setGuess('');
    setCheckAnswer('');
  }

  const handleCheckAnswer = (event) => {
    event.preventDefault();

    if (guess == '') {
      setCheckAnswer('wrong');
      return;
    }

    if (guess.toLowerCase() == answers[cardNum].toLowerCase() || 
        guess.toLowerCase() == altAnswers[cardNum].toLowerCase()) {
      setCheckAnswer('correct');
    } else {
      setCheckAnswer('wrong');
    }
  }

  return (
    <>
    <p>Number of cards: {questions.length}</p>
    <div onClick={handleFlip} className="cardContainer">
    <p>{isFlipped ? (altAnswers[cardNum] != '' && altAnswers[cardNum] != 'Eight' && altAnswers[cardNum] != 'Milky Way' ? answers[cardNum] + ' / ' + altAnswers[cardNum] : answers[cardNum]) : questions[cardNum]}</p>
    </div>
    <form>
      Your Best Guess: <input type='text' value={guess} onChange={event => setGuess(event.target.value)} id={checkAnswer}></input>
      <input type='submit' value='Submit' className='submitButton' onClick={handleCheckAnswer}></input>
    </form>
    <button onClick={handlePrev}>&#60;</button>
    <button onClick={handleNext}>&#62;</button>
    </>
  )
}
