import React from "react";
// Styled components
import { Hero as HeroStyled } from "@styles/components/hero";

type HeroProps = {
  children?: React.ReactNode;
};

export const Hero = ({ children }: HeroProps) => {
  return <HeroStyled>{children}</HeroStyled>;
};
