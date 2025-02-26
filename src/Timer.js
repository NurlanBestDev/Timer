import React, { useState, useEffect } from 'react';

function Timer() {
    const [timerValue, setTimerValue] = useState(10);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        let timer;
        if (isActive && timerValue > 0) {
            timer = setInterval(() => {setTimerValue(prevValue => prevValue - 1);}, 1000);
        } else if (timerValue === 0) {
            clearInterval(timer);
            setIsActive(false);
        }
        return () => clearInterval(timer);
    }, [isActive, timerValue]);
    function handleStart() {
        setTimerValue(10); 
        setIsActive(true);
    };
    function renderTimerValue() {
        if (timerValue > 0) {
            return timerValue;
        } else {
            return <span className="boom">Boom!</span>;
        }
    };
    return (
        <div className='container'>
            <div className='timer'>{renderTimerValue()}</div>
            <button onClick={handleStart} className='btn'>Start</button>
        </div>
    );
};

export default Timer;
