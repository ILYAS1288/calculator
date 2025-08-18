import React from "react";

export default function Display({input, result}){
    return(
        <div className="mb-4">
            <div className=" bg-gray-200 p-2 rounded p-3 text-right  text-lg font-mono mb-2">
                {input || "0"}
            </div>
            <div className="bg-gray-100 p-2 rounded p-3 text-right text-lg font-mono">
                {result || "0"}
            </div>

        </div>
    )
}