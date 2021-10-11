import styled from "styled-components";

type TitleProps = {
  color?: string;
  size?: "sm" | "md" | "lg";
  align?: "left" | "right" | "center";
};

export const Title = styled.div<TitleProps>`
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: ${(props) => {
    if (props.align === "center") {
      return "center";
    }
    if (props.align === "right") {
      return "right";
    }
    return "left";
  }};
  font-size: ${(props) => {
    if (props.size === "sm") {
      return "1rem";
    }
    if (props.size === "lg") {
      return "3rem";
    }
    return "2rem";
  }};
  color: ${(props) => (props.color ? props.color : "black")};
`;
