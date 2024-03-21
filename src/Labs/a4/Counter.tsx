import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(7);
    console.log(count);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)} className="btn btn-success">Up</button>
            <button onClick={() => setCount(count - 1)} className="btn btn-danger">Down</button>
        </div>
    );
};

export default Counter;