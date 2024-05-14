"use client"

import { useState } from 'react'
import { useRef } from 'react'
import { useCommand } from '@/components/pages/command/hooks'
import ConsoleWindow from '@/components/pages/command/presentations/index'

export default function Command() {
  
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

  const {handleClick, handleKeyDown, handleFinish} = useCommand({setText, setDomList, commandList, setCommandList, setIsRedirect, setValue, setAddress, setIsFinish, mysql_console_ref, input_ref, i})

  return(
    <ConsoleWindow 
      handleFinish={handleFinish}
      handleClick={handleClick}
      domList={domList}
      is_finish={is_finish}
      mysql_console_ref={mysql_console_ref}
      text={text}
      handleKeyDown={handleKeyDown}
      setText={setText}
      is_disable={is_disable}
      input_ref={input_ref}
    />
  )
}
