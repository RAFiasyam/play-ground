import React, { useEffect, useState } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0);  
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning])

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(0);
    }

    return (
        <div>
            <h1>{seconds} Seconds</h1>
            <button onClick={startTimer} disabled={isRunning}>Start</button>
            <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
            <button onClick={resetTimer} >Reset</button>
        </div>
    )
}

export default Timer