import axios from "axios";

const setInitialValue = (initialValue) => {
    return initialValue;
}

const fetchRandomValFromAPI = async () => {
    const randNum = await axios
        .get('https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain')
        .then(resp => resp.data);
    return (randNum);
}

const counterReducer = (currentState, action) => {
    // action a un type et un payload comme dans Redux
    // console.log(action);
    switch (action.type) {
        case 'increment':
            return currentState + 1;
        case 'decrement':
            return currentState - 1;
        case 'reset':
            return setInitialValue(0);
        case 'customIncrement':
            return currentState + Number(action.payload.incrValue)
        case 'setRndFromAPI':
            return Number(action.payload)
        default:
            return currentState;
    }
}

export { setInitialValue, counterReducer, fetchRandomValFromAPI }