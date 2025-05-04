import React from "react";
import ReactDOM from "react-dom/client";

/* const link1 = React.createElement("a", {href: "//react.dev"}, "Read more about React");
const p1 = React.createElement("p", null, link1);

const link2 = React.createElement("a", {href: "//react.dev"}, "Read more about React");
const p2 = React.createElement("p", null, link2);

const link3 = React.createElement("a", {href: "//react.dev"}, "Read more about React");
const p3 = React.createElement("p", null, link3);

const group = React.createElement(React.Fragment, null, p1, p2, p3); */

class Link extends React.Component {
  render() {
    /* const link = React.createElement(
      "a",
      { href: `${this.props.url}` },
      `Read more about ${this.props.framework}`
    ); */

    /* if (this.props.framework === "React")
      return React.createElement("h1", null, link); */

    return React.createElement(
      "p",
      null,
      React.createElement("a", { href: this.props.url }, this.props.children)
    );

    /* return React.createElement(
      "p",
      null,
      React.createElement(
        "a",
        { href: `${this.props.url}` },
        `Read more about ${this.props.framework}`
      )
    ); */
  
  }
}
const boldReact = React.createElement("strong", null, "React");
const link1 = React.createElement(Link, { url: "//react.dev" }, boldReact);

/* const link2 = React.createElement(Link, {
  framework: "Vue",
  url: "//vuejs.org",
});

const link3 = React.createElement(Link, {
  framework: "Angular",
  url: "//angular.io",
}); */

const link2 = React.createElement(Link, { url: "//vuejs.org" }, "Vue");

const link3 = React.createElement(Link, { url: "//angular.io" }, "Angular");

const group = React.createElement(React.Fragment, null, link1, link2, link3);

const domElement = document.getElementById("root");
ReactDOM.createRoot(domElement).render(group);
