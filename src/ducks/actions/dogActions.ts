import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IDogState } from "../reducers/dogReducer";

export enum DogActionTypes {
  RANDOM_DOG = "RANDOM_DOG",
  LOAD_DOG = "LOAD_DOG",
  ERROR = "ERROR",
  LOAD_DOG_LIST = "LOAD_DOG_LIST",
}

export interface IRandomDogAction {
  type: DogActionTypes.RANDOM_DOG;
  image: string;
}

export interface ILoadDogActionList {
  type: DogActionTypes.LOAD_DOG_LIST;
  list: { message: {}; status: string };
}

export interface ILoadDogAction {
  type: DogActionTypes.LOAD_DOG;
  loading: boolean;
}

export interface IErrorAction {
  type: DogActionTypes.ERROR;
  errorMessage: string;
}
export type DogActions = IRandomDogAction | ILoadDogAction | IErrorAction | ILoadDogActionList;

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const RandomDogAction: ActionCreator<ThunkAction<Promise<any>, IDogState, null, IRandomDogAction>> = (
  dogBreed: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      let result = await (await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)).json();
      if (result.status !== "success") throw new Error(result.message);
      dispatch({ image: result.message, type: DogActionTypes.RANDOM_DOG });
    } catch (err) {
      console.error(err);
      dispatch({ type: DogActionTypes.ERROR, errorMessage: err });
      dispatch({ type: DogActionTypes.LOAD_DOG, loading: false });
    }
  };
};

export const loadDogAction: ActionCreator<ThunkAction<void, IDogState, null, ILoadDogAction>> =
  (shouldLoad: boolean) => (dispatch: Dispatch) =>
    dispatch({ type: DogActionTypes.LOAD_DOG, loading: shouldLoad });

export const loadDogActionList: ActionCreator<ThunkAction<void, IDogState, null, ILoadDogActionList>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      let result = await (await fetch(`https://dog.ceo/api/breeds/list/all`)).json();
      if (result.status !== "success") throw new Error(result.message);
      dispatch({ list: result.message, type: DogActionTypes.LOAD_DOG_LIST });
    } catch (err) {
      console.error(err);
      dispatch({ type: DogActionTypes.ERROR, errorMessage: err });
      dispatch({ type: DogActionTypes.LOAD_DOG_LIST, loading: false });
    }
  };
};
