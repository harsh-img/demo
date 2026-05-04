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

  // Removing the poster-style images as requested
  const photos = [
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM (1).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM (2).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM.jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM (1).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM (2).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM.jpeg',
  ];

  return (
    <div className="app-container">
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Background Music */}
      <audio src="/Ishqa Ve Chadeya - Ishqa Ve _ Zeeshan Ali _ Punjabi Song.mp3" autoPlay loop muted={muted} />
      <div className="mute-float" onClick={() => setMuted(!muted)}>
        {muted ? '🔊' : '🔇'}
      </div>

      {/* 1. Hero Section */}
      <section className="hero" style={{ backgroundImage: `url("${photos[1]}")` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">JYOTSANA</h1>
          <p className="hero-subtitle">The Only One ❤️</p>
        </div>
      </section>

      {/* 2. Pehli Mulakaat / The Beginning */}
      <section>
        <div className="story-section">
          <div className="story-img-container">
            <img src={photos[0]} className="story-img" alt="Beginning" />
          </div>
          <div className="story-content">
            <span className="section-tag">Chapter 01</span>
            <h2 className="section-title">Kahan Se Shuru Karun?</h2>
            <p className="section-p">
              Yaad hai woh pehla pal jab humne baat karni shuru ki thi? Mujhe tab bilkul andaza nahi tha ki tum meri life ka itna bada aur important hissa ban jaogi. Tumhari baatein, tumhara woh sense of humor, aur woh choti-choti baatein jo sirf hum samajhte hain—yeh sab milkar ek aisi kahani bante hain jo main hamesha yaad rakhna chahta hoon.
            </p>
            <p className="section-p">
              Log kehte hain ki attraction physics hai, magar tumhare case mein yeh direct magic tha. Ek aisi vibe jo sirf hum dono ke beech mein hai. Tumhare sath hone se dunya ka shorr kam ho jata hai aur sab kuch "Perfect" lagne lagta hai.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Funny Side - Expanded Content */}
      <section style={{ background: '#0a0a0a' }}>
        <span className="section-tag">Love & Laughter</span>
        <h2 className="section-title">Humari Pagalpanti</h2>
        <div className="funny-grid">
          <div className="funny-card">
            <div className="card-emoji">💪</div>
            <h3>Gym Boy Ka Cardio</h3>
            <p className="section-p">
              Main gym mein weights toh utha leta hoon, aur log kehte hain ki main thoda "sakht" hoon. Magar jab tumhari ek notification aati hai na, toh mera cardio wahi shuru ho jata hai! 😂 Gym mein protein shake peeta hoon magar tumhari smile dekh kar jo energy aati hai, woh kisi bhi pre-workout se zyada hai.
            </p>
          </div>
          <div className="funny-card">
            <div className="card-emoji">🍔</div>
            <h3>The Foodie War</h3>
            <p className="section-p">
              Pizza tumhara pehla pyar hai, aur main shayad doosra? 😂 Magar koi baat nahi, main compromise kar lunga. Humari "Foodistry" top-notch honi chahiye. Mera dream hai ki hum saath mein baith kar itna khayein ki humein chalne ke liye bhi "Bahubali" ki zarurat pade!
            </p>
          </div>
          <div className="funny-card">
            <div className="card-emoji">🧸</div>
            <h3>Handling My Teddy</h3>
            <p className="section-p">
              Tumhare nakhre? Oh God! Woh toh meri life ki full-time job hai. Kabhi gussa, kabhi zid, aur kabhi woh pyaari si smile jo sab theek kar deti hai. Main hamesha ready hoon tumhare tantrums handle karne ke liye, kyunki tumhara gussa bhi tumhare pyar ki tarah hi cute hai.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Detailed Gallery Section */}
      <section>
        <span className="section-tag">The Aesthetic You</span>
        <h2 className="section-title">Gallery of Emotions</h2>
        <div className="gallery-container">
          {photos.map((photo, i) => (
            <div key={i} className="gallery-item">
              <img src={photo} alt={`Moment ${i}`} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: '50px', textAlign: 'center', maxWidth: '800px' }}>
          <p className="section-p">
            Yeh sirf photos nahi hain, yeh woh pal hain jab maine tumhe ek nayi nazar se dekha. Har photo mein ek alag hi "Grace" hai. Kabhi tum ethnic look mein queen lagti ho, toh kabhi casuals mein ek pyaari si dost. Magar har look mein ek cheez common hai—tumhari woh spark jo sabko distract kar deti hai.
          </p>
        </div>
      </section>

      {/* 5. Deep Feelings Section - Added Lots of Content */}
      <section style={{ background: '#111' }}>
        <div className="story-section" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
          <div className="story-content">
            <span className="section-tag">Pure Feelings</span>
            <h2 className="section-title">Kyun Tum?</h2>
            <p className="section-p">
              Dunya mein bohot log hain, magar tum jaisa koi nahi. Tumne mujhe woh ehsaas karaya jo maine pehle kabhi feel nahi kiya tha. Tumhare saath silence bhi comfortable lagta hai. Jab tum "Hm" bhi likhti ho na, toh main uske 10 meanings nikalne lagta hoon (ki shayad tum gussa ho ya shayad busy! 😂).
            </p>
            <p className="section-p">
              Tum meri life ki woh movie ho jiska interval main kabhi nahi chahta. Tum meri strength bhi ho aur meri sabse badi weakness bhi. Humari chemistry toh theek hai, magar humara "Connection" rooh wala hai.
            </p>
            <p className="section-p">
              Agar kabhi life mein ups and downs aayein, toh fikar mat karna. Main hamesha tumhare sath khada rahunga, bilkul ek rock ki tarah. Tum bas apni smile maintain rakhna, baki sab main manage kar lunga.
            </p>
          </div>
          <div className="story-img-container">
            <img src={photos[5]} className="story-img" alt="Feelings" />
          </div>
        </div>
      </section>

      {/* 6. The Proposal / Final Note - Changed Heading */}
      <section style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("${photos[4]}")`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className="letter-box">
          <span className="section-tag">A Special Question</span>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-accent)', fontSize: '3.5rem' }}>Dastaan-e-Mohabbat</h2>
          <p className="letter-text">
            "Hey Jyotsana, maine bohot kuch kaha aur bohot kuch likha, magar sabka ek hi matlab hai—ki main tumhare sath apni puri life spend karna chahta hoon. 
            Tum sirf meri girlfriend nahi, tum meri best friend, meri partner-in-crime aur meri inspiration ho. 
            Kya tum mujhe ek chance dogi apne samrajye ka Bahubali banne ka? ❤️"
          </p>
          <p className="section-p" style={{ marginBottom: '40px', fontStyle: 'italic' }}>
            Life short hai, magar humari memories long-lasting honi chahiye. Toh kya kehti ho?
          </p>
          <a href="https://wa.me/919413128045?text=Hey%20Bahubali!%20Website%20ka%20content%20padh%20ke%20dil%20khush%20ho%20gaya...%20😍❤️" 
             target="_blank" 
             rel="noreferrer" 
             className="btn-main">
            Send My Answer 💬
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem', borderTop: '1px solid #222' }}>
        <p>Made with Love, Tissues, and Protein Shakes // May 2026</p>
        <p style={{ marginTop: '10px' }}>This website is dedicated to the Queen of my heart.</p>
      </footer>
    </div>
  );
}
