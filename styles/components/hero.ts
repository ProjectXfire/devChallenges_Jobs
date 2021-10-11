import styled from "styled-components";

type HeroProps = {
  bkgImage?: StaticImageData;
};

export const Hero = styled.section<HeroProps>`
  width: 100%;
  height: 120px;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
`;
