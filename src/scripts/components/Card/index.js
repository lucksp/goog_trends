import React, { Component } from "react";

//styled
import StyledCard from "./Card.css";

class Card extends Component {
  render() {
    return (
      <StyledCard cardWith={this.props.cardWith} className="card">
        {this.props.text}
      </StyledCard>
    );
  }
}

export default Card;
