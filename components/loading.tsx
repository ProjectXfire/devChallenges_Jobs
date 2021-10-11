import React from "react";
import { LdsRipple, LoadingContainer } from "@styles/shared/index";

export const Loading = () => {
  return (
    <LoadingContainer>
      <LdsRipple>
        <div></div>
        <div></div>
      </LdsRipple>
    </LoadingContainer>
  );
};
