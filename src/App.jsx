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
  const [view, setView] = useState('PORTAL'); // PORTAL, LOADING, HEART_DEEP
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const portalRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!portalRef.current) return;
    const rect = portalRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: -y * 15 });
  };

  const exploreHeart = () => {
    setView('LOADING');
    setTimeout(() => {
      setView('HEART_DEEP');
    }, 2500);
  };

  return (
    <div className="surreal-container" onMouseMove={handleMouseMove}>
      <div className="aurora" />
      <div className="morphing-blob" style={{ top: '10%', left: '10%' }} />
      <div className="morphing-blob" style={{ bottom: '10%', right: '10%', background: 'rgba(255,133,161,0.1)' }} />
      <Starfield />

      {view === 'PORTAL' ? (
        <main 
          ref={portalRef}
          className="portal-card"
          style={{
            transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            animation: 'fadeIn 1s ease-out'
          }}
        >
          <div className="avatar-sphere">
            <img 
              src={avatarImg} 
              className="avatar-img" 
              alt="My Love Avatar"
              style={{ animation: 'pulse 3s infinite ease-in-out' }}
            />
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

          <button className="cosmic-btn" onClick={exploreHeart}>
            Explore My Heart ✨
          </button>
        </main>
      ) : view === 'LOADING' ? (
        <div className="loading-stage" style={{ zIndex: 300, textAlign: 'center', animation: 'fadeIn 0.5s' }}>
          <div className="aurora" style={{ opacity: 0.8 }} />
          <h2 className="love-title" style={{ fontSize: '2.5rem', animation: 'pulse 1s infinite' }}>
            Traveling to the center of my heart...
          </h2>
          <div className="hb-wrap" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '2rem' }}>
            <div className="hb-bar" style={{ height: '40px', animation: 'heartBeat 1.2s infinite' }}></div>
            <div className="hb-bar" style={{ height: '60px', animation: 'heartBeat 1.2s infinite 0.2s' }}></div>
            <div className="hb-bar" style={{ height: '40px', animation: 'heartBeat 1.2s infinite 0.4s' }}></div>
          </div>
        </div>
      ) : (
        <div className="deep-heart-container" style={{ zIndex: 200, textAlign: 'center', animation: 'fadeIn 1.5s' }}>
          <div className="glass" style={{ padding: '4rem', maxWidth: '800px', borderRadius: '40px', border: '1px solid var(--primary)' }}>
            <h2 className="love-title" style={{ fontSize: '4rem' }}>Deep Inside...</h2>
            <div className="heart-visual" style={{ fontSize: '6rem', margin: '2rem 0', animation: 'heartBeat 1.2s infinite' }}>
              ❤️
            </div>
            <p style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
              Har dhadkan mein ek hi naam hai... <br />
              <strong>"Bas Tum"</strong>
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '3rem' }}>
              <div className="glass-inner" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                <span style={{ fontSize: '2rem' }}>🤝</span>
                <h3>Mera Wada</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Hamesha tumhara saath nibhaunga, har musibat mein.</p>
              </div>
              <div className="glass-inner" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                <span style={{ fontSize: '2rem' }}>💖</span>
                <h3>Mera Sach</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Tumse be-panah mohabbat hi meri asliyat hai.</p>
              </div>
            </div>
            <button className="cosmic-btn" style={{ marginTop: '3rem' }} onClick={() => setView('PORTAL')}>
              Go Back to Portal
            </button>
          </div>
        </div>
      )}

      {/* Floating Footer text */}
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
