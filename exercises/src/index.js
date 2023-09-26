import react from "react";
import ReactDOM from "react-dom/client";

/*function Greeting() {
  return (
    <div>
      <h1>My First Component</h1>
    </div>
  );
}*/

function Greeting() {
  return react.createElement(
    "div",
    {},
    react.createElement("h2", {}, "My First Component")
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
