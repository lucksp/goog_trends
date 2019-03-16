import React, { Component } from "react";

//styled
import StyledCard from "./Card.css";

const colors = ["83FF09", "E8BB0C", "FF6100", "E80C6D", "630DFF"];

const pickRandom = () => colors[Math.floor(Math.random() * colors.length)];

class Card extends Component {
  render() {
    return (
      <StyledCard
        cardWith={this.props.cardWith}
        className="card"
        color={pickRandom()}
      >
        <div className="card-content">{this.props.text.toLowerCase()}</div>
      </StyledCard>
    );
  }
}

export default Card;
