import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  perspective: 1000px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const Text3D = styled(motion.div)`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform-style: preserve-3d;
  text-shadow: 
    1px 1px 0 rgba(0,0,0,0.1),
    2px 2px 0 rgba(0,0,0,0.08),
    3px 3px 0 rgba(0,0,0,0.06),
    4px 4px 0 rgba(0,0,0,0.04);
`;

const HelloWorld3D: React.FC = () => {
  return (
    <Container>
      <Text3D
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ 
          duration: 1.5,
          type: "spring",
          bounce: 0.4
        }}
      >
        "Hello, World!"
      </Text3D>
    </Container>
  );
};

export default HelloWorld3D;