import React from "react";
import PropTypes from "prop-types";

//styled
import StyledRow from "./Row.css";
import Card from "../Card";

const Row = ({ rowHeight, data, rowNumber, getNewWord }) => {
  return (
    <StyledRow className="row" rowHeight={rowHeight}>
      {data.map((item, i) => (
        <Card
          textId={`${rowNumber}-${i}`}
          item={item}
          key={i}
          cardWidth={data.length}
          getNewWord={getNewWord}
        />
      ))}
      }
    </StyledRow>
  );
};
Row.propType = {
  data: PropTypes.array.isRequired,
  getNewWord: PropTypes.func.isRequired,
  rowHeight: PropTypes.number.isRequired,
  rowNumber: PropTypes.number.isRequired
};

export default Row;
