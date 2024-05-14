import CommandList from '@/components/pages/command/hooks/command'

import { RefObject, SetStateAction } from "react"
import {JetBrains_Mono} from "next/font/google"

type useCommandProps = {
  setText:            (text: string) => void,
  setDomList:         (domList: SetStateAction<string[]>) => void,
  commandList:        string[],
  setCommandList:     (CommandList:  SetStateAction<string[]>) => void,
  setIsRedirect:      (is_redirect: boolean) => void,
  setValue:           (value: string) => void,
  setAddress:         (address: string) => void,
  setIsFinish:        (is_finish: SetStateAction<boolean>) => void,
  mysql_console_ref:  RefObject<HTMLDivElement>,
  input_ref:          RefObject<HTMLInputElement>,
  i:                  number
}

type useCommand = {
  handleClick:    () => void;
  handleKeyDown:  (e: React.KeyboardEvent<HTMLInputElement>) => Promise<void>;
  handleFinish:   () => void;
}

export const useCommand = ({
    setText, 
    setDomList, 
    commandList, 
    setCommandList, 
    setIsRedirect, 
    setValue, 
    setAddress, 
    setIsFinish,
    mysql_console_ref, 
    input_ref, 
    i}: useCommandProps
  ): useCommand => {

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>,
  ) => {
      handleSubmitCommand((e.target as HTMLInputElement).value)
      setValue((e.target as HTMLInputElement).value)
      setText("")
  }

  function handleSubmitCommand(value: string){
    const command = new CommandList(value)
    const new_command: string =  command.action()
    if((new_command === "about") || (new_command === "works") || (new_command === "skill") || (new_command === "contact")){
        setAddress(new_command)
        setIsRedirect(true)
    }

    if(new_command === "clear"){
      setDomList([""]) //clearコマンドが入力された場合、画面をまっさらにする。
    }else{
      setDomList((domList: string[]) => [...domList, `kawasql >${value}`])
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

  const handleFinish = () => {
    setIsFinish(true)
  }

  return {
    handleClick,
    handleKeyDown,
    handleFinish
  }
}

export const JetBrainsMonoFont = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});