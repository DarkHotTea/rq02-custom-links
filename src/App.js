import React, { Fragment, Component } from "react";
import Link from "./Link";

/* class Link extends Component {
  render() {
    return React.createElement(
      "p",
      null,
      React.createElement(
        "a",
        { href: this.props.url },
        `Read more about ${this.props.framework}`
      )
    );
  }
} */

class App extends Component {
  render() {
    const link1 = React.createElement(Link, {
      url: "//react.dev",
      framework: "React",
    });

    const link2 = React.createElement(Link, {
      url: "//vuejs.org",
      framework: "Vue",
    });

    const link3 = React.createElement(Link, {
      url: "//angular.io",
      framework: "Angular",
    });

    return React.createElement(Fragment, null, link1, link2, link3);
  }
}

export default App;
