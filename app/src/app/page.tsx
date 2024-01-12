"use client"
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Command from '@/components/Typing/command'
import { redirect } from 'next/navigation'
import { Typing } from '@/components/Typing/typing'
import { Console } from '@/components/Typing/console'

export default function Home() {

  type Address = "about" | "works" | "skill" | "contact"
  
  const [text, setText] = useState("");
  const [is_finish, setIsFinish] = useState(false)
  const [is_disable, setIsDisable] = useState(false)
  const [domList, setDomList] = useState<string[]>([""]);
  const [commandList, setCommandList] = useState<string[]>([""]);
  const [is_redirect, setIsRedirect] = useState(false)
  const [value, setValue] = useState<string>("")
  const [address, setAddress] = useState("")

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
    console.log(new_command)
    if((new_command === "about") || (new_command === "works") || (new_command === "skill") || (new_command === "contact")){
        // stringの時の処理。clearとaddressを想定
        setAddress(new_command)
        setIsRedirect(true)
    }

    setDomList((domList) => [...domList, `mysql > ${value}`])
    setDomList((domList) => [...domList, new_command])
    setTimeout(() => {
      if(!mysql_console_ref.current) return
      mysql_console_ref.current.scrollIntoView()
    }, 100);
  }

  const handleClick = () => {
    if(!input_ref.current) return
    input_ref.current.focus()
  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.isComposing || e.key !== 'Enter') return
      handleSubmit(e)
  }
  if(is_redirect){
    redirect(`./${address}`)
  }

  function handleFinish(){
    setIsFinish(true)
  }

  return(
    <div className="flex justify-center">
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
