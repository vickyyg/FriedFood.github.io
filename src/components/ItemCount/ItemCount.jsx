import React, { useState } from 'react';


const ItemCount = () => {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className='counter'>
      <button onClick={incrementCount} variant="danger">+</button>
      <span>{count}</span>
      <button onClick={decrementCount} variant="danger">-</button>
    </div>
  )
}

export default ItemCount;