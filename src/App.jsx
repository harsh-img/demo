import React, { useEffect, useState } from 'react';
import './index.css';
import avatarImg from './assets/avatar.png';

/* 
  Dynamic background with floating hearts 
*/
const BackgroundElements = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="floating-heart"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 3 + 1}rem`,
            animation: `float ${Math.random() * 5 + 5}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          ❤️
        </div>
      ))}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,77,109,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(226,149,120,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)'
      }} />
    </div>
  );
};

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-main">
      <BackgroundElements />

      {/* --- HERO SECTION --- */}
      <section className="hero">
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
          <h2 className="hero-sub script-font">For My Only One</h2>
          <h1 className="hero-title title-font grad-text">Jyotsana</h1>
          <p className="script-font" style={{ fontSize: '2rem', opacity: 0.8 }}>
            "Tum woh khayal ho jo kabhi dil se nahi jaata..."
          </p>
          <a href="#letter" className="btn-main">Mera Izhaar Padho</a>
        </div>
      </section>

      {/* --- THE LETTER SECTION --- */}
      <section id="letter">
        <div className="glass-container">
          <h2 className="title-font grad-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>A Heartfelt Note</h2>
          <p className="script-font" style={{ fontSize: '1.8rem', lineHeight: '1.8', color: 'var(--blush)' }}>
            Main ne kabhi socha nahi tha ki koi itne kareeb aa jayega... <br />
            Tumse milna sirf ek ittefaq nahi tha, meri zindagi ka sabse khoobsurat mor (turn) tha. 
            Jab bhi ankhein band karta hoon, bas tumhari muskan dikhti hai. 
            Main shayad duniya ke sabse bade shabdon ka use na kar paaun, lekin jo dil mein hai 
            woh sirf aur sirf tumhare liye hai. 
          </p>
          <div style={{ marginTop: '2rem', fontStyle: 'italic', opacity: 0.6 }}>
            — Sirf Tumhare Liye, Hamesha.
          </div>
        </div>
      </section>

      {/* --- THE PROMISES SECTION --- */}
      <section id="promises">
        <div style={{ width: '100%', maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="title-font grad-text" style={{ fontSize: '3.5rem' }}>Mere Char Wade</h2>
            <p style={{ opacity: 0.7 }}>Jo main har saans ke saath poora karunga</p>
          </div>

          <div className="grid-layout">
            <div className="promise-card">
              <span style={{ fontSize: '3rem' }}>🌙</span>
              <h3 className="title-font" style={{ margin: '1rem 0' }}>Sath Nibhana</h3>
              <p style={{ opacity: 0.8 }}>Duniya chahe kitni bhi badle, mera sath tumhare liye hamesha wahi rahega.</p>
            </div>
            <div className="promise-card">
              <span style={{ fontSize: '3rem' }}>🛡️</span>
              <h3 className="title-font" style={{ margin: '1rem 0' }}>Hifazat</h3>
              <p style={{ opacity: 0.8 }}>Tumhari har takleef meri hogi, aur tumhari har khushi meri jeet.</p>
            </div>
            <div className="promise-card">
              <span style={{ fontSize: '3rem' }}>💎</span>
              <h3 className="title-font" style={{ margin: '1rem 0' }}>Izzat</h3>
              <p style={{ opacity: 0.8 }}>Tum sirf meri mohabbat nahi, tum meri sabse badi garv (pride) ho.</p>
            </div>
            <div className="promise-card">
              <span style={{ fontSize: '3rem' }}>🔥</span>
              <h3 className="title-font" style={{ margin: '1rem 0' }}>Junoon</h3>
              <p style={{ opacity: 0.8 }}>Meri chahat waqt ke sath kam nahi, balki har pal aur geheri hogi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOUL GALLERY SECTION --- */}
      <section>
        <div style={{ textAlign: 'center', width: '100%' }}>
          <div className="glass-container" style={{ margin: '0 auto', border: 'none', background: 'transparent' }}>
             <h2 className="script-font" style={{ fontSize: '3rem', color: 'var(--accent)' }}>
               "Tum meri woh adhuri dua ho jise khuda ne bas mere liye poora kiya hai."
             </h2>
             <div style={{ marginTop: '3rem' }}>
               <div style={{ display: 'inline-block', margin: '0 1rem', fontSize: '2rem' }}>💖</div>
               <div style={{ display: 'inline-block', margin: '0 1rem', fontSize: '2rem' }}>✨</div>
               <div style={{ display: 'inline-block', margin: '0 1rem', fontSize: '2rem' }}>💖</div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL FINALE SECTION --- */}
      <section style={{ background: 'linear-gradient(to bottom, transparent, var(--dark-plum))' }}>
        <div className="glass-container" style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{ width: '150px', height: '150px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--accent)', boxShadow: '0 0 30px var(--accent)' }}>
            <img src={avatarImg} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h2 className="title-font grad-text" style={{ fontSize: '3.5rem' }}>Mera Akhri Sach</h2>
          <p className="script-font" style={{ fontSize: '2rem', marginTop: '1rem', color: 'var(--blush)' }}>
            Jyotsana... Main tumse be-panah mohabbat karta hoon. <br />
            Aur yeh safar toh bas shuru hua hai.
          </p>
          <div style={{ marginTop: '3rem', letterSpacing: '4px', fontSize: '0.8rem', opacity: 0.5 }}>
            CREATED WITH INFINITE LOVE
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'var(--accent)' }}>
            BEYOND FOREVER
          </p>
        </div>
      </section>

      {/* Navigation Hint */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '0.7rem',
        opacity: 0.4,
        letterSpacing: '2px',
        pointerEvents: 'none'
      }}>
        SCROLL TO EXPLORE MY SOUL
      </div>
    </div>
  );
}
