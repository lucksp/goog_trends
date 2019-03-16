import React, { Component } from "react";
import PropTypes from "prop-types";

//styled
import StyledHome from "./Home.css";
import Row from "../Row";

const chunkArray = (array, size) => {
  const splitArr = array.splice(0, size * size);
  const remainingData = array;
  const dataToRender = [];

  function splitIntoChunks() {
    for (let i = 0; i < splitArr.length; i += size) {
      dataToRender.push(splitArr.slice(i, i + size));
    }
  }

  splitIntoChunks();
  return { dataToRender, remainingData };
};

class Home extends Component {
  static propTyes = {
    data: PropTypes.array.isRequired,
    gridSize: PropTypes.number
  };

  static defaultProps = {
    gridSize: 5
  };
  state = {
    dataToRender: [],
    remainingData: []
  };

  componentDidMount() {
    const { dataToRender, remainingData } = chunkArray(
      this.props.data,
      this.props.gridSize
    );

    this.setState({
      dataToRender,
      remainingData
    });
  }

  //   componentDidUpdate(prevProps, prevState) {
  //   }

  render() {
    const splitRows = this.state.dataToRender.map((row, i) => (
      <Row data={row} key={i} rowHeight={this.props.gridSize} />
    ));
    return <StyledHome>{splitRows}</StyledHome>;
  }
}

export default Home;
