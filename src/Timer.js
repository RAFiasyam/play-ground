import React, { useEffect, useState } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [])

  return (
    <div>
        <h1>{seconds} Seconds</h1>
    </div>
  )
}

export default Timer