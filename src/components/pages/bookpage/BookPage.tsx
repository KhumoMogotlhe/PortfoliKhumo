import React from 'react';
import { Arrow, BaseContainer, ButtonPrompt, IntroBlock, IntroText, PageContent, PageNumber, PromptText } from './styles/BookPage.styles';
import NextButton from '../../buttons/next-button/NextButton';
import type { BookPageProps } from './BookPage.types';

const BookPage: React.FC<BookPageProps> = ({ onNext }) => {
    return (
        <BaseContainer>
        <PageContent>
        <IntroBlock>
          <h1>Khumo Mogotlhe</h1>
          <p>Software Engineer</p>
          <IntroText>
            I build thoughtful digital experiences. <br />
            I build for the web. <br />
            I run. I box. I cook. <br />
            I create — in more ways than one.
          </IntroText>
        </IntroBlock>
        </PageContent>

        <ButtonPrompt>
          <Arrow>↓</Arrow>
          <PromptText>Built as a reusable component.  <br />
          It moves the story forward</PromptText>
        </ButtonPrompt>
        
        <NextButton onClick={onNext} label='Next'/>
        <PageNumber> - 01 - </PageNumber>
        </BaseContainer>
    );
};

export default BookPage;