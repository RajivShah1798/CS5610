import React, { useState } from "react";
import { start } from "repl";

const DateStateVariable = () => {
    const [startDate, setStartDate] = useState(new Date());
    const dateObjectToHTMLString = (date: Date) => {
        return `${date.getFullYear()} - ${date.getMonth() + 1 < 10 ? 0 : ""}${date.getMonth() + 1}
        - ${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`
    };

    return (
        <div>
            <h2>Date State Variables</h2>
            <h3>{JSON.stringify(startDate)}</h3>
            <h3>{dateObjectToHTMLString(startDate)}</h3>
            <input type="date"
             className="form-control" 
             value={dateObjectToHTMLString(startDate)}
             onChange={(e) => {setStartDate(new Date(e.target.value))}}/>
        </div>
    );
};

export default DateStateVariable;