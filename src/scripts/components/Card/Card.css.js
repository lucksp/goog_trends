import styled from "styled-components";

export default styled.div`
  width: ${props => 100 / props.cardWidth}%;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  background-color: #${props => props.color};
  padding: 16px;

  .content {
    flex: 1 100%;
  }
`;
