import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

export const JourneyContainer = styled.div`
  margin: 2rem 0;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StoryText = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

export const LanguageScene = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 12px;
  border-left: 4px solid;
`;

export const PythonScene = styled(LanguageScene)`
  border-color: #3776ab;
`;

export const JavaScriptScene = styled(LanguageScene)`
  border-color: #f7df1e;
`;

export const WebScene = styled(LanguageScene)`
  border-color: #e34c26;
`;

export const IconContainer = styled(motion.div)`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SceneContent = styled.div`
  flex: 1;
`;

export const SceneTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #222;
`;

export const SceneDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`;
