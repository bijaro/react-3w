import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0)
    const increase = () =>
    {
        setCount(count+1)
    }
     const decrease = ()=>{
        setCount(count-1)
    }
    return (

        <div>
            <button onClick={increase}>+</button>
            <p>{count}</p>
            <button onClick={decrease}>-</button>
        </div>

    );
}
