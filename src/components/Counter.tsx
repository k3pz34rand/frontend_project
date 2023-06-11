import { useState } from "react";
import classes from "./Counter.module.scss";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div className={classes.btn}>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>increment</button>
        </div>
    );
}
