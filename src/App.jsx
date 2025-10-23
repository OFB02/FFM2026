import React, { useState, useEffect } from 'react';
import Header from '../front-page/header.jsx';
import Hero from '../front-page/hero.jsx';
import Community from '../front-page/Community.jsx';
import About from '../front-page/about.jsx';
import RunEvent from '../front-page/runevent.jsx';
import SummerEvent from '../front-page/summer-event.jsx';
import Footer from '../front-page/footer.jsx';
import ContactModal from '../front-page/ContactModal.jsx';
import '../front-page/scroll-animations.css';

function App() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);

  // Initialize a lightweight IntersectionObserver for scroll reveals
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // respect reduced motion

    const elements = Array.from(document.querySelectorAll('.reveal'));
    if (elements.length === 0) return;

    const obs = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once visible, unobserve to avoid re-triggers
            observer.unobserve(entry.target);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12,
      }
    );

    elements.forEach((el) => {
      // If already above the fold, mark visible immediately
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Community />
      <About />
      <RunEvent />
      <SummerEvent />
      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

export default App;
