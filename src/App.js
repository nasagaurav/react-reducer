import React, { useReducer } from 'react';

const intialState = { x: 0 };
function reducer(state = intialState, action) {
  switch (action.type) {
    case '+':
      return { x: state.x + 1 };
    case '-':
      return { x: state.x - 1 };
    case '0':
      return { x: 0 };
    case 'thousand':
      return { x: 1000 };
    case '2k':
      return { x: 2000 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  // console.log(state)

  const p1 = () => {
    dispatch({ type: '+' });
  };
  const p2 = () => {
    dispatch({ type: '-' });
  };
  const p3 = () => {
    dispatch({ type: '0' });
  };
  const p4 = () => {
    dispatch({ type: 'thousand' });
  };
  const p5 = () => {
    dispatch({ type: '2k' });
  };
  return (
    <div>
      <h1>counter : {state.x}</h1>
      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
      <button onClick={p3}>0</button>
      <button onClick={p4}>1000</button>
      <button onClick={p5}>2000</button>
    </div>
  );
}
