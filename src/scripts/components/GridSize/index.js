import React, { Component } from "react";

// styled
import StyledGridPicker from "./GridSize.css";

class GridSize extends Component {
  state = {
    size: null,
    hover: false
  };
  togglePicker = () => {
    this.setState({ hover: !this.state.hover });
  };

  componentDidMount() {
    this.setState({ size: this.props.size });
  }

  render() {
    let elements = [];
    for (let i = 0; i < this.state.size * 5; i++) {
      elements.push(
        <div
          key={i}
          className="box"
          onClick={() => {
            let size = (i + 1) % 5;
            this.props.handleClick(!!size ? size : 5);
          }}
        />
      );
    }

    return (
      <StyledGridPicker id="picker-wrapper" hover={this.state.hover}>
        <div id="picker" onMouseLeave={this.togglePicker}>
          {elements}
        </div>
        <div id="picker-icon" onMouseEnter={this.togglePicker} />
      </StyledGridPicker>
    );
  }
}

export default GridSize;
