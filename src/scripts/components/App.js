import React, { Component } from "react";
import Home from "./Home";
import { GlobalStyle } from "./GlobalStyle.css";

class App extends Component {
  state = {
    data: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const data = await fetch("/data").then(response => response.json());

    if (data.length) {
      this.setState({ data, loading: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        {this.state.loading ? (
          <div>Loading data...</div>
        ) : (
          <Home data={this.state.data} gridSize={5} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
