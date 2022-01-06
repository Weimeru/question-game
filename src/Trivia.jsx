import React, { useEffect, useState } from "react";
import "./gameInterface.css";

export function Trivia({ 
    Preg, 
    setStop, 
    questionNumber, 
    setQuestionNumber,
    }){
        const [question, setQuestion] = useState(null);
        const [selectedAnswer, setSelectedAnswer] = useState(null);
        const [className, setClassName] = useState("answerOption");

        useEffect(()=> {
            setQuestion(Preg[questionNumber - 1]);
        }, [Preg, questionNumber]);

        const delay = (duration, callback) => {
            setTimeout (() =>{
                callback();
            }, duration);
        }

        const handleClick = (a) => {
            setSelectedAnswer(a);
            setClassName("answerOption active"); 
            delay(3000, () =>
                setClassName(a.correct ? "answerOption correct" : "answerOption wrong")
            );
            delay(6000, () =>{
                if (a.correct){
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                } else {
                    setStop(true);
                }
            }
              
            );
        };

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