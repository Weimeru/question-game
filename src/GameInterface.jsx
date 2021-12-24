import React, { useState } from "react";
import styles from "./gameInterface.module.css";
import { Trivia } from "./Trivia";
import data from "./Data.json";

export function GameInterface(){
    const [questionNumber, setQuestionNumber] = useState (1);
    const [timeOut, setTimeOut] = useState(false);
    return(
        <div>
            <div className={styles.top}>
                <div className={styles.timer}>30</div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.questions}> < Trivia 
                    data={data} 
                    setTimeOut={setTimeOut}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber }/> 
                 </div>
            </div>
        </div>
    )
}