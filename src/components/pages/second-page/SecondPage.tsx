

import React from 'react';
import { motion } from 'framer-motion';
import type { SecondPageProps } from './SecondPage.types';
import {
  Section,
  SectionTitle,
  Footer,
} from '../bookpage/styles/BookPage.styles';
import { BookPageShell } from '../BookPageShell';
import NextButton from '../../buttons/next-button/NextButton';
import HelloWorld3D from '../../animations/HelloWorld3D';
import LanguageJourney from '../../animations/language-journey/LanguageJourney';
import styled from 'styled-components';

import pythonIcon from '../../../assets/python.png';
import jsIcon from '../../../assets/js.png';
import htmlIcon from '../../../assets/html.png';
import cssIcon from '../../../assets/css.png';
import awsIcon from '../../../assets/aws.png';

// ─── Beyond the code grid, will soon move to styles ─────────────────────────────────────────────────────

const BeyondGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const BeyondCard = styled(motion.div)`
  padding: 1rem 1.1rem;
  border: 1px solid rgba(139, 110, 70, 0.2);
  border-radius: 4px;
  background: rgba(139, 110, 70, 0.04);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(139, 110, 70, 0.4);
    background: rgba(139, 110, 70, 0.08);
  }
`;

const CardTag = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #9a7d5a;
`;

const CardTitle = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 600;
  color: #2a1f0e;
  margin: 0;
  line-height: 1.3;
`;

const CardBody = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 0.92rem;
  color: #4a3a24;
  line-height: 1.6;
  margin: 0;
`;

const CardAccent = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 0.82rem;
  font-style: italic;
  color: #8b7050;
  margin-top: auto;
`;

// ─── Opening line, this too shall move lol ─────────────────────────────────────────────────────────────

const OpeningLine = styled(motion.p)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.1rem, 3vw, 1.35rem);
  font-style: italic;
  color: #2a1f0e;
  line-height: 1.6;
  margin: 0 0 0.25rem;
  border-left: 2px solid rgba(139, 110, 70, 0.4);
  padding-left: 1rem;
`;

// ─── Icon-only tech row ───────────────────────────────────────────────────────

const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  padding-top: 0.25rem;
`;

const TechIcon = styled(motion.img)`
  width: 28px;
  height: 28px;
  object-fit: contain;
  filter: saturate(0.65);
  opacity: 0.8;
  transition: opacity 0.2s, filter 0.2s, transform 0.2s;

  &:hover {
    opacity: 1;
    filter: saturate(1);
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

const techIcons = [
  { src: pythonIcon, alt: 'Python' },
  { src: jsIcon, alt: 'JavaScript' },
  { src: htmlIcon, alt: 'HTML' },
  { src: cssIcon, alt: 'CSS' },
  { src: awsIcon, alt: 'AWS' },
];

const beyondItems = [
  {
    tag: 'SheHacks 2023',
    title: 'Won a fintech hackathon',
    body: 'Built a pay-in/pay-out store locator for Mukuru under competition pressure.',
    accent: 'First place.',
  },
  {
    tag: 'WeThinkCode_',
    title: 'Face of the school',
    body: 'Managed the front desk — the first person every student, guest and partner met.',
    accent: 'Trusted before I graduated.',
  },
  {
    tag: 'Mentorship',
    title: 'Taught what I was learning',
    body: 'Mentored junior WeThinkCode_ students through the same challenges I was navigating.',
    accent: 'Teaching sharpens understanding.',
  },
  {
    tag: 'Community',
    title: 'Paid it forward',
    body: 'Volunteered for the next WeThinkCode_ cohort — before finishing my own programme.',
    accent: 'Before I even finished.',
  },
];


const SecondPage: React.FC<SecondPageProps> = ({ onNext, onPrev }) => {
  return (
    <BookPageShell
      pageNumber="02"
      chapterLabel="Chapter 2: The Making Of"
      tearVariant={1}
      onNext={onNext}
      onPrev={onPrev}
    >
      <Section>
        <OpeningLine
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          "I didn't wait to feel ready."
        </OpeningLine>
      </Section>

      <Section>
        <SectionTitle>WeThinkCode_ — 2023</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          This is where I learned how to think in logic, structure, and systems.
          Coding isn't just syntax — it's problem solving.
        </motion.p>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <SectionTitle>It started simple...</SectionTitle>
          <HelloWorld3D />
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <LanguageJourney
            pythonIcon={pythonIcon}
            jsIcon={jsIcon}
            htmlIcon={htmlIcon}
          />
        </motion.div>
      </Section>

      <Section>
        <SectionTitle>Beyond the code</SectionTitle>
        <BeyondGrid>
          {beyondItems.map((item, index) => (
            <BeyondCard
              key={item.tag}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
              <CardTag>{item.tag}</CardTag>
              <CardTitle>{item.title}</CardTitle>
              <CardBody>{item.body}</CardBody>
              <CardAccent>{item.accent}</CardAccent>
            </BeyondCard>
          ))}
        </BeyondGrid>
      </Section>

      <Section>
        <IconRow>
          {techIcons.map((tech, index) => (
            <TechIcon
              key={tech.alt}
              src={tech.src}
              alt={tech.alt}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.9 + index * 0.07, duration: 0.4 }}
            />
          ))}
        </IconRow>
      </Section>

      <Footer>
        <NextButton onClick={onNext} label="next" />
        {onPrev && <NextButton onClick={onPrev} label="prev" position="left" />}
      </Footer>
    </BookPageShell>
  );
};

export default SecondPage;