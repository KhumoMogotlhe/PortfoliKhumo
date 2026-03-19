import React from 'react';
import { TornEdge } from './styles/BookPage.styles';

// Two distinct tear patterns — alternate them between pages for variety
const TOP_PATHS = [
  // Pattern A
  'M0,0 L0,6 Q8,2 15,8 Q22,14 30,9 Q38,4 44,10 Q52,16 60,8 Q67,2 74,7 Q82,13 90,6 Q96,1 104,8 Q112,15 118,7 Q125,1 133,9 Q140,15 148,6 Q155,0 163,8 Q171,14 178,5 Q184,0 192,8 Q200,14 206,6 Q213,0 221,9 Q228,15 236,7 Q243,1 250,9 Q257,15 265,6 Q272,0 280,8 Q288,14 294,5 Q301,0 309,8 Q317,14 324,6 Q331,0 338,9 Q346,15 353,7 Q360,1 367,8 Q375,14 382,5 Q389,0 400,6 L400,0 Z',
  // Pattern B
  'M0,0 L0,5 Q12,10 20,4 Q28,0 36,7 Q43,13 51,5 Q58,0 66,8 Q74,14 82,5 Q89,0 97,8 Q105,14 113,6 Q120,1 128,9 Q135,15 143,7 Q150,2 158,10 Q166,16 174,8 Q181,2 189,10 Q197,15 205,7 Q212,2 220,10 Q228,16 236,8 Q243,3 251,11 Q258,17 266,9 Q273,3 281,10 Q289,16 297,8 Q304,2 312,10 Q320,16 327,7 Q334,1 342,9 Q350,15 358,7 Q365,2 372,9 Q380,14 388,6 Q394,1 400,5 L400,0 Z',
];

const BOTTOM_PATHS = [
  // Pattern A
  'M0,18 L0,12 Q10,16 18,10 Q26,5 34,12 Q41,17 49,9 Q56,3 64,11 Q71,17 79,8 Q85,2 93,10 Q101,16 108,8 Q115,2 123,11 Q130,17 138,9 Q145,3 152,12 Q160,18 168,10 Q175,4 182,12 Q189,17 197,8 Q204,2 212,11 Q219,17 227,9 Q234,3 242,12 Q250,18 257,10 Q264,4 272,12 Q280,17 287,8 Q294,2 302,10 Q309,16 317,8 Q324,2 331,11 Q338,17 346,9 Q353,3 361,12 Q368,17 376,9 Q383,3 390,11 Q395,16 400,12 L400,18 Z',
  // Pattern B
  'M0,18 L0,13 Q9,8 17,14 Q25,18 32,11 Q40,5 48,13 Q55,18 63,10 Q70,4 78,13 Q86,18 93,10 Q100,4 108,13 Q116,18 123,10 Q130,4 138,13 Q145,18 153,11 Q160,5 168,14 Q176,18 183,10 Q190,4 198,13 Q205,18 213,10 Q220,4 228,13 Q236,18 243,10 Q250,4 258,12 Q265,18 273,10 Q280,4 288,12 Q295,18 303,10 Q310,4 318,12 Q325,18 332,10 Q340,4 348,12 Q355,18 363,10 Q370,5 378,13 Q385,18 393,11 Q397,7 400,13 L400,18 Z',
];

interface TornEdgeSVGProps {
  /** Which edge to render */
  position: 'top' | 'bottom';
  /** Alternates the tear silhouette so pages feel unique */
  variant?: 0 | 1;
  /** The scene background color — must match exactly so the mask works */
  maskColor?: string;
}

/**
 * Renders a torn / burnt paper edge.
 *
 * How it works: an SVG path filled with the scene background color sits
 * on top of the page edge. Everything outside the jagged path is hidden,
 * making the page look genuinely ragged.
 *
 * Usage:
 *   <TornEdgeSVG position="top" variant={0} maskColor="#1a1612" />
 *   <TornEdgeSVG position="bottom" variant={1} maskColor="#1a1612" />
 */
const TornEdgeSVG: React.FC<TornEdgeSVGProps> = ({
  position,
  variant = 0,
  maskColor = '#1a1612',
}) => {
  const path = position === 'top' ? TOP_PATHS[variant] : BOTTOM_PATHS[variant];
  const tracePath = position === 'top'
    ? TOP_PATHS[variant].replace(/L400,0 Z|L0,0 Z/g, '').replace(/^M0,0 L0,\d+ /, 'M0,6 ')
    : BOTTOM_PATHS[variant].replace(/L400,18 Z|L0,18 Z/g, '').replace(/^M0,18 L0,\d+ /, 'M0,12 ');

  return (
    <TornEdge position={position}>
      <svg
        viewBox="0 0 400 20"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mask fill — hides page content outside the tear */}
        <path d={path} fill={maskColor} />
        {/* Subtle brown trace along the tear edge for burnt look */}
        <path
          d={tracePath}
          fill="none"
          stroke="rgba(80,50,20,0.28)"
          strokeWidth="0.8"
        />
      </svg>
    </TornEdge>
  );
};

export default TornEdgeSVG;