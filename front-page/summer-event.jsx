import React, { useEffect, useState } from 'react';
import './summer-event.css';

const SummerEvent = () => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia('(max-width: 480px)');
    const onChange = (e) => setIsPhone(e.matches);
    setIsPhone(mql.matches);
    try { mql.addEventListener('change', onChange); } catch { mql.addListener(onChange); }
    return () => { try { mql.removeEventListener('change', onChange); } catch { mql.removeListener(onChange); } };
  }, []);

  return (
    <section id="summer-event" className="summer-event">
      <div className="summer-event-container">
        {isPhone ? (
          // Mobile Layout
          <div className="summer-event-mobile-stack">
            {/* Hero Card */}
            <div className="summer-hero-mobile reveal is-visible" data-reveal="up">
              <div className="summer-badge-mobile">Coming Soon</div>
              <h2 className="summer-title-mobile">Summer 2026</h2>
              <p className="summer-subtitle-mobile">Destination To Be Revealed</p>
            </div>

            {/* Teaser Card with Gradient */}
            <div className="summer-teaser-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '120ms' }}>
              <div className="teaser-gradient-overlay">
                <div className="teaser-icon">✦</div>
                <h3 className="teaser-title">An Unforgettable Journey Awaits</h3>
                <p className="teaser-text">
                  Mark your calendars. Our exclusive summer experience is being curated. 
                  Destination details will be unveiled to members soon.
                </p>
              </div>
            </div>

            {/* Specs Chips */}
            <div className="summer-specs-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '200ms' }}>
              <div className="spec-chip">
                <span className="spec-label">Season</span>
                <span className="spec-value">Summer 2026</span>
              </div>
              <div className="spec-chip">
                <span className="spec-label">Status</span>
                <span className="spec-value">Planning</span>
              </div>
              <div className="spec-chip">
                <span className="spec-label">Access</span>
                <span className="spec-value">Members</span>
              </div>
            </div>

            {/* Description Card */}
            <div className="summer-description-card-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '260ms' }}>
              <h3 className="summer-card-title-mobile">Exclusive Experience</h3>
              <p className="summer-text-mobile">
                We're crafting something extraordinary for summer 2026. A carefully selected destination, 
                curated experiences, and the perfect setting for our community to connect and create lasting memories.
              </p>
            </div>

            {/* CTA Banner */}
            <div className="summer-cta-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '320ms' }}>
              <span className="cta-note">Details Coming Soon</span>
            </div>
          </div>
        ) : (
          // Desktop Layout
          <>
            <div className="summer-event-header reveal" data-reveal="up">
              <h2 className="summer-event-title">
                Summer
                <span className="summer-event-title-highlight"> 2026</span>
              </h2>
              <p className="summer-event-subtitle">
                An exclusive destination experience — details to be revealed
              </p>
            </div>

            <div className="summer-content">
              <div className="summer-info reveal" data-reveal="left" style={{ "--reveal-delay": '120ms' }}>
                <div className="summer-badge">
                  <span className="badge-text">Coming Soon</span>
                </div>
                <h3 className="summer-name">Summer 2026 Experience</h3>
                <p className="summer-location">Destination To Be Revealed</p>
                <p className="summer-description">
                  We're planning something special for summer 2026. An exclusive destination, 
                  carefully curated experiences, and unforgettable moments with our community. 
                  The details are being finalized, but one thing is certain — it will be extraordinary.
                </p>
                <div className="summer-details">
                  <div className="detail-item">
                    <span className="detail-label">Summer 2026</span>
                    <span className="detail-value">Details Coming Soon</span>
                  </div>
                </div>
              </div>
              
              <div className="summer-visuals reveal" data-reveal="right" style={{ "--reveal-delay": '200ms' }}>
                <div className="summer-teaser-card reveal" data-reveal="up" style={{ "--reveal-delay": '260ms' }}>
                  <div className="teaser-gradient">
                    <div className="teaser-content">
                      <div className="teaser-icon-large">✦</div>
                      <h3 className="teaser-heading">Something Extraordinary</h3>
                      <p className="teaser-subheading">is being curated</p>
                      <div className="teaser-divider"></div>
                      <p className="teaser-description">
                        A destination experience that embodies the spirit of our community. 
                        Stay tuned for the reveal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SummerEvent;
