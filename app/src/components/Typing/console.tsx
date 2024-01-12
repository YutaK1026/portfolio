import { useRef } from "react"

interface ConsoleProps{
    text: string
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
    setText: (value: string) => void
    is_disable: boolean
}

export default function Console({text="", handleKeyDown, setText, is_disable}: ConsoleProps):React.JSX.Element {
    // const inputRef = useRef<HTMLInputElement>(null)

    return(
    <input 
        className='bg-slate-900 text-white'
        value={text}
        onKeyDown={handleKeyDown}
        onChange={(event) => setText(event.target.value)}
        // ref = {inputRef}
        style={{
            outline: "none",
            border: "none",
        }}
        // disabled={is_disable}
    />)
}