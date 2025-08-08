import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);

  return (
    <div id="wd-counter-use-state" className="p-3">
      <h2>Counter: {count}</h2>
      <div className="d-flex gap-2 mb-3">
        <button
          className="btn btn-success"
          onClick={() => setCount(count + 1)}
          id="wd-counter-up-click"
        >
          Up
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setCount(count - 1)}
          id="wd-counter-down-click"
        >
          Down
        </button>
      </div>

      <hr />
    </div>
  );
}
