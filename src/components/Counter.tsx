import {useState} from "react";

const Counter = ()=>{
    function handlerClick():void{
        setValue(value+1)
    }
    const [value, setValue] = useState(240)
    return (
        <>
            <p>Value: {value}</p>
            <button onClick={handlerClick}>Up</button>
        </>
    )
}
export default Counter