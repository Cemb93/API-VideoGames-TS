import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

export const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//* Hooks -> https://www.youtube.com/watch?v=SM3uwYgGxNE&t=256s
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;