import React, { Component } from "react";

let typingTimeout = () => {};

class TypingText extends Component {
  static defaultProps = {
    fullText: ""
  };

  state = {
    text: "",
    typingSpeed: 250
  };

  componentDidMount() {
    this.handleTyping();
  }

  handleTyping = () => {
    const { fullText } = this.props;
    const { text } = this.state;

    this.setState({ text: fullText.substring(0, text.length + 1) }, () => {
      if (this.state.text === fullText) {
        console.log("finished");
        return;
      }
      setTimeout(this.handleTyping, this.state.typingSpeed);
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.state.text}</div>
        <span id="cursor" />
      </React.Fragment>
    );
  }
}

export default TypingText;
