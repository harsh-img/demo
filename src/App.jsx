import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import './index.css';

export default function App() {
  const [muted, setMuted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const photos = [
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM (1).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM (2).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.57.59 PM.jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM (1).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM (2).jpeg',
    '/WhatsApp Image 2026-05-04 at 4.58.00 PM.jpeg',
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="app-container" ref={containerRef}>
      <div className="noise"></div>
      
      {/* Custom Cursor */}
      <motion.div 
        className="cursor"
        animate={{ x: mousePos.x - 10, y: mousePos.y - 10 }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />

      {/* Scroll Progress */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Background Music */}
      <audio src="/Ishqa Ve Chadeya - Ishqa Ve _ Zeeshan Ali _ Punjabi Song.mp3" autoPlay loop muted={muted} />
      <motion.div 
        className="mute-float" 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        onClick={() => setMuted(!muted)}
      >
        {muted ? '🔊' : '🔇'}
      </motion.div>

      {/* 1. Hero Section */}
      <section className="hero" style={{ backgroundImage: `url("${photos[1]}")` }}>
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title">JYOTSANA</h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            The Universe Within You ❤️
          </motion.p>
        </motion.div>
      </section>

      {/* 2. The Muse - Deep Personality Section */}
      <section>
        <div className="story-section">
          <motion.div className="story-img-container" {...fadeInUp}>
            <img src={photos[4]} className="story-img" alt="Muse" />
          </motion.div>
          <motion.div className="story-content" {...fadeInUp} transition={{ delay: 0.2 }}>
            <span className="section-tag">The Icon</span>
            <h2 className="section-title">Classic, Modern, and Everything In Between.</h2>
            <p className="section-p">
              Tumhari personality mein ek alag hi "Paradox" hai. Kabhi tum itni calm lagti ho jaise koi peaceful lake, aur kabhi itni vibrant jaise koi celebration. Tumhari har photo mein ek alag hi grace hai, magar jo cheez camera capture nahi kar sakta, woh hai tumhari rooh ki chamak.
            </p>
            <p className="section-p" style={{ marginTop: '20px' }}>
              Style toh tumhara birthright hai, magar tumhara "Vibe" tumhare dil se aata hai. Jab tum ethnic wear mein hoti ho, toh lagta hai jaise koi purani dastan zinda ho gayi ho, aur jab casuals mein, toh lagta hai tum hi dunya ki sabse cool insaan ho. 
              Hinglish mein bolu toh: "Tum sirf ek trend nahi ho, tum ek poora era ho!"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Detailed Humour Section */}
      <section style={{ background: '#050505' }}>
        <motion.span className="section-tag" {...fadeInUp}>The Daily Dose</motion.span>
        <motion.h2 className="section-title" {...fadeInUp}>Laughter is Our Language</motion.h2>
        <div className="grid-container">
          <motion.div className="card" {...fadeInUp} transition={{ delay: 0.1 }}>
            <div className="card-emoji">🏋️‍♂️</div>
            <h3>Gym Boy’s Weakness</h3>
            <p className="section-p">
              Main 100kg ka deadlift toh maar leta hoon, magar jab tum gusse mein "OK" likhti ho na, toh wahan meri saari strength khatam ho jati hai! 😂 Log protein ke peeche bhaagte hain, magar meri asli energy toh tumhare sath woh 5 minute ki faltu baaton mein hai. No Gym, No Gain? No... No Tum, No Gain!
            </p>
          </motion.div>
          <motion.div className="card" {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="card-emoji">🍟</div>
            <h3>The Foodie Diaries</h3>
            <p className="section-p">
              Burger aur Fries tumhare liye shayad bas khana ho, magar mere liye woh tumhare sath bitaye huye palon ka ek bahana hai. Humari "Foodistry" (Food + Chemistry) itni strong hai ki hum dunya ka har menu card khatam kar sakte hain. Agli baar jab milenge, diet gayi tel lene, hum sirf treat lenge! 🍔
            </p>
          </motion.div>
          <motion.div className="card" {...fadeInUp} transition={{ delay: 0.3 }}>
            <div className="card-emoji">🤡</div>
            <h3>Tantrums Manager</h3>
            <p className="section-p">
              Tumhare nakhre handle karna mera favorite part-time (aur full-time) job hai. Tumhare "Mood Swings" meri life ke sabse adventurous roller-coaster rides hain. Magar fikar mat karna, main hamesha front seat par rahunga, bas tum rote-rote kabhi hasna mat bhulna.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Cinematic Gallery */}
      <section>
        <motion.span className="section-tag" {...fadeInUp}>Frames of Love</motion.span>
        <motion.h2 className="section-title" {...fadeInUp}>Visualizing You</motion.h2>
        <div className="masonry-gallery">
          {photos.map((photo, i) => (
            <motion.div 
              key={i} 
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={photo} alt={`Memory ${i}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. The Future - Detailed Narrative */}
      <section style={{ background: '#080808' }}>
        <div className="story-section" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
          <motion.div className="story-content" {...fadeInUp}>
            <span className="section-tag">Beyond Today</span>
            <h2 className="section-title">What the Future Holds</h2>
            <p className="section-p">
              Main sirf aaj mein nahi rehna chahta, main tumhare sath har "Kal" dekhna chahta hoon. Woh subah jab hum sath mein coffee peeyenge, woh shaamein jab hum bina kisi wajah ke lambi walks par jayenge, aur woh raatein jab hum purani photos dekh kar hasenge.
            </p>
            <p className="section-p" style={{ marginTop: '20px' }}>
              Humein dunya bhar ghumna hai, naye naye cafes try karne hain, aur dher saari pagalpanti karni hai. Meri life ka har big decision tumhare "Yes" ya "No" par depend karega. Humari story ka climax hamesha "Happily Ever After" hi hoga, kyunki humne ise likha hi dil se hai. 
              Future forecast? 100% chance of infinite togetherness.
            </p>
          </motion.div>
          <motion.div className="story-img-container" {...fadeInUp} transition={{ delay: 0.3 }}>
            <img src={photos[5]} className="story-img" alt="Future" />
          </motion.div>
        </div>
      </section>

      {/* 6. Deep Confessions */}
      <section>
        <motion.div className="premium-box" {...fadeInUp}>
          <span className="section-tag">Heart-to-Heart</span>
          <h2 className="section-title">Unspoken Truths</h2>
          <div style={{ textAlign: 'left', margin: '0 auto', maxWidth: '800px' }}>
            <p className="section-p" style={{ color: '#fff', marginBottom: '30px' }}>
              Sach toh yeh hai ki tumhare bina sab kuch "Black & White" lagta hai. Tumne mujhe sikhaya ki life ko sirf jeena nahi, use enjoy karna chahiye. Jab bhi main low feel karta hoon, tumhari ek audio note ya ek purani photo hi kaafi hoti hai mujhe pump up karne ke liye.
            </p>
            <p className="section-p" style={{ color: '#fff', marginBottom: '30px' }}>
              Main thoda sa sakht hoon, magar tumhare nakhre ke aage main hamesha "Pighal" jata hoon. Tum meri woh priority ho jiske liye main dunya se lad sakta hoon. Tum sirf ek rishta nahi, tum meri rooh ka ek hissa ho.
            </p>
            <p className="section-p" style={{ color: '#fff' }}>
              Hinglish mein agar main summary bolu: "Main tumhare liye hamesha wahan khada rahunga jahan tumne mujhe pehli baar dekha tha. Bas ab aur intezaar mat karwao!" ❤️
            </p>
          </div>
        </motion.div>
      </section>

      {/* 7. The Ultimate Proposal - Dastaan-e-Mohabbat */}
      <section style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url("${photos[2]}")`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <motion.div className="premium-box" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="section-tag">Final Act</span>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-accent)', fontSize: '4rem', textTransform: 'none' }}>Dastaan-e-Mohabbat</h2>
          <p className="letter-text" style={{ fontSize: '2.5rem' }}>
            "Jyotsana, will you be the Queen of my samrajye forever? <br /> 
            Will you let me be your Bahubali till my last breath?"
          </p>
          <motion.p className="section-p" style={{ margin: '40px auto' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Yeh sirf ek sawal nahi hai, yeh meri life ka sabse bada commitment hai. 
            Main vada karta hoon ki tumhare raste mein kabhi koi kaanta nahi aane dunga. 
            Bas ek baar muskura kar "Haan" keh do. ❤️
          </motion.p>
          <motion.a 
            href="https://wa.me/919413128045?text=Hey%20Bahubali!%20Everything%20is%20perfect...%20Yes!%20😍❤️" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-premium"
            whileHover={{ scale: 1.1, letterSpacing: '5px' }}
            whileTap={{ scale: 0.9 }}
          >
            Send My Answer 💌
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 20px', textAlign: 'center', opacity: 0.5 }}>
        <p style={{ letterSpacing: '10px', textTransform: 'uppercase', fontSize: '0.7rem' }}>Dedicated to Jyotsana // Always & Forever</p>
        <p style={{ marginTop: '20px', fontFamily: 'var(--font-accent)', fontSize: '1.5rem' }}>Tum bohot special ho ❤️</p>
      </footer>
    </div>
  );
}
