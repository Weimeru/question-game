import { useState } from "react";
import  "./rewardList.css";

export function Premios(){
    const [ questionNumber] = useState(1);
    const moneyAmount =[
        { id: 1, amount: " $ 100.000" },
        { id: 2, amount: " $ 200.000" },
        { id: 3, amount: " $ 500.000" },
        { id: 4, amount: " $ 800.000" },
        { id: 5, amount: " $ 1.000.000" },
    ].reverse();
    
    return(
        <div className="moneyList">
            <ul>
               {moneyAmount.map((m) => (
                    <li className={questionNumber === m.id ? "rewardelementactive" : "rewardelement" }>
                        <span className="number">{m.id}</span>
                        <span className="amount"> {m.amount}</span>
                    </li>
                ))} 
            </ul>
        </div>
    )
}