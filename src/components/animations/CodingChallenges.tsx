import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ChallengeContainer = styled.div`
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

const ProblemStatement = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
`;

const CodeEditor = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 1rem;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 0.95rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  resize: vertical;
  background: #1e1e1e;
  color: #d4d4d4;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
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
`;

const Result = styled(motion.div)<{ success: boolean }>`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${props => props.success ? '#4caf50' : '#f44336'};
  color: white;
  font-weight: 600;
`;

const TestCases = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

const CodingChallenge: React.FC = () => {
  const [code, setCode] = useState(`function reverseString(str) {
  // Your code here
  
}`);
  const [result, setResult] = useState<{ message: string; success: boolean } | null>(null);

  const runCode = () => {
    try {
      // Create a function from the code
      const userFunction = eval(`(${code})`);
      
      // Test cases
      const tests = [
        { input: 'hello', expected: 'olleh' },
        { input: 'world', expected: 'dlrow' },
        { input: 'JavaScript', expected: 'tpircSavaJ' }
      ];

      let passed = 0;
      for (const test of tests) {
        const result = userFunction(test.input);
        if (result === test.expected) passed++;
      }

      if (passed === tests.length) {
        setResult({ message: `✓ All tests passed! (${passed}/${tests.length})`, success: true });
      } else {
        setResult({ message: `✗ ${passed}/${tests.length} tests passed. Try again!`, success: false });
      }
    } catch (error) {
      setResult({ message: '✗ Error in your code. Check syntax!', success: false });
    }
  };

  return (
    <ChallengeContainer>
      <Title>Mini Challenge: Reverse a String</Title>
      
      <ProblemStatement>
        <strong>Problem:</strong> Write a function that takes a string and returns it reversed.
        <TestCases>
          <div><strong>Example:</strong></div>
          <div>Input: "hello" → Output: "olleh"</div>
          <div>Input: "world" → Output: "dlrow"</div>
        </TestCases>
      </ProblemStatement>

      <CodeEditor
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
      />

      <Controls>
        <Button onClick={runCode}>Run Tests</Button>
      </Controls>

      {result && (
        <Result
          success={result.success}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {result.message}
        </Result>
      )}
    </ChallengeContainer>
  );
};

export default CodingChallenge;