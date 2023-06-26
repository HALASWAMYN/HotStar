import { useState } from "react";

const Hooks = () => {
    let [value,setValue] = useState('change me')
    let handleClick = ()=>{
        setValue('you changed')  
    }
    return ( 
        <div className="hooks">
            <h1>Use state hooks</h1>
            <h2>{value}</h2>
            <button onClick={handleClick}>Click</button>
        </div>
     );
}
 
export default Hooks;