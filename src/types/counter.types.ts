import { initialState } from "../ducks/reducers/countReducer";
export type CounterContextType = {
  state: typeof initialState;
  dispatch?: React.Dispatch<any>;
};
