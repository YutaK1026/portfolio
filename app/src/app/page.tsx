"use client"
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Command from '@/components/Typing/command'
import { redirect } from 'next/navigation'
import { Typing } from '@/components/Typing/typing'
import { Console } from '@/components/Typing/console'

import {JetBrains_Mono} from "next/font/google"

const JetBrainsMonoFont = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {

  type Address = "about" | "works" | "skill" | "contact"
  
  const [text, setText] = useState(""); //入力された文字列を管理
  const [is_finish, setIsFinish] = useState(false) //Typingが終了したことを判定するフラグ
  const [is_disable, setIsDisable] = useState(false) //Enterが押された際、その時のConsoleが入力できないようにするためのフラグ
  const [domList, setDomList] = useState<string[]>([""]);
  const [commandList, setCommandList] = useState<string[]>([""]);
  const [is_redirect, setIsRedirect] = useState(false)
  const [value, setValue] = useState<string>("")
  const [address, setAddress] = useState("")

  let i = commandList.length; //矢印↑、↓を押したときの動作を管理するための変数

  const mysql_console_ref = useRef<HTMLDivElement>(null)
  const input_ref = useRef<HTMLInputElement>(null)

  const handleSubmit = (
      e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>,
  ) => {
      handleSubmitCommand((e.target as HTMLInputElement).value)
      setValue((e.target as HTMLInputElement).value)
      setText("")
  }
  function handleSubmitCommand(value: string){
    const commnad = new Command(value)
    const new_command: string =  commnad.action()
    if((new_command === "about") || (new_command === "works") || (new_command === "skill") || (new_command === "contact")){
        setAddress(new_command)
        setIsRedirect(true)
    }

    if(new_command === "clear"){
      setDomList([""]) //clearコマンドが入力された場合、画面をまっさらにする。
    }else{
      setDomList((domList) => [...domList, `mysql > ${value}`])
      setDomList((domList) => [...domList, new_command])
    }

    setTimeout(() => {
      if(!mysql_console_ref.current) return
      mysql_console_ref.current.scrollIntoView()
    }, 100);
  }

  const handleClick = () => {
    if(!input_ref.current) return
    input_ref.current.focus()
  }
  
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.isComposing) return
      if(e.key == 'Enter'){
        setCommandList((command_list) => [...command_list, (e.target as HTMLInputElement).value])
        handleSubmit(e)
      }
      
      if(e.key == "ArrowUp"){
        if(i > 1){
          i = i - 1
        }
        if(i > commandList.length - 1){
          i = commandList.length - 1
        }
        (e.target as HTMLInputElement).value = commandList[i]
        // TODO: カーソルを末尾に移動するようにする。
      }
      if(e.key == "ArrowDown"){
        i = i + 1
        if(i > commandList.length-1){
          (e.target as HTMLInputElement).value = ""
        }else{
          (e.target as HTMLInputElement).value = commandList[i]
        }
        // TODO: カーソルを末尾に移動するようにする。
      }
  }
  if(is_redirect){
    redirect(`./${address}`)
  }

  function handleFinish(){
    setIsFinish(true)
  }


  return(
    <div className={`flex justify-center ${JetBrainsMonoFont.className}`}>

        <div className='w-2/3 h-100 bg-slate-900 m-10' onClick={handleClick}>
          <div className='bg-scroll h-96 m-4 hidden-scrollbar text-white whitespace-pre' style={{overflow: "auto"}}>
            <Typing handleFinish={handleFinish}/>
            {domList.map((item:string, index:number) => {
              return(
                  <p className="whitespace-pre-wrap" key = {index}>
                      {item}
                  </p>
              )
            })}
            {is_finish &&  
              <div className="flex" ref = {mysql_console_ref}>
                  <p>mysql {">"}</p>
                  <Console text={text} handleKeyDown={handleKeyDown} setText={setText} is_disable={is_disable} ref={input_ref}/>
              </div>
            }
          </div>
        </div>
    </div>
  )
}
