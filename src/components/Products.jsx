import React, { useState } from 'react';
import Starfall from './animations/Starfall';
import './Products.css';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { IoCallOutline } from 'react-icons/io5';
import { IoWalletOutline } from 'react-icons/io5';
import { IoHelpCircleOutline } from 'react-icons/io5';

const services = [
  {
    id: 'chatbot',
    name: 'Chatbot',
    icon: IoChatbubbleEllipsesOutline
  },
  {
    id: 'callcenter',
    name: 'Call Center Bot',
    icon: IoCallOutline
  },
  {
    id: 'payment',
    name: 'Payment Bot',
    icon: IoWalletOutline
  },
  {
    id: 'qa',
    name: 'QA Bot',
    icon: IoHelpCircleOutline
  }
];

function Products() {
  const [selectedId, setSelectedId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <div className="products-page">
      <Starfall />
      <div className={`products-grid ${selectedId ? 'grid-minimized' : ''}`}>
        {services.map((service) => (
          <div
            key={service.id}
            className="product-card"
            onClick={() => handleCardClick(service.id)}
          >
            <div className="icon-container">
              {React.createElement(service.icon, { className: 'product-icon' })}
            </div>
            <h2>{service.name}</h2>
          </div>
        ))}
      </div>
      
      {selectedId && (
        <div className="product-details">
          <h2>{services.find(s => s.id === selectedId)?.name}</h2>
          <div className="product-content">
            {selectedId === 'chatbot' && (
              <div>
                <p>AI-powered chatbot for automated processing of user requests</p>
                <ul>
                  <li>24/7 Instant Responses</li>
                  <li>Multi-language Support</li>
                  <li>Popular Messenger Integration</li>
                  <li>Analytics and Reporting</li>
                </ul>
              </div>
            )}
            {selectedId === 'callcenter' && (
              <div>
                <p>Intelligent phone call processing system with speech recognition</p>
                <ul>
                  <li>Speech Recognition</li>
                  <li>Voice Synthesis</li>
                  <li>Call Routing</li>
                  <li>Call Recording</li>
                </ul>
              </div>
            )}
            {selectedId === 'payment' && (
              <div>
                <p>Automated payment request and support processing system</p>
                <ul>
                  <li>Payment Verification</li>
                  <li>Automated Withdrawals</li>
                  <li>Secure Data Processing</li>
                  <li>Transaction Monitoring</li>
                </ul>
              </div>
            )}
            {selectedId === 'qa' && (
              <div>
                <p>AI-powered Quality Assurance system</p>
                <ul>
                  <li>Automated Testing</li>
                  <li>Real-time Analysis</li>
                  <li>Quality Metrics</li>
                  <li>Performance Monitoring</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
