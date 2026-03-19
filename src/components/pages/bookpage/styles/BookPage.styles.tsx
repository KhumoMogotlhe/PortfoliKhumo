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



export const ChapterTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;




export const Section = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    color: #444;

    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;

export const SubSectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const TechList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  padding-left: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
`;

export const TechCard = styled.div`
  width: 100%;
  min-height: 180px;
  background: #f9f9f9;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    min-height: 160px;
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    min-height: 140px;
    padding: 0.5rem;
    gap: 0.25rem;
  }
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

export const TechName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const TechDescription = styled.p`
  font-size: 0.85rem;
  text-align: center;
  color: #555;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.3;
  }
`;

export const BookWrapper = styled.div`
  perspective: 1500px;
`;

export const Page = styled.div<{ isFlipping: boolean }>`
  transform-origin: left;
  transition: transform 0.8s ease;

  ${({ isFlipping }) =>
    isFlipping &&
    `
      transform: rotateY(-180deg);
    `}
`;

