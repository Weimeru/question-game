import React from "react";
import "./gameInterface.css";
import "./questions.json";


export function GameInterface(){
    return(
        <div>
            <div className="top">
                <div className="timer">30</div>
            </div>
            <div className="bottom">
                <div className="questions">
                    
                    <div className="trivia">
                        <div className="question">puto json</div>

                        <div className="answers">
                            <div className="answerOption"> Holoooo </div>
                            <div className="answerOption"> Holoooo </div>
                            <div className="answerOption"> Holoooo </div>
                            <div className="answerOption"> Holoooo </div>
                        </div>
                    </div>

                 </div>
            </div>
        </div>
    )
}