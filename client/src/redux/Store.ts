import { AnyAction, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import { Reducer } from "./Reducer";

export const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//* Hooks -> https://www.youtube.com/watch?v=SM3uwYgGxNE&t=256s
export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

//* https://lightrun.com/answers/reduxjs-redux-thunk-thunkaction-is-not-assignable-to-parameter-of-type-anyaction
//! OTRA MANERA DE USAR EL "useDispatch()" CAMUFLANDO EL "any"
export type AppDispatch<T> = ThunkDispatch<T, any, AnyAction>;