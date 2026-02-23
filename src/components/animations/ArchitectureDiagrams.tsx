import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DiagramNode = styled(motion.div)<{ color?: string }>`
  background: ${props => props.color || '#e8f4f8'};
  border: 2px solid ${props => props.color ? `${props.color}dd` : '#4a90e2'};
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #232f3e;
`;

const Arrow = styled.div`
  text-align: center;
  color: #4a90e2;
  font-size: 1.5rem;
  margin: 0.25rem 0;
`;

const FlowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HorizontalFlow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const HorizontalArrow = styled.div`
  color: #4a90e2;
  font-size: 1.5rem;
`;

// EC2 Architecture
export const EC2Architecture: React.FC = () => (
  <FlowContainer>
    <DiagramNode
      color="#ffebe6"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      User Request
    </DiagramNode>
    <Arrow>↓</Arrow>
    <DiagramNode
      color="#fff4e6"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Load Balancer
    </DiagramNode>
    <Arrow>↓</Arrow>
    <DiagramNode
      color="#e6f7ff"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      EC2 Instance (Web Server)
    </DiagramNode>
    <Arrow>↓</Arrow>
    <DiagramNode
      color="#f0f5ff"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      Response
    </DiagramNode>
  </FlowContainer>
);

// S3 Architecture
export const S3Architecture: React.FC = () => (
  <FlowContainer>
    <DiagramNode
      color="#ffebe6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.1 }}
    >
      Application
    </DiagramNode>
    <Arrow>↓</Arrow>
    <HorizontalFlow>
      <DiagramNode
        color="#e6f7ff"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Upload Files
      </DiagramNode>
      <HorizontalArrow>→</HorizontalArrow>
      <DiagramNode
        color="#fff4e6"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        S3 Bucket
      </DiagramNode>
    </HorizontalFlow>
    <Arrow>↓</Arrow>
    <DiagramNode
      color="#f0fff0"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.7 }}
    >
      Stored & Accessible via URL
    </DiagramNode>
  </FlowContainer>
);

// Lambda Architecture
export const LambdaArchitecture: React.FC = () => (
  <FlowContainer>
    <DiagramNode
      color="#ffebe6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      API Gateway (Trigger)
    </DiagramNode>
    <Arrow>↓</Arrow>
    <DiagramNode
      color="#fff4e6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      Lambda Function
    </DiagramNode>
    <Arrow>↓</Arrow>
    <HorizontalFlow>
      <DiagramNode
        color="#f0fff0"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Process Data
      </DiagramNode>
      <HorizontalArrow>→</HorizontalArrow>
      <DiagramNode
        color="#e6f7ff"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Return Result
      </DiagramNode>
    </HorizontalFlow>
  </FlowContainer>
);

// Serverless Architecture
export const ServerlessArchitecture: React.FC = () => (
  <FlowContainer>
    <DiagramNode
      color="#ffebe6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      User Request
    </DiagramNode>
    <Arrow>↓</Arrow>
    <DiagramNode
      color="#fff4e6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      API Gateway
    </DiagramNode>
    <Arrow>↓</Arrow>
    <DiagramNode
      color="#e6f7ff"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      Lambda Functions
    </DiagramNode>
    <Arrow>↓</Arrow>
    <HorizontalFlow>
      <DiagramNode
        color="#f0fff0"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        DynamoDB
      </DiagramNode>
      <DiagramNode
        color="#fff0f6"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        S3
      </DiagramNode>
    </HorizontalFlow>
  </FlowContainer>
);