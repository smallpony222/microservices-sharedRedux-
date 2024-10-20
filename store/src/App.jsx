import React from "react";
import ReactDOM from "react-dom";

import { StoreProvider, useStore } from "./store/store";

import "./index.css";

const App = () => {
  const { count, increment, decrement, clear } = useStore();

  return (
    <div className="container">
      {count}&nbsp;
      <br />
      <button type="button" onClick={increment}>
        Increment
      </button>
      &nbsp;
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      &nbsp;
      <button type="button" onClick={clear}>
        Clear
      </button>
      &nbsp;
      <div>App : store</div>
    </div>
  );
};

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
