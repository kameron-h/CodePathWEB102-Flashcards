import './App.css';
import React from 'react';
import { useState } from 'react';

export default function Card(props){
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardNum, setCardNum] = useState(0);
  const questions = ['How many planets are in our solar system?',
                    'What is the biggest planet in our solar system?',
                    'True or False: There is no sound in space.',
                    'Fill in the blank: To support life, planets must be located in the _________ Zone.',
                    'Which planet is known for its brilliant rings?',
                    'True or False: Black holes are so powerful that not even light can escape them.',
                    'True or False: Pluto is considered a planet.',
                    'Earth is located in which galaxy?',
                    'Fill in the blank: Planets that exist outside our solar system are called _________.',
                    'Which of these terms refers to the scientific study of space: \"Astronomy\" or \"Astrology\"'];
  const answers = ['8 planets',
                  'Jupiter', 
                  'True', 
                  '\"Goldilocks\" or \"Habitable\"',
                  'Saturn',
                  'True',
                  'False (As of 2006)',
                  'Milky Way Galaxy',
                  '\"Exoplanets\" or \"Extrasolar planets\"',
                  'Astronomy'];
  
  const handleFlip = () => {setIsFlipped(!isFlipped);}
  const handleCardNum = () => {
        setCardNum(Math.floor(Math.random() * (questions.length)));
        if (isFlipped == true) {
            handleFlip();
        }
    }

  return (
    <>
    <p>Number of cards: {questions.length}</p>
    <div onClick={handleFlip} className="cardContainer">
    <img className='cardImg' src={props.image}></img>
    <p>{isFlipped ? answers[cardNum] : questions[cardNum]}</p>
    </div>
    <button onClick={handleCardNum}>&#62;</button>
    </>
  )
}
