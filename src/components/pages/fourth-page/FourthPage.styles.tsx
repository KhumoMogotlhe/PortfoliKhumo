import { motion } from "framer-motion";
import styled from "styled-components";



export const CloudGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ConceptBox = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
`;

export const ConceptTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
`;

export const ConceptText = styled.p`
  line-height: 1.6;
  font-size: 0.95rem;
`;