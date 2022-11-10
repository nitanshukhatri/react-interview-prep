import React, { useContext } from "react";
// import Decrease from "./Decrease";
import Increase from "./Increase";
import { CounterContext } from "../App";

export default function Counter() {
  const { state } = useContext(CounterContext);

  return (
    <>
      <h1>{state.counter}</h1>
      <Increase />
    </>
  );
}
