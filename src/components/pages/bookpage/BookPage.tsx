import React from 'react';
import { Arrow, BaseContainer, ButtonPrompt, IntroBlock, PageContent, PageNumber, PromptText } from './styles/BookPage.styles';
import NextButton from '../../buttons/next-button/NextButton';
import type { BookPageProps } from './BookPage.types';

const BookPage: React.FC<BookPageProps> = ({ onNext }) => {
    return (
        <BaseContainer>
        <PageContent>
        <IntroBlock>
          <h1>Khumo Mogotlhe</h1>
          <p>Software Engineer</p>
        </IntroBlock>
        </PageContent>

        <ButtonPrompt>
          <Arrow>↓</Arrow>
          <PromptText>This button appears throughout my journey.
          It moves the story forward</PromptText>
        </ButtonPrompt>
        
        <NextButton onClick={onNext}/>
        <PageNumber> - 01 - </PageNumber>
        </BaseContainer>
    );
};

export default BookPage;