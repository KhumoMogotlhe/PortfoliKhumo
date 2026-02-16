import styled from "styled-components";

export const StoryButton = styled.button<{position: "left" | "right"}>`
  position: absolute;
  bottom: 2rem;
  ${(props) => (props.position === "left" ? "left: 3rem;" : "right: 3rem;")}
  background: pink;
  color: red;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px); // subtle hover lift
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  &::after {
    content: ${(props) => (props.position === "left" ? "' ←'" : "' →'")};
  }
`;

