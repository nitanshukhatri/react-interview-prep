import validateAction from "./validateAction";

interface IStore {
  state: {};
  subscribe: (listener: any) => void;
  listeners: Array<[]>;
  dispatch: (action: any) => void;
  getState: () => void;
}
const createStore = (reducer: any, initialState: any) => {
  const store: IStore = {} as IStore;

  store.state = initialState;
  store.listeners = [];
  store.subscribe = (listener) => store.listeners.push(listener);
  store.dispatch = (action) => {
    validateAction(action);

    store.state = reducer(store.state, action);
    store.listeners.forEach((listener: any) => listener(action));
  };
  store.getState = () => store.state;
  store.dispatch({ type: "@@redux/INIT" });

  return store;
};

export default createStore;
