import React from 'react';
import { useState, useEffect } from 'react';


const Counter = (props) => {
    const [counter, setCounter] = useState();

    useEffect(() => {
      setCounter(1);
    }, []);

    const increaseCount = () => {
        setCounter((prevCount) => prevCount + 1);
    }

    const decreaseCount = () => {
        setCounter((prevCount) => prevCount - 1);
    }

    return (
        <div>
            <button onClick={increaseCount} className='btn-style'>{props.increase}</button>
                <h1>{counter}</h1>
            <button onClick={decreaseCount} className='btn-style'>{props.decrease}</button>
        </div>
    );
}

export default Counter;