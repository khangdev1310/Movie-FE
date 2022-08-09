import React, { useState } from 'react';

type Props = {};

const ErrorBoundaryTest = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  if (counter === 5) {
    throw new Error('Show  error boundary');
  }

  return (
    <div>
      {counter}

      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default ErrorBoundaryTest;
