import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  .typing-word {
    padding: 0 16px;
    flex: 1 100%;
  }
  .cursor {
    vertical-align: middle;
    border-left: 1px solid #fff;
    margin-left: 2px;
    animation: ${props =>
      props.isUpdating ? `blink 0.7s steps(1) infinite` : `none`};
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  }
`;
