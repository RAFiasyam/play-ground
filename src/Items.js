import React, { useState } from 'react'

function Items() {
    const [items, setItems] = useState([]);

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    }

    const addItem = (newItem) => {
        setItems([...Items, newItem]);
    }

    return (
        <div>
            <button onClick={() => addItem('New items')}>Add a item</button>
            {items.length > 0 && (
                items.map((item, index) => (
                    <div key={index}>
                        {item}
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default Items