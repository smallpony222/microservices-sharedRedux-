import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import "./index.css";

import { StoreProvider } from "store/store";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div>App : nav</div>
    </div>
  );
};

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
