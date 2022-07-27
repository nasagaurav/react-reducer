import React, { useReducer } from 'react';

const intialState = { x: 0 };
function reducer() {
  return { x: 999 };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>counter : ?</h1>
      <button>+</button>
      <button>-</button>
      <button>0</button>
      <button>1000</button>
      <button>2000</button>
    </div>
  );
}
