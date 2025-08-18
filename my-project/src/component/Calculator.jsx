import React, { useState } from "react";
import ButtonGrid, { sum, subtract, multiply, divide } from "./ButtonGrid";
import Display from "./Display";

export default function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
        setResult("");
    };

    const handleCalculate = () => {
        try {
            
            const match = input.match(/^(\d+)([+\-*/])(\d+)$/);
            if (!match) {
                setResult("Error");
                return;
            }
            const [, a, operator, b] = match;
            let res;
            switch (operator) {
                case "+":
                    res = sum(Number(a), Number(b));
                    break;
                case "-":
                    res = subtract(Number(a), Number(b));
                    break;
                case "*":
                    res = multiply(Number(a), Number(b));
                    break;
                case "/":
                    res = divide(Number(a), Number(b));
                    break;
                default:
                    res = "Error";
            }
            setResult(res);
        } catch {
            setResult("Error");
        }
    };

    return (
        <div className="calculator p-4 max-w-md mx-auto ">
            <Display input={input} result={result} />
            <ButtonGrid
                onClick={handleClick}
                onClear={handleClear}
                onCalculate={handleCalculate}
            />
        </div>
    );
}
