import React from "react";
import { useState} from "react";

const AddBtn = ({initial})=>{
    const [nested,setnested] = useState([initial])

    const checkadd = ()=>{
        console.log("clicked")
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