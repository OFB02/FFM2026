import React, { useState, useEffect } from 'react';
import './ApplyModal.css';
import { db } from '../src/firebase';
import { collection, addDoc } from 'firebase/firestore';

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
  
  const [showSuccess, setShowSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Format application data as HTML for email
      const applicationHTML = `
        <h3>New Application - FFM</h3>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Age:</strong> ${formData.age}</p>
        <p><strong>Instagram:</strong> ${formData.socials || 'Not provided'}</p>
        <p><strong>Why join:</strong></p>
        <p>${formData.motivation.replace(/\n/g, '<br>')}</p>
        <p><strong>References:</strong></p>
        <p>${formData.references ? formData.references.replace(/\n/g, '<br>') : 'Not provided'}</p>
        <p><strong>Friends Also Applying:</strong> ${formData.friendsApplying || 'None'}</p>
        <p><strong>Trip Interest:</strong> ${formData.attendTrip || 'Not specified'}</p>
      `;
      
      const applicationText = `
New Application - FFM

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Age: ${formData.age}
Instagram: ${formData.socials || 'Not provided'}

Why join:
${formData.motivation}

References:
${formData.references || 'Not provided'}

Friends Also Applying: ${formData.friendsApplying || 'None'}
Trip Interest: ${formData.attendTrip || 'Not specified'}
      `;
      
      // Add email document to Firestore - Trigger Email extension will send it
      await addDoc(collection(db, 'mail'), {
        to: ['1855.club.management@gmail.com'],
        message: {
          subject: `New Application: ${formData.firstName} ${formData.lastName}`,
          text: applicationText,
          html: applicationHTML
        }
      });
      
      // Show success message
      setShowSuccess(true);
      
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
      
      // Close modal after showing success message
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      console.error('Application send failed', err);
      alert('Failed to submit application. Please try again later.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        {showSuccess && (
          <div className="success-popup">
            <div className="success-checkmark">✓</div>
            <div className="success-message">Application Submitted Successfully!</div>
            <div className="success-submessage">We'll review your application and get back to you soon.</div>
          </div>
        )}
        
        <div className="modal-header">
          <h2 className="modal-title">Apply to Join</h2>
          <p className="modal-subtitle">
            Join a community of ambitious young professionals who support each other's growth
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
              placeholder="Tell us about yourself, what you're working on, and what you're looking for in a community..."
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
