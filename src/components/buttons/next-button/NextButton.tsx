import React from "react";
import type { NextButtonProps } from "./NextButton.types";
import { StyledButton } from "./styles/NextButton.styles";

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
    return (
      <StyledButton onClick={onClick}>
        Next Page
      </StyledButton>
    );
  };
  
  export default NextButton;