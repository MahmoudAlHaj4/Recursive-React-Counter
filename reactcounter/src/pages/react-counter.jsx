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
      return nested.length === 0 ? null : (
    <div className="counter-container">
      <div className="counter">
        - {initial}
        <button onClick={() => addRemove("+")}>+</button>
        <button onClick={() => addRemove("-")}>-</button>
      </div>

      {nested.map((element, index) => {
        return <AddBtn initial={index + 1} key={index} />;
      })}
    </div>
  );
}
export default AddBtn