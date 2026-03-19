// import styled from 'styled-components';


// export const BaseContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   width: 90vw;
//   max-width: 800px;
//   min-height: 100dvh;
//   height: auto;

//   /* 📖 Paper feel */
//   background: linear-gradient(
//     to right,
//     #f4efe6 0%,
//     #fdfbf7 40%,
//     #fdfbf7 60%,
//     #f4efe6 100%
//   );

//   margin: 1.5rem auto;
//   padding: 2rem;
//   overflow: hidden;

//   /* 📄 Stacked pages effect */
//   box-shadow:
//     0 2px 10px rgba(0, 0, 0, 0.1),
//     0 10px 40px rgba(0, 0, 0, 0.05),
//     -8px 8px 0px #eae3d6,
//     -16px 16px 0px #ddd4c4;

//   border-radius: 0 8px 8px 0;

//   /* 🔥 Aged edges */
//   &::before {
//     content: "";
//     position: absolute;
//     inset: 0;
//     pointer-events: none;
//     border-radius: inherit;
//     box-shadow:
//       inset 0 0 40px rgba(139, 115, 85, 0.15),
//       inset 0 0 80px rgba(0,0,0,0.05);
//   }

//   /* ✂️ Slight cut edge */
//   clip-path: polygon(
//     0% 0%, 
//     100% 0%, 
//     100% 96%, 
//     95% 100%, 
//     5% 100%, 
//     0% 96%
//   );

//   @media (max-width: 768px) {
//     width: 95vw;
//     padding: 1.5rem;
//     margin: 1rem auto;
//     border-radius: 8px;
//   }

//   @media (max-width: 480px) {
//     padding: 1rem;
//   }
// `;

// export const PageContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   flex: 1;
// `;

// export const IntroText = styled.div`
//   display: flex;
//   flex-direction: column;
//   line-height: 1.6;

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//   }
// `;

// export const IntroBlock = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;

//   h1 {
//     font-size: 2.5rem;
//     margin: 0;

//     @media (max-width: 768px) {
//       font-size: 2rem;
//     }

//     @media (max-width: 480px) {
//       font-size: 1.75rem;
//     }
//   }

//   p {
//     font-size: 1.1rem;
//     color: #666;

//     @media (max-width: 768px) {
//       font-size: 1rem;
//     }

//     @media (max-width: 480px) {
//       font-size: 0.9rem;
//     }
//   }
// `;

// export const Footer = styled.div`
//   margin-top: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
// `;

// export const ButtonPrompt = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   align-self: flex-end;

//   @media (max-width: 480px) {
//     align-self: center;
//     text-align: center;
//     flex-direction: column;
//   }
// `;

// export const PromptText = styled.p`
//   font-size: 0.95rem;
//   color: #8b7355;
//   font-style: italic;
//   text-align: right;
//   max-width: 250px;

//   @media (max-width: 480px) {
//     text-align: center;
//     max-width: 100%;
//     font-size: 0.8rem;
//   }
// `;

// export const PageNumber = styled.span`
//   font-size: 0.9rem;
//   color: #6b6b6b;
//   font-style: italic;
// `;

// export const ArrowSVG = styled.svg`
//   width: 100px;
//   height: 50px;

//   path {
//     stroke: #8b7355;
//     stroke-width: 2;
//     fill: none;
//     stroke-dasharray: 5, 5;
//     animation: dash 2s linear infinite;
//   }

//   polygon {
//     fill: #8b7355;
//   }

//   @keyframes dash {
//     to {
//       stroke-dashoffset: -20;
//     }
//   }

//   @media (max-width: 480px) {
//     display: none;
//   }
// `;



// export const ChapterTitle = styled.h1`
//   font-size: 2rem;
//   font-weight: 600;
//   color: #333;
//   font-style: italic;

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.25rem;
//   }
// `;




// export const Section = styled.div`
//   margin-bottom: 2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;

//   @media (max-width: 768px) {
//     margin-bottom: 1.5rem;
//   }

//   @media (max-width: 480px) {
//     margin-bottom: 1rem;
//   }

//   p {
//     line-height: 1.6;
//     color: #444;

//     @media (max-width: 480px) {
//       font-size: 0.9rem;
//       line-height: 1.5;
//     }
//   }
// `;

