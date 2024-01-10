import MySQLConsoleInput from "./input";
import { useState } from 'react';
import {Typing} from "./typing";


export default function TypingPage(){
    const [isFinish, setIsFinish] = useState<boolean>(false);

    function handleFinish(){
        setIsFinish(true)
        console.log("finish")
    }

    return(
        <div>
          <Typing handleFinish={handleFinish}/>
          {isFinish == true ? <MySQLConsoleInput/> : <div></div>}
          
        </div>
    )
}