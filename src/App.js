import React, { Fragment, Component } from "react";
import Link from "./Link";
import ButtonList from "./ButtonList";

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
    const world = <em>World</em>;
    const dateTimeNow = new Date().toLocaleString();

    return (
      /* const title = <h1>Hello <em>World</em>!</h1>; */

      /* const link1 = React.createElement(Link, {
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
    }); */

      /* const link1 = <Link url="//react.dev" framework="React"/>;
      const link2 = <Link url="//vuejs.org" framework="Vue"/>;
      const link3 = <Link url="//angular.io" framework="Angular"/>; */

      <Fragment>
        <h1>Hello {world}!</h1>
        <span>Current date and time is {dateTimeNow}.</span>
        <Link url="//react.dev">
          <strong>React</strong>
        </Link>
        <Link url="//vuejs.org" children={"Vue"}/>
        <Link url="//angular.io">Angular</Link>
        <ButtonList />
      </Fragment>
    );
  }
}

export default App;
