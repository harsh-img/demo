import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const photos = [
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM (1).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM (2).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM.jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM (1).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM (2).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM.jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.01 PM (1).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.01 PM.jpeg',
  ];

  return (
    <div className="app-container">
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Background Music */}
      <audio src="/Ishqa Ve Chadeya - Ishqa Ve _ Zeeshan Ali _ Punjabi Song.mp3" autoPlay loop muted={muted} />
      <div className="mute-float" onClick={() => setMuted(!muted)}>
        {muted ? '🔇' : '🔊'}
      </div>

      {/* 1. Hero Section */}
      <section className="hero" style={{ backgroundImage: `url("${photos[1]}")` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">JYOTSANA</h1>
          <p className="hero-subtitle">The Magic of You ✨</p>
        </div>
      </section>

      {/* 2. Our Story / About Section */}
      <section>
        <div className="story-section">
          <div className="story-img-container">
            <img src={photos[4]} className="story-img" alt="Story" />
          </div>
          <div className="story-content">
            <span className="section-tag">The Muse</span>
            <h2 className="section-title">Aesthetic, Classy & You.</h2>
            <p className="section-p">
              Style toh bohot logo ke pas hota hai, magar "Grace" sirf tumhare pas hai. 
              Tumhari har photo ek story kehti hai, aur har story mein ek hi hero hai—Tum. 
              Hinglish mein bole toh: "Tum sirf ek ladki nahi, tum meri puri vibes ho!"
            </p>
            <p className="section-p">
              Kyunki tumhara hona hi meri life ki sabse badi blessing hai. 
              Iss website mein humari wohi choti-choti baatein capture karne ki koshish ki hai.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Funny Side Section */}
      <section style={{ background: '#0a0a0a' }}>
        <span className="section-tag">Love & Laughter</span>
        <h2 className="section-title">The Funny Side of Us</h2>
        <div className="funny-grid">
          <div className="funny-card">
            <div className="card-emoji">💪</div>
            <h3>Gym vs Smile</h3>
            <p className="section-p">Main gym mein weights utha leta hoon, magar jab tum "Hmm" likhti ho na... wahan cardio fail ho jata hai! 😂</p>
          </div>
          <div className="funny-card">
            <div className="card-emoji">🍕</div>
            <h3>The Foodie Bond</h3>
            <p className="section-p">Pizza tumhara favorite, aur tum meri! Humari chemistry theek hai, magar "Foodistry" world-class honi chahiye.</p>
          </div>
          <div className="funny-card">
            <div className="card-emoji">🩹</div>
            <h3>Tantrums Expert</h3>
            <p className="section-p">Tumhare nakhre handle karna meri favorite workout routine hai. Warning: No pain, No gain! 😜</p>
          </div>
        </div>
      </section>

      {/* 4. Gallery Section */}
      <section>
        <span className="section-tag">Moments</span>
        <h2 className="section-title">Gallery of Grace</h2>
        <div className="gallery-container">
          {photos.map((photo, i) => (
            <div key={i} className="gallery-item">
              <img src={photo} alt={`Moment ${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* 5. The Final Act / Proposal */}
      <section style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("${photos[7]}")`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className="letter-box">
          <span className="section-tag">A Message for You</span>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-accent)', fontSize: '3.5rem' }}>Dil Ki Baat</h2>
          <p className="letter-text">
            "Hey Dev Sena, tum ek baar apne samrajye ka Bahubali bana kar toh dekho. 
            Life mein ups and downs toh aate rahenge, magar main tumhara permanent banna chahta hoon. 
            Kya hum saath mein yeh life manage kar sakte hain? ❤️"
          </p>
          <a href="https://wa.me/919413128045?text=Hey%20Bahubali!%20Website%20dekh%20li...%20Bohot%20mast%20hai!%20😍❤️" 
             target="_blank" 
             rel="noreferrer" 
             className="btn-main">
            Send My Answer 💬
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
        <p>Made with ❤️ for Jyotsana // May 2026</p>
        <p style={{ marginTop: '10px' }}>Keep Scrolling for Love</p>
      </footer>
    </div>
  );
}
