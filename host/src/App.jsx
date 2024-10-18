import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";

import { StoreProvider, useStore } from "store/store";
import Header from "nav/Header";

import "./index.css";

const App = () => {
  const { count, increment, decrement, clear } = useStore();

  return (
    <div className="container host">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Header />
      </ErrorBoundary>
      <br />
      <br />
      <div>App : host</div>
      <br />
      <h2>{count}</h2>&nbsp;
      <button type="button" onClick={increment}>
        Increment
      </button>
      &nbsp;
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
