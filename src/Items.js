import React, { useState } from 'react';

function Items() {
  const [items, setItems] = useState([]);

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
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Items;