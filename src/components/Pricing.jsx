import React from 'react';
import Starfall from './animations/Starfall';
import './Pricing.css';

const pricingPlans = [
  {
    name: 'Starter',
    price: '499',
    description: 'Perfect for small businesses',
    features: [
      'Single Bot Integration',
      'Basic Analytics',
      '5,000 Messages/Month',
      '8/5 Support',
      'Basic Customization'
    ]
  },
  {
    name: 'Professional',
    price: '999',
    description: 'Ideal for growing companies',
    features: [
      'Multiple Bot Integration',
      'Advanced Analytics',
      '25,000 Messages/Month',
      '24/7 Priority Support',
      'Full Customization',
      'API Access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '1999',
    description: 'For large-scale operations',
    features: [
      'Unlimited Bot Integration',
      'Enterprise Analytics',
      'Unlimited Messages',
      'Dedicated Support',
      'Custom Development',
      'SLA Agreement',
      'White Label Solution'
    ]
  }
];

function Pricing() {
  return (
    <div className="pricing-page">
      <Starfall />
      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <div 
            key={plan.name} 
            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
          >
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <h2>{plan.name}</h2>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">{plan.price}</span>
              <span className="period">/mo</span>
            </div>
            <p className="description">{plan.description}</p>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="select-plan">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
