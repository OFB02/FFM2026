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
          /* Completely New Mobile Stack Layout */
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

            {/* Image Card with Overlay */}
            <div className="community-image-card-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '120ms' }}>
              <img 
                src="/pics/meilleur-restaurant-courchevel-1850.png" 
                alt="FFM Network Community" 
                className="community-img-mobile" 
                loading="lazy"
                decoding="async"
                draggable="false"
              />
              <div className="community-image-overlay-mobile">
                <h3 className="community-overlay-title-mobile">Unique Experiences</h3>
                <p className="community-overlay-text-mobile">
                  From great venues to unforgettable moments
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
          /* Desktop Layout - Unchanged */
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

              <div className="community-visual reveal" data-reveal="right" style={{ "--reveal-delay": '200ms' }}>
                <img 
                  src="/pics/meilleur-restaurant-courchevel-1850.png" 
                  alt="FFM Network Community" 
                  className="community-img" 
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 90vw, 400px"
                  draggable="false"
                />
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