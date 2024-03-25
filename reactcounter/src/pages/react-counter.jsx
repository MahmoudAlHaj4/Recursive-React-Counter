import React from "react";
import { useState} from "react";

const AddBtn = ({initial})=>{
    const [nested,setnested] = useState([initial])


    const addRemove = (operation)=>{
        switch(operation){
            case "+":
            setnested([...nested, initial])
            break;

            case "-":
                setnested([])
                break;

            default:
        }
    const checkRemove = ()=>{
        console.log("checked 2")
    }
    return (
        <div>
            - <button onClick={checkadd}>+</button>
                <button onClick={checkRemove}>-</button>
        </div>

    )
}
export default AddBtn