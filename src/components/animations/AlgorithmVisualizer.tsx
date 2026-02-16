import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const VisualizerContainer = styled.div`
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

const ArrayContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin: 2rem 0;
  height: 200px;
  align-items: flex-end;
`;

const Bar = styled(motion.div)<{ height: number; isComparing?: boolean; isSorted?: boolean }>`
  width: 40px;
  background: ${props => 
    props.isSorted ? '#4caf50' : 
    props.isComparing ? '#ff9800' : 
    '#667eea'};
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  font-weight: bold;
  padding-bottom: 0.5rem;
  height: ${props => props.height}px;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
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
  margin-top: 1rem;
`;

const AlgorithmVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [comparing, setComparing] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);

  const generateArray = () => {
    const newArray = Array.from({ length: 8 }, () => 
      Math.floor(Math.random() * 150) + 50
    );
    setArray(newArray);
    setComparing([]);
    setSorted([]);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setComparing([j, j + 1]);
        await new Promise(resolve => setTimeout(resolve, 500));

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
      setSorted(prev => [...prev, n - i - 1]);
    }
    setSorted(Array.from({ length: n }, (_, i) => i));
    setComparing([]);
    setIsSorting(false);
  };

  return (
    <VisualizerContainer>
      <Title>Bubble Sort Visualization</Title>
      <Description>
        Watch how bubble sort compares adjacent elements and swaps them
      </Description>
      
      <ArrayContainer>
        {array.map((value, index) => (
          <Bar
            key={index}
            height={value}
            isComparing={comparing.includes(index)}
            isSorted={sorted.includes(index)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {value}
          </Bar>
        ))}
      </ArrayContainer>

      <Controls>
        <Button onClick={generateArray} disabled={isSorting}>
          New Array
        </Button>
        <Button onClick={bubbleSort} disabled={isSorting}>
          {isSorting ? 'Sorting...' : 'Sort'}
        </Button>
      </Controls>
    </VisualizerContainer>
  );
};

export default AlgorithmVisualizer;