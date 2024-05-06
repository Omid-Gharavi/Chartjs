import { useRef, useState } from "react"

const Calendar = () => {
    return (
        <div className="mt-4 flex justify-center items-center gap-4">
            <SelectHistory />
            <span>تا</span>
            <SelectHistory />
        </div>
    )
}

const SelectHistory = () => {
    const [input, setInput] = useState()
    const inputRef = useRef()

    return (
        <input
            ref={inputRef}
            value={input}
            onKeyPress={(e) => {
                const keyCode = e.keyCode || e.which;
                if (!((keyCode >= 48 && keyCode <= 57))) {
                    e.preventDefault();
                }
            }}
            onChange={(e) => {
                const reg = /^(\d{4})$/g
                if (reg.test(inputRef.current.value)) {
                    inputRef.current.value = ''
                }
            }}
            type="tel"
            className="w-28 h-10 p-1 rounded-lg border-solid border-black border-[2px]"
        />
    )
}

export default Calendar