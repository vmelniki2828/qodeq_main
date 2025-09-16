import styled from 'styled-components';

export const ProductsPage = styled.div`
  background: #000;
  color: #fff;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const StarfallContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

export const ProductsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  z-index: 10;

  &.has-selection {
    justify-content: flex-start;
  }
`;

export const ProductsHeader = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 60px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

export const ProductCard = styled.div`
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 20px;
  padding: 20px 10px;
  text-align: center;
  cursor: pointer;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1);

  &:hover {
    background: #f5f5f5;
    border-color: #333;
    box-shadow: 0 15px 50px rgba(255, 255, 255, 0.2);
  }

  &:hover .icon-container {
    background: #333;
    transform: scale(1.1);
  }

  &.selected {
    background: #000;
    border-color: #fff;
    color: #fff;
    justify-content: center;
    align-items: center;
  }

  &.selected .icon-container {
    background: #fff;
    transform: scale(2);
    margin-bottom: 0;
    margin-top: 25px;
  }

  &.selected .product-icon {
    color: #000;
  }

  &.selected .product-title {
    color: #fff;
  }

  &.unselected .product-title {
    opacity: 0;
    transform: translateY(10px);
  }

  &.unselected .icon-container {
    transform: scale(2);
    margin-bottom: 0;
    margin-top: 25px;
  }
`;

export const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const ProductIcon = styled.div`
  font-size: 32px;
  color: #ffffff;
  transition: all 0.3s ease;
`;

export const ProductTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: #000000;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1.3;
  transition: all 0.3s ease;
`;

export const MiniBlocksContainer = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SelectedServiceTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
`;

export const MiniBlocksGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const MiniBlock = styled.div`
  width: 80px;
  height: 80px;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &.selected {
    background: #000000;
    border-color: #ffffff;
  }
`;

export const MiniIconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  .mini-block.selected & {
    background: #ffffff;
  }
`;

export const MiniProductIcon = styled.div`
  font-size: 24px;
  color: #ffffff;

  .mini-block.selected & {
    color: #000000;
  }
`;

export const ChatbotInfo = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  padding: 0 20px;
`;

