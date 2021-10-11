import styled from "styled-components";
import { colors } from "@styles/variables/colors";
import { device } from "@styles/variables/screen";

export const Location = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  @media ${device.laptop} {
    grid-template-columns: 1fr 2.5fr;
    column-gap: 20px;
  }
`;

export const LocationSearch = styled.div`
  margin: 20px 0;
`;

export const LocationInput = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.08);
  & input {
    width: 100%;
    margin-left: 10px;
    outline: none;
    border: none;
    color: ${colors.text};
    font-family: "Itim", cursive;
    &::placeholder {
      color: ${colors.placeholder};
    }
  }
`;

export const LocationRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 15px;
  & input {
    margin-right: 10px;
  }
`;

export const LocationJobs = styled.div`
  display: grid;
  row-gap: 20px;
  margin: 20px 0;
`;

export const JobCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px;
  background: white;
  border-radius: 5px;
  gap: 10px;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  @media ${device.tabletS} {
    grid-template-columns: 2fr 1fr;
  }
`;

export const JobCardContent = styled.div``;

export const JobCardFooter = styled.div`
  width: 100%;
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  align-items: flex-end;
  color: ${colors.placeholder};
  & div {
    display: flex;
    align-items: center;
    & span {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

export const JobCardLocations = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PaginationContainer = styled.div`
  width: 0px;
  transform: scale(0.9);
`;
