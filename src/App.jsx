import React, { useEffect } from 'react';
import Header from '../front-page/header.jsx';
import Hero from '../front-page/hero.jsx';
import Community from '../front-page/Community.jsx';
import Events from '../front-page/events.jsx';
import Footer from '../front-page/footer.jsx';
import '../front-page/scroll-animations.css';

function App() {
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
      <Events />
      <Footer />
    </div>
  );
}

export default App;
