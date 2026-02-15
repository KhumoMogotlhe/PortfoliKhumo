import styled from 'styled-components';

export const BaseContainer = styled.div`
position: relative;
display: flex;
width: 800px;
max-width: 90vw;
min-height: 600px;
max-height: 90vw;
height: auto;
background: #fdfbf7;
margin: 2rem auto;
padding: 3rem;
overflow-y: auto;
`;

export const IntroText = styled.div`
display: flex;
`

export const PageContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  padding-bottom: 5rem;
`;

export const ChapterTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: pink;
  font-style: italic;
`;

export const PageNumber = styled.span`
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  font-size: 0.9rem;
  color: #6b6b6b;
  font-style: italic;
`;

export const Arrow = styled.span`
  font-size: 2rem;
  color: blue;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

export const ArrowSVG = styled.svg`
  width: 100px;
  height: 50px;
  margin-left: 1rem;
  
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
`;

export const ButtonPrompt = styled.div`
  position: absolute;  
  right: 10rem;         /* Move it left of the button */
  bottom: 4.5rem;      /* Changed from top: 45% to bottom to match button */
  display: flex;
  flex-direction: row;
  align-items: center;  /* Changed to flex-end for right alignment */
  gap: 1rem;
`;

export const PromptText = styled.p`
  font-size: 0.95rem;
  color: pink;
  font-style: italic;
  text-align: right;
  max-width: 250px;
  bottom: 2rem;
`;

export const PageHeader = styled.div`
  border-bottom: 2px solid;
  padding-bottom: 2rem;
`;

export const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Section = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SubSectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 0.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.5rem;
`;

export const TechList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-left: 0;
`;



export const TechCard = styled.div`
  width: 150px;
  height: 180px;
  background: #f9f9f9;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
`;

export const TechName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
`;

export const TechDescription = styled.p`
  font-size: 0.85rem;
  text-align: center;
  color: #555;
`;



