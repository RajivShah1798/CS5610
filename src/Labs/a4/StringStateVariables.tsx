import React, { useState } from "react";

const StringStateVariables = () => {
    const [userName, setUserName] = useState("John Doe");

    return (
        <div>
            <h2>String State Variables</h2>
            <p>{ userName }</p>
            <input type="text" className="form-control" 
            value={ userName }
            onChange={(e) => setUserName(e.target.value)}/>
        </div>
    );
};

export default StringStateVariables;