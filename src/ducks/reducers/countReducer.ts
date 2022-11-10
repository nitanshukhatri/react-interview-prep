export const initialState = {
  counter: 0,
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "INCREASE": {
      return { counter: state.counter + 1 };
    }

    case "DECREASE": {
      return { counter: state.counter - 1 };
    }
    default:
      return state;
  }
}