export const ChatbotHeroNew = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  padding: 3rem;
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
`;

export const HeroContent = styled.div`
  .hero-title {
    font-size: 3rem;
    font-weight: 800;
    color: #000000;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    color: rgba(0,0,0,0.7);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

export const HeroCtaBtn = styled.button`
  background: #000000;
  color: #ffffff;
  padding: 1rem 2.5rem;
  border: 2px solid #000000;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
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
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: left 0.6s ease;
    z-index: -1;
  }

  &:hover {
    background: #ffffff;
    color: #000000;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    animation: pulse-glow 2s infinite;
  }

  &:hover::before {
    left: 100%;
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    50% {
      box-shadow: 0 15px 40px rgba(0,0,0,0.4), 0 0 20px rgba(0,0,0,0.2);
    }
  }
`;

export const HeroAnimation = styled.div`
  padding: 40px;
`;

export const AiSpherePlaceholder = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
`;

export const ChatHeader = styled.div`
  background: #f8f8f8;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AiAvatar = styled.div`
  width: 30px;
  height: 30px;
  background: radial-gradient(circle, #000000, rgba(0,0,0,0.8));
  border-radius: 50%;
  position: relative;
  animation: aiThink 2s ease-in-out infinite;

  &::before {
    content: 'AI';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 8px;
    font-weight: bold;
  }

  @keyframes aiThink {
    0%, 100% { 
      transform: scale(1); 
      box-shadow: 0 0 5px rgba(0,0,0,0.2);
    }
    50% { 
      transform: scale(1.05); 
      box-shadow: 0 0 15px rgba(0,0,0,0.4);
    }
  }
`;

export const ChatTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;

export const OnlineStatus = styled.div`
  width: 8px;
  height: 8px;
  background: #00d084;
  border-radius: 50%;
  animation: statusBlink 2s ease-in-out infinite;

  @keyframes statusBlink {
    0%, 80%, 100% { opacity: 1; }
    40% { opacity: 0.3; }
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
`;

export const Message = styled.div`
  max-width: 80%;
  padding: 10px 12px;
  border-radius: 15px;
  font-size: 12px;
  line-height: 1.4;
  animation: messageSlide 0.5s ease-out forwards;
  opacity: 0;

  &.user {
    align-self: flex-end;
    background: #000000;
    color: white;
    border-bottom-right-radius: 5px;
    animation-delay: 0.5s;
  }

  &.ai {
    align-self: flex-start;
    background: #f0f0f0;
    color: #000000;
    border-bottom-left-radius: 5px;
    animation-delay: 1.5s;
  }

  &.typing {
    animation-delay: 3s;
  }

  @keyframes messageSlide {
    from { 
      transform: translateY(10px); 
      opacity: 0; 
    }
    to { 
      transform: translateY(0); 
      opacity: 1; 
    }
  }
`;

export const TypingIndicator = styled.div`
  display: flex;
  gap: 3px;
  padding: 5px 0;
`;

export const TypingDot = styled.div`
  width: 4px;
  height: 4px;
  background: rgba(0,0,0,0.4);
  border-radius: 50%;
  animation: typingDots 1.5s ease-in-out infinite;

  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @keyframes typingDots {
    0%, 60%, 100% { transform: translateY(0); }
    30% { transform: translateY(-5px); }
  }
`;

export const ChatInput = styled.div`
  padding: 15px;
  border-top: 1px solid rgba(0,0,0,0.1);
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const InputField = styled.div`
  flex: 1;
  height: 25px;
  background: #f8f8f8;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 20px;
  padding: 0 15px;
  font-size: 11px;
  animation: inputFocus 3s ease-in-out infinite;

  @keyframes inputFocus {
    0%, 90%, 100% { 
      border-color: rgba(0,0,0,0.1); 
      box-shadow: none;
    }
    50% { 
      border-color: rgba(0,0,0,0.3); 
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }
  }
`;

export const SendButton = styled.div`
  width: 25px;
  height: 25px;
  background: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: buttonPulse 2s ease-in-out infinite;

  &::before {
    content: '→';
    color: white;
    font-size: 12px;
    font-weight: bold;
  }

  @keyframes buttonPulse {
    0%, 100% { 
      transform: scale(1); 
      background: #000000;
    }
    50% { 
      transform: scale(1.05); 
      background: rgba(0,0,0,0.9);
      box-shadow: 0 0 8px rgba(0,0,0,0.3);
    }
  }
`;

export const ExamplesSection = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

export const SectionTitleBlack = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 3rem;
`;

export const ExamplesList = styled.div`
  margin-bottom: 30px;
`;

export const ExampleQuestion = styled.div`
  display: inline-block;
  background: #fff;
  color: #222;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.10);
  padding: 12px 28px;
  font-size: 1.08rem;
  font-weight: 600;
  margin-right: 32px;
  transition: box-shadow 0.2s;
  border: 1px solid #eee;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.16);
  }

  &.active {
    background: #f0f0f0;
    border-color: #333;
  }
`;

export const MessengerDialogue = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  z-index: 20;
  min-width: 340px;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  background: linear-gradient(135deg, #f7f7fa 80%, #e6f0ff 100%);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.16), 0 1.5px 0 #e6f0ff;
  padding: 28px 26px 24px 26px;
  border: 1.5px solid #e0e7ef;
  animation: fadeInMessenger 0.35s cubic-bezier(.4,0,.2,1);
  pointer-events: auto;

  @keyframes fadeInMessenger {
    from { opacity: 0; transform: translate(-50%, 20px) scale(0.96); }
    to { opacity: 1; transform: translate(-50%, 0) scale(1); }
  }
`;

export const MessengerBubble = styled.div`
  padding: 12px 20px;
  border-radius: 16px;
  font-size: 1.08rem;
  font-weight: 500;
  max-width: 95%;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  margin-bottom: 2px;
  line-height: 1.5;
  word-break: break-word;

  &.user {
    background: #e6f0ff;
    color: #1a3a6b;
    align-self: flex-end;
    border: 1px solid #cce0ff;
  }

  &.bot {
    background: #fff;
    color: #222;
    border: 1px solid #eee;
  }
`;

export const FactsSection = styled.div`
  margin-bottom: 4rem;
`;

export const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const FactCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &.glass-effect {
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  }

  &.highlight-card {
    border-color: rgba(0,0,0,0.3);
    background: #f8f8f8;
  }
`;

export const FactIcon = styled.div`
  font-size: 2.5rem;
  color: #000000;
  min-width: 60px;
`;

export const FactContent = styled.div`
  color: #FFFFFF;
`;

export const FactNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.5rem;
`;

export const FactDescription = styled.div`
  color: rgba(0,0,0,0.7);
  font-size: 1rem;
`;

export const CapabilitiesSectionNew = styled.div`
  margin-bottom: 4rem;
`;

export const CapabilitiesGridNew = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export const CapabilityCardNew = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0,0,0,0.3);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }
`;

export const CapabilityIconNew = styled.div`
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 1rem;
`;

export const CapabilityCardNewH4 = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.8rem;
  line-height: 1.3;
`;

