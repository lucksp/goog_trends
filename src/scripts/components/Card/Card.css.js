import styled from "styled-components";

const getAnimation = (direction, isBackup) => {
  switch (direction) {
    case "top":
      return `translate(0, ${isBackup ? `100` : `-100`}%);`;
    case "right":
      return `translate(${isBackup ? `-100` : `100`}%, 0);`;
    case "bottom":
      return `translate(0, ${isBackup ? `-100` : `100`}%);`;
    case "left":
      return `translate(${isBackup ? `-100` : `100`}%, 0);`;
    default:
      return `none;`;
  }
};

const getDirection = (direction, isBackup) => {
  switch (direction) {
    case "top":
      return `left: 0; top: ${isBackup ? `100%` : `0`};`;
    case "right":
      return `top: 0; right: ${isBackup ? `100%;` : `0`};`;
    case "bottom":
      return `left: 0; bottom: ${isBackup ? `100%` : `0`};`;
    case "left":
      return `top: 0; left: ${isBackup ? `-100%;` : `0`};`;
    default:
      return `left: 0; top: ${isBackup ? `100%` : `0`};`;
  }
};

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
    transition: transform 1s ease;
    &.current {
      background-color: #${props => props.current};
      ${props => getDirection(props.animation)};
      transform: ${props => getAnimation(props.animation)};
    }
    &.backup {
      background-color: #${props => props.backupColor};
      ${props => getDirection(props.animation, true)};
      transform: ${props => getAnimation(props.animation)};
    }
  }
`;
