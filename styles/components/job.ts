import styled from "styled-components";
import { device } from "@styles/variables/screen";
import { colors } from "@styles/variables/colors";

export const JobContainer = styled.section`
  display: grid;
  row-gap: 20px;
  @media ${device.tabletL} {
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
  }
`;

export const JobHeader = styled.div`
  min-width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${colors.blue};
`;

export const JobContent = styled.div``;

export const JobTitle = styled.div`
  margin: 20px 0;
`;
