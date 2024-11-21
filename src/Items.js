import React, { useEffect, useState } from 'react';

function Items() {
  const [items, setItems] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval
    if(isRunning) {
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

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = event.target.newItem.value;

    if (newItem.trim()) {
      setItems([...items, newItem]);
      event.target.newItem.value = '';
    } else {
      alert('Please enter an item name.');
    }
  };


  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <form onSubmit={handleAddItem}>
        <input type="text" name="newItem" placeholder="Enter item name" />
        <button type="submit">Add Item</button>
      </form>
      {items.length > 0 && (
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <h1>NomorPs: {item}</h1>
              <h2>Timer: {seconds} Seconds</h2>
              <div>
                <button onClick={startTimer} disabled={isRunning}>Start</button>
                <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
              </div>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Items;