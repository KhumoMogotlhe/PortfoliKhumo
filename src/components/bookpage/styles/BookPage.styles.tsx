import styled from 'styled-components';

export const BaseContainer = styled.div`
position: relative;
display: flex;
max-width: 800px;
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
  gap: 8;
`;

export const ChapterTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  font-style: italic;
`;

export const PageNumber = styled.span`
  position: absolute;
  bottom: 0rem;
  right: 3rem;
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8;
  padding-right: 1rem;
  padding-bottom: 2rem;
`;

export const PromptText = styled.p`
  font-size: 0.95rem;
  color: pink;
  font-style: italic;
  text-align: right;
  max-width: 250px;
`;