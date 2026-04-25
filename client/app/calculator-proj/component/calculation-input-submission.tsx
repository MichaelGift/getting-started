"use client";
import { useState } from "react";

export default function CalculationInputsSubmission() {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [operation, setOperation] = useState("");
  const [answer, setAnswer] = useState(0);

  const calculateOpTotal = (a: number, b: number, op: string) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? 0 : a / b;
      default:
        return 0;
    }
  };

  const handleNumberClick = (val: number) => {
    if (operation === "") {
      setNumOne(Number(String(numOne) + val));
    } else {
      setNumTwo(Number(String(numTwo) + val));
    }
  };

  const handleClear = () => {
    setNumOne(0);
    setNumTwo(0);
    setOperation("");
    setAnswer(0);
  };

  const allNumberss = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/"];

  return (
    <>
      <h1>Calculator</h1>
      <p>
        {numOne} {operation} {numTwo}
      </p>

      <div>
        {allNumberss.map((val) => (
          <button key={val} onClick={() => handleNumberClick(val)}>
            {val}
          </button>
        ))}
      </div>

      <div>
        {operations.map((op) => (
          <button key={op} onClick={() => setOperation(op)}>
            {op}
          </button>
        ))}
      </div>

      <button
        onClick={() => setAnswer(calculateOpTotal(numOne, numTwo, operation))}
        type="button"
      >
        Submit
      </button>

      <button onClick={handleClear} type="button">
        Clear
      </button>

      <p>Answer: {answer}</p>
    </>
  );
}
