import { useReducer } from "react";
import { setInitialValue, counterReducer, fetchRandomValFromAPI } from "../counter-reducer.js";

const CounterComponent = () => {

    // les trois paramètres doivent être dans cet ordre, au milieu l'initial value
    const [counter, dispatchCounter] = useReducer(
        counterReducer,
        0,
        setInitialValue,
    )

    const incrValue = 3;

    return (
        <div>
            <div>Counter : {counter}</div>
            <button onClick={() => dispatchCounter({
                type: 'increment'
            })}>+1</button>
            <button onClick={() => dispatchCounter({
                type: 'customIncrement',
                payload: { incrValue }
            })}>+{incrValue}</button>
            <button onClick={async () => dispatchCounter({
                type: 'setRndFromAPI',
                payload: await fetchRandomValFromAPI()
            })}>+ randFromAPI</button>
        </div>
    );
};

export default CounterComponent;