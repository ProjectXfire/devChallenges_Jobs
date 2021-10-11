import styled from "styled-components";

type TextProps = {
  color?: string;
  size?: "sm" | "md" | "lg";
  colorSpan?: string;
};

export const Text = styled.div<TextProps>`
  font-size: ${(props) => {
    if (props.size === "sm") {
      return "0.8rem";
    }
    if (props.size === "lg") {
      return "1.5rem";
    }
    return "1rem";
  }};
  color: ${(props) => (props.color ? props.color : "black")};
  & span {
    color: ${(props) => (props.colorSpan ? props.colorSpan : "black")};
  }
`;
