import * as React from "react";

const buttonStyle = {
    fontSize: "xx-large",
    padding: 10,
    margin: 5,
};

const Counter = ({ settings }) => {
    const { min, max, start, change } = settings;
    const [count, setCount] = React.useState(start);
    const decrement = () => {
        count - change >= min
            ? setCount((count) => count - change)
            : setCount(() => min);
    };

    const reset = () => setCount(() => start);

    const increment = () => {
        count + change <= max
            ? setCount((count) => count + change)
            : setCount(() => max);
    };
    return (
        <section>
            <p>
                The count is <code>{count}</code>
            </p>
            <button onClick={decrement} style={buttonStyle}>
                -
            </button>
            <button onClick={reset} style={buttonStyle}>
                Reset
            </button>
            <button onClick={increment} style={buttonStyle}>
                +
            </button>
        </section>
    );
};

export default Counter;
