// import React from 'react';
// import {
//   Scene,
//   BookWrapper,
//   BookInner,
//   StackLayer,
//   Page,
//   PageContent,
//   PageHeader,
//   ChapterLabel,
//   PageNumber,
//   Spine,
//   Vignette,
//   ScorchCorner,
// } from './bookpage/styles/BookPage.styles';
// import TornEdgeSVG from './bookpage/ToenEdgeSVG';

// interface BookPageShellProps {
//   pageNumber: string;
//   chapterLabel?: string;
//   tearVariant?: 0 | 1;
//   sceneColor?: string;
//   children: React.ReactNode;
// }

// const BookPageShell: React.FC<BookPageShellProps> = ({
//   pageNumber,
//   chapterLabel = 'Portfolio',
//   tearVariant = 0,
//   sceneColor = '#1a1612',
//   children,
// }) => {
//   return (
//     <Scene>
//       <BookWrapper>
//         <BookInner>
//           <StackLayer depth={3} />
//           <StackLayer depth={2} />
//           <StackLayer depth={1} />

//           <Page>
//             <Spine />
//             <Vignette />
//             <ScorchCorner corner="tl" />
//             <ScorchCorner corner="br" />

//             <TornEdgeSVG
//               position="top"
//               variant={tearVariant}
//               maskColor={sceneColor}
//             />
//             <TornEdgeSVG
//               position="bottom"
//               variant={tearVariant}
//               maskColor={sceneColor}
//             />

//             <PageContent>
//               <PageHeader>
//                 <ChapterLabel>{chapterLabel}</ChapterLabel>
//                 <PageNumber>— {pageNumber} —</PageNumber>
//               </PageHeader>

//               {children}
//             </PageContent>
//           </Page>
//         </BookInner>
//       </BookWrapper>
//     </Scene>
//   );
// };

// export { BookPageShell };
// export type { BookPageShellProps };
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
  Spine,
  Vignette,
  ScorchCorner,
} from './bookpage/styles/BookPage.styles';
import TornEdgeSVG from './bookpage/ToenEdgeSVG';
import styled, { keyframes, css } from 'styled-components';

// ─── Page curl animation (mobile only) ───────────────────────────────────────

const curlIn = keyframes`
  0%   { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
  60%  { transform: perspective(1200px) rotateY(-90deg); opacity: 0.6; }
  100% { transform: perspective(1200px) rotateY(-180deg); opacity: 0; }
`;

const curlBack = keyframes`
  0%   { transform: perspective(1200px) rotateY(-180deg); opacity: 0; }
  60%  { transform: perspective(1200px) rotateY(-90deg); opacity: 0.6; }
  100% { transform: perspective(1200px) rotateY(0deg); opacity: 1; }
`;

const SwipeablePage = styled(Page)<{
  swiping?: 'left' | 'right' | null;
}>`
  transform-origin: left center;

  ${({ swiping }) =>
    swiping === 'left' &&
    css`
      animation: ${curlIn} 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    `}

  ${({ swiping }) =>
    swiping === 'right' &&
    css`
      animation: ${curlBack} 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    `}
`;

// ─── Corner curl hint ─────────────────────────────────────────────────────────
// Shown on mobile to hint the page is swipeable

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
    gap: 6px;
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

// ─── Types ────────────────────────────────────────────────────────────────────

interface BookPageShellProps {
  pageNumber: string;
  chapterLabel?: string;
  tearVariant?: 0 | 1;
  /** Called when user swipes left (next page) */
  onNext?: () => void;
  /** Called when user swipes right (prev page) */
  onPrev?: () => void;
  children: React.ReactNode;
}

// ─── Swipe config ─────────────────────────────────────────────────────────────

const MIN_SWIPE_DISTANCE = 60; // px — minimum horizontal drag to trigger
const MAX_VERTICAL_DRIFT = 80; // px — cancel swipe if user scrolls vertically

// ─── Component ────────────────────────────────────────────────────────────────

const BookPageShell: React.FC<BookPageShellProps> = ({
  pageNumber,
  chapterLabel = 'Portfolio',
  tearVariant = 0,
  onNext,
  onPrev,
  children,
}) => {
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const [swiping, setSwiping] = useState<'left' | 'right' | null>(null);
  const [showHint, setShowHint] = useState(true);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Ignore if the user was scrolling vertically
    if (Math.abs(deltaY) > MAX_VERTICAL_DRIFT) return;
    // Ignore if swipe too short
    if (Math.abs(deltaX) < MIN_SWIPE_DISTANCE) return;

    // Hide hint after first intentional swipe
    setShowHint(false);

    if (deltaX < 0 && onNext) {
      // Swipe left → next page
      setSwiping('left');
      setTimeout(() => {
        setSwiping(null);
        onNext();
      }, 450);
    } else if (deltaX > 0 && onPrev) {
      // Swipe right → previous page
      setSwiping('right');
      setTimeout(() => {
        setSwiping(null);
        onPrev();
      }, 450);
    }
  };

  return (
    <Scene>
      <BookWrapper>
        <BookInner>
          <StackLayer depth={3} />
          <StackLayer depth={2} />
          <StackLayer depth={1} />

          <SwipeablePage
            swiping={swiping}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Spine />
            <Vignette />
            <ScorchCorner corner="tl" />
            <ScorchCorner corner="br" />

            <TornEdgeSVG position="top" variant={tearVariant} />
            <TornEdgeSVG position="bottom" variant={tearVariant} />

            <CornerCurl visible={showHint} />

            <PageContent>
              <PageHeader>
                <ChapterLabel>{chapterLabel}</ChapterLabel>
                <PageNumber>— {pageNumber} —</PageNumber>
              </PageHeader>

              {children}
            </PageContent>
          </SwipeablePage>
        </BookInner>
      </BookWrapper>

      <SwipeHint visible={showHint}>
        ← swipe to turn the page →
      </SwipeHint>
    </Scene>
  );
};

export { BookPageShell };
export type { BookPageShellProps };