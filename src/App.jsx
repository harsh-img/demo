import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const Petal = ({ i }) => {
  const x = Math.random() * 100;
  const delay = Math.random() * 10;
  const duration = 10 + Math.random() * 20;

  return (
    <motion.div
      className="petal"
      initial={{ top: -20, left: `${x}vw`, opacity: 0, rotate: 0 }}
      animate={{ 
        top: '110vh', 
        left: `${x + (Math.random() * 10 - 5)}vw`, 
        opacity: [0, 0.6, 0.6, 0],
        rotate: 360 
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay,
        ease: "linear"
      }}
    >
      🌸
    </motion.div>
  );
};

export default function App() {
  const [muted, setMuted] = useState(false);

  const photos = [
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM (1).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM (2).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM.jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM (1).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM (2).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM.jpeg',
  ];

  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: "easeOut" }
  };

  return (
    <div className="app-container">
      {/* Falling Petals */}
      {[...Array(15)].map((_, i) => <Petal key={i} />)}

      <audio src="/Ishqa Ve Chadeya - Ishqa Ve _ Zeeshan Ali _ Punjabi Song.mp3" autoPlay loop muted={muted} />
      
      <div className="mute-ornamental" onClick={() => setMuted(!muted)}>
        {muted ? '🔊' : '🔇'}
      </div>

      {/* 1. Hero Section - The Grand Entrance */}
      <section>
        <motion.div {...reveal}>
          <h1 className="title-luxury">Jyotsana</h1>
          <div className="ornament"></div>
          <p className="subtitle-script">Ek Haseen Khwab...</p>
        </motion.div>
        
        <motion.div 
          className="frame-luxury" 
          style={{ width: '300px', marginTop: '50px' }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src={photos[1]} alt="Hero" />
        </motion.div>
      </section>

      {/* 2. The Beginning - Detailed Content */}
      <section>
        <div className="ornament"></div>
        <motion.h2 className="title-luxury" style={{ fontSize: '3rem' }} {...reveal}>Aghaaz-e-Mohabbat</motion.h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center', marginTop: '50px' }}>
          <motion.div className="frame-luxury" style={{ width: '350px', transform: 'rotate(-3deg)' }} {...reveal}>
            <img src={photos[0]} alt="Start" />
          </motion.div>
          
          <motion.div style={{ maxWidth: '500px' }} {...reveal}>
            <p className="content-p" style={{ textAlign: 'left' }}>
              Yaad hai woh din jab humari baatein shuru hui thi? Maine kabhi nahi socha tha ki ek ajnabi mere dil ke itne qareeb aa jayega. Tumhara baat karne ka tareeka, woh sense of humor, aur woh choti-choti baatein... sab kuch jaise ek dastan banti gayi. 
              <br /><br />
              Log kehte hain ki mohobbat ek ehsaas hai, magar tumhare sath rehkar mujhe laga ki mohobbat ek "Sukun" hai. Jab tum hasti ho, toh lagta hai dunya ki saari khushiyan ek hi jagah simat gayi hain. Tum sirf ek ladki nahi ho, tum meri life ki woh roshni ho jo andhere mein bhi rasta dikhati hai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Funny Side - Scrapbook Cards */}
      <section style={{ background: 'rgba(0,0,0,0.2)' }}>
        <h2 className="title-luxury" style={{ fontSize: '3rem' }}>Humari Kahani, Humari Zubani</h2>
        <div className="ornament"></div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', width: '100%', maxWidth: '1200px', marginTop: '50px' }}>
          {[
            { title: 'Gym Boy Logic', content: 'Main 100kg deadlift toh maar leta hoon, magar tumhare "Hmm" se mera dil pighal jata hai! 😂 Protein shake se zyada mujhe tumhari smile ki zarurat hai energy ke liye. No Gym, No Gain? No, No Tum, No Gain!', icon: '💪' },
            { title: 'The Foodie War', content: 'Pizza tumhara pehla pyar hai, aur main doosra? Koi baat nahi, main compromise kar lunga. Humari Foodistry itni strong honi chahiye ki hum dunya ka har menu card khatam kar dein! 🍔', icon: '🍔' },
            { title: 'Tantrums Manager', content: 'Tumhare nakhre handle karna meri favorite hobby hai. Tumhara gussa bhi tumhare pyar ki tarah hi cute hai. Main hamesha ready hoon tumhare nakhre uthane ke liye! 🧸', icon: '🧸' }
          ].map((card, i) => (
            <motion.div key={i} className="frame-luxury" style={{ padding: '40px', background: 'var(--dark)', border: '1px solid var(--gold)' }} {...reveal} transition={{ delay: i * 0.2 }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{card.icon}</div>
              <h3 className="title-luxury" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{card.title}</h3>
              <p className="content-p" style={{ fontSize: '1rem', lineHieght: '1.6' }}>{card.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. The Aesthetic You - Collage Section */}
      <section>
        <h2 className="title-luxury" style={{ fontSize: '3rem' }}>Tasveer-e-Ishq</h2>
        <div className="ornament"></div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', width: '100%', maxWidth: '1200px', marginTop: '50px' }}>
          {photos.map((photo, i) => (
            <motion.div key={i} className="frame-luxury" {...reveal} transition={{ delay: i * 0.1 }}>
              <img src={photo} alt={`Gallery ${i}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Deep Feelings - The Narrative */}
      <section style={{ background: 'rgba(212, 175, 55, 0.05)' }}>
        <div className="ornament"></div>
        <motion.div style={{ maxWidth: '900px', textAlign: 'center' }} {...reveal}>
          <h2 className="title-luxury" style={{ fontSize: '3.5rem' }}>Kyun Tum?</h2>
          <p className="content-p">
            Dunya mein bohot log hain, magar tum jaisa koi nahi. Tumne mujhe woh ehsaas karaya jo maine pehle kabhi feel nahi kiya tha. Tumhare saath silence bhi comfortable lagta hai. Tum meri life ki woh movie ho jiska interval main kabhi nahi chahta. 
            <br /><br />
            Sach toh yeh hai ki tumhare bina sab kuch "Black & White" lagta hai. Tumne mujhe sikhaya ki life ko sirf jeena nahi, use enjoy karna chahiye. Jab bhi main low feel karta hoon, tumhari ek photo hi kaafi hoti hai mujhe pump up karne ke liye. Main thoda sa sakht hoon, magar tumhare nakhre ke aage main hamesha "Pighal" jata hoon.
            <br /><br />
            Meri har subah tumhare khayal se shuru hoti hai aur har raat tumhari yaadon mein khatam. Tum sirf ek rishta nahi, tum meri rooh ka ek hissa ho.
          </p>
        </motion.div>
        <div className="ornament"></div>
      </section>

      {/* 6. The Proposal - Dastaan-e-Mohabbat */}
      <section style={{ backgroundImage: `linear-gradient(rgba(26, 15, 15, 0.9), rgba(26, 15, 15, 0.9)), url("${photos[4]}")`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <motion.div style={{ textAlign: 'center' }} {...reveal}>
          <h2 className="title-luxury" style={{ fontSize: '4rem' }}>Dastaan-e-Mohabbat</h2>
          <div className="ornament"></div>
          <p className="subtitle-script" style={{ fontSize: '4rem' }}>Will You Be Mine?</p>
          
          <p className="content-p" style={{ fontStyle: 'italic', maxWidth: '700px' }}>
            "Jyotsana, will you be the Queen of my samrajye forever? <br /> 
            Will you let me be your Bahubali till my last breath? <br /><br />
            Yeh sirf ek sawal nahi hai, yeh meri life ka sabse bada commitment hai. 
            Main vada karta hoon ki tumhare raste mein kabhi koi kaanta nahi aane dunga. 
            Bas ek baar muskura kar 'Haan' keh do."
          </p>
          
          <motion.a 
            href="https://wa.me/919413128045?text=Hey%20Bahubali!%20Everything%20is%20so%20beautiful...%20Yes!%20❤️" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-gold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Qubool Hai ❤️
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 20px', textAlign: 'center', opacity: 0.6 }}>
        <div className="ornament"></div>
        <p style={{ fontFamily: 'var(--font-title)', color: 'var(--gold)', letterSpacing: '5px' }}>FOREVER & ALWAYS</p>
        <p style={{ marginTop: '20px', fontFamily: 'var(--font-script)', fontSize: '2rem' }}>Tum bohot special ho, Jyotsana ❤️</p>
      </footer>
    </div>
  );
}
