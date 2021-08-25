import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet"


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havenese",
    }),
    React.createElement(Pet, {
      name: "Snuggles",
      animal: "Bird",
      breed: "Amazon Parrot",
    }),
    React.createElement(Pet, {
      name: "Genki",
      animal: "Dog",
      breed: "Mixed",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
