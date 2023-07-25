export function useCustomState(initial: any) {
  let str = initial;
  return [
    // why is the state value a function? No re-render in vanilla JavaScript like in React.
    // if you just use the value (no function), then change it with the setter function(setState) and then the log value, it will reference a "stale" value (stale closure) -> the initial value not the changed value
    () => str,
    (value: any) => {
      str = value;
    },
  ];
}

export function useCustomReactState(initial: any) {
  let _val = ""; // hold our state in module scope
  return {
    useState(initialValue: any) {
      _val = _val || initialValue; // assign anew every run
      function setState(newVal: any) {
        _val = newVal;
      }
      return [_val, setState];
    },
  };
}
