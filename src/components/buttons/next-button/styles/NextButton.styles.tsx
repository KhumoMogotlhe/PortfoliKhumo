import styled from 'styled-components';

export const StoryButton = styled.button<{ position?: 'left' | 'right' }>`
  position: relative;
  background: transparent;
  color: #8b7050;
  border: 1px solid rgba(139, 110, 70, 0.35);
  padding: 0.6rem 1.4rem;
  border-radius: 3px;
  cursor: pointer;
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 1rem;
  font-style: italic;
  letter-spacing: 0.04em;
  transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    background: rgba(139, 110, 70, 0.08);
    border-color: rgba(139, 110, 70, 0.6);
    color: #2a1f0e;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0px);
  }

  &::after {
    content: ${({ position }) => (position === 'left' ? "' ←'" : "' →'")};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }
`;