import React from "react";
import Button from "./Button";




export default function ButtonGrid({ onClick, onClear, onCalculate }) {
const button = [
    ["C", "col-span-2 bg-red-500 text-white", onClear],
     ["=", "col-span-2 bg-green-500 text-white", onCalculate],
    ["/", "bg-gray-300 text-white", () => onClick("/")],
    ["*", "bg-gray-300 text-white", () => onClick("*")],
    ["-", "bg-gray-300 text-white", () => onClick("-")],
    ["+", "bg-gray-300 text-white", () => onClick("+")],
   
    ["0", "bg-gray-300", () => onClick("0")],
    ["1", "bg-gray-300", () => onClick("1")],
    ["2", "bg-gray-300", () => onClick("2")],
    ["3", "bg-gray-300", () => onClick("3")],
    ["4", "bg-gray-300", () => onClick("4")],
    ["5", "bg-gray-300", () => onClick("5")],
    ["6", "bg-gray-300", () => onClick("6")],
    ["7", "bg-gray-300", () => onClick("7")],
    ["8", "bg-gray-300", () => onClick("8")],
    ["9", "bg-gray-300", () => onClick("9")],
];
return (
    <div className="grid grid-cols-4 gap-2 mt-4">
        {button.map(([label, style, handler], index) => (
            <Button
                key={index}
                label={label}
                style={style}
                onClick={handler}
            />
        ))}
    </div>
)
};

