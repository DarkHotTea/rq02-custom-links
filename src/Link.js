import React, { Component } from "react";

class Link extends Component {
  render() {
    /* return React.createElement(
      "p",
      null,
      React.createElement(
        "a",
        { href: this.props.url },
        `Read more about ${this.props.framework}`
      )
    ); */

    return (
      <p>
        <a href={this.props.url}>{this.props.children}</a>
      </p>
    );
  }
}

export default Link;
