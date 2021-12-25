import React, { useState } from "react";
import "./gameInterface.css";
import { Trivia } from "./Trivia";
import data from "./questions.json";


export function GameInterface(){
    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);

    const Preg = [
        { "_id": "1", 
            "question": "¿De quién es el bar al que Homero va a tomar cerveza?",
             "answers": [ 
                 { "correct": false, "text": "Barney" }, 
                 { "correct": true, "text": "Moe" }, 
                 { "correct": false, "text": "Otto" },
                 { "correct": false, "text": "Carl" } ]
            },
         
             { "_id": "2", 
                "question": "¿Cual es el nombre del vecino religioso de la familia Simpsons?", 
                "answers": [
                     { "correct": false, "text": "Carl" },
                     { "correct": true, "text": "Ned" }, 
                     { "correct": false, "text": "Steve" },
                     { "correct": false, "text": "Lucio" } ]
             },
         
             { "_id": "3", 
                "question": "¿Cual es la frase mas repetida por el Sr. Burns?", 
                "answers": [ 
                     { "correct": true, "text": "Excelente" }, 
                     { "correct": false, "text": "Genial" }, 
                     { "correct": false, "text": "Estupendo" }, 
                     { "correct": false, "text": "Perfecto" } ] 
                  },
              
             { "_id": "4", 
                "question": "¿Como se llama la cerveza que toma Homero?",
                "answers": [ 
                     { "correct": false, "text": "American" }, 
                     { "correct": false, "text": "Chopp" }, 
                     { "correct": false, "text": "Black" }, 
                     { "correct": true, "text": "Duff" } ]
             },
         
             { "_id": "5", 
                "question": "¿Como se llama el mejor amigo de Bart?", 
                "answers": [ 
                     { "correct": false, "text": "Tony" }, 
                     { "correct": false, "text": "Nelson" }, 
                     { "correct": true, "text": "Milhouse" },
                     { "correct": false, "text": "Martin" } ]
             },
         
             { "_id": "6", 
                "question": "¿Como se llama el amigo de Homero que vive siempre ebrio y eructando?", 
                "answers": [ 
                     { "correct": true, "text": "Barney" }, 
                     { "correct": false, "text": "Ned" }, 
                     { "correct": false, "text": "Otto" }, 
                     { "correct": false, "text": "Duffman" } ] 
                 }
    ]
    
    return(
        <div>
            <div className="top">
                <div className="timer">30</div>
            </div>
            <div className="bottom">
                <div className="questions">
                    < Trivia 
                        Preg = {Preg}
                        setTimeOut ={setTimeOut}
                        questionNumber = {questionNumber}
                        setQuestionNumber = {setQuestionNumber}
                    />    
                 </div>
            </div>
        </div>
    )
}