// export const SubSectionTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 500;
//   color: #555;
//   margin-bottom: 0.5rem;

//   @media (max-width: 768px) {
//     font-size: 1.1rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1rem;
//   }
// `;

// export const SectionTitle = styled.h2`
//   font-size: 1.5rem;
//   font-weight: 600;
//   color: #222;
//   margin-bottom: 0.5rem;

//   @media (max-width: 768px) {
//     font-size: 1.3rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.1rem;
//   }
// `;

// export const TechList = styled.ul`
//   list-style-type: none;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
//   gap: 1rem;
//   padding-left: 0;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
//     gap: 0.75rem;
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 0.5rem;
//   }
// `;

// export const TechCard = styled.div`
//   width: 100%;
//   min-height: 180px;
//   background: #f9f9f9;
//   border-radius: 12px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   padding: 1rem;
//   cursor: pointer;
//   transition: transform 0.2s, box-shadow 0.2s;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 20px rgba(0,0,0,0.1);
//   }

//   @media (max-width: 768px) {
//     min-height: 160px;
//     padding: 0.75rem;
//   }

//   @media (max-width: 480px) {
//     min-height: 140px;
//     padding: 0.5rem;
//     gap: 0.25rem;
//   }
// `;

// export const Icon = styled.img`
//   width: 48px;
//   height: 48px;
//   object-fit: contain;

//   @media (max-width: 768px) {
//     width: 40px;
//     height: 40px;
//   }

//   @media (max-width: 480px) {
//     width: 32px;
//     height: 32px;
//   }
// `;

// export const TechName = styled.h4`
//   font-size: 1rem;
//   font-weight: 600;
//   margin: 0;

//   @media (max-width: 768px) {
//     font-size: 0.9rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.85rem;
//   }
// `;

// export const TechDescription = styled.p`
//   font-size: 0.85rem;
//   text-align: center;
//   color: #555;
//   margin: 0;
//   line-height: 1.4;

//   @media (max-width: 768px) {
//     font-size: 0.8rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.75rem;
//     line-height: 1.3;
//   }
// `;

// export const BookWrapper = styled.div`
//   perspective: 1500px;
// `;

// export const Page = styled.div<{ isFlipping: boolean }>`
//   transform-origin: left;
//   transition: transform 0.8s ease;

//   ${({ isFlipping }) =>
//     isFlipping &&
//     `
//       transform: rotateY(-180deg);
//     `}
// `;

// export const PageHeader = styled.div`
//   border-bottom: 2px solid #ddd;
//   padding-bottom: 1rem;
//   margin-bottom: 1rem;

//   @media (max-width: 768px) {
//     padding-bottom: 0.75rem;
//   }
//   @media (max-width: 480px) {
//     padding-bottom: 0.5rem;
//   } 

// `;

import styled, { keyframes, css } from 'styled-components';

// ─── Tokens ──────────────────────────────────────────────────────────────────

export const tokens = {
  paper: '#f5edd8',
  paperDark: '#ede0c4',
  ink: '#2a1f0e',
  inkMid: '#3a2e1e',
  inkFaint: '#4a3a24',
  sepia: '#8b7050',
  sepiaMid: '#9a7d5a',
  sepiaLight: '#c8b89a',
  scene: '#1a1612',
  stackA: '#c8b89a',
  stackB: '#bfad8e',
  stackC: '#b6a284',
};

// ─── Animations ──────────────────────────────────────────────────────────────

const dashAnimate = keyframes`
  to { stroke-dashoffset: -20; }
`;

export const flipForward = keyframes`
  0%   { transform: rotateY(0deg); box-shadow:  4px 4px 24px rgba(0,0,0,0.45), inset -3px 0 12px rgba(0,0,0,0.08); }
  50%  { transform: rotateY(-90deg); box-shadow: -8px 4px 32px rgba(0,0,0,0.55); }
  100% { transform: rotateY(-180deg); box-shadow: -4px 4px 24px rgba(0,0,0,0.4); }
`;

export const flipBackward = keyframes`
  0%   { transform: rotateY(-180deg); }
  100% { transform: rotateY(0deg); }
`;

// ─── Scene / Outer shell ─────────────────────────────────────────────────────

