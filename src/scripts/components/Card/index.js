import React from "react";
import PropTypes from "prop-types";

//styled
import StyledCard from "./Card.css";
import TypingText from "../TypingText";

const Card = ({ cardWidth, textId, item, getNewWord }) => {
  return (
    <StyledCard
      cardWidth={cardWidth}
      className="card-wrapper"
      current={item.color}
      backupColor={item.backupColor}
    >
      <div className="card-content current">
        <TypingText
          textId={textId}
          fullText={item.text}
          getNewWord={getNewWord}
        />
      </div>
      <div className="card-content backup" />
    </StyledCard>
  );
};

Card.propTypes = {
  cardWidth: PropTypes.number.isRequired,
  textId: PropTypes.string.isRequired,
  item: PropTypes.shape({
    color: PropTypes.string,
    text: PropTypes.string,
    backupColor: PropTypes.string
  }).isRequired,
  getNewWord: PropTypes.func.isRequired
};

export default Card;
