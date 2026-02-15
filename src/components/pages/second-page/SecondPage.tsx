

import React from "react";
import type { SecondPageProps } from "./SecondPage.types";
import { 
  BaseContainer, 
  ChapterTitle, 
  PageContent, 
  PageHeader, 
  PageNumber, 
  Section, 
  SectionTitle, 
  TechList, 
  TechCard, 
  Icon, 
  TechName, 
  TechDescription 
} from "../bookpage/styles/BookPage.styles";
import NextButton from "../../buttons/next-button/NextButton";
import pythonIcon from '../../../assets/python.png';
import jsIcon from '../../../assets/js.png';
import htmlIcon from '../../../assets/html.png';
import cssIcon from '../../../assets/css.png';
import awsIcon from '../../../assets/aws.png'; 



const techs = [
    {
      name: "Python",
      icon: pythonIcon,
      description: "Learned problem solving, loops, and OOP fundamentals."
    },
    {
      name: "JavaScript",
      icon: jsIcon,
      description: "Created interactive web apps and explored asynchronous logic."
    },
    {
      name: "HTML",
      icon: htmlIcon,
      description: "Built structured and semantic web pages."
    },
    {
      name: "CSS",
      icon: cssIcon,
      description: "Styled responsive layouts and practiced design consistency."
    },
    {
      name: "AWS",
      icon: awsIcon,
      description: "Explored cloud deployments and services."
    }
  ];
  

const SecondPage: React.FC<SecondPageProps> = ({ onNext, onPrev }) => {
  return (
    <BaseContainer>
      <PageContent>
        <PageHeader>
          <ChapterTitle>Chapter 2: The Journey Begins</ChapterTitle>
        </PageHeader>

        <Section>
          <SectionTitle>WeThinkCode_ — 2023</SectionTitle>
          <p>
            In 2023, I began my formal journey into software engineering at WeThinkCode_. 
            This is where I learned how to think in logic, structure, and systems. 
            Coding isn’t just syntax—it’s problem solving.
          </p>
        </Section>

        <Section>
          <SectionTitle>Foundations</SectionTitle>
          <TechList>
            {techs.map((tech) => (
              <TechCard key={tech.name}>
                <Icon src={tech.icon} alt={`${tech.name} logo`} />
                <TechName>{tech.name}</TechName>
                <TechDescription>{tech.description}</TechDescription>
              </TechCard>
            ))}
          </TechList>
        </Section>

        <Section>
          <SectionTitle>Elective: Cloud Computing</SectionTitle>
          <p>
            Explored how applications are deployed, scaled, and maintained 
            in real-world cloud environments.
          </p>
        </Section>
      </PageContent>

      <PageNumber>- 2 -</PageNumber>
      <NextButton onClick={onNext} label='next'/>
      {onPrev && <NextButton onClick={onPrev} label="prev"  position="left"/>}
    </BaseContainer>
  );
};

export default SecondPage;
