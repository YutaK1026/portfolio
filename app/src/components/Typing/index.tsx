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
    const [domList, setDomList] = useState<string[]>([""]);

    useEffect(() => {
        console.log("値を送信:",value)
        handleSubmitCommand(value)
    },[value])

    function handleSubmitCommand(value: string){
        const commnad = new Command(value)
        console.log("入力値:",value)
        const new_command: string =  commnad.action()

        if(new_command == ("about" || "works" || "contact" || "skill")){
            // stringの時の処理。clearとaddressを想定
            redirect(`/${new_command}`)
        }

        setDomList((domList) => [...domList, `mysql > ${value}`])
        setDomList((domList) => [...domList, new_command])
    }

    function handleFinish(){
        // setDomList((domList) => [...domList, <MySQLConsoleInput handleSubmitCommand={handleSubmitCommand}/>])
    }
    
    return(
        <div>
          <Typing handleFinish={handleFinish}/>
          {domList.map((item:string, index:number) => {
            return(
                <div key = {index}>
                    {item}
                </div>
            )
          })}
        </div>
    )
}