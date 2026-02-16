import styled from 'styled-components';

export const StyledNextButton = styled.button<{ position?: 'left' | 'right' }>`
  position: absolute;
  bottom: 2rem;
  ${props => props.position === 'left' ? 'left: 3rem;' : 'right: 3rem;'}
  background: #8b7355;
  color: #fdfbf7;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: ${props => props.position === 'left' ? 'translateX(-5px)' : 'translateX(5px)'} scale(1.1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: ${props => props.position === 'left' ? 'translateX(-5px)' : 'translateX(5px)'} scale(0.95);
  }

  @media (max-width: 768px) {
    ${props => props.position === 'left' ? 'left: 2rem;' : 'right: 2rem;'}
    bottom: 1.5rem;
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    ${props => props.position === 'left' ? 'left: 1rem;' : 'right: 1rem;'}
    bottom: 1rem;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;