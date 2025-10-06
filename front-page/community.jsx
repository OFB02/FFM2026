import React from 'react';
import './community.css';

const Community = () => {
  return (
    <section id="community" className="community">
      <div className="community-container">
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
              FFM2026 is an exclusive community for ambitious individuals aged 20-26 
              who are driven to achieve extraordinary things. We are a carefully curated ecosystem 
              of like-minded young visionaries who come together to socialize, challenge 
              each other, and elevate our standards.
            </p>
            <p className="community-text">
              At FFM2026, we don't just gather—we build. Our culture extends beyond business, 
              encouraging members to live life to the fullest extent. Together, we forge 
              meaningful partnerships, turn ambition into action, and create extraordinary 
              experiences that define our generation.
            </p>
          </div>

          <div className="community-visual reveal" data-reveal="right" style={{ "--reveal-delay": '200ms' }}>
            <img src="/pics/meilleur-restaurant-courchevel-1850.png" alt="FFM Network Community" className="community-img" />
          </div>
        </div>

        <div className="community-stats reveal" data-reveal="up" style={{ "--reveal-delay": '240ms' }}>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Annual Trips</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;