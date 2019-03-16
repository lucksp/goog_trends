import React, { Component } from "react";

class App extends Component {
  state = {
    data: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    return this.state.loading && <div>Loading data...</div>;
  }
}

export default App;
