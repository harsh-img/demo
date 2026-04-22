import { useState, useEffect, useRef } from 'react';
import './App.css';

/* 
  Floating Hearts Background Component
*/
const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const symbols = ['❤️', '💖', '✨', '🌸', '🌹'];
    const interval = setInterval(() => {
      const id = Date.now();
      const newHeart = {
        id,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 5 + 5,
      };
      setHearts(prev => [...prev, newHeart].slice(-30));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particles-bg">
      {hearts.map(h => (
        <span
          key={h.id}
          className="bg-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            bottom: '-50px',
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  );
};

export default function App() {
  const [stage, setStage] = useState('START'); // START, LOADING, JOURNEY, SECRET
  const [journeyStep, setJourneyStep] = useState(0);

  const journeyData = [
    {
      title: "The Beginning",
      content: "Jab pehli baar tumhein dekha, tab shayad hi pata tha ki...",
      btn: "Kya pata tha?"
    },
    {
      title: "The Realization",
      content: "Ki tum mere liye sirf ek chehra nahi, mera pura jahaan ban jaoge.",
      btn: "Aur phir?"
    },
    {
      title: "The Suspense",
      content: "Kayi raaz hain jo dil mein dabbe the, aaj ek ek karke bahar aayenge.",
      btn: "Main tyaar hoon"
    },
    {
      title: "The Emotion",
      content: "Har dhadkan tumhara naam leti hai, har saans mein tumhari mehek hai.",
      btn: "Secret Reveal"
    }
  ];

  const handleStart = () => {
    setStage('LOADING');
    setTimeout(() => {
      setStage('JOURNEY');
    }, 3000);
  };

  const nextStep = () => {
    if (journeyStep < journeyData.length - 1) {
      setJourneyStep(journeyStep + 1);
    } else {
      setStage('SECRET');
    }
  };

  return (
    <div className="app-container">
      <FloatingHearts />

      {stage === 'START' && (
        <div className="name-screen" onClick={handleStart}>
          <h1 className="main-name grad-text" style={{ animation: 'float 4s infinite ease-in-out' }}>Jyotsana</h1>
          <div className="sub-lines">
            <span className="sub-line sub-line-1">Har pal tumhara khayal...</span>
            <span className="sub-line sub-line-2">Har khwab tumhare naam.</span>
          </div>
          <div className="click-hint" style={{ marginTop: '4rem' }}>Dil ki gehraiyo mein utarne ke liye click karein...</div>
        </div>
      )}

      {stage === 'LOADING' && (
        <div className="loading-screen">
          <div className="heart-loader" style={{ textShadow: '0 0 20px var(--rose)' }}>❤️</div>
          <p className="loading-text" style={{ fontSize: '1.8rem' }}>Dil ke raaz khul rahe hain...</p>
          <p style={{ color: 'var(--text-dim)', marginTop: '1.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
             "Kuch baatein unkahi, kuch jazbaat ansune..."
          </p>
          <div className="hb-wrap" style={{ marginTop: '2rem' }}>
             <div className="hb-bar" style={{ height: '20px' }}></div>
             <div className="hb-bar" style={{ height: '40px' }}></div>
             <div className="hb-bar" style={{ height: '30px' }}></div>
          </div>
        </div>
      )}

      {stage === 'JOURNEY' && (
        <div className="journey-screen">
          <div className="journey-card glass" style={{ animation: 'fadeIn 1s' }}>
            <span className="journey-step-num">Raaz {journeyStep + 1} / {journeyData.length}</span>
            <h2 className="grad-text" style={{ marginBottom: '1.5rem', fontFamily: 'Playfair Display', fontSize: '2.5rem' }}>
              {journeyData[journeyStep].title}
            </h2>
            <p className="journey-content" style={{ minHeight: '120px' }}>
              {journeyData[journeyStep].content}
            </p>
            <button className="journey-btn" onClick={nextStep}>
              {journeyData[journeyStep].btn}
            </button>
          </div>
        </div>
      )}

      {stage === 'SECRET' && (
        <div className="secret-container">
          <div className="glass secret-box" style={{ border: '2px solid var(--rose-glow)', boxShadow: '0 0 50px var(--rose-glow)' }}>
            <h1 className="secret-title grad-text" style={{ fontSize: '4.5rem' }}>Mera Sabse Bada Raaz</h1>
            <div className="divider-c" style={{ width: '100px', height: '3px', background: 'var(--rose)', margin: '2rem auto' }}></div>
            <p style={{ fontSize: '1.4rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Secret yeh nahi ki main tumhein pasand karta hoon...<br />
              <strong style={{ fontSize: '2rem', color: 'var(--rose)', display: 'block', marginTop: '1rem' }}>
                Secret yeh hai ki tum mere har khushi ka 'Zariya' ho.
              </strong>
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)' }}>
              Tumhare bina har rang fika hai, har mehfil adhuri hai.<br />
              Ab yeh dil sirf tumhare liye hi dhadakta hai.
            </p>
            <div className="final-vow" style={{ fontSize: '3rem', marginTop: '3rem' }}>
              "Bas Tum, Humesha." ❤️
            </div>
            <div style={{ marginTop: '4rem' }}>
              <button className="journey-btn" style={{ padding: '1rem 3rem' }} onClick={() => setStage('START')}>
                Ek Baar Phir Se...
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer Signature */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        fontSize: '0.7rem',
        color: 'var(--text-dim)',
        letterSpacing: '1px'
      }}>
        Redesigned with Love for Jyotsana
      </div>
    </div>
  );
}
