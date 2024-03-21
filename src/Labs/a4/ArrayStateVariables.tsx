import React, { useState } from "react";

const ArrayStateVariables = () => {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };

    const deleteElement = (indexNumber : number) => {
        setArray(array.filter((item , i) => i != indexNumber));
    };

    return (
        <div>
            <h2>Array State Variable</h2>
            <button onClick={addElement}
            className="btn btn-success">Add Element</button>
            <br />
            <br />
            <ul className="list-group">
                {array.map((item, index) => (
                    <li key={index} className = "list-group-item">
                        {item}
                        <button className="btn btn-danger float-end"
                        onClick={() => deleteElement(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArrayStateVariables;
