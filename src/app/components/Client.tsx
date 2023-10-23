"use client"; // tudo será carregado no navegador
/*
ex quando usar:
- api do react para controlar state
- document DOM
*/

import { useState } from "react";

export default function Client() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onPointerOut={() => setCount((oldValue) => oldValue - 1)}
        onClick={() => setCount((oldValue) => oldValue + 1)}
      >
        <h5>{count}</h5>
      </button>
    </div>
  );
}
