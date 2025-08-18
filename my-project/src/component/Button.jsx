import React from "react";
export default function Button ({label, style, onClick}){
  return (<button onClick={onClick} className={`${style} rounded-full`}>{label}</button>)
}