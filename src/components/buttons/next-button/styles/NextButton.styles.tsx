import styled from "styled-components";

export const StyledButton = styled.button`
position: absolute;
  right: 3rem;
  background: pink;
  color: red;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  top: 50%; transform: translateY(-50%);

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px;
  }

  &::after {
    content: ' →';
  }
`