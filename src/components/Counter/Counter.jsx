import React, { useEffect, useState } from "react";
import { CounterWrapper } from "./Counter.styled";

export default function Counter() {

const [counter, setCounter] = useState(0);

const [resultColor, setResultColor] = useState(getRandomColor);


useEffect(()=> {
    setResultColor(getRandomColor())
}, [counter])


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// setResultColor(getRandomColor());




  return (
    <CounterWrapper bgc={resultColor}>
      
      <span>{counter}</span>
      <button onClick={() => setCounter(counter +1)}>Plus</button>
      <button onClick={() => setCounter(counter -1)}>Minus</button>
    </CounterWrapper>
  );
}
