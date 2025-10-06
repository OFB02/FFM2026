import React from 'react';
import './events.css';

const Events = () => {
  return (
    <section id="events" className="events">
      <div className="events-container">
        <div className="events-header reveal" data-reveal="up">
          <h2 className="events-title">
            Our Next
            <span className="events-title-highlight"> Adventure</span>
          </h2>
          <p className="events-subtitle">
            Join us for an unforgettable journey to the Austrian Alps
          </p>
        </div>

        <div className="event-content">
          <div className="event-info reveal" data-reveal="left" style={{ "--reveal-delay": '120ms' }}>
            <div className="event-badge">
              <span className="badge-text">Upcoming Event</span>
            </div>
            <h3 className="event-name">Kitzbühel Alpine Retreat</h3>
            <p className="event-location">Kitzbühel, Austria</p>
            <p className="event-description">
              Experience the legendary slopes of Kitzbühel, home to the most challenging 
              downhill race in alpine skiing. Our exclusive retreat combines world-class 
              skiing with luxury accommodations and networking opportunities in one of 
              Austria's most prestigious mountain destinations.
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
      </div>
    </section>
  );
};

export default Events;