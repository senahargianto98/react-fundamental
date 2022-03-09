import React, { Component } from "react";

export default class SubmitdanInputClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: "",
      numberOfGuests1: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    console.log(this.state.numberOfGuests);
    console.log(this.state.numberOfGuests1);
  }

  render() {
    return (
      <div>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number of guests1:
          <input
            name="numberOfGuests1"
            type="number"
            value={this.state.numberOfGuests1}
            onChange={this.handleInputChange}
          />
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
