import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const popMe = () => {
        setCount(count + 5);
    };
    return (
        <div>
            <p>{count}</p>
            <button onClick={popMe}>Pop me!"</button>
        </div>
    )
}

export default Counter