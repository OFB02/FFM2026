import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import ApplyModal from './ApplyModal.jsx';

const Header = () => {
  // Timing config
  const REVEAL_HOLD_MS = 600; // time to hold the black screen with logo before sliding
  const REVEAL_ANIM_MS = 900; // must match CSS animation duration

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRevealVisible, setIsRevealVisible] = useState(false);
  const [isRevealAnimating, setIsRevealAnimating] = useState(false);
  const revealHideTimerRef = useRef(null);
  const revealHoldTimerRef = useRef(null);

  // Close menu when clicking on nav links (mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle smooth scrolling to sections
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen || isRevealVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isRevealVisible]);

  // Cleanup pending timers on unmount
  useEffect(() => {
    return () => {
      if (revealHideTimerRef.current) {
        clearTimeout(revealHideTimerRef.current);
      }
      if (revealHoldTimerRef.current) {
        clearTimeout(revealHoldTimerRef.current);
      }
    };
  }, []);

  // Handle logo click: scroll to top and play split reveal
  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (isModalOpen) setIsModalOpen(false);

  // Jump to top instantly to guarantee hero is revealed post-animation
  window.scrollTo({ top: 0, behavior: 'auto' });

    // Start overlay and hold before animating
    setIsRevealVisible(true);
    if (revealHoldTimerRef.current) clearTimeout(revealHoldTimerRef.current);
    revealHoldTimerRef.current = setTimeout(() => {
      setIsRevealAnimating(true);
    }, REVEAL_HOLD_MS);

    // Hide overlay after animation completes (keep in sync with CSS duration)
    if (revealHideTimerRef.current) clearTimeout(revealHideTimerRef.current);
    revealHideTimerRef.current = setTimeout(() => {
      setIsRevealAnimating(false);
      setIsRevealVisible(false);
    }, REVEAL_HOLD_MS + REVEAL_ANIM_MS + 50);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <button className="logo-button" onClick={handleLogoClick} aria-label="Go to top">
              <img
                className="logo-img"
                src="/pics/FFM%202026%20%284%29.png"
                alt="FFM Network logo"
              />
            </button>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#community" className="nav-link" onClick={(e) => handleNavClick(e, 'community')}>Community</a>
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#events" className="nav-link" onClick={(e) => handleNavClick(e, 'events')}>Events</a>
          </nav>

          <div className="header-actions">
            <button className="btn-primary" onClick={openModal}>Apply Now</button>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
        </div>
      </header>
      {isRevealVisible && (
        <div className={`reveal-overlay ${isRevealAnimating ? 'animate' : ''}`} aria-hidden="true">
          <div className="pane left"></div>
          <div className="pane right"></div>
          <img className="reveal-logo" src="/pics/FFM%202026%20%284%29.png" alt="FFM Network logo" />
        </div>
      )}
      
      <ApplyModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;