import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const DemoContainer = styled.div`
  background: #f9f9f9;
  border-radius: 12px;
  padding: 2rem;
  margin: 1.5rem 0;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  min-height: 250px;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0;
`;

const StackItem = styled(motion.div)`
  width: 200px;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #667eea;
  border-radius: 6px;
  font-size: 1rem;
  width: 200px;

  &:focus {
    outline: none;
    border-color: #764ba2;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;

  &:hover {
    background: #5568d3;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const Description = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const Info = styled.p`
  text-align: center;
  color: #764ba2;
  font-weight: 600;
  margin-top: 1rem;
`;

const DataStructureDemo: React.FC = () => {
  const [stack, setStack] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const push = () => {
    if (inputValue.trim()) {
      setStack([...stack, inputValue]);
      setInputValue('');
    }
  };

  const pop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, -1));
    }
  };

  return (
    <DemoContainer>
      <Title>Stack Data Structure</Title>
      <Description>
        LIFO (Last In, First Out) - Add and remove items from the top
      </Description>

      <StackContainer>
        <AnimatePresence>
          {stack.map((item, index) => (
            <StackItem
              key={index}
              initial={{ scale: 0, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              {item}
            </StackItem>
          ))}
        </AnimatePresence>
      </StackContainer>

      <Info>Stack size: {stack.length}</Info>

      <Controls>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a value"
          onKeyPress={(e) => e.key === 'Enter' && push()}
        />
        <Button onClick={push} disabled={!inputValue.trim()}>
          Push
        </Button>
        <Button onClick={pop} disabled={stack.length === 0}>
          Pop
        </Button>
      </Controls>
    </DemoContainer>
  );
};

export default DataStructureDemo;