import { useState } from 'react';
import { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function MySQLConsoleInput({handleSubmitCommand}: {handleSubmitCommand:(value: string)=>void}){
    const [text, setText] = useState("");
    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>,
    ) => {
        const value: string = (e.target as HTMLInputElement).value
        handleSubmitCommand(value)
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing || e.key !== 'Enter') return
        handleSubmit(e)
    }

    return(
        <div className="flex">
            <p>mysql {">"}</p>
                <input 
                    value={text} 
                    onKeyDown={handleKeyDown}
                    onChange={(event) => setText(event.target.value)}
                    autoFocus={true}
                    style={{outline: "none",
                        border: "none"
                    }}
                />
        </div>
    )
}