import React, { useEffect, useState } from "react";
import "./gameInterface.css";

export function Trivia({ 
    Preg, 
    setTimeOut, 
    questionNumber, 
    setQuestionNumber,
    }){
        const [question, setQuestion] = useState(null);
        const [selectedAnswer, setSelectedAnswer] = useState(null);
        const [className, setClassName] = useState("answerOption");

        useEffect(()=> {
            setQuestion(Preg[questionNumber - 1]);
        }, [Preg, questionNumber]);

        const handleClick = (a) =>{
            setSelectedAnswer(a);
            setClassName("answerOption Active");  
        }

    return(
        <div className="trivia">
                        <div className="question"> {question?.question} </div>

                        <div className="answers">
                            {question?.answers.map(a =>(
                                <div className={selectedAnswer === a ? className : "answerOption"} 
                                onClick={() => handleClick(a)} > {a.text} </div>
                            ))}
                        </div>
                    </div>
    )
}