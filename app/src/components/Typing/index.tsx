import MySQLConsoleInput from "./input";
import { useState } from 'react';
import {Typing} from "./typing";

export default function TypingPage(){
    const [domList, setDomList] = useState<React.JSX.Element[]>([
        <Typing handleFinish={handleFinish}/>
    ]);

    function handleSubmitCommand(){
        // mysql > の時にコマンドを入力して送信したときの処理
        setDomList((domList) => [...domList, <MySQLConsoleInput handleSubmitCommand={handleSubmitCommand}/>])
    }

    function handleFinish(){
        setDomList((domList) => [...domList, <MySQLConsoleInput handleSubmitCommand={handleSubmitCommand}/>])
    }
    
    return(
        <div>
          {domList}
        </div>
    )
}