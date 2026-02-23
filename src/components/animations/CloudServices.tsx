import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff9900 0%, #ff6600 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ServiceName = styled.h3`
  font-size: 1.3rem;
  color: #232f3e;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const RevealButton = styled.button`
  background: #ff9900;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;

  &:hover {
    background: #ff6600;
  }
`;

const ArchitectureOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(35, 47, 62, 0.98);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 12px;
  z-index: 10;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ArchitectureTitle = styled.h4`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ArchitectureDiagram = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  max-width: 500px;
`;

// const DiagramNode = styled(motion.div)<{ color?: string }>`
//   background: ${props => props.color || '#e8f4f8'};
//   border: 2px solid ${props => props.color ? `${props.color}dd` : '#4a90e2'};
//   border-radius: 8px;
//   padding: 0.75rem 1rem;
//   margin: 0.5rem 0;
//   text-align: center;
//   font-size: 0.9rem;
//   font-weight: 600;
//   color: #232f3e;
// `;

// const Arrow = styled.div`
//   text-align: center;
//   color: #4a90e2;
//   font-size: 1.5rem;
//   margin: 0.25rem 0;
// `;

interface CloudServiceCardProps {
  icon: string;
  name: string;
  description: string;
  architecture: React.ReactNode;
}

const CloudServiceCard: React.FC<CloudServiceCardProps> = ({
  icon,
  name,
  description,
  architecture,
}) => {
  const [showArchitecture, setShowArchitecture] = useState(false);

  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ServiceIcon>{icon}</ServiceIcon>
      <ServiceName>{name}</ServiceName>
      <ServiceDescription>{description}</ServiceDescription>
      <RevealButton onClick={() => setShowArchitecture(true)}>
        View Architecture →
      </RevealButton>

      <AnimatePresence>
        {showArchitecture && (
          <ArchitectureOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={() => setShowArchitecture(false)}>
              ×
            </CloseButton>
            <ArchitectureTitle>{name} Architecture</ArchitectureTitle>
            <ArchitectureDiagram>{architecture}</ArchitectureDiagram>
          </ArchitectureOverlay>
        )}
      </AnimatePresence>
    </CardContainer>
  );
};

export default CloudServiceCard;