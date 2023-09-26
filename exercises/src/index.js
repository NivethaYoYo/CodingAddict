import React from "react";
import ReactDOM from "react-dom/client";

/*function Greeting() {
  return (
    <>
      <div className="someValue">
        <h1>My First Component</h1>
        <ul>
          <li>
            <a href="">Hello World Dumbos</a>
          </li>
        </ul>
      </div>
      <h2>Hello World, Hello!</h2>
      <input type="text" name="" id="" />
    </>
  );
}*/

function Greeting() {
  return <h2>My First Component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
