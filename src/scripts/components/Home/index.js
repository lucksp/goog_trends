import React, { Component } from "react";
import PropTypes from "prop-types";

//styled
import StyledHome from "./Home.css";
import Row from "../Row";

const colorsArray = ["83FF09", "E8BB0C", "FF6100", "E80C6D", "630DFF"];

const pickRandom = () =>
  colorsArray[Math.floor(Math.random() * colorsArray.length)];

// split original data into usable arrays
const chunkArray = (array, size) => {
  const splitArr = array.splice(0, size * size);
  const remainingData = array;
  const dataToRender = [];

  function splitIntoChunks() {
    for (let i = 0; i < splitArr.length; i += size) {
      let tempArr = splitArr.slice(i, i + size).map(item => {
        return {
          text: item,
          color: pickRandom(colorsArray)
        };
      });

      dataToRender.push(tempArr);
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
    gridSize: 2
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

  getNewWord = wordId => {
    const splitWordId = wordId.split("-");
    const rowIndex = {
      row: splitWordId[0],
      index: splitWordId[1]
    };
    let newState = { ...this.state };
    let newWordIndex = Math.floor(
      Math.random() * this.state.remainingData.length
    );

    const newWordObj = {
      text: this.state.remainingData[newWordIndex],
      color: pickRandom(colorsArray)
    };
    newState.dataToRender[rowIndex.row][rowIndex.index] = newWordObj;
    newState.remainingData.splice(newWordIndex, 1);

    this.setState(newState);
  };

  render() {
    const splitRows = this.state.dataToRender.map((row, i) => (
      <Row
        data={row}
        rowNumber={i}
        key={i}
        rowHeight={this.props.gridSize}
        getNewWord={this.getNewWord}
      />
    ));
    return <StyledHome>{splitRows}</StyledHome>;
  }
}

export default Home;
