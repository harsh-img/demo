import React, { useEffect, useState, useRef } from 'react';
import './index.css';
import avatarImg from './assets/avatar.png';

/* 
  High-End Intersection Observer for Reveal Animations
*/
const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-text');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

const VisualBackground = () => (
  <div className="visual-container">
    <div className="liquid-circle" style={{ width: '400px', height: '400px', top: '10%', left: '5%' }} />
    <div className="liquid-circle" style={{ width: '600px', height: '600px', bottom: '10%', right: '5%', animationDelay: '-5s' }} />
    <div className="liquid-circle" style={{ width: '300px', height: '300px', top: '40%', left: '60%', animationDelay: '-10s' }} />
  </div>
);

export default function App() {
  useReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-main">
      <VisualBackground />

      {/* --- HERO --- */}
      <section className="full-center">
        <span className="editorial-tag reveal-text">The Unseen Frequency</span>
        <h1 className="hero-title reveal-text" style={{ transform: `translateX(${scrollY * 0.1}px)` }}>
          Jyotsana
        </h1>
        <p className="deep-quote reveal-text" style={{ marginTop: '2.5rem', opacity: 0.7 }}>
           "A riddle hidden in plain sight."
        </p>
      </section>

      {/* --- PHLLOSOPHICAL DEPTH --- */}
      <section>
        <div className="editorial-tag reveal-text">Observation 001</div>
        <div className="deep-quote reveal-text">
          Tumhare hothon ki muskurahat aksar sab dekh lete hain, <br />
          Magar meri nazrein tumahari aankhon ki us 'thakaan' par rukti hain, <br />
          Jo tum duniya se bina kahe chhupaye rakhti ho.
        </div>
        <div className="divider reveal-text"></div>
        <p className="reveal-text" style={{ maxWidth: '600px', lineHeight: '2', opacity: 0.5 }}>
          Log tumhe samajhne ka dawa karte hain, magar main tumhe 'parakhne' ki koshish nahi karta. <br />
          Main bas tumhe us tarah rehne dena chahta hoon, jaise tum sach mein ho— <br />
          Bina kisi filter ke, bina kisi parde ke.
        </p>
      </section>

      {/* --- THE PARALLEL --- */}
      <section className="full-center">
        <div className="magnetic-card reveal-text">
          <div className="editorial-tag">The Synchronicity</div>
          <h2 className="deep-quote" style={{ fontSize: '3rem', margin: '2rem 0' }}>
            "Agar waqt ke hazaron raste hote, <br /> Har raste par tum hi milti."
          </h2>
          <p style={{ opacity: 0.6, fontStyle: 'italic' }}>
            Aksar tum sochti hogi ki yeh ittefaq hai... <br />
            Par shayad humne ek-dusre ko bahut pehle hi chun liya tha.
          </p>
        </div>
      </section>

      {/* --- THE ECHO --- */}
      <section>
        <div style={{ maxWidth: '800px' }}>
          <span className="editorial-tag reveal-text">Observation 002</span>
          <h2 className="deep-quote reveal-text" style={{ fontSize: '4rem', fontWeight: 600 }}>The Echo of Silence.</h2>
          <p className="reveal-text" style={{ marginTop: '3rem', fontSize: '1.4rem', lineHeight: '1.6', opacity: 0.8 }}>
            Jab hum khamosh hote hain, tab sabse zyada baatein hoti hain. <br />
            Kya tumne kabhi mehsus kiya hai? <br />
            Mere khayalon ki goonj tumhare aas-pass hamesha rehti hai. <br />
            Tum tay nahi kar paogi ki yeh tumhari apni soch hai, ya mera tujhse zikar.
          </p>
        </div>
      </section>

      {/* --- FINAL SIGNATURE --- */}
      <section className="full-center">
        <div className="signature-container reveal-text">
          <div className="avatar-wrapper">
             <img src={avatarImg} alt="Mystery Muse" />
          </div>
          <h2 className="hero-title" style={{ fontSize: '6rem', marginTop: '3rem' }}>Lingering.</h2>
          <p className="deep-quote" style={{ fontSize: '1.5rem', opacity: 0.7 }}>
            Main woh khayal hoon jo ab tumhara peecha nahi chhodega.
          </p>
          <div style={{ marginTop: '5rem' }}>
            <a href="#" className="cosmic-link" onClick={(e) => e.preventDefault()}>
               Ask yourself: Why am I here?
            </a>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer style={{ position: 'fixed', bottom: '40px', right: '40px', opacity: 0.2, fontSize: '0.6rem', letterSpacing: '5px' }}>
        A STUDY IN PERSPECTIVE
      </footer>
    </div>
  );
}
