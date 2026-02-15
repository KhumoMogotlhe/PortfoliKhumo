import React, { useEffect, useState } from "react";
import type { LanguageStep, Props } from "./LanguageJourney.types";
import { Icon, IconContainer, JavaScriptScene, JourneyContainer, PythonScene, SceneContent, SceneDescription, SceneTitle, WebScene } from "./LanguageJourney.styles";
import { AnimatePresence } from "framer-motion";

const LanguageJourney: React.FC<Props> = ({ pythonIcon, jsIcon, htmlIcon }) => {
    const [currentStep, setCurrentStep] = useState(0);
  
    const steps: LanguageStep[] = [
      {
        id: 'python',
        icon: pythonIcon,
        title: 'Then came Python',
        description: 'My first real language. Lists, loops, functions—building blocks that taught me to think algorithmically. The snake awakened logic.',
        SceneComponent: PythonScene
      },
      {
        id: 'javascript',
        icon: jsIcon,
        title: 'JavaScript brought interaction',
        description: 'Suddenly, things could respond. Click, hover, change. The web became alive. Asynchronous thinking opened new doors.',
        SceneComponent: JavaScriptScene
      },
      {
        id: 'web',
        icon: htmlIcon,
        title: 'HTML & CSS gave it form',
        description: 'Structure met style. Semantic markup, responsive layouts—the art of making information beautiful and accessible.',
        SceneComponent: WebScene
      }
    ];
  
    useEffect(() => {
      if (currentStep < steps.length - 1) {
        const timer = setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, 3000); // Each step shows for 3 seconds
        return () => clearTimeout(timer);
      }
    }, [currentStep, steps.length]);
  
    return (
      <JourneyContainer>
        <AnimatePresence mode="wait">
          {steps.slice(0, currentStep + 1).map((step, index) => {
            const SceneComp = step.SceneComponent;
            return (
              <SceneComp
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index === currentStep ? 0 : 0
                }}
              >
                <IconContainer
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <Icon src={step.icon} alt={step.title} />
                </IconContainer>
                <SceneContent>
                  <SceneTitle>{step.title}</SceneTitle>
                  <SceneDescription>{step.description}</SceneDescription>
                </SceneContent>
              </SceneComp>
            );
          })}
        </AnimatePresence>
      </JourneyContainer>
    );
  };
  
  export default LanguageJourney;