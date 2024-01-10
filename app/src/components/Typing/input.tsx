import { useState } from 'react';
import { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function MySQLConsoleInput(){
    const [text, setText] = useState("");
    
    return(
        <div className="flex">
            <p>mysql {">"}</p>
                <input 
                    value={text} 
                    onChange={(event) => setText(event.target.value)}
                    autoFocus={true}
                    style={{outline: "none",
                        border: "none"
                    }}
                />
        </div>
    )
}