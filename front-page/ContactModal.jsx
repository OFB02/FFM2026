import React, { useEffect, useRef, useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const firstFieldRef = useRef(null);
  const modalRef = useRef(null);

  // Accessibility: focus management, esc to close, and background scroll lock
  useEffect(() => {
    if (!isOpen) return;

    // Lock background scroll
    const { body } = document;
    const prevOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    // Focus first field
    requestAnimationFrame(() => {
      firstFieldRef.current?.focus();
    });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();

      // Basic focus trap inside modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to a server.
    console.log('Form data submitted:', formData);
    setIsSent(true);
    // Reset form after a delay
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-subtitle"
        ref={modalRef}
      >
        <button className="contact-modal-close" onClick={onClose} aria-label="Close dialog">×</button>
        {isSent ? (
          <div className="contact-modal-confirmation">
            <div className="contact-modal-check" aria-hidden>✓</div>
            <h3 className="contact-modal-confirm-title">Thank you</h3>
            <p className="contact-modal-confirm-text">Your message has been sent.</p>
          </div>
        ) : (
          <>
            <div className="contact-modal-header">
              <h2 id="contact-modal-title" className="contact-modal-title">Contact us</h2>
              <p id="contact-modal-subtitle" className="contact-modal-subtitle">We'll get back to you as soon as possible</p>
            </div>
            <form className="contact-modal-form" onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  ref={firstFieldRef}
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-modal-submit">Send Message</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
