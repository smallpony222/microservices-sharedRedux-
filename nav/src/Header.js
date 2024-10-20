import React from "react";

import { useStore } from "store/store";
import "./index.css";

const Header = () => {
  const { count, increment, decrement, clear } = useStore();
  return (
    <div className="header">
      <div className="float-left">
        <h3>App Header</h3>
      </div>
      <div className="float-right">
        Count : <b>{count}</b>&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={increment}>
          +
        </button>
        <button type="button" onClick={decrement}>
          -
        </button>
        <button type="button" onClick={clear}>
          X
        </button>
      </div>
    </div>
  );
};

export default Header;
