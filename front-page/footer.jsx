import React from 'react';
import './footer.css';

const Footer = () => {
  // Handle smooth scrolling to sections
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="footer reveal" data-reveal="up" style={{ "--reveal-delay": '80ms' }}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">FFM Network</span>
          </div>
          
          <div className="footer-links">
            <a href="#community" className="footer-link" onClick={(e) => handleNavClick(e, 'community')}>Community</a>
            <a href="#events" className="footer-link" onClick={(e) => handleNavClick(e, 'events')}>Events</a>
          </div>
        </div>
        
  <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 FFM Network. Invitation only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
