"use client"
import MySQLConsoleInput from "./input";
import { useState } from 'react';
import {Typing} from "./typing";
import Command from "./command";
import { redirect } from 'next/navigation'

export default function TypingPage(){
    const [is_redirect, setIsRedirect] = useState([false,""])
    
    const [domList, setDomList] = useState<(React.JSX.Element)[]>([
        <Typing handleFinish={handleFinish}/>
    ]);

    function handleSubmitCommand(value: string){
        const commnad = new Command(value)
        console.log("入力値:",value)
        const new_command: React.JSX.Element | string =  commnad.action()

        if(typeof new_command === "string"){
            // stringの時の処理。clearとaddressを想定
            setIsRedirect([true, new_command])
        }else{
            setDomList((domList) => [...domList, new_command])
            setDomList((domList) => [...domList, <MySQLConsoleInput handleSubmitCommand={handleSubmitCommand}/>])
        }
    }

    function handleFinish(){
        setDomList((domList) => [...domList, <MySQLConsoleInput handleSubmitCommand={handleSubmitCommand}/>])
    }

    if(is_redirect[0]){
        redirect("./"+is_redirect[1])
    }
    
    return(
        <div>
          {domList}
        </div>
    )
}