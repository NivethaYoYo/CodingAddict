import react from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return <h1>My First Component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
