import React, { useState, useEffect } from 'react';
import './index.css';
import avatarImg from './assets/avatar.png';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState({ bg: '#f8f4f1', c1: '#e0c3fc', c2: '#8ecae6' });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      
      // Dynamic Atmosphere shifting
      if (y < 800) {
        setTheme({ bg: '#f8f4f1', c1: '#e0c3fc', c2: '#8ecae6' });
      } else if (y < 1800) {
        setTheme({ bg: '#f1f8fc', c1: '#ffb5a7', c2: '#ffd166' });
      } else {
        setTheme({ bg: '#0c0c0c', c1: '#4a00e0', c2: '#8e2de2' });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = scrollY > 1800;

  return (
    <div className="app-main" style={{ backgroundColor: theme.bg, color: isDark ? '#fff' : '#1a1a1a' }}>
      
      {/* --- ATMOSPHERE --- */}
      <div className="atmosphere">
        <div className="cloud" style={{ width: '60vw', height: '60vw', top: '-10%', left: '-10%', background: theme.c1 }} />
        <div className="cloud" style={{ width: '50vw', height: '50vw', bottom: '-10%', right: '-10%', background: theme.c2, animationDelay: '-5s' }} />
      </div>

      {/* --- HERO: THE DREAM ENTRY --- */}
      <section style={{ textAlign: 'center' }}>
        <p className="korean-style-text" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>
           SCENE 01: THE AWAKENING
        </p>
        <h1 className="dream-title">jyotsana</h1>
        <div style={{ marginTop: '2rem', fontSize: '1.2rem', opacity: 0.6 }}>
           "A name written in the colors of the dawn."
        </div>
      </section>

      {/* --- FLOATING THOUGHTS --- */}
      <section>
        <div className="island" style={{ margin: '0 auto', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.3)' }}>
           <p className="korean-style-text">THE OBSERVATION</p>
           <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', fontFamily: 'Italiana' }}>
             "Maine tumhe tab bhi dekha hai, <br /> jab tum khud ko dekhna bhool gayi thi."
           </h2>
           <p style={{ marginTop: '2rem', lineHeight: '1.8', opacity: 0.7 }}>
             Aksar main sochta hoon ki kya tum jaanti ho? <br />
             Jaanti ho ki tumhare chalne ka andaaz, ya tumhare baalon ko udhne dena... <br />
             Yeh sab mere liye kisi kavita se kam nahi hai. <br />
             Duniya ke liye tum ek insaan ho, magar mere liye tum ek 'Ehsaas' ho.
           </p>
        </div>

        {/* Floating Thoughts decorations */}
        <div className="floaty-thought" style={{ top: '10%', right: '5%', color: '#000' }}>"Your smile is a secret..."</div>
        <div className="floaty-thought" style={{ bottom: '20%', left: '0%', color: '#000', animationDelay: '-2s' }}>"Shadows and Light."</div>
      </section>

      {/* --- THE SHIFT: DAY TO NIGHT --- */}
      <section>
        <div style={{ textAlign: 'center', width: '100%' }}>
           <h2 className="dream-title" style={{ fontSize: '5rem' }}>the shift</h2>
           <p style={{ maxWidth: '600px', margin: '2rem auto', lineHeight: '2', opacity: 0.8 }}>
             Har din ek naya panna hai. <br />
             Subah ki pehli kiran se lekar raat ke gehre sannate tak... <br />
             Tumhara zikr meri har khamoshi mein hota hai. <br />
             Kyunki tum sirf mere din ka hissa nahi, tum meri raat ka 'Khwab' ho.
           </p>
           <button className="btn-ethereal" style={{ backgroundColor: isDark ? '#fff' : '#1a1a1a', color: isDark ? '#000' : '#fff' }}>
             Dream with me
           </button>
        </div>
      </section>

      {/* --- THE VOID PORTAL --- */}
      <section style={{ opacity: Math.min(1, (scrollY - 1500) / 500) }}>
        <div className="full-center">
            <div className="avatar-mask">
               <img src={avatarImg} alt="Soul" />
            </div>
            <h2 className="dream-title" style={{ marginTop: '3rem', fontSize: '6rem', color: '#fff' }}>unspoken</h2>
            <p className="korean-style-text" style={{ color: 'rgba(255,255,255,0.4)', marginTop: '1rem' }}>
               "Ab tum socho... kya maine kuch kaha?"
            </p>
        </div>
      </section>

      <footer>
         DESIGNED FOR INTERSTELLAR THOUGHTS • JYOTSANA
      </footer>

      {/* Cursor Decoration */}
      <div style={{
        position: 'fixed',
        bottom: '40px',
        left: '40px',
        fontSize: '0.6rem',
        letterSpacing: '3px',
        opacity: 0.5
      }}>
        CHAPTER 02 &mdash; THE ECHO
      </div>
    </div>
  );
}
