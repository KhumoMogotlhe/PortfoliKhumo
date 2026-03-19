import React from 'react';
import { motion } from 'framer-motion';
import type { FifthPageProps } from './FifthPage.types';
import {
  Section,
  SectionTitle,
  Footer,
} from '../bookpage/styles/BookPage.styles';
import { BookPageShell } from '../BookPageShell';
import NextButton from '../../buttons/next-button/NextButton';
import InternshipTimeline from '../../animations/InternshipTimeline';
import ProjectShowcase from '../../animations/ProjectShowcase';
import {
  CompanyHeader,
  CompanyLogo,
  CompanyName,
  CompanyRole,
  HighlightBox,
  HighlightText,
  HighlightTitle,
  PolaroidGallery,
  Polaroid,
  PolaroidImage,
  PolaroidCaption,
  PhoneMockupWrapper,
  PhoneFrame,
  PhoneScreen,
  PhoneScreenImage,
  PhoneCaption,
} from './FifthPage.styles';

import mtnLogo from '../../../assets/mtnlogo.jpg';
import photoOne from '../../../assets/present.jpg';
import photoTwo from '../../../assets/sit.jpg';
import rechargeScreen from '../../../assets/recharge.webp';


const timelineData = [
  {
    date: 'Month 1-2',
    title: 'Onboarding & Foundation',
    description:
      'Integrated into the development team, learned company tech stack and development workflow.',
    techStack: ['React', 'TypeScript', 'Git', 'Agile'],
    achievements: [
      'Set up local development environment',
      'Completed React and TypeScript onboarding courses',
      'Paired with senior developers on existing features',
      'Attended daily standups and sprint planning',
    ],
  },
  {
    date: 'Month 3-4',
    title: 'First Real Features',
    description:
      'Started building production features, implementing UI components and connecting to APIs.',
    techStack: ['React', 'TypeScript', 'REST APIs', 'Styled-Components'],
    achievements: [
      'Built responsive dashboard components',
      'Implemented form validation and error handling',
      'Integrated third-party APIs',
      'Wrote unit tests for components',
    ],
  },
  {
    date: 'Month 5-6',
    title: 'Independent Contributions',
    description:
      'Took ownership of features from design to deployment, participating in code reviews.',
    techStack: ['React', 'TypeScript', 'Redux', 'Jest'],
    achievements: [
      'Led development of a customer-facing feature',
      'Optimised component performance (reduced load time by 40%)',
      'Mentored new interns joining the team',
      'Contributed to design system documentation',
    ],
  },
];

const projects = [
  {
    icon: '📱',
    title: 'Customer Portal Redesign',
    description:
      'Rebuilt key sections of the customer portal with improved UX and accessibility.',
    impact: 'Improved user satisfaction by 35%',
  },
  {
    icon: '⚡',
    title: 'Performance Optimisation',
    description: 'Identified and fixed performance bottlenecks in high-traffic pages.',
    impact: 'Reduced load time by 40%',
  },
  {
    icon: '🎨',
    title: 'Component Library',
    description: 'Contributed reusable components to the company design system.',
    impact: 'Used across 5+ teams',
  },
];

const FifthPage: React.FC<FifthPageProps> = ({ onNext, onPrev }) => {
  return (
    <BookPageShell
      pageNumber="05"
      chapterLabel="Chapter 5: Into the Real World"
      tearVariant={0}
    >
      {/* Intro */}
      <Section>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          After graduation came the moment of truth — applying everything I'd
          learned in a real-world environment. MTN gave me that opportunity.
        </motion.p>
      </Section>

      {/* Company header with real logo */}
      <CompanyHeader
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <CompanyLogo src={mtnLogo} alt="MTN logo" />
        <CompanyName>MTN</CompanyName>
        <CompanyRole>Frontend Developer Intern</CompanyRole>
      </CompanyHeader>

      {/* Polaroid photos */}
      <PolaroidGallery>
        <Polaroid
          rotate={-4}
          initial={{ opacity: 0, y: 30, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <PolaroidImage src={photoOne} alt="At MTN" />
          <PolaroidCaption>On site @ MTN</PolaroidCaption>
        </Polaroid>

        <Polaroid
          rotate={3}
          initial={{ opacity: 0, y: 30, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ delay: 0.75, duration: 0.7 }}
        >
          <PolaroidImage src={photoTwo} alt="At MTN" />
          <PolaroidCaption>Building things that matter</PolaroidCaption>
        </Polaroid>
      </PolaroidGallery>

      {/* Timeline */}
      <Section>
        <SectionTitle>The Journey</SectionTitle>
        <InternshipTimeline items={timelineData} />
      </Section>

      <PhoneMockupWrapper
        initial={{ opacity: 0, y: 24, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        whileHover={{ rotate: 0, scale: 1.04, transition: { duration: 0.3 } }}
      >
        <PhoneFrame>
          <PhoneScreen>
            <PhoneScreenImage src={rechargeScreen} alt="MTN recharge screen" />
          </PhoneScreen>
        </PhoneFrame>
        <PhoneCaption>MTN recharge — shipped to production</PhoneCaption>
      </PhoneMockupWrapper>

      {/* Projects */}
      <Section>
        <SectionTitle>Key Projects</SectionTitle>
        <ProjectShowcase projects={projects} />
      </Section>

      {/* Takeaway */}
      <HighlightBox
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <HighlightTitle>What I Learned</HighlightTitle>
        <HighlightText>
          An internship isn't just about writing code — it's about
          collaboration, understanding user needs, meeting deadlines, and
          learning to work within existing systems. It's where theory meets
          practice, and where you discover what kind of developer you want to
          become.
        </HighlightText>
      </HighlightBox>

      <Footer>
        <NextButton onClick={onNext} label="next" />
        {onPrev && <NextButton onClick={onPrev} label="prev" position="left" />}
      </Footer>
    </BookPageShell>
  );
};

export default FifthPage;