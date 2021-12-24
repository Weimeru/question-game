
import { useEffect, useState } from "react";
import styles from "./trivia.module.css";


export function Trivia({data, 
                        setTimeout, 
                        questionNumber, 
                        setQuestionNumber}){
   const [ question, setQuestion] = useState(null);
           
   useEffect(( )=>{
        setQuestion(data [questionNumber - 1]);
    }, [data, questionNumber]);

    return(
        <div className={styles.trivia}>
            <div className={styles.question}>{question.question}</div>

            <div className={styles.answers}>
                <div className={styles.answerOption}> Holoooo </div>
                <div className={styles.answerOption}> Holoooo </div>
                <div className={styles.answerOption}> Holoooo </div>
                <div className={styles.answerOption}> Holoooo </div>
            </div>
        </div>
    )
}