import React from "react";
import { useState} from "react";

const AddBtn = ()=>{
    const [nested,setnested] = useState()
    return (
        <div>
            - <button>+</button>
                <button>-</button>
        </div>

    )
}
export default AddBtn