export const Scene = styled.div`
  background: ${tokens.scene};
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem 1.25rem;
  font-family: 'EB Garamond', Georgia, serif;

  @media (max-width: 480px) {
    padding: 1.25rem 0.75rem;
  }
`;

// ─── Book perspective wrapper ─────────────────────────────────────────────────

export const BookWrapper = styled.div`
  perspective: 1800px;
  width: 100%;
  max-width: 520px;
`;

export const BookInner = styled.div`
  position: relative;
  transform-style: preserve-3d;
`;

// ─── Stacked page layers (pseudo-depth behind the real page) ─────────────────
// We use real divs instead of box-shadow offsets so they don't bleed outside
// the container width on mobile.

export const StackLayer = styled.div<{ depth: 1 | 2 | 3 }>`
  position: absolute;
  inset: 0;
  border-radius: 0 6px 6px 0;
  pointer-events: none;
  z-index: 0;

  ${({ depth }) =>
    depth === 1 &&
    css`
      transform: translate(5px, 5px);
      background: ${tokens.stackA};
      opacity: 0.65;
    `}

  ${({ depth }) =>
    depth === 2 &&
    css`
      transform: translate(10px, 10px);
      background: ${tokens.stackB};
      opacity: 0.5;
    `}

  ${({ depth }) =>
    depth === 3 &&
    css`
      transform: translate(15px, 15px);
      background: ${tokens.stackC};
      opacity: 0.4;
    `}
`;

// ─── The page itself ──────────────────────────────────────────────────────────

export const Page = styled.div<{ isFlipping?: boolean; isBack?: boolean }>`
  position: relative;
  background: ${tokens.paper};
  border-radius: 0 6px 6px 0;
  min-height: 580px;
  height: auto;
  transform-origin: left center;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  z-index: 1;

  /* Subtle paper lines */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 27px,
      rgba(160, 130, 90, 0.07) 27px,
      rgba(160, 130, 90, 0.07) 28px
    );
    pointer-events: none;
    z-index: 1;
  }

  box-shadow:
    4px 4px 24px rgba(0, 0, 0, 0.45),
    inset -3px 0 12px rgba(0, 0, 0, 0.08);

  ${({ isFlipping }) =>
    isFlipping &&
    css`
      animation: ${flipForward} 0.85s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    `}

  @media (max-width: 480px) {
    min-height: 500px;
    border-radius: 4px;
  }
`;

// The back face of a flipped page (page 2 content)
export const PageBack = styled(Page)`
  position: absolute;
  inset: 0;
  transform: rotateY(180deg);
  border-radius: 6px 0 0 6px;
  box-shadow:
    -4px 4px 24px rgba(0, 0, 0, 0.4),
    inset 3px 0 12px rgba(0, 0, 0, 0.08);
`;

// ─── Torn / burnt edges ───────────────────────────────────────────────────────
// Positioned SVGs that sit over the page top and bottom to fake a ragged edge.
// They match the scene background so anything outside the tear is invisible.

export const TornEdge = styled.div<{ position: 'top' | 'bottom' }>`
  position: absolute;
  ${({ position }) => position}: 0;
  left: 0;
  right: 0;
  height: 20px;
  z-index: 10;
  pointer-events: none;
  overflow: hidden;

  svg {
    display: block;
    width: 100%;
    height: 20px;
  }
`;

// Scorch / vignette overlays
export const Vignette = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    ellipse at center,
    transparent 55%,
    rgba(139, 110, 70, 0.2) 100%
  );
  pointer-events: none;
  z-index: 2;
`;

export const ScorchCorner = styled.div<{ corner: 'br' | 'tl' }>`
  position: absolute;
  pointer-events: none;
  z-index: 3;

  ${({ corner }) =>
    corner === 'br' &&
    css`
      bottom: 0;
      right: 0;
      width: 100px;
      height: 100px;
      background: radial-gradient(
        ellipse at bottom right,
        rgba(30, 15, 0, 0.4) 0%,
        transparent 70%
      );
    `}

  ${({ corner }) =>
    corner === 'tl' &&
    css`
      top: 0;
      left: 0;
      width: 70px;
      height: 70px;
      background: radial-gradient(
        ellipse at top left,
        rgba(30, 15, 0, 0.22) 0%,
        transparent 70%
      );
    `}
