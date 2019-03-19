import styled from "styled-components";

export default styled.span`
  top: 0;
  left: 0;
  margin: 16px;
  position: absolute;

  #picker-icon {
    background: url("https://trends.google.com/trends/hottrends/visualize/internal/_static/b204632211-dev-ronili.411146578513760570/images/matrix.png")
      center center no-repeat;
    cursor: pointer;
    display: ${props => (!props.hover ? `block` : `none`)};
    height: 23px;
    position: absolute;
    width: 22px;
    z-index: 1;
  }

  #picker {
    position: absolute;
    max-width: 160px;
    width: 160px;
    display: ${props => (props.hover ? `flex` : `none`)};
    flex-flow: row wrap;
    z-index: 1;
    .box {
      cursor: pointer;
      width: 24px;
      height: 24px;
      background: #d7dbdc;
      margin: 4px;
      &:hover {
        background: #a0a9ac;
      }
    }
  }
`;
