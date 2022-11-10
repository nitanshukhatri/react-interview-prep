import React, { useContext } from "react";
import { increase } from "../ducks/actions/countActions";
import { CounterContext } from "../App";

export default function Increase() {
  const { dispatch } = useContext(CounterContext);

  return <button onClick={() => dispatch && dispatch(increase())}>+</button>;
}
