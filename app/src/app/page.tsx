"use client"
import TypingPage from '@/components/Typing'
import { useState } from 'react'
import { useRef } from 'react'
import Console from '@/components/Typing/console'

export default function Home() {

  const handleClick = () => {
    console.log("Click!")
  }
  const [text, setText] = useState("");
  const [is_disable, setIsDisable] = useState(false)
  const [value, setValue] = useState<string>("")

  const handleSubmit = (
      e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>,
  ) => {
      console.log("送信")
      setValue((e.target as HTMLInputElement).value)
      setText("")
  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.isComposing || e.key !== 'Enter') return
      handleSubmit(e)
  }


  return(
    <div className="flex justify-center">
      <div className='w-2/3 h-100 bg-slate-900 m-10' onClick={handleClick}>
        <div className='bg-scroll h-96 m-4 hidden-scrollbar text-white' style={{overflow: "auto"}}>
          <TypingPage value={value}/>
          <div className="flex">
              <p>mysql {">"}</p>
              <Console text={text} handleKeyDown={handleKeyDown} setText={setText} is_disable={is_disable}/>
          </div>
        </div>
      </div>
    </div>
  )
  // redirect("/about")
}
