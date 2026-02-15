import React  from "react";
import type { SecondPageProps } from "./SecondPage.types";
import { BaseContainer, ChapterTitle, PageContent, PageHeader, PageNumber } from "../bookpage/styles/BookPage.styles";
import NextButton from "../../buttons/next-button/NextButton";

const SecondPage: React.FC<SecondPageProps> = ({ onNext, onPrev }) => {
    return (
      <BaseContainer>
        <PageContent>
          <PageHeader>
            <ChapterTitle>Chapter 2: The Journey Begins</ChapterTitle>
          </PageHeader>
  
          <div>
            <p>This is the second page. More content coming soon...</p>
          </div>
        </PageContent>
  
        <PageNumber>2</PageNumber>
        <NextButton onClick={onNext} />
      </BaseContainer>
    );
  };
  
  export default SecondPage;