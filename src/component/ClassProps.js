import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    return (
      <>
        <main>
          <h2>Props Class, {this.props.name}</h2>
        </main>
      </>
    );
  }
}
