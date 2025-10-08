import React from 'react';
import './footer.css';

const Footer = ({ onContactClick }) => {
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

  const handleContactClick = (e) => {
    e.preventDefault();
    onContactClick();
  };

  return (
    <footer className="footer reveal" data-reveal="up" style={{ "--reveal-delay": '80ms' }}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">1855 club</span>
          </div>
          
          <div className="footer-links">
            <a href="#community" className="footer-link" onClick={(e) => handleNavClick(e, 'community')}>Community</a>
            <a href="#about" className="footer-link" onClick={(e) => handleNavClick(e, 'about')} aria-label="Go to About section">About</a>
            <a href="#events" className="footer-link" onClick={(e) => handleNavClick(e, 'events')}>Events</a>
            <a href="#contact" className="footer-link" onClick={handleContactClick}>Contact us</a>
          </div>

          <div className="footer-social">
            <a 
              href="https://www.instagram.com/1855club?igsh=M2dvZXk4OXRuNXV6&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Follow us on Instagram"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
        
  <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 1855 club. Membership by application.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
