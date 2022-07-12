import React from "react";
import Alerts from "./Component/Alerts";
import Events from "./Component/Events";
import "./Styles/App.css";

const App = () => {
  const refreshMethod = () => {
    window.location.reload(false);
  };
  return (
    <>
      <div>
        <h1 className="app-name">Signal UI CONFIG</h1>
        <div className="rules-wrapper">
          <h2 className="rules-title">Rules</h2>
          <div className="btn-wrapper">
            <button className="btn" onClick={refreshMethod}>
              Refresh
            </button>
            <button className="btn">Add.....</button>
          </div>
        </div>
        <div className="component-wrapper">
          <Events></Events>

          <Alerts></Alerts>
        </div>
      </div>
    </>
  );
};

export default App;
