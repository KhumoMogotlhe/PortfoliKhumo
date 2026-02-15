import styled from 'styled-components';

export const BaseContainer = styled.div`
position: relative;
display: flex;
width: 800px;
max-width: 90vw;
height: 600px;
background: white;
margin: 2rem auto;
padding: 3rem;
`;

export const TextContainer = styled.div`
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
  color: red;
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

export const ButtonPrompt = styled.div`
 position: absolute;  
  right: 4rem;        
  top: 45%;            
  transform: translateY(-100%);  
  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 0.5rem;
`;

export const PromptText = styled.p`
  font-size: 0.95rem;
  color: pink;
  font-style: italic;
  text-align: right;
  max-width: 250px;
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