`;

export const Spine = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 28px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.28),
    rgba(0, 0, 0, 0.07),
    transparent
  );
  z-index: 5;
  pointer-events: none;
  border-radius: 0 0 0 6px;
`;

// ─── Page content layout ──────────────────────────────────────────────────────

export const PageContent = styled.div`
  position: relative;
  z-index: 6;
  padding: 36px 32px 32px 44px;
  display: flex;
  flex-direction: column;
  min-height: 580px;

  @media (max-width: 768px) {
    padding: 30px 24px 28px 36px;
    min-height: 500px;
  }

  @media (max-width: 480px) {
    padding: 26px 18px 22px 26px;
    min-height: 480px;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid rgba(139, 110, 70, 0.2);
  padding-bottom: 0.75rem;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    margin-bottom: 1.75rem;
  }
`;

export const ChapterLabel = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${tokens.sepiaMid};
`;

export const PageNumber = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 12px;
  color: ${tokens.sepiaMid};
  font-style: italic;
`;

// ─── Intro / hero block ───────────────────────────────────────────────────────

export const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const NameTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 9vw, 3.25rem);
  font-weight: 600;
  color: ${tokens.ink};
  line-height: 1.08;
  margin: 0 0 0.3rem;
`;

export const RoleSubtitle = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  color: ${tokens.sepia};
  font-style: italic;
  letter-spacing: 0.06em;
  margin: 0 0 2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const IntroText = styled.div`
  font-family: 'EB Garamond', serif;
  font-size: 1.15rem;
  color: ${tokens.inkMid};
  line-height: 2;

  p { margin: 0; }

  @media (max-width: 480px) {
    font-size: 1.05rem;
    line-height: 1.9;
  }
`;

// ─── Footer / navigation ──────────────────────────────────────────────────────

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
  padding-top: 1.5rem;

  @media (max-width: 480px) {
    align-items: center;
    padding-top: 1rem;
  }
`;

export const PromptText = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 0.88rem;
  color: ${tokens.sepiaMid};
  font-style: italic;
  text-align: right;
  margin: 0;

  @media (max-width: 480px) {
    text-align: center;
    font-size: 0.82rem;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

// Dashed animated arrow — hidden on very small screens
export const ArrowSVG = styled.svg`
  width: 90px;
  height: 44px;
  flex-shrink: 0;

  path {
    stroke: ${tokens.sepia};
    stroke-width: 1.5;
    fill: none;
    stroke-dasharray: 5 4;
    animation: ${dashAnimate} 1.8s linear infinite;
  }

  polygon {
    fill: ${tokens.sepia};
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

// ─── Chapter / inner page styles ─────────────────────────────────────────────

export const ChapterTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.4rem, 5vw, 2rem);
  font-weight: 400;
  font-style: italic;
  color: ${tokens.ink};
  margin: 0 0 1.25rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.75rem;

  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
  }
`;

export const SectionTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${tokens.inkMid};
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`;

export const SectionBody = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 1.05rem;
  color: ${tokens.inkFaint};
  line-height: 1.8;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(139, 110, 70, 0.2);
  margin: 0.5rem 0 1.25rem;
`;

// ─── Tech / skill grid ────────────────────────────────────────────────────────

export const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 10px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;

export const TechCard = styled.li`
  background: rgba(139, 110, 70, 0.08);
  border: 1px solid rgba(139, 110, 70, 0.18);
  border-radius: 4px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'EB Garamond', serif;
  font-size: 0.95rem;
  color: ${tokens.inkMid};
  cursor: default;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(139, 110, 70, 0.15);
    border-color: rgba(139, 110, 70, 0.3);
  }

  @media (max-width: 480px) {
    font-size: 0.88rem;
    padding: 8px 10px;
  }
`;

export const TechDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${tokens.sepia};
  flex-shrink: 0;
`;

export const TechName = styled.span`
  font-weight: 500;
`;

export const TechDescription = styled.span`
  font-size: 0.82rem;
  color: ${tokens.sepiaMid};
  font-style: italic;
  margin-left: auto;
`;

// ─── Icon (for tech logos if needed) ─────────────────────────────────────────

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 26px;
    height: 26px;
  }
`;