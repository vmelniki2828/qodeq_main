import styled, { keyframes } from 'styled-components';

const pricingPulse = keyframes`
  0%, 100% {
    box-shadow: 0 5px 15px rgba(255,255,255,0.2);
  }
  50% {
    box-shadow: 0 8px 25px rgba(255,255,255,0.3), 0 0 15px rgba(255,255,255,0.2);
  }
`;

const pricingPulseDark = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.4), 0 5px 20px rgba(0,0,0,0.3);
  }
`;

export const PricingPage = styled.div`
  min-height: 100vh;
  background: #000;
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const PricingContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 40px 20px;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const PricingCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 25px;
  width: 350px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
  }

  &.popular {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: -15px;
  right: 20px;
  background: #fff;
  color: #000;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  border: 2px solid #000;
`;

export const PricingTitle = styled.h2`
  font-size: 1.6rem;
  margin: 0 0 15px;
  background: linear-gradient(135deg, #fff, #888);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Price = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin: 15px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
`;

export const Currency = styled.span`
  font-size: 2rem;
  margin-right: 5px;
  opacity: 0.8;
`;

export const Period = styled.span`
  font-size: 1.2rem;
  opacity: 0.6;
  margin-left: 5px;
  align-self: flex-end;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
  font-size: 1rem;
`;

export const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  flex-grow: 1;

  li {
    margin: 10px 0;
    padding-left: 30px;
    position: relative;
    color: rgba(255, 255, 255, 0.8);

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #fff;
    }
  }
`;

export const SelectPlan = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 12px 25px;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.6s ease;
    z-index: -1;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    animation: ${pricingPulse} 2s infinite;
  }

  &:hover::before {
    left: 100%;
  }

  .popular & {
    background: #fff;
    border: 2px solid #000;
    color: #000;

    &::before {
      background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 0, 0, 0.1),
        transparent
      );
    }

    &:hover {
      background: #000;
      color: #fff;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
      animation: ${pricingPulseDark} 2s infinite;
    }
  }
`;
