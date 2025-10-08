import React, { useState, useEffect } from 'react';
import './ApplyModal.css';

const ApplyModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    socials: '',
    motivation: '',
    references: '',
    friendsApplying: '',
    attendTrip: ''
  });

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Application submitted:', formData);
    // You can add your form submission logic here
    onClose();
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      socials: '',
      motivation: '',
      references: '',
      friendsApplying: '',
      attendTrip: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">Request Invitation</h2>
          <p className="modal-subtitle">
            Join an exclusive community of visionaries and leaders
          </p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                min="18"
                max="99"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="socials">Instagram</label>
              <input
                type="text"
                id="socials"
                name="socials"
                value={formData.socials}
                onChange={handleInputChange}
                placeholder="@username or profile link"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="motivation">Why do you want to join? *</label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleInputChange}
              placeholder="Tell us about your goals and what you hope to contribute to the community..."
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="references">References (Optional)</label>
            <textarea
              id="references"
              name="references"
              value={formData.references}
              onChange={handleInputChange}
              placeholder="Please list any current members who can vouch for you, or other professional references..."
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="friendsApplying">Friends Also Applying (Optional)</label>
            <input
              type="text"
              id="friendsApplying"
              name="friendsApplying"
              value={formData.friendsApplying}
              onChange={handleInputChange}
              placeholder="Names of friends applying with you (if any)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="attendTrip">Upcoming Trip Interest</label>
            <select
              id="attendTrip"
              name="attendTrip"
              value={formData.attendTrip}
              onChange={handleInputChange}
            >
              <option value="">Select your interest level</option>
              <option value="definitely">Definitely interested - Austria (Ischgl, St. Anton, Kitzbühel)</option>
              <option value="maybe">Maybe interested - Austria (Ischgl, St. Anton, Kitzbühel)</option>
              <option value="not-this-time">Not interested in this trip</option>
              <option value="future-trips">Interested in future trips only</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
