import React from 'react';
import './Quiz.css';

const Quiz = (props) => {
    const { quiz, show, selected, answer, image } = props; 
    return (
      <div className="quiz">
        <div className="vraag">
            <img src={image} alt='foto over ict'/>
            <p>{quiz.vraag}</p>
        </div>
        <div className="antwoorden">
            {quiz.antwoorden.map((antwoord, index) => {
                return (
                    <div key={`${(antwoord.text).substring(0,5)}-${index}`} onClick={(e) => answer(index)} className={`antwoord ${show ? antwoord.correct ? 'correct' : 'wrong' : ''} ${selected === index? 'selected': ''}`}>
                        <p>{index + 1} - {antwoord.text}</p>
                    </div>
                );
            })}
        </div>
      </div>
    );
}

export default Quiz;