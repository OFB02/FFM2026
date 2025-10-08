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
              <div className="about-badge-mobile">Who We Are</div>
              <h2 className="about-title-mobile">about <span className="about-title-highlight">1855</span></h2>
              <p className="about-subtitle-mobile">
                A non-profit community built by members, for members
              </p>
            </div>

            {/* Image Card */}
            <div className="about-image-card-mobile reveal is-visible" data-reveal="up" style={{ "--reveal-delay": '120ms' }}>
              <div className="about-image-frame-mobile">
                <img 
                    src="/pics/Dinner.jpeg" 
                    alt="1855 club exclusive dinner experience" 
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
                <h3 className="about-card-title-mobile">Real Connections</h3>
                <p className="about-text-mobile">
                  We're young professionals aged 20-26 who genuinely want to see each other succeed. Our diverse community creates a space where you can be yourself while growing together.
                </p>
              </div>

              <div className="about-info-card-mobile reveal is-visible" data-reveal="right" style={{ "--reveal-delay": '280ms' }}>
                <div className="card-top-accent"></div>
                <span className="about-card-number-mobile">02</span>
                <h3 className="about-card-title-mobile">100% Non-Profit</h3>
                <p className="about-text-mobile">
                  Every membership fee goes directly into creating great experiences for our members. No one profits. We're in this together to build something meaningful.
                </p>
              </div>

              <div className="about-info-card-mobile reveal is-visible" data-reveal="left" style={{ "--reveal-delay": '360ms' }}>
                <div className="card-top-accent"></div>
                <span className="about-card-number-mobile">03</span>
                <h3 className="about-card-title-mobile">Learn Together</h3>
                <p className="about-text-mobile">
                  Get access to talks and sessions with people who've been where you want to go. We bring in real professionals to share honest insights, not just motivational speeches.
                </p>
              </div>

              <div className="about-info-card-mobile reveal is-visible" data-reveal="right" style={{ "--reveal-delay": '440ms' }}>
                <div className="card-top-accent"></div>
                <span className="about-card-number-mobile">04</span>
                <h3 className="about-card-title-mobile">Stay Engaged</h3>
                <p className="about-text-mobile">
                  Members join at least one of our two annual trips. This simple commitment keeps our community active and ensures everyone stays connected.
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Desktop Layout
          <>
            <div className="about-header reveal" data-reveal="up">
              <div className="about-badge-desktop">Who We Are</div>
              <h2 className="about-title">
                About <span className="about-title-highlight">1855 club</span>
              </h2>
              <p className="about-subtitle">
                A non-profit community built by members, for members
              </p>
            </div>

            <div className="about-content">
              <div className="about-visual-wrapper reveal" data-reveal="left" style={{ "--reveal-delay": '120ms' }}>
                <div className="about-visual">
                  <div className="about-img-frame">
                    <img 
                      src="/pics/Dinner.jpeg" 
                        alt="1855 club exclusive dinner experience" 
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
                  <h3 className="about-section-title">Real Connections</h3>
                  <p className="about-text">
                    1855 club is for young professionals aged 20-26 who want to be surrounded by people 
                    who challenge them to grow. Our diverse community creates an environment where you can 
                    be yourself, share honest conversations, and build genuine friendships that push you forward.
                  </p>
                </div>

                <div className="about-divider"></div>

                <div className="about-text-block">
                  <div className="about-block-number">02</div>
                  <h3 className="about-section-title">100% Member-Focused</h3>
                  <p className="about-text">
                    We're a non-profit organization with complete transparency. Every dollar from membership 
                    fees goes straight back into creating great experiences and opportunities for our members. 
                    No one profits. This is about building something meaningful together.
                  </p>
                </div>

                <div className="about-divider"></div>

                <div className="about-text-block">
                  <div className="about-block-number">03</div>
                  <h3 className="about-section-title">Learn Together</h3>
                  <p className="about-text">
                    We bring in industry professionals and experts to share real insights from their experiences. 
                    These aren't just networking talks. They're honest conversations about what actually works, 
                    designed to help every member learn and grow.
                  </p>
                </div>

                <div className="about-divider"></div>

                <div className="about-text-block">
                  <div className="about-block-number">04</div>
                  <h3 className="about-section-title">Stay Engaged</h3>
                  <p className="about-text">
                    Members join at least one of our two annual trips. This simple commitment keeps our 
                    community active and connected, ensuring everyone contributes to making 1855 club 
                    a place where real relationships are built.
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
