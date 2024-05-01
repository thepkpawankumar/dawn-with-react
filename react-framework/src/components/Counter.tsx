import React, { useState } from "react";

const Counter: React.FC = () => {

    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count => count+1);
    return (
        <>
          <button onClick = {handleClick}>Count {count}</button>
        </>
    )
}

export default Counter;