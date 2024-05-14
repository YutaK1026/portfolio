import { JetBrainsMonoFont } from "@/components/pages/command/hooks/index"
import { Typing } from '@/components/pages/command/presentations/init-typing'
import { ConsoleInput } from '@/components/pages/command/presentations/console-input'
import { RefObject } from "react"

type ConsoleWindowProps = {
  handleFinish:       () => void,
  handleClick:        () => void,
  domList:            string[],
  is_finish:          boolean,
  mysql_console_ref:  RefObject<HTMLDivElement>
  text:               string,
  handleKeyDown:      (e: React.KeyboardEvent<HTMLInputElement>) => Promise<void>,
  setText:            (text: string) => void,
  is_disable:         boolean,
  input_ref:          RefObject<HTMLInputElement>
}

export default function ConsoleWindow({
    handleFinish, 
    handleClick, 
    domList, 
    is_finish, 
    mysql_console_ref, 
    text, 
    handleKeyDown, 
    setText,
    is_disable, 
    input_ref,
  }: ConsoleWindowProps) {

  return (
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
              <p>kawasql {">"}</p>
              <ConsoleInput text={text} handleKeyDown={handleKeyDown} setText={setText} is_disable={is_disable} ref={input_ref}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}