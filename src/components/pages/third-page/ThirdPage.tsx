import React from 'react';
import { motion } from 'framer-motion';
import type { ThirdPageProps } from './ThirdPage.types';
import {
  BaseContainer,
  ChapterTitle,
  PageContent,
  PageHeader,
  PageNumber,
  Section,
  SectionTitle
} from '../bookpage/styles/BookPage.styles';
import NextButton from '../../buttons/next-button/NextButton';
import AlgorithmVisualizer from '../../animations/AlgorithmVisualizer';
import DataStructureDemo from '../../animations/DataStructureDemo';
import CodingChallenge from '../../animations/CodingChallenges';

const ThirdPage: React.FC<ThirdPageProps> = ({ onNext, onPrev }) => {
  return (
    <BaseContainer>
      <PageContent>
        <PageHeader>
          <ChapterTitle>Chapter 3: The Problem-Solving Mind</ChapterTitle>
        </PageHeader>

        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Code is just syntax. The real skill? Breaking down complex problems 
              into simple, logical steps. That's where algorithms and data structures come in—
              they're not just academic concepts, they're tools for thinking.
            </p>
          </motion.div>
        </Section>

        <Section>
          <SectionTitle>Algorithms: Seeing the Pattern</SectionTitle>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p>
              Sorting, searching, recursion—each algorithm taught me a new way 
              to approach problems. Watch bubble sort in action:
            </p>
            <AlgorithmVisualizer />
          </motion.div>
        </Section>

        <Section>
          <SectionTitle>Data Structures: Organizing Chaos</SectionTitle>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p>
              Stacks, queues, trees—each structure is optimized for specific problems. 
              Try the stack below:
            </p>
            <DataStructureDemo />
          </motion.div>
        </Section>

        <Section>
          <SectionTitle>Try It Yourself</SectionTitle>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p>
              The best way to learn? Solve problems. Here's a quick challenge:
            </p>
            <CodingChallenge />
          </motion.div>
        </Section>
      </PageContent>

      <PageNumber>- 3 -</PageNumber>
      <NextButton onClick={onNext} label="next" />
      {onPrev && <NextButton onClick={onPrev} label="prev" position="left" />}
    </BaseContainer>
  );
};

export default ThirdPage;