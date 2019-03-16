import styled from "styled-components";

export default styled.div`
  width: ${props => 100 / props.cardWith}%;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  background-color: #${props => props.color};
  padding: 16px;
`;
