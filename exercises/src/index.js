import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <listofarticles>
      <Book />
      <Book />
    </listofarticles>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/718aEV+GLnL._SY522_.jpg"
    alt="Image of Yogi"
  />
);
const Title = () => {
  return <h2>Autobiography of a Yogi</h2>;
};
const Author = () => <h4>Paramahansa Yogananda</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
