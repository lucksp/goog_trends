import styled from "styled-components";

export default styled.div`
  #cursor {
    border-right: 1px solid #fff;

    animation: ${props =>
      props.isUpdating ? `blink 0.7s steps(1) infinite` : `none`};
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  }
`;
