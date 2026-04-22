import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import avatarImg from './assets/avatar.png';

/* 
  Ethereal Starlight Background 
*/
const Starfield = () => {
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3,
    delay: Math.random() * 10,
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {stars.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: 'white',
            borderRadius: '50%',
            opacity: 0,
            animation: `fadeInOut 5s infinite ${s.delay}s`,
            boxShadow: '0 0 10px white',
          }}
        />
      ))}
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default function App() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const portalRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!portalRef.current) return;
    const rect = portalRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: -y * 15 });
  };

  return (
    <div className="surreal-container" onMouseMove={handleMouseMove}>
      <div className="aurora" />
      <div className="morphing-blob" style={{ top: '10%', left: '10%' }} />
      <div className="morphing-blob" style={{ bottom: '10%', right: '10%', background: 'rgba(255,133,161,0.1)' }} />
      <Starfield />

      <main 
        ref={portalRef}
        className="portal-card"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setTilt({ x: 0, y: 0 });
        }}
      >
        <div className="avatar-sphere">
          <img 
            src={avatarImg} 
            className="avatar-img" 
            alt="My Love Avatar"
            style={{ 
              filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'none',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              animation: 'pulse 3s infinite ease-in-out'
            }}
          />
          {/* Glowing Aura Loop */}
          <div style={{
            position: 'absolute',
            inset: '-10px',
            border: '2px solid var(--secondary)',
            borderRadius: '50%',
            opacity: 0.5,
            animation: 'auraOrbit 4s linear infinite',
          }} />
        </div>

        <h1 className="love-title">Celestial Love</h1>
        
        <div className="interactive-quote">
          "In a universe of billions, my soul recognized yours 
          like a star finding its galaxy. You aren't just a part 
          of my world; you are the gravity that holds it together."
        </div>

        <div style={{
          marginTop: '2rem',
          fontSize: '0.9rem',
          color: 'var(--accent)',
          letterSpacing: '1px',
          fontWeight: '700'
        }}>
          — UNLOCKING PHASE ∞ —
        </div>

        <button className="cosmic-btn">
          Explore My Heart
        </button>

        {/* Decorative Floating Circles */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '60px',
          height: '60px',
          background: 'var(--glow)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          animation: 'float 3s infinite'
        }} />
      </main>

      {/* Floating Floating text */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        width: '100%',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.8rem',
        letterSpacing: '5px'
      }}>
        BEYOND SPACE & TIME
      </div>
    </div>
  );
}
