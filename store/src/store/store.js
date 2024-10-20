import React from "react";
import { createStore } from "redux";
import rootReducer from "./reducer";
import { Provider, useSelector, useDispatch } from "react-redux";
import { increment, decrement, clear } from "./actions";

const store = createStore(rootReducer);

export function useStore() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    clear: () => dispatch(clear()),
  };
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
