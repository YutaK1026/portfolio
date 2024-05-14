import { Ref } from "react"
import { forwardRef } from 'react';
import { ConsoleProps } from "@/libs/command/command-props";

function consoleComponent({text, handleKeyDown, setText, is_disable}: ConsoleProps, ref: Ref<HTMLInputElement>):React.JSX.Element {
    return(
    <input 
        className='bg-slate-900 text-white'
        value={text}
        onKeyDown={handleKeyDown}
        onChange={(event) => setText(event.target.value)}
        ref = {ref}
        style={{
            outline: "none",
            border: "none",
        }}
    />)
}

export const Console = forwardRef<HTMLInputElement, ConsoleProps>(consoleComponent)