import JsonStringify from "./JsonStringify"
import House from "./House";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function Json() {

    return (
        <>
            <JsonStringify/>
            <House/>
            <Spreading/>
            <Destructing/>
            <FunctionDestructing/>
        </>
    );
};

export default Json;