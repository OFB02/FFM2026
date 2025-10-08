import React, { useEffect, useState } from 'react';
import './events.css';

const Events = () => {
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
    <section id="events" className="events">
      <div className="events-container">
        {isPhone ? (
          // Completely New Mobile-Only Layout
          <div className="events-mobile-stack">
            {/* Hero Card */}
            <div className="event-hero-mobile reveal is-visible" data-reveal="up">
              <div className="event-badge-mobile">Next The Alps</div>
              <h2 className="event-title-mobile">Kitzbühel Trip</h2>
              <p className="event-subtitle-mobile">Winter 2025 • 4 Days / 3 Nights</p>
            </div>

            {/* Horizontal Gallery */}
            <div className="event-gallery-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '120ms' }}>
              <div className="event-gallery-track" aria-label="Event photos">
                <figure className="event-gallery-card">
                  <img
                    src="/pics/beautiful skiing in front of mountains😍😍🤩.jpeg"
                    alt="Skiing in beautiful mountain landscape"
                    className="event-gallery-img"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                  <figcaption className="event-gallery-caption">Legendary slopes</figcaption>
                </figure>
                <figure className="event-gallery-card">
                  <img
                    src="/pics/Innsbruck ❤️ Austria 👍❤️.jpeg"
                    alt="Beautiful Austrian Alpine scenery"
                    className="event-gallery-img"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                  <figcaption className="event-gallery-caption">Austrian Alps</figcaption>
                </figure>
              </div>
            </div>

            {/* Specs Chips */}
            <div className="event-specs-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '200ms' }}>
              <div className="spec-chip">
                <span className="spec-label">Location</span>
                <span className="spec-value">Kitzbühel, Austria</span>
              </div>
              <div className="spec-chip">
                <span className="spec-label">Season</span>
                <span className="spec-value">Winter 2025</span>
              </div>
              <div className="spec-chip">
                <span className="spec-label">Duration</span>
                <span className="spec-value">4D / 3N</span>
              </div>
            </div>

            {/* Description Card */}
            <div className="event-description-card-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '260ms' }}>
              <h3 className="event-card-title-mobile">An Exclusive Alpine Experience</h3>
              <p className="event-text-mobile">
                Experience Kitzbühel’s legendary terrain with luxury accommodations and curated moments. 
                Network, unwind, and elevate your standards in one of Europe’s most prestigious mountain destinations.
              </p>
            </div>

            {/* CTA Banner */}
            <div className="event-cta-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '320ms' }}>
              <span className="cta-note">Invitation Only</span>
            </div>
          </div>
        ) : (
          // Desktop Layout - Unchanged
          <>
            <div className="events-header reveal" data-reveal="up">
              <h2 className="events-title">
                Join Us In
                <span className="events-title-highlight"> The Alps</span>
              </h2>
              <p className="events-subtitle">
                Our next trip to the Austrian Alps this winter
              </p>
            </div>

            <div className="event-content">
              <div className="event-info reveal" data-reveal="left" style={{ "--reveal-delay": '120ms' }}>
                <div className="event-badge">
                  <span className="badge-text">Next Trip</span>
                </div>
                <h3 className="event-name">Kitzbühel Winter Trip</h3>
                <p className="event-location">Kitzbühel, Austria</p>
                <p className="event-description">
                  Join us for skiing on Kitzbühel's legendary slopes, great food, and genuine connections 
                  in the Austrian Alps. This is where our community comes together. No pressure, just good people, 
                  amazing scenery, and the kind of experiences that turn acquaintances into real friends.
                </p>
                <div className="event-details">
                  <div className="detail-item">
                    <span className="detail-label">Winter 2025</span>
                    <span className="detail-value">4 Days / 3 Nights</span>
                  </div>
                </div>
              </div>
              
              <div className="event-visuals reveal" data-reveal="right" style={{ "--reveal-delay": '200ms' }}>
                <div className="visual-grid">
                  <div className="visual-main reveal" data-reveal="up" style={{ "--reveal-delay": '260ms' }}>
                    <img 
                      src="/pics/beautiful skiing in front of mountains😍😍🤩.jpeg" 
                      alt="Skiing in beautiful mountain landscape" 
                      className="event-img" 
                    />
                    <div className="img-overlay"></div>
                  </div>
                  <div className="visual-secondary reveal" data-reveal="up" style={{ "--reveal-delay": '320ms' }}>
                    <img 
                      src="/pics/Innsbruck ❤️ Austria 👍❤️.jpeg" 
                      alt="Beautiful Austrian Alpine scenery" 
                      className="event-img" 
                    />
                    <div className="img-overlay"></div>
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

export default Events;