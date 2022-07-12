import React from "react";
import Data from "./Data";
import "../Styles/App.css";
const Events = () => {
  return (
    <>
      <div className="comp-wrapper">
        <h2 className="title-wrapper">Events</h2>
        <div>
          <Data></Data>
          {/* // logic shit here */}
        </div>
      </div>
    </>
  );
};

export default Events;
