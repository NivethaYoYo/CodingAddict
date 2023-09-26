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
  return (
    <div>
      <FirstComponent></FirstComponent>
      <Para />
    </div>
  );
}

const FirstComponent = () => <h2>My First Component</h2>;
const Para = () => {
  return (
    <div>
      <p>My first para</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
