import React, { Component } from "react";

//styled
import Home from "./Home";
import { GlobalStyle } from "./GlobalStyle.css";
import GridSize from "./GridSize";

class App extends Component {
  state = {
    data: [],
    loading: true,
    gridSize: 5
  };

  async componentDidMount() {
    const data = await fetch("/data").then(response => response.json());

    if (data.length) {
      this.setState({ data, loading: false });
    }
  }

  handleSelectSize = gridSize => {
    this.setState({ gridSize });
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        {this.state.loading ? (
          <div>Loading data...</div>
        ) : (
          <React.Fragment>
            <GridSize
              handleClick={this.handleSelectSize}
              size={this.state.gridSize}
            />
            <Home data={this.state.data} gridSize={this.state.gridSize} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;
