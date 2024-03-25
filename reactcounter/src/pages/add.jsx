import React from "react";
import { useState } from "react";


const AddButtons = () => {
  const [addbtn, setAddbtn] = useState(1);

  const addButton = () => {
    setAddbtn(addbtn + 1);
  };

  const removeButton = () => {
    if (addbtn > 1) {
      setAddbtn(addbtn - 1);
    }
  };

  const callButtons = () => {
    let buttons = [];
    for (let i = 0; i < addbtn; i++) {
      buttons.push(
        <div key={i} className="btns">
          <p>{i}</p>
          <button onClick={addButton}>+</button>
          <button onClick={removeButton}>-</button>
        </div>
      );
    }
    return buttons;
  };

  return <div>{callButtons()}</div>;
};

export default AddButtons;


  