import React, { useEffect, useRef, useState } from 'react';
import './hero.css';
import './mobile-scroll-enhancements.css';
import ApplyModal from './ApplyModal.jsx';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Enhanced mobile scroll experience
  useEffect(() => {
    // Only add scroll enhancements on mobile
    const isMobile = window.matchMedia('(max-width: 480px)').matches;
    if (!isMobile) return;

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
    };

    const optimizedScrollHandler = () => {
      requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    
    // Stable viewport height (for CSS var --vh)
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler);
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  // Canvas background (impressive but lightweight)
  const CanvasBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      let rafId;
      let width = 0;
      let height = 0;
      const DPR = Math.min(window.devicePixelRatio || 1, 2);

      // Particle system
      let particles = [];
      const state = {
        targetCount: 0,
      };

      const resize = () => {
        const rect = canvas.getBoundingClientRect();
        width = Math.floor(rect.width);
        height = Math.floor(rect.height);
        canvas.width = Math.floor(width * DPR);
        canvas.height = Math.floor(height * DPR);
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

        // density-based particle count
        const area = width * height;
        const baseDensity = 0.00010; // particles per pixel
        const minCount = 28;
        const maxCount = 110;
        let count = Math.min(maxCount, Math.max(minCount, Math.floor(area * baseDensity)));

        // scale down for small screens
        if (width < 700 || height < 700) count = Math.floor(count * 0.7);

        state.targetCount = count;
        tuneParticleCount();
      };

      const rand = (min, max) => Math.random() * (max - min) + min;

      const createParticle = () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.25, 0.25),
        vy: rand(-0.25, 0.25),
        r: rand(0.9, 2.2),
      });

      const tuneParticleCount = () => {
        const diff = state.targetCount - particles.length;
        if (diff > 0) {
          for (let i = 0; i < diff; i++) particles.push(createParticle());
        } else if (diff < 0) {
          particles.splice(state.targetCount);
        }
      };

      const step = () => {
        ctx.clearRect(0, 0, width, height);

        // subtle vignette glow with slight base tint for contrast
        const grad = ctx.createRadialGradient(
          width * 0.5,
          height * 0.45,
          Math.min(width, height) * 0.1,
          width * 0.5,
          height * 0.5,
          Math.max(width, height) * 0.8
        );
        grad.addColorStop(0, 'rgba(255,255,255,0.03)');
        grad.addColorStop(1, 'rgba(0,0,0,0.03)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        // move and draw
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (!prefersReduced) {
            p.x += p.vx;
            p.y += p.vy;
            // wrap-around
            if (p.x < -10) p.x = width + 10; else if (p.x > width + 10) p.x = -10;
            if (p.y < -10) p.y = height + 10; else if (p.y > height + 10) p.y = -10;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,0.85)';
          ctx.shadowColor = 'rgba(255,255,255,0.5)';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // connect nearby
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distSq = dx * dx + dy * dy;
            const maxDist = 150;
            if (distSq < maxDist * maxDist) {
              const t = 1 - Math.sqrt(distSq) / maxDist; // 0..1
              const alpha = 0.08 + t * 0.28;
              ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }

        rafId = requestAnimationFrame(step);
      };

      const onVisibility = () => {
        if (document.hidden) {
          if (rafId) cancelAnimationFrame(rafId);
        } else {
          rafId = requestAnimationFrame(step);
        }
      };

      window.addEventListener('resize', resize);
      document.addEventListener('visibilitychange', onVisibility);
      resize();

      // draw once if reduced; else animate
      if (prefersReduced) {
        // ensure we render a static frame
        step();
      } else {
        rafId = requestAnimationFrame(step);
      }

      return () => {
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', onVisibility);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }, []);

    return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
  };

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Enhanced scroll to next section for mobile
  const scrollToNext = () => {
    const communitySection = document.getElementById('community');
    if (communitySection) {
      communitySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <section className="hero">
        {/* Minimal animated background (no video) */}
        <div className="hero-bg" aria-hidden="true"></div>
        {/* Impressive animated canvas overlay */}
        <CanvasBackground />

        <div className="hero-container reveal" data-reveal="up">
          <div className="hero-content">
            <h1 className="hero-title reveal" data-reveal="up" style={{ "--reveal-delay": '80ms' }}>
              Where Ambition
              <span className="hero-title-highlight"> Meets Community</span>
            </h1>

            <p className="hero-description reveal" data-reveal="up" style={{ "--reveal-delay": '180ms' }}>
              Join young professionals aged 20-26 who push each other to achieve more, together.
            </p>

            {/* Mobile-only logo between description and Apply */}
            <img
              className="hero-logo-mobile reveal"
              data-reveal="up"
              style={{ "--reveal-delay": '230ms' }}
              src="/pics/FFM 2026 (4).png"
              alt="FFM 2026 logo"
              loading="lazy"
              decoding="async"
              draggable="false"
            />

            <div className="hero-actions reveal" data-reveal="up" style={{ "--reveal-delay": '280ms' }}>
              <button className="btn-hero-primary" onClick={openModal}>
                Apply
              </button>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator reveal" data-reveal="fade" style={{ "--reveal-delay": '500ms' }} onClick={scrollToNext}>
          <span className="scroll-text">Scroll</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>
      
      <ApplyModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Hero;