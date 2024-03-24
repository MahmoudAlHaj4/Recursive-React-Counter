import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div className="counter">
        <p>-1</p>
        <button onClick={console.log("clicked")}>+</button>
        <button onClick={console.log("clicked2")}>-</button>
    </div>
  );
};

export default Home;