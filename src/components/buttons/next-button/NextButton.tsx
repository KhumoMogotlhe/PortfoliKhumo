import React from "react";
import type { NextButtonProps } from "./NextButton.types";
import { StoryButton } from "./styles/NextButton.styles";

const NextButton: React.FC<NextButtonProps> = ({ onClick, label = "Next", position = "right" }) => {
  return (
    <StoryButton onClick={onClick} position={position}>
      {label}
    </StoryButton>
  );
};

export default NextButton;
