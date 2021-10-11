import styled from "styled-components";
import { IoBriefcaseSharp } from "react-icons/io5";
import { colors } from "@styles/variables/colors";

export const Search = styled.div`
  height: 45px;
  width: 600px;
  max-width: 600px;
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
  background-color: white;
  z-index: 2;
`;

export const IconSearch = styled(IoBriefcaseSharp)`
  margin-left: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-left: 5px;
  outline: none;
  border: none;
  color: ${colors.text};
  font-family: "Itim", cursive;
  ::placeholder {
    color: ${colors.placeholder};
  }
`;

export const SearchButton = styled.button`
  position: relative;
  width: 120px;
  height: 100%;
  background: ${colors.blue};
  color: white;
  border: none;
  border-radius: 3px;
  transition: background-color 0.6s ease;
  font-family: "Itim", cursive;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform-style: flat;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 100%;
    transition: width 0.3s ease, height 0.3s ease;
  }
  &:hover {
    background: ${colors.shadowBlue};
  }
  &:active {
    &:after {
      width: 300px;
      height: 300px;
    }
  }
`;
