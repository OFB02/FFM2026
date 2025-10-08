import React, { useEffect, useState } from 'react';
import './about.css';

const About = () => {
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
    <section id="about" className="about">
      <div className="about-container">
        {isPhone ? (
          // Mobile Layout
          <div className="about-mobile-stack">
            {/* Hero Card */}
            <div className="about-hero-card-mobile reveal is-visible" data-reveal="up">
              <div className="about-badge-mobile">Our Foundation</div>
              <h2 className="about-title-mobile">The 1885 Philosophy</h2>
              <p className="about-subtitle-mobile">
                Excellence meets purpose in our non-profit community
              </p>
            </div>

            {/* Image Card */}
            <div className="about-image-card-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '120ms' }}>
              <div className="about-image-frame-mobile">
                <img 
                  src="/pics/Dinner.jpeg" 
                  alt="1885 Club exclusive dinner experience" 
                  className="about-img-mobile" 
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <div className="about-image-shimmer"></div>
              </div>
            </div>

            {/* Mission Cards */}
            <div className="about-cards-grid-mobile">
              <div className="about-info-card-mobile reveal is-visible" data-reveal="left" style={{ "--reveal-delay": '200ms' }}>
                <div className="card-top-accent"></div>
                <span className="about-card-number-mobile">01</span>
                <h3 className="about-card-title-mobile">Challenge & Elevate</h3>
                <p className="about-text-mobile">
                  Ambitious young professionals aged 20-26 pushing each other to new heights. Our diverse community of men and women creates a dynamic environment for growth.
                </p>
              </div>

              <div className="about-info-card-mobile reveal is-visible" data-reveal="right" style={{ "--reveal-delay": '280ms' }}>
                <div className="card-top-accent"></div>
                <span className="about-card-number-mobile">02</span>
                <h3 className="about-card-title-mobile">100% Non-Profit</h3>
                <p className="about-text-mobile">
                  Every dollar from memberships flows back into creating unforgettable experiences and opportunities for our members. Complete transparency, zero profit motive.
                </p>
              </div>

              <div className="about-info-card-mobile reveal is-visible" data-reveal="left" style={{ "--reveal-delay": '360ms' }}>
                <div className="card-top-accent"></div>
                <span className="about-card-number-mobile">03</span>
                <h3 className="about-card-title-mobile">Learn & Grow</h3>
                <p className="about-text-mobile">
                  Exclusive access to presentations from industry professionals and experts. We curate knowledge-sharing designed to elevate every member's potential.
                </p>
              </div>

              <div className="about-info-card-mobile reveal is-visible" data-reveal="right" style={{ "--reveal-delay": '440ms' }}>
                <div className="card-top-accent"></div>
                <span className="about-card-number-mobile">04</span>
                <h3 className="about-card-title-mobile">Active Engagement</h3>
                <p className="about-text-mobile">
                  Members attend at least one of our two annual flagship events, ensuring everyone contributes to our vibrant, engaged community.
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Desktop Layout
          <>
            <div className="about-header reveal" data-reveal="up">
              <div className="about-badge-desktop">Our Foundation</div>
              <h2 className="about-title">
                The 1885
                <span className="about-title-highlight"> Philosophy</span>
              </h2>
              <p className="about-subtitle">
                Where excellence meets purpose in a non-profit community dedicated to elevation
              </p>
            </div>

            <div className="about-content">
              <div className="about-visual-wrapper reveal" data-reveal="left" style={{ "--reveal-delay": '120ms' }}>
                <div className="about-visual">
                  <div className="about-img-frame">
                    <img 
                      src="/pics/Dinner.jpeg" 
                      alt="1885 Club exclusive dinner experience" 
                      className="about-img" 
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 90vw, 500px"
                      draggable="false"
                    />
                    <div className="about-img-overlay"></div>
                  </div>
                  <div className="about-visual-accent"></div>
                </div>
              </div>

              <div className="about-description reveal" data-reveal="right" style={{ "--reveal-delay": '200ms' }}>
                <div className="about-text-block">
                  <div className="about-block-number">01</div>
                  <h3 className="about-section-title">Challenge & Elevate</h3>
                  <p className="about-text">
                    1885 club exists for ambitious young professionals aged 20-26 who seek to be challenged 
                    and elevated by each other. Our diverse community of men and women creates a dynamic 
                    environment where excellence is the standard and meaningful connection is the foundation.
                  </p>
                </div>

                <div className="about-divider"></div>

                <div className="about-text-block">
                  <div className="about-block-number">02</div>
                  <h3 className="about-section-title">100% Member-Focused</h3>
                  <p className="about-text">
                    We operate as a non-profit organization with unwavering transparency. Every single dollar 
                    from membership fees flows directly back into the network—creating extraordinary experiences, 
                    world-class events, and opportunities that genuinely enrich our members' lives.
                  </p>
                </div>

                <div className="about-divider"></div>

                <div className="about-text-block">
                  <div className="about-block-number">03</div>
                  <h3 className="about-section-title">Learn & Grow Together</h3>
                  <p className="about-text">
                    Beyond social connection, we curate exclusive presentations and intimate sessions with 
                    industry professionals and subject matter experts. Our mission is to continuously elevate 
                    every member's knowledge, expand perspectives, and unlock potential.
                  </p>
                </div>

                <div className="about-divider"></div>

                <div className="about-text-block">
                  <div className="about-block-number">04</div>
                  <h3 className="about-section-title">Commitment to Excellence</h3>
                  <p className="about-text">
                    Membership requires attending at least one of our two annual flagship events. 
                    This commitment ensures an active, engaged community where everyone contributes 
                    meaningfully to the collective experience and upholds our standard of excellence.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
