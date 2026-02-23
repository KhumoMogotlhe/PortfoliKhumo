import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  margin: 2rem 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #667eea, #764ba2);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 80px;
  margin-bottom: 3rem;
  cursor: pointer;

  @media (max-width: 768px) {
    padding-left: 60px;
  }
`;

const TimelineDot = styled(motion.div)<{ isActive?: boolean }>`
  position: absolute;
  left: 20px;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.isActive ? '#667eea' : 'white'};
  border: 3px solid #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
  transition: all 0.3s;

  @media (max-width: 768px) {
    left: 10px;
    width: 20px;
    height: 20px;
  }
`;

const TimelineContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const TimelineDate = styled.div`
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.2rem;
  color: #232f3e;
  margin-bottom: 0.75rem;
`;

const TimelineDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechBadge = styled.span`
  background: #e8f4f8;
  color: #4a90e2;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  color: #667eea;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;

  &:hover {
    transform: translateX(5px);
  }
`;

const DetailedContent = styled(motion.div)`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Achievement = styled(motion.li)`
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #444;
  font-size: 0.9rem;
  line-height: 1.6;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #4caf50;
    font-weight: bold;
  }
`;

interface TimelineItemData {
  date: string;
  title: string;
  description: string;
  techStack: string[];
  achievements?: string[];
}

interface InternshipTimelineProps {
  items: TimelineItemData[];
}

const InternshipTimeline: React.FC<InternshipTimelineProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <TimelineContainer>
      <TimelineLine />
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <TimelineDot
            isActive={expandedIndex === index}
            animate={{ scale: expandedIndex === index ? 1.2 : 1 }}
          />
          <TimelineContent onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineDescription>{item.description}</TimelineDescription>
            
            <TechStack>
              {item.techStack.map((tech, i) => (
                <TechBadge key={i}>{tech}</TechBadge>
              ))}
            </TechStack>

            {item.achievements && (
              <ExpandButton>
                {expandedIndex === index ? 'Show less' : 'View achievements'}
                {expandedIndex === index ? ' ↑' : ' →'}
              </ExpandButton>
            )}

            <AnimatePresence>
              {expandedIndex === index && item.achievements && (
                <DetailedContent
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AchievementList>
                    {item.achievements.map((achievement, i) => (
                      <Achievement
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {achievement}
                      </Achievement>
                    ))}
                  </AchievementList>
                </DetailedContent>
              )}
            </AnimatePresence>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default InternshipTimeline;