export const CapabilityCardNewP = styled.p`
  color: rgba(0,0,0,0.7);
  line-height: 1.4;
  font-size: 0.9rem;
`;

export const EconomicsSection = styled.div`
  margin-bottom: 4rem;
`;

export const CostComparisonInteractive = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 3rem;
`;

export const OperatorCostInput = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const CostInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const CurrencySymbol = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000000;
`;

export const CostInput = styled.input`
  width: 100px;
  padding: 0.8rem 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  border: 2px solid rgba(0,0,0,0.2);
  border-radius: 8px;
  background: #ffffff;
  color: #000000;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
`;

export const CostLabelSmall = styled.span`
  font-size: 1rem;
  color: rgba(0,0,0,0.7);
`;

export const ComparisonBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const CostBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CostLabel = styled.div`
  min-width: 100px;
  font-weight: 600;
  color: #000000;
`;

export const CostBarFill = styled.div`
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  &.operator-bar {
    width: 100%;
    background: linear-gradient(90deg, #666666, #999999);
  }

  &.ai-bar {
    width: 25%;
    background: linear-gradient(90deg, #000000, #333333);
  }
`;

export const CostValue = styled.div`
  font-weight: 700;
  color: #000000;
  min-width: 100px;
`;

export const SavingsHighlight = styled.div`
  text-align: center;
  padding: 2rem;
  background: #f8f8f8;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 15px;
`;

export const SavingsText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.5rem;
`;

export const SavingsPercentage = styled.div`
  font-size: 1.2rem;
  color: rgba(0,0,0,0.7);
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const MetricCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }
`;

export const MetricNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 1rem;
`;

export const MetricLabel = styled.div`
  color: rgba(0,0,0,0.7);
  font-size: 1rem;
  line-height: 1.4;
`;

export const CalculatorSection = styled.div`
  margin-bottom: 4rem;
`;

export const CalculatorContainer = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 20px;
  padding: 3rem;
`;

export const CalculatorSettings = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(0,0,0,0.02);
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,0.05);
`;

export const SettingItem = styled.div`
  label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000000;
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export const SettingNote = styled.p`
  font-size: 0.9rem;
  color: rgba(0,0,0,0.6);
  margin: 0;
  font-style: italic;
`;

export const CalculatorInput = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    color: #000000;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const CalculatorSlider = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #000000;
  outline: none;
  margin-bottom: 1rem;
  cursor: pointer;

  &::-webkit-slider-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #000000;
    border-radius: 4px;
    border: 1px solid #000000;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #000000;
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  }

  &::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #000000;
    border-radius: 4px;
    border: 1px solid #000000;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #000000;
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  }
`;

export const SliderValue = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
`;

export const CalculatorResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f8f8;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 10px;
  color: #000000;
  font-weight: 600;

  &.savings-result {
    background: #ffffff;
    border: 2px solid #000000;
    color: #000000;
  }

  span:first-child {
    color: #000000;
    font-weight: 600;
  }
`;

export const OperatorCostResult = styled.span`
  color: #666666;
  font-weight: 700;
`;

export const AiCostResult = styled.span`
  color: #000000;
  font-weight: 700;
`;

export const SavingsAmountResult = styled.span`
  color: #000000;
  font-weight: 800;
  font-size: 1.2rem;
`;

// Call Center Bot styled components
export const CallCenterInfo = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const CallCenterHeroNew = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const CallCenterAudioPlayers = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 2rem 0;

  audio {
    width: 320px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
    audio {
      width: 100%;
      max-width: 320px;
    }
  }
