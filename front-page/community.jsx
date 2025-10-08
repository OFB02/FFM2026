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
              <div className="community-badge-mobile">Exclusive Network</div>
              <h2 className="community-title-mobile">
                Elite Community
              </h2>
              <p className="community-subtitle-mobile">
                Where visionary minds unite to create extraordinary futures
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
                <h3 className="community-overlay-title-mobile">Luxury Experiences</h3>
                <p className="community-overlay-text-mobile">
                  From exclusive venues to private events
                </p>
              </div>
            </div>

            {/* Content Cards Grid */}
            <div className="community-cards-grid-mobile">
              <div className="community-info-card-mobile reveal is-visible" data-reveal="left" style={{ "--reveal-delay": '200ms' }}>
                <span className="community-card-number-mobile">01</span>
                <h3 className="community-card-title-mobile">Curated Excellence</h3>
                <p className="community-text-mobile">
                  1885 club brings together ambitious visionaries aged 20-26 who refuse to settle for ordinary. We're a movement of excellence.
                </p>
              </div>

              <div className="community-info-card-mobile reveal is-visible" data-reveal="right" style={{ "--reveal-delay": '280ms' }}>
                <span className="community-card-number-mobile">02</span>
                <h3 className="community-card-title-mobile">Beyond Networking</h3>
                <p className="community-text-mobile">
                  We don't just connect—we elevate. Our members travel together, celebrate together, and push boundaries in every aspect of life.
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
                A Network Beyond
                <span className="community-title-highlight"> Ordinary</span>
              </h2>
              <p className="community-subtitle">
                Where ambitious young minds connect, elevate, and create extraordinary experiences together
              </p>
            </div>

            <div className="community-content">
              <div className="community-description reveal" data-reveal="left" style={{ "--reveal-delay": '120ms' }}>
                <p className="community-text">
                  1885 club is an exclusive community for ambitious individuals aged 20-26 
                  who are driven to achieve extraordinary things. We are a carefully curated ecosystem 
                  of like-minded young visionaries who come together to socialize, challenge 
                  each other, and elevate our standards.
                </p>
                <p className="community-text">
                  At 1885 club, we don't just gather—we build. Our culture extends beyond business, 
                  encouraging members to live life to the fullest extent. Together, we forge 
                  meaningful partnerships, turn ambition into action, and create extraordinary 
                  experiences that define our generation.
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