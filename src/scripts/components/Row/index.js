import React from "react";
import PropTypes from "prop-types";

//styled
import StyledRow from "./Row.css";
import Card from "../Card";

const Row = props => {
  const data = props.data;
  return (
    <StyledRow className="row" rowHeight={props.rowHeight}>
      {data.map((item, i) => (
        <Card text={item} key={i} cardWith={props.data.length} />
      ))}
    </StyledRow>
  );
};

Row.defaultProps = {
  data: PropTypes.array.isRequired
};

export default Row;
