import { RefObject } from "react"

type useCommandProps = {
  text: string,
  setText: (text: string) => void,
  is_finish: boolean,
  setIsFinish: (is_finish: boolean) => void,
  is_disable: boolean,
  setIsDisable: (is_disable: boolean) => void,
  domList: string[],
  setDomList: (domList: string) => void,
  commandList: string[],
  setCommandList: (CommandList: string[]) => void,
  is_redirect: boolean,
  setIsRedirect: (is_redirect: boolean) => void,
  value: string,
  setValue: (value: string) => void,
  address: string,
  setAddress: (address: string) => void,
  mysql_console_ref: RefObject<HTMLDivElement>,
  input_ref: RefObject<HTMLInputElement>,
  
}

export const useCommand = (
  ) => {
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
      setDomList((domList) => [...domList, `kawasql >${value}`])
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
}