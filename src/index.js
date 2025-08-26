import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

// Глобальный эффект инверсии по курсору
window.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--cursor-x', `${e.clientX}px`);
  document.body.style.setProperty('--cursor-y', `${e.clientY}px`);
});
window.addEventListener('mouseleave', () => {
  document.body.style.removeProperty('--cursor-x');
  document.body.style.removeProperty('--cursor-y');
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
