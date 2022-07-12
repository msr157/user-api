import { React } from "react";
import Data from "./Data";
import "../Styles/App.css";

const Alerts = () => {
  return (
    <>
      <div className="comp-wrapper">
        <h2 className="title-wrapper">Alerts</h2>
        <div className="alerts-field">
          <Data></Data>
        </div>
      </div>
    </>
  );
};

export default Alerts;
