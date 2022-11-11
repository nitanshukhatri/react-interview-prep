import React, { useReducer } from "react";

const initialState = { count: 0 };
function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
export function ReducerCounter() {
  // First render will create the state, and it will
  // persist through future renders
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {state.count}

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
