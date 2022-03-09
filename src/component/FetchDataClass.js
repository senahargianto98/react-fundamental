import React, { Component } from "react";
// import axios from "axios";

export default class FetchDataClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["data1", "data2"],
    };
  }

  getData = async () => {
    try {
      // const response = await axios.get(
      //   `https://api.fonnte.com/phonelist/6282227097005`
      // );
      this.setState({ data: [...this.state.data, "data3"] });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState.data);
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        {this.state.data.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    );
  }
}
