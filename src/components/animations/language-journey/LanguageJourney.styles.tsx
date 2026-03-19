
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const JourneyContainer = styled.div`
  margin: 1rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LanguageScene = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1rem 1.25rem;
  border-left: 2px solid rgba(139, 110, 70, 0.3);
  background: rgba(139, 110, 70, 0.04);
  border-radius: 0 4px 4px 0;
  transition: border-color 0.2s;

  &:hover {
    border-color: rgba(139, 110, 70, 0.6);
  }
`;

export const PythonScene = styled(LanguageScene)``;
export const JavaScriptScene = styled(LanguageScene)``;
export const WebScene = styled(LanguageScene)``;

export const IconContainer = styled(motion.div)`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: saturate(0.7);
`;

export const SceneContent = styled.div`
  flex: 1;
`;

export const SceneTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 600;
  color: #2a1f0e;
  margin: 0 0 0.3rem;
`;

export const SceneDescription = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 0.98rem;
  color: #4a3a24;
  line-height: 1.7;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.92rem;
  }
`;

// Unused but kept for type compat
export const StoryText = styled(motion.p)``;