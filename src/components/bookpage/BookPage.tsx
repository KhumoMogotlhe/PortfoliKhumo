import React from 'react';
import { Arrow, BaseContainer, ButtonPrompt, PageContent, PageNumber, PromptText } from './styles/BookPage.styles';
import NextButton from '../buttons/next-button/NextButton';

const BookPage: React.FC = () => {
    const handleNextPage = () => {
        console.log('Next page clicked!');
        // Navigation logic will go here later
      };
    return (
        <BaseContainer>
        <PageContent>
            <h1>Khumo's portfolio</h1>
        </PageContent>

        <ButtonPrompt>
          <Arrow>↓</Arrow>
          <PromptText>I'm a reusable button component, click me!</PromptText>
        </ButtonPrompt>
        
        <PageNumber> Page 1 </PageNumber>
        <NextButton onClick={handleNextPage}/>
        </BaseContainer>
    );
};

export default BookPage;