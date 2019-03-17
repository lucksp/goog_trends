import React, { Component } from "react";

// styled
import StyledTypingText from "./TypingText.css";

class TypingText extends Component {
  static defaultProps = {
    fullText: ""
  };

  state = {
    text: "",
    isUpdating: false
  };

  timer = null;

  componentDidMount() {
    this.setState({ fullText: this.props.fullText }, () => {
      this.timer = setInterval(() => this.handleTyping(), 250);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.fullText !== prevProps.fullText) {
      this.setState({ fullText: this.props.fullText, text: "" }, () => {
        this.timer = setInterval(() => this.handleTyping(), 250);
      });
    }
    if (this.state.text === this.props.fullText) {
      clearInterval(this.timer);
      this.prepareNewWord();
    }
  }

  handleTyping = () => {
    const { fullText } = this.props;
    const { text } = this.state;

    this.setState({
      text: fullText.substring(0, text.length + 1),
      isUpdating: true
    });
  };

  prepareNewWord = () => {
    setTimeout(() => this.props.getNewWord(this.props.textId), 2000);
  };

  render() {
    return (
      <StyledTypingText isUpdating={this.state.isUpdating}>
        <span>{this.state.text}</span>
        <span id="cursor" />
      </StyledTypingText>
    );
  }
}

export default TypingText;
