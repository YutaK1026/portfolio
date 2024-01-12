import { use, useEffect, useState } from 'react';
import { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { createContext, useContext } from 'react';
import Console from './console';

interface InputProps{
    handleSubmitCommand:(value: string)=>void
}

export default function MySQLConsoleInput({handleSubmitCommand}: InputProps){
    const [text, setText] = useState("");
    const [is_disable, setIsDisable] = useState(false)

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>,
    ) => {
        const value: string = (e.target as HTMLInputElement).value
        handleSubmitCommand(value)
    }
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing || e.key !== 'Enter') return
        setIsDisable(true)
        handleSubmit(e)
    }

    return(
        <div className="flex">
            <p>mysql {">"}</p>
            <Console text={text} handleKeyDown={handleKeyDown} setText={setText} is_disable={is_disable}/>
        </div>
    )
}