import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import avatarImg from './assets/avatar.png';

/* 
  Interactive Aura Background 
*/
const AuroraBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="liquid-bg">
      <div 
        className="aura-blob" 
        style={{ 
          top: `${mousePos.y}%`, 
          left: `${mousePos.x}%`, 
          transform: 'translate(-50%, -50%)',
          transition: 'top 0.3s ease-out, left 0.3s ease-out'
        }} 
      />
      <div className="aura-blob" style={{ bottom: '10%', right: '10%', opacity: 0.5 }} />
    </div>
  );
};

/* 
  Typewriter Animation Component 
*/
const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text.charAt(index));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span>{displayedText}</span>;
};

export default function App() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <AuroraBackground />

      {/* --- SECTION 1: THE ARRIVAL --- */}
      <section className="full-center">
        <div style={{ opacity: Math.max(0, 1 - scrolled / 500) }}>
          <h1 className="hero-title grad-text">Jyotsana</h1>
          <div className="sub-title">"Ek अनकही पहेली" (An Untold Puzzle)</div>
          <div style={{ marginTop: '2rem', fontSize: '1.2rem', opacity: 0.6, letterSpacing: '8px' }}>
            THE DEPTHS YOU HIDE
          </div>
        </div>
        <div className="scroll-heart">✨</div>
      </section>

      {/* --- SECTION 2: THE INNER THOUGHT (Mystery Typewriter) --- */}
      <section>
        <div className="emotional-card">
          <h2 className="sub-title" style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Tumhari Khamoshi</h2>
          <p className="poetry-text">
            <Typewriter text="Maine dekha hai... jab tum bheed mein hoti ho magar tumhara dhyan kahin aur hota hai. Maine dekha hai tumhari aankhon ka woh rang jo sirf tab dikhta hai jab tum kuch gehra sochti ho. Aksar log tumhe dekhte hain, magar bahut kam log tumhe 'sunte' hain..." />
          </p>
          <div style={{ marginTop: '3rem', width: '60px', height: '2px', background: 'var(--primary)' }}></div>
        </div>
      </section>

      {/* --- SECTION 3: THE MEMORIES (Observations) --- */}
      <section id="memories">
        <div className="full-center" style={{ marginBottom: '4rem' }}>
          <h2 className="hero-title" style={{ fontSize: '4rem' }}>Voh Pal?</h2>
          <p className="sub-title">"Jo Shayad Tum Bhool Gayi"</p>
        </div>

        <div className="polaroid-grid">
          <div className="polaroid">
            <div className="polaroid-img">🌬️</div>
            <p className="polaroid-caption">Tumhari Woh Soch</p>
          </div>
          <div className="polaroid" style={{ animationDelay: '0.2s' }}>
            <div className="polaroid-img">🌑</div>
            <p className="polaroid-caption">Adhuri Baatein</p>
          </div>
          <div className="polaroid" style={{ animationDelay: '0.4s' }}>
            <div className="polaroid-img">🌧️</div>
            <p className="polaroid-caption">Be-Wajah Muskurana</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE PROMISE (Lingering Mystery) --- */}
      <section>
        <div className="emotional-card" style={{ background: 'linear-gradient(135deg, rgba(80,0,150,0.1), rgba(200,50,150,0.1))' }}>
           <h2 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>The Unseen</h2>
           <div className="poetry-text" style={{ fontSize: '1.4rem' }}>
             "Main tumhein wada nahi doonGA, <br />
             Main sirf ek 'Ehsaas' banke rahoonGA. <br />
             Jab bhi tum koi purani dhun suno gi, <br />
             Ya baarish ki pehli boond mehsus karo gi... <br />
             Wahan main yaad aaunGA."
           </div>
           
           <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
             <button className="cosmic-btn">Kyun Aisa Hai?</button>
           </div>
        </div>
      </section>

      {/* --- SECTION 5: THE SOUL PORTAL (The Final Hook) --- */}
      <section className="full-center" style={{ background: 'radial-gradient(circle at center, rgba(115,3,192,0.2) 0%, transparent 80%)' }}>
        <div className="signature">
          <div className="avatar-circle">
            <img src={avatarImg} alt="Mystery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h2 className="hero-title grad-text" style={{ fontSize: '4.5rem' }}>Tumhara Khayal...</h2>
          <p className="sub-title" style={{ fontSize: '1.8rem', color: '#fff' }}>
             "Ab tum tay karo... main kaun hoon?"
          </p>
          
          <div style={{ marginTop: '5rem', opacity: 0.3, letterSpacing: '12px', fontSize: '0.7rem' }}>
            A THOUGHT YOU CAN'T ESCAPE
          </div>
        </div>
      </section>

      {/* Persistent Decorative particles */}
      <div style={{ position: 'fixed', top: '10%', left: '5%', fontSize: '2rem', opacity: 0.1, animation: 'float 6s infinite' }}>✨</div>
      <div style={{ position: 'fixed', bottom: '20%', right: '8%', fontSize: '3rem', opacity: 0.1, animation: 'float 8s infinite' }}>🌸</div>
    </div>
  );
}
