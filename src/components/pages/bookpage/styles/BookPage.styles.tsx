import styled from 'styled-components';

export const BaseContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 800px;
  min-height: 100dvh;
  height: auto;

  /* 📖 Paper feel */
  background: linear-gradient(
    to right,
    #f4efe6 0%,
    #fdfbf7 40%,
    #fdfbf7 60%,
    #f4efe6 100%
  );

  margin: 1.5rem auto;
  padding: 2rem;
  overflow: hidden;

  /* 📄 Stacked pages effect */
  box-shadow:
    0 2px 10px rgba(0, 0, 0, 0.1),
    0 10px 40px rgba(0, 0, 0, 0.05),
    -8px 8px 0px #eae3d6,
    -16px 16px 0px #ddd4c4;

  border-radius: 0 8px 8px 0;

  /* 🔥 Aged edges */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    box-shadow:
      inset 0 0 40px rgba(139, 115, 85, 0.15),
      inset 0 0 80px rgba(0,0,0,0.05);
  }

  /* ✂️ Slight cut edge */
  clip-path: polygon(
    0% 0%, 
    100% 0%, 
    100% 96%, 
    95% 100%, 
    5% 100%, 
    0% 96%
  );

  @media (max-width: 768px) {
    width: 95vw;
    padding: 1.5rem;
    margin: 1rem auto;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 2.5rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ButtonPrompt = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: flex-end;

  @media (max-width: 480px) {
    align-self: center;
    text-align: center;
    flex-direction: column;
  }
`;

export const PromptText = styled.p`
  font-size: 0.95rem;
  color: #8b7355;
  font-style: italic;
  text-align: right;
  max-width: 250px;

  @media (max-width: 480px) {
    text-align: center;
    max-width: 100%;
    font-size: 0.8rem;
  }
`;

export const PageNumber = styled.span`
  font-size: 0.9rem;
  color: #6b6b6b;
  font-style: italic;
`;

export const ArrowSVG = styled.svg`
  width: 100px;
  height: 50px;

  path {
    stroke: #8b7355;
    stroke-width: 2;
    fill: none;
    stroke-dasharray: 5, 5;
    animation: dash 2s linear infinite;
  }

  polygon {
    fill: #8b7355;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: -20;
    }
  }

  @media (max-width: 480px) {
    display: none;
  }
`;