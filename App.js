const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello I am h1 tag"),
    React.createElement("h2", {}, "hello I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "hello I am h1 tag"),
    React.createElement("h4", {}, "hello I am h2 tag"),
  ])
]
);

console.log(parent); //returns object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
