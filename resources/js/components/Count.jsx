import React, { useState } from 'react';

function Count() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Count;

