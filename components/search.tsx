import React from "react";
// Styled components
import {
  Search as SearchStyled,
  SearchInput,
  SearchButton,
  IconSearch,
} from "@styles/components/search";
import { colors } from "@styles/variables/colors";

type SearchProps = {
  buttonSearch: string;
  handleInputButtonSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonSearch: () => void;
};

export const Search = ({
  buttonSearch,
  handleInputButtonSearch,
  handleButtonSearch,
}: SearchProps) => {
  return (
    <SearchStyled>
      <IconSearch size="25" color={colors.placeholder} />
      <SearchInput
        placeholder="Categories jobs"
        type="text"
        value={buttonSearch}
        onChange={(e) => handleInputButtonSearch(e)}
      />
      <SearchButton type="button" onClick={() => handleButtonSearch()}>
        Search
      </SearchButton>
    </SearchStyled>
  );
};
