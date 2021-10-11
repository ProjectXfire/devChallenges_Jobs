import styled from "styled-components";
import { device } from "@styles/variables/screen";

export const Container = styled.main`
  @media ${device.mobileS} {
    margin: 0 5px;
  }
  @media ${device.mobileM} {
    margin: 0 10px;
  }
  @media ${device.desktop} {
    width: 1000px;
    margin: 0 auto;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 10px;
  border-radius: 10px;
  overflow: hidden;
`;
