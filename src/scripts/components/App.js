import React, { Component } from "react";

//styled
import Home from "./Home";
import { GlobalStyle } from "./GlobalStyle.css";

class App extends Component {
  state = {
    data: [],
    loading: true
  };

  async componentDidMount() {
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
          <Home data={this.state.data} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
