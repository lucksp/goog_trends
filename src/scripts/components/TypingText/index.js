import React, { Component } from "react";
import PropTypes from "prop-types";

// styled
import StyledTypingText from "./TypingText.css";

class TypingText extends Component {
  static defaultProps = {
    fullText: ""
  };

  static propTypes = {
    getNewWord: PropTypes.func.isRequired,
    fullText: PropTypes.string.isRequired
  };

  state = {
    text: "",
    isUpdating: false
  };
  timer = null;
  componentDidMount() {
    this.timer = setInterval(() => this.typeWord(), 250);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isUpdating && this.state.text === this.props.fullText) {
      // typing state is updated and it matches full word
      return this.prepareNewWord();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  typeWord = newWord => {
    const { fullText } = this.props;
    const { text } = this.state;

    if (text !== fullText) {
      this.setState(prevState => {
        return {
          text: newWord ? "" : fullText.substring(0, prevState.text.length + 1),
          isUpdating: true
        };
      });
    }
  };

  prepareNewWord = () => {
    clearInterval(this.timer);
    this.setState({ isUpdating: false });
    setTimeout(() => {
      this.props.getNewWord(this.props.textId);
    }, 2000);
  };

  render() {
    return (
      <StyledTypingText isUpdating={this.state.isUpdating}>
        <span className="typing-word">
          {this.state.text}
          <span className="cursor" />
        </span>
      </StyledTypingText>
    );
  }
}

export default TypingText;
