// import React from 'react';
// import {
//   ArrowSVG,
//   BaseContainer,
//   ButtonPrompt,
//   Footer,
//   IntroBlock,
//   IntroText,
//   PageContent,
//   PageNumber,
//   PromptText
// } from './styles/BookPage.styles';

// import NextButton from '../../buttons/next-button/NextButton';
// import type { BookPageProps } from './BookPage.types';

// const BookPage: React.FC<BookPageProps> = ({ onNext }) => {
//   return (
//     <BaseContainer>
//       <PageContent>
//         <IntroBlock>
//           <h1>Khumo Mogotlhe</h1>
//           <p>Software Engineer</p>

//           <IntroText>
//             I build thoughtful digital experiences. <br />
//             I build for the web. <br />
//             I run. I box. I cook. <br />
//             I create — in more ways than one.
//           </IntroText>
//         </IntroBlock>
//       </PageContent>

//       <Footer>
//         <ButtonPrompt>
//           <PromptText>
//             Built as a reusable component. <br />
//             It moves the story forward
//           </PromptText>

//           <ArrowSVG viewBox="0 0 100 50">
//             <path d="M 5 25 Q 50 10, 85 25" />
//             <polygon points="85,25 78,20 78,30" />
//           </ArrowSVG>
//         </ButtonPrompt>

//         <NextButton onClick={onNext} label="Next" />

//         <PageNumber>- 01 -</PageNumber>
//       </Footer>
//     </BaseContainer>
//   );
// };

// export default BookPage;

import React, { useState, useRef } from 'react';
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

/**
 * BookPage — Page 1 of the portfolio book.
 *
 * Architecture notes:
 * ─────────────────────────────────────────────────────────────────────────────
 * • The "stacked pages" effect comes from three absolutely-positioned StackLayer
 *   divs offset behind the real Page. They use real divs (not box-shadow) so
 *   they don't overflow the container on mobile.
 *
 * • The torn / burnt edges are TornEdgeSVG components. Each renders an SVG
 *   path filled with the scene background color (#1a1612) so the jagged mask
 *   makes the page look genuinely ragged — not just a clip-path cut.
 *
 * • Page turn: when isFlipping is true the Page styled-component runs the
 *   flipForward keyframe (0° → −180°). onAnimationEnd calls onNext so the
 *   parent can mount the next page. The button is disabled during animation
 *   to prevent double-fires.
 *
 * • Mobile: no clip-path, no box-shadow offsets that extend beyond the
 *   container. Stack layers are clamped via transform translate only.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const BookPage: React.FC<BookPageProps> = ({ onNext }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  const handleFlip = () => {
    if (isFlipping) return;
    setIsFlipping(true);
  };

  const handleAnimationEnd = () => {
    // Wait for the flip to fully complete before handing off
    onNext?.();
  };

  return (
    <Scene>
      <BookWrapper>
        <BookInner>
          {/* Depth layers — sit behind the real page */}
          <StackLayer depth={3} />
          <StackLayer depth={2} />
          <StackLayer depth={1} />

          <Page
            ref={pageRef}
            isFlipping={isFlipping}
            onAnimationEnd={handleAnimationEnd}
          >
            {/* Structural overlays */}
            <Spine />
            <Vignette />
            <ScorchCorner corner="tl" />
            <ScorchCorner corner="br" />

            {/* Torn edges — variant 0 for page 1 */}
            <TornEdgeSVG position="top" variant={0} maskColor="#1a1612" />
            <TornEdgeSVG position="bottom" variant={0} maskColor="#1a1612" />

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
                    disabled={isFlipping}
                  />
                </ButtonRow>
              </Footer>
            </PageContent>
          </Page>
        </BookInner>
      </BookWrapper>
    </Scene>
  );
};

export default BookPage;