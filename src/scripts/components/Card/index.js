import React, { Component } from "react";
import PropTypes from "prop-types";
import { pickRandom } from "../..";

//styled
import StyledCard from "./Card.css";
import TypingText from "../TypingText";

const directions = ["top", "right", "bottom", "left"];

class Card extends Component {
  static propTypes = {
    cardWidth: PropTypes.number.isRequired,
    textId: PropTypes.string.isRequired,
    item: PropTypes.shape({
      color: PropTypes.string,
      text: PropTypes.string,
      backupColor: PropTypes.string
    }).isRequired,
    getNewWord: PropTypes.func.isRequired
  };

  state = {
    animation: null,
    completedWord: null
  };

  setComplete = textId => {
    setTimeout(() => {
      this.setState({
        completedWord: textId,
        animation: pickRandom(directions)
      });
    }, 2000);
  };

  handleTransition = e => {
    if (e.type === "transitionend") {
      this.props.getNewWord(this.state.completedWord);
    }
  };

  render() {
    const { cardWidth, item, textId } = this.props;
    return (
      <StyledCard
        cardWidth={cardWidth}
        className="card-wrapper"
        current={item.color}
        backupColor={item.backupColor}
        animation={this.state.animation}
      >
        <div
          className={`card-content current`}
          onTransitionEnd={this.handleTransition}
        >
          <TypingText
            setComplete={this.setComplete}
            textId={textId}
            fullText={item.text}
          />
        </div>
        <div className="card-content backup" />
      </StyledCard>
    );
  }
}

export default Card;
