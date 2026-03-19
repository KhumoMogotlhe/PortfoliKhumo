import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CompanyHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const CompanyLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 12px;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const CompanyName = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #2a1f0e;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const CompanyRole = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  color: #8b7050;
  font-style: italic;
  margin: 0;
`;

// ─── Polaroid gallery ─────────────────────────────────────────────────────────

export const PolaroidGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1.5rem;
  margin: 1.5rem 0 2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const Polaroid = styled(motion.div)<{ rotate: number }>`
  display: flex;
  flex-direction: column;
  background: #fefcf5;
  padding: 10px 10px 32px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.18),
    0 1px 3px rgba(0, 0, 0, 0.12);
  transform: rotate(${({ rotate }) => rotate}deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
  width: 160px;
  flex-shrink: 0;

  &:hover {
    transform: rotate(0deg) scale(1.05);
    box-shadow:
      0 12px 28px rgba(0, 0, 0, 0.22),
      0 2px 6px rgba(0, 0, 0, 0.14);
    z-index: 10;
  }

  @media (max-width: 480px) {
    width: 130px;
    padding: 8px 8px 26px;
  }
`;

export const PolaroidImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  filter: saturate(0.88) contrast(1.05);
`;

export const PolaroidCaption = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 0.78rem;
  color: #6b5a3e;
  text-align: center;
  margin: 8px 0 0;
  font-style: italic;
  line-height: 1.3;
`;

// ─── Phone mockup ─────────────────────────────────────────────────────────────

export const PhoneMockupWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin: 0.5rem 0 2rem;
`;

export const PhoneFrame = styled(motion.div)`
  position: relative;
  width: 180px;
  background: #1a1a1a;
  border-radius: 36px;
  padding: 12px;
  box-shadow:
    0 0 0 2px #333,
    0 20px 48px rgba(0, 0, 0, 0.4),
    0 8px 16px rgba(0, 0, 0, 0.25);

  /* Volume buttons on the left */
  &::after {
    content: '';
    position: absolute;
    left: -3px;
    top: 72px;
    width: 3px;
    height: 28px;
    background: #2a2a2a;
    border-radius: 2px 0 0 2px;
    box-shadow: 0 40px 0 #2a2a2a;
  }

  /* Power button on the right */
  &::before {
    content: '';
    position: absolute;
    right: -3px;
    top: 100px;
    width: 3px;
    height: 44px;
    background: #2a2a2a;
    border-radius: 0 2px 2px 0;
  }

  @media (max-width: 480px) {
    width: 148px;
    border-radius: 28px;
    padding: 10px;
  }
`;

export const PhoneScreen = styled.div`
  border-radius: 26px;
  overflow: hidden;
  background: #000;
  position: relative;

  /* Dynamic island / notch bar */
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 72px;
    height: 16px;
    background: #1a1a1a;
    border-radius: 20px;
    z-index: 2;
  }

  @media (max-width: 480px) {
    border-radius: 20px;
  }
`;

export const PhoneScreenImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

export const PhoneCaption = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 0.82rem;
  color: #8b7050;
  font-style: italic;
  text-align: center;
  margin: 0;
  max-width: 200px;
`;

// ─── Highlight box ────────────────────────────────────────────────────────────

export const HighlightBox = styled(motion.div)`
  background: rgba(139, 110, 70, 0.07);
  border-left: 3px solid rgba(139, 110, 70, 0.4);
  border-radius: 0 6px 6px 0;
  padding: 1rem 1.25rem;
  margin-top: 0.5rem;
`;

export const HighlightTitle = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 600;
  color: #2a1f0e;
  margin: 0 0 0.5rem;
`;

export const HighlightText = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  color: #4a3a24;
  line-height: 1.8;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;