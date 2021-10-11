import styled, { keyframes, css } from "styled-components";

const animation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }`;

const ldsRippleAnimation = css`
  animation: ${animation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

export const LdsRipple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    position: absolute;
    border: 4px solid #000;
    opacity: 1;
    border-radius: 50%;
    ${ldsRippleAnimation}
  }
  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