`;

export const AiCallPlaceholder = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CallCore = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  position: relative;
  z-index: 3;
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.6);
  animation: pulse 2s infinite;
`;

export const CallRing = styled.div`
  position: absolute;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  animation: ripple 2s infinite;

  &.ring-1 {
    width: 100px;
    height: 100px;
    animation-delay: 0s;
  }

  &.ring-2 {
    width: 140px;
    height: 140px;
    animation-delay: 0.5s;
  }
`;

export const CallWaves = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
`;

export const Wave = styled.div`
  position: absolute;
  width: 4px;
  height: 20px;
  background: linear-gradient(to bottom, #667eea, #764ba2);
  border-radius: 2px;
  animation: wave 1.5s infinite ease-in-out;

  &.wave-0 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(0deg); animation-delay: 0s; }
  &.wave-1 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg); animation-delay: 0.1s; }
  &.wave-2 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(90deg); animation-delay: 0.2s; }
  &.wave-3 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(135deg); animation-delay: 0.3s; }
  &.wave-4 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(180deg); animation-delay: 0.4s; }
  &.wave-5 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(225deg); animation-delay: 0.5s; }
  &.wave-6 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(270deg); animation-delay: 0.6s; }
  &.wave-7 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(315deg); animation-delay: 0.7s; }
`;

// Payment Bot styled components
export const PaymentInfo = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PaymentHeroNew = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const PaymentAnimation = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaymentCard = styled.div`
  width: 200px;
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  position: relative;
  z-index: 3;
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.6);
  animation: float 3s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const PaymentWaves = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
`;

export const PaymentWave = styled.div`
  position: absolute;
  width: 6px;
  height: 30px;
  background: linear-gradient(to bottom, #667eea, #764ba2);
  border-radius: 3px;
  animation: paymentWave 2s infinite ease-in-out;

  &.wave-0 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(0deg); animation-delay: 0s; }
  &.wave-1 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(30deg); animation-delay: 0.2s; }
  &.wave-2 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(60deg); animation-delay: 0.4s; }
  &.wave-3 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(90deg); animation-delay: 0.6s; }
  &.wave-4 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(120deg); animation-delay: 0.8s; }
  &.wave-5 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(150deg); animation-delay: 1s; }
  &.wave-6 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(180deg); animation-delay: 1.2s; }
  &.wave-7 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(210deg); animation-delay: 1.4s; }
  &.wave-8 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(240deg); animation-delay: 1.6s; }
  &.wave-9 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(270deg); animation-delay: 1.8s; }
  &.wave-10 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(300deg); animation-delay: 2s; }
  &.wave-11 { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(330deg); animation-delay: 2.2s; }
`;

// QA Bot styled components
export const QAInfo = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const QAHeroNew = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const QAAnimation = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QACore = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  position: relative;
  z-index: 3;
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.6);
  animation: qaPulse 2s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

export const QARings = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
`;

export const QARing = styled.div`
  position: absolute;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  animation: qaRipple 3s infinite;

  &.ring-1 {
    width: 120px;
    height: 120px;
    animation-delay: 0s;
  }

  &.ring-2 {
    width: 160px;
    height: 160px;
    animation-delay: 1s;
  }

  &.ring-3 {
    width: 200px;
    height: 200px;
    animation-delay: 2s;
  }
`;

// Responsive Design
export const ResponsiveStyles = styled.div`
  @media (max-width: 1024px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    
    .products-header {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
    }
    
    .products-header {
      font-size: 2rem;
      margin-bottom: 40px;
    }
    
    .products-content {
      padding: 0;
    }

    .chatbot-hero-new {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 2rem;
    }
    
    .hero-content .hero-title {
      font-size: 2.2rem;
      text-align: center;
    }
    
    .hero-content .hero-subtitle {
      text-align: center;
      font-size: 1.1rem;
    }
    
    .hero-cta-btn {
      display: block;
      margin: 0 auto;
    }
    
    .ai-sphere-placeholder {
      width: 200px;
      height: 200px;
    }
    
    .facts-grid {
      grid-template-columns: 1fr;
    }
    
    .capabilities-grid-new {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 1200px) {
    .capabilities-grid-new {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 900px) {
    .capabilities-grid-new {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }
`;