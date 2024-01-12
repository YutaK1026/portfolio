"use client"
import MySQLConsoleInput from "./input";
import { useEffect, useState } from 'react';
import {Typing} from "./typing";
import Command from "./command";
import { redirect } from 'next/navigation'

interface TypingPageProps{
    value: string
}

export default function TypingPage({value}: TypingPageProps){
    const [is_redirect, setIsRedirect] = useState([false,""])
    
    const [domList, setDomList] = useState<(React.JSX.Element)[]>([
        <Typing key = {0} handleFinish={handleFinish}/>
    ]);

    useEffect(() => {
        console.log("値を送信:",value)
        handleSubmitCommand(value)
    },[value])

    function handleSubmitCommand(value: string){
        const commnad = new Command(value)
        console.log("入力値:",value)
        const new_command: React.JSX.Element | string =  commnad.action()

        if(typeof new_command === "string"){
            if(new_command != ""){
            // stringの時の処理。clearとaddressを想定
            setIsRedirect([true, new_command])
            }
        }else{
            setDomList((domList) => [...domList, <div key = {0}>mysql  {">"}{value}</div>])
            setDomList((domList) => [...domList, new_command])
        }
    }

    function handleFinish(){
        // setDomList((domList) => [...domList, <MySQLConsoleInput handleSubmitCommand={handleSubmitCommand}/>])
    }

    if(is_redirect[0]){
        redirect("./"+is_redirect[1])
    }
    
    return(
        <div>
          {domList.map((item:React.JSX.Element, index:number) => {
            return(
                <div key = {index}>
                    {item}
                </div>
            )
          })}
        </div>
    )
}