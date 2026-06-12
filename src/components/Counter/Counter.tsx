import {useState} from "react";
// import "./Counter.css"
import style from "./Counter.module.css"
import style2 from "./Counter2.module.css"
/*
inline styles
* */
const Counter = ()=>{
    function handlerClick():void{
        //batch
        setValue(value+1)
    }
    const [value, setValue] = useState(240)
    return (
        <>
            <p className={style.counter}>My Counter</p>
            <p className={style2.counter}>Value: <span style={value>=250?{color:"red"}:{color:"black"}}>{value}</span></p>
            <button onClick={handlerClick}>Up</button>
        </>
    )
}
export default Counter