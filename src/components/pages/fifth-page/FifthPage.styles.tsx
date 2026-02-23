import { motion } from "framer-motion";
import styled from "styled-components";

export const CompanyHeader = styled(motion.div)`
  background: linear-gradient(135deg, #ffcc00 0%, #ff9900 100%);
  padding: 2rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  text-align: center;
`;

export const CompanyLogo = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const CompanyName = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const CompanyRole = styled.p`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.1rem;
  font-weight: 500;
`;

export const HighlightBox = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
`;

export const HighlightTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
`;

export const HighlightText = styled.p`
  line-height: 1.6;
  font-size: 0.95rem;
`;