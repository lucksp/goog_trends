import styled from "styled-components";

export default styled.div`
  width: ${props => 100 / props.cardWidth}%;
  height: 100%;
  float: left;
  text-transform: capitalize;
  overflow: hidden;
  position: relative;
  .card-content {
    height: 100%;
    position: absolute;
    width: 100%;
    &.current {
      background-color: #${props => props.current};
      top: 0;
      left: 0;
    }
    &.backup {
      background-color: #${props => props.backupColor};
      top: 0;
      left: 0;
      top: 100%;
    }
  }
`;
