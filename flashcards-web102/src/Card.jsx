import './App.css';
import React from 'react';
import { useState } from 'react';

export default function Card(props){
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardNum, setCardNum] = useState(0);
  const questions = ['question1', 'question2', 'question3', 'question4'];
  const answers = ['answer1','answer2', 'answer3', 'answer4'];
  
  const handleFlip = () => {setIsFlipped(!isFlipped);}
  const handleCardNum = () => {
        setCardNum(Math.floor(Math.random() * (questions.length)));
        if (isFlipped == true) {
            handleFlip();
        }
    }

  return (
    <>
    <div onClick={handleFlip} className="cardContainer">
    <img className='cardImg' src={props.image}></img>
    <p>{isFlipped ? answers[cardNum] : questions[cardNum]}</p>
    </div>
    <button onClick={handleCardNum}>&#62;</button>
    </>
  )
}
