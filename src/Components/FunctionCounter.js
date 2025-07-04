import React, { useState}from "react";
function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="card text-center p-4 shadow">
      <h3 className="mb-3">Function Component</h3>
      <h1 className="display-4 mb-4">{count}</h1>
      <div>
        <button
          className="btn btn-danger mx-2"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default FunctionCounter;