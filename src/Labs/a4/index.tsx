import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariables from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
    const sayHello = () => {
        alert("Hello");
    }
    return (
        <>
            <h1>Assignment 4</h1>
            <ReduxExamples />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariables />
            <ParentStateComponent />
        </>
    );
};

export default Assignment4;