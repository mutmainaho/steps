import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("Nov 9 2023");
  date.setDate(date.getDate() + count);

  //   function handlePrev() {
  //     if (count > 1) setCount((c) => c - 1);
  //   }
  //   function handleNext() {
  //     if (count < 1) setCount((c) => c + 1);
  //   }

  return (
    <div className="counter" style={{ textAlign: "center" }}>
      <div>
        <span>step : {step}</span>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <span>count : {count}</span>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        {" "}
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}
