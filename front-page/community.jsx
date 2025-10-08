import React, { useEffect, useState } from 'react';
import './community.css';

const Community = () => {
  // Detect phone viewport (<= 480px) and toggle mobile classes
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia('(max-width: 480px)');
    const onChange = (e) => setIsPhone(e.matches);
    // Set initial state
    setIsPhone(mql.matches);
    // Support older Safari
    try {
      mql.addEventListener('change', onChange);
    } catch (_) {
      mql.addListener(onChange);
    }
    return () => {
      try {
        mql.removeEventListener('change', onChange);
      } catch (_) {
        mql.removeListener(onChange);
      }
    };
  }, []);

  return (
    <section id="community" className="community">
      <div className="community-container">
        {isPhone ? (
          /* Mobile Stack Layout */
          <div className="community-mobile-stack">
            {/* Hero Card */}
            <div className="community-hero-card-mobile reveal is-visible" data-reveal="up">
              <div className="community-badge-mobile">Our Community</div>
              <h2 className="community-title-mobile">
                More Than Networking
              </h2>
              <p className="community-subtitle-mobile">
                Where ambitious young professionals connect, grow, and create memories together
              </p>
            </div>

            {/* Visual Feature Card - No Image */}
            <div className="community-feature-card-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '120ms' }}>
              <div className="feature-gradient-bg"></div>
              <div className="feature-content">
                <div className="feature-icon">✦</div>
                <h3 className="feature-title">Shared Experiences</h3>
                <p className="feature-text">
                  Meaningful moments that bring people together
                </p>
              </div>
            </div>

            {/* Content Cards Grid */}
            <div className="community-cards-grid-mobile">
              <div className="community-info-card-mobile reveal is-visible" data-reveal="left" style={{ "--reveal-delay": '200ms' }}>
                <span className="community-card-number-mobile">01</span>
                <h3 className="community-card-title-mobile">Driven People</h3>
                <p className="community-text-mobile">
                  1855 club brings together ambitious young professionals aged 20-26 who want more from life and believe in supporting each other to get there.
                </p>
              </div>

              <div className="community-info-card-mobile reveal is-visible" data-reveal="right" style={{ "--reveal-delay": '280ms' }}>
                <span className="community-card-number-mobile">02</span>
                <h3 className="community-card-title-mobile">Real Friendships</h3>
                <p className="community-text-mobile">
                  We travel together, celebrate together, and build genuine relationships. This isn't just about business cards—it's about creating lasting friendships.
                </p>
              </div>
            </div>

            {/* Stats Banner */}
            <div className="community-stats-banner-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '360ms' }}>
              <p className="community-stats-title-mobile">Annual Experiences</p>
              <div className="community-stats-content-mobile">
                <span className="stat-number-mobile">2</span>
                <div className="stat-divider-mobile"></div>
                <span className="stat-label-mobile">Exclusive<br/>Trips</span>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop Layout */
          <>
            <div className="community-header reveal" data-reveal="up">
              <h2 className="community-title">
                More Than
                <span className="community-title-highlight"> Networking</span>
              </h2>
              <p className="community-subtitle">
                Where ambitious young professionals connect, grow, and create unforgettable experiences together
              </p>
            </div>

            <div className="community-content">
              <div className="community-description reveal" data-reveal="left" style={{ "--reveal-delay": '120ms' }}>
                <div className="community-value-card">
                  <p className="community-text">
                    1855 club is a community for ambitious young professionals aged 20-26 
                    who want to be surrounded by people who push them to grow. We're a group 
                    of driven individuals who believe that the right community can make all the difference 
                    in where you go in life.
                  </p>
                  <p className="community-text">
                    We're not just about business connections—though those naturally happen. 
                    We're about building real friendships with people who challenge you, celebrate with you, 
                    and create memories that last. Together, we travel, learn, and support each other 
                    in becoming the best versions of ourselves.
                  </p>
                </div>
              </div>

              <div className="community-visual reveal" data-reveal="right" style={{ "--reveal-delay": '200ms' }}>
                <div className="community-visual-box">
                  <div className="visual-gradient"></div>
                  <div className="visual-content">
                    <div className="visual-icon">✦</div>
                    <h3 className="visual-heading">Shared Experiences</h3>
                    <p className="visual-subtext">Meaningful connections and memories</p>
                    <div className="visual-stats-mini">
                      <div className="mini-stat">
                        <span className="mini-number">20-26</span>
                        <span className="mini-label">Age Range</span>
                      </div>
                      <div className="mini-divider"></div>
                      <div className="mini-stat">
                        <span className="mini-number">2</span>
                        <span className="mini-label">Annual Trips</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="community-stats reveal" data-reveal="up" style={{ "--reveal-delay": '240ms' }}>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Annual Trips</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Community;