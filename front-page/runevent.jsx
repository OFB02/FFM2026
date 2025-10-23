import React, { useEffect, useState } from 'react';
import './runevent.css';

const RunEvent = () => {
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
    <section id="run-event" className="run-event">
      <div className="run-event-container">
        {isPhone ? (
          // Mobile Layout
          <div className="run-event-mobile-stack">
            {/* Hero Card */}
            <div className="run-hero-mobile reveal is-visible" data-reveal="up">
              <div className="run-badge-mobile">Next Event</div>
              <h2 className="run-title-mobile">Community Morning Run</h2>
              <p className="run-subtitle-mobile">November 4th at 7:45 AM</p>
            </div>

            {/* Image Card */}
            <div className="run-image-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '120ms' }}>
              <img
                src="/pics/IMG_1431_3.jpg"
                alt="Community running event"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Specs Chips */}
            <div className="run-specs-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '200ms' }}>
              <div className="spec-chip">
                <span className="spec-label">Date</span>
                <span className="spec-value">Nov 4th</span>
              </div>
              <div className="spec-chip">
                <span className="spec-label">Distance</span>
                <span className="spec-value">5 km</span>
              </div>
            </div>

            {/* Details Card */}
            <div className="run-details-card-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '260ms' }}>
              <h3 className="run-card-title-mobile">Event Details</h3>
              
              <div className="run-detail-group-mobile">
                <span className="run-detail-label-mobile">Meeting Point</span>
                <p className="run-detail-value-mobile">In front of Alte Oper (Opernplatz)</p>
              </div>

              <div className="run-detail-group-mobile">
                <span className="run-detail-label-mobile">Pace</span>
                <p className="run-detail-value-mobile">Relaxed, social pace</p>
              </div>

              <div className="run-detail-group-mobile">
                <span className="run-detail-label-mobile">Time</span>
                <p className="run-detail-value-mobile">7:45 AM</p>
              </div>

              <div className="run-detail-group-mobile">
                <span className="run-detail-label-mobile">After Run</span>
                <p className="run-detail-value-mobile">Coffee at Gresso</p>
              </div>
            </div>

            {/* Description Card */}
            <div className="run-description-card-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '320ms' }}>
              <p className="run-text-mobile">
                A casual and social 5km morning run open to everyone. 
                Join us for a relaxed pace through Frankfurt, followed by coffee and conversation.
              </p>
            </div>

            {/* CTA Banner */}
            <div className="run-cta-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '380ms' }}>
              <a 
                href="https://www.instagram.com/p/DQG0Gv4DBUw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Event Details</span>
                <span>→</span>
              </a>
            </div>
          </div>
        ) : (
          // Desktop Layout
          <>
            <div className="run-event-header reveal" data-reveal="up">
              <h2 className="run-event-title">
                Join Our
                <span className="run-event-title-highlight"> Morning Run</span>
              </h2>
              <p className="run-event-subtitle">
                A casual community run with 1855 Club
              </p>
            </div>

            <div className="run-content">
              <div className="run-info reveal" data-reveal="left" style={{ "--reveal-delay": '120ms' }}>
                <div className="run-badge">
                  <span className="badge-text">Next Event</span>
                </div>
                <h3 className="run-name">Community Morning Run</h3>
                <p className="run-date">November 4th at 7:45 AM</p>
                <p className="run-description">
                  We're hosting a community morning run with 1855 Club on November 4th. 
                  It's meant to be a casual and social run open to everyone. 
                  Join us for a relaxed 5km through Frankfurt, followed by coffee and good conversation.
                </p>
                <div className="run-details">
                  <div className="detail-item">
                    <span className="detail-label">Meeting Point</span>
                    <span className="detail-value">In front of Alte Oper (Opernplatz)</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Distance & Pace</span>
                    <span className="detail-value">5 km, relaxed and social pace</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Time</span>
                    <span className="detail-value">7:45 AM</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">After Run</span>
                    <span className="detail-value">Coffee at Gresso</span>
                  </div>
                </div>
                <div className="run-cta">
                  <a 
                    href="https://www.instagram.com/p/DQG0Gv4DBUw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="run-cta-link"
                  >
                    <span>View Event Details</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
              
              <div className="run-visuals reveal" data-reveal="right" style={{ "--reveal-delay": '200ms' }}>
                <div className="run-image-card reveal" data-reveal="up" style={{ "--reveal-delay": '260ms' }}>
                  <img 
                    src="/pics/IMG_1431_3.jpg" 
                    alt="Community running event" 
                  />
                  <div className="run-image-overlay">
                    <p className="run-image-caption">Join us for a morning of running and community</p>
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

export default RunEvent;
