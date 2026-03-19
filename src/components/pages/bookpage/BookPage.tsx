import React, { useRef, useState } from 'react';
import {
  Scene,
  BookWrapper,
  BookInner,
  StackLayer,
  Page,
  PageContent,
  PageHeader,
  ChapterLabel,
  PageNumber,
  IntroBlock,
  NameTitle,
  RoleSubtitle,
  IntroText,
  Footer,
  PromptText,
  ButtonRow,
  ArrowSVG,
  Spine,
  Vignette,
  ScorchCorner,
} from './styles/BookPage.styles';
import TornEdgeSVG from './ToenEdgeSVG';
import NextButton from '../../buttons/next-button/NextButton';
import type { BookPageProps } from './BookPage.types';
import styled, { keyframes, css } from 'styled-components';

const curlIn = keyframes`
  0%   { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
  60%  { transform: perspective(1200px) rotateY(-90deg); opacity: 0.6; }
  100% { transform: perspective(1200px) rotateY(-180deg); opacity: 0; }
`;

const SwipeablePage = styled(Page)<{ swiping: boolean }>`
  transform-origin: left center;

  ${({ swiping }) =>
    swiping &&
    css`
      animation: ${curlIn} 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    `}
`;

const curlPulse = keyframes`
  0%   { transform: rotate(-2deg) scale(1); }
  50%  { transform: rotate(-6deg) scale(1.04); }
  100% { transform: rotate(-2deg) scale(1); }
`;

const CornerCurl = styled.div<{ visible: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 48px;
    height: 48px;
    background: linear-gradient(
      135deg,
      transparent 50%,
      rgba(139, 110, 70, 0.18) 50%
    );
    border-top-left-radius: 4px;
    z-index: 20;
    pointer-events: none;
    transform-origin: bottom right;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 0.3s;

    ${({ visible }) =>
      visible &&
      css`
        animation: ${curlPulse} 1.8s ease-in-out infinite;
      `}
  }
`;

const SwipeHint = styled.div<{ visible: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 80px;
    left: 0;
    right: 0;
    font-family: 'EB Garamond', serif;
    font-size: 0.82rem;
    font-style: italic;
    color: rgba(139, 110, 70, 0.7);
    pointer-events: none;
    z-index: 100;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 0.5s;
  }
`;

const MIN_SWIPE_DISTANCE = 60;
const MAX_VERTICAL_DRIFT = 80;

const BookPage: React.FC<BookPageProps> = ({ onNext }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [swiping, setSwiping] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  const handleFlip = () => {
    if (isFlipping || swiping) return;
    setIsFlipping(true);
  };

  const handleAnimationEnd = () => {
    onNext?.();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaY) > MAX_VERTICAL_DRIFT) return;
    if (Math.abs(deltaX) < MIN_SWIPE_DISTANCE) return;
    if (deltaX > 0) return;

    setShowHint(false);
    setSwiping(true);
    setTimeout(() => {
      setSwiping(false);
      onNext?.();
    }, 450);
  };

  return (
    <Scene>
      <BookWrapper>
        <BookInner>
          <StackLayer depth={3} />
          <StackLayer depth={2} />
          <StackLayer depth={1} />

          <SwipeablePage
            isFlipping={isFlipping}
            swiping={swiping}
            onAnimationEnd={handleAnimationEnd}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Spine />
            <Vignette />
            <ScorchCorner corner="tl" />
            <ScorchCorner corner="br" />

            <TornEdgeSVG position="top" variant={0} />
            <TornEdgeSVG position="bottom" variant={0} />

            <CornerCurl visible={showHint} />

            <PageContent>
              <PageHeader>
                <ChapterLabel>Portfolio</ChapterLabel>
                <PageNumber>— 01 —</PageNumber>
              </PageHeader>

              <IntroBlock>
                <NameTitle>Khumo Mogotlhe</NameTitle>
                <RoleSubtitle>Software Engineer</RoleSubtitle>

                <IntroText>
                  <p>I build thoughtful digital experiences.</p>
                  <p>I build for the web.</p>
                  <p>I run. I box. I cook.</p>
                  <p>I create — in more ways than one.</p>
                </IntroText>
              </IntroBlock>

              <Footer>
                <PromptText>
                  Built as a reusable component.
                  <br />
                  It moves the story forward.
                </PromptText>

                <ButtonRow>
                  <ArrowSVG viewBox="0 0 100 50">
                    <path d="M 5 25 Q 50 10, 85 25" />
                    <polygon points="85,25 78,20 78,30" />
                  </ArrowSVG>

                  <NextButton
                    onClick={handleFlip}
                    label="Next"
                  />
                </ButtonRow>
              </Footer>
            </PageContent>
          </SwipeablePage>
        </BookInner>
      </BookWrapper>

      <SwipeHint visible={showHint}>
        swipe to turn the page →
      </SwipeHint>
    </Scene>
  );
};

export default BookPage;