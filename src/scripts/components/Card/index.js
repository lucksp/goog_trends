import React from "react";

//styled
import StyledCard from "./Card.css";
import TypingText from "../TypingText";

const Card = ({ cardWidth, textId, item, getNewWord }) => {
  return (
    <StyledCard cardWidth={cardWidth} className="card" color={item.color}>
      <div className="content">
        <TypingText
          textId={textId}
          fullText={item.text}
          getNewWord={getNewWord}
        />
      </div>
    </StyledCard>
  );
};

export default Card;
