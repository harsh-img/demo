import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const jokes = [
  "Why did the programmer quit his job? Because he didn't get arrays (a raise). 😂",
  "Girl: My father is a lawyer. Boy: My father is a terrorist. Girl: Toh? Boy: Toh dhyan rakhna, 'argument' nahi seedha 'blast' hoga! 💣",
  "Teacher: Why are you talking during my lesson? Student: Why are you teaching during my conversation? 😎",
  "My life is like a software update. Whenever I think it's finally getting better, it crashes at 99%. 🖥️",
  "I asked my dog what's two minus two. He said nothing. 🐕",
  "Doctor: Your brain is missing. Me: Wait, where is it? Doctor: In your mobile's cache! 📱",
  "Roses are red, My screen is blue. I forgot to save, and now I hate you (Windows). 🟦"
];

const poems = [
  { title: "The Diet Struggle", text: "Gym jane ka socha tha roz, Lekin raste me mil gaye momos. Ab pet thoda bahar hai, Magar dil mera gulzar hai! 🥟" },
  { title: "Engineer Ki Zindagi", text: "Subah utho, code likho. Raat ko error dekho. Shaadi ki umar ho gayi, Lekin 'Bug' ne zindagi tabah kar di! 🐛" },
  { title: "Mobile Love", text: "Twinkle Twinkle Little Star, Mobile is my world's car. Bina charging mera dil rota hai, 1% pe dukh bada hota hai! 🔋" }
];

const App = () => {
  const [jokeIndex, setJokeIndex] = useState(0);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [scanResult, setScanResult] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const [isDestructing, setIsDestructing] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [showCat, setShowCat] = useState(false);
  const [degreeName, setDegreeName] = useState("");

  const nextJoke = () => {
    setJokeIndex((prev) => (prev + 1) % jokes.length);
  };

  const startDestruct = () => {
    setIsDestructing(true);
    let count = 5;
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        setIsDestructing(false);
        setShowCat(true);
        setCountdown(5);
      }
    }, 1000);
  };

  const moveBtn = () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);
    setBtnPos({ x, y });
  };

  const runScanner = () => {
    setIsScanning(true);
    setScanResult("");
    setTimeout(() => {
      const results = [
        "ERROR: 100% Brain Not Found! 🧠❌",
        "WARNING: Extreme levels of 'Vella-panti' detected! 🛋️",
        "STATUS: Soulmate detected but they are currently eating pizza without you. 🍕",
        "DANGER: You are too cool for this website. Please leave. 😎",
        "ADVICE: Go sleep, your phone is tired of you. 😴"
      ];
      setScanResult(results[Math.floor(Math.random() * results.length)]);
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="main-wrapper" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* HEADER */}
      <header style={{ textAlign: 'center', padding: '60px 0' }}>
        <motion.div
          animate={{ rotate: [0, -2, 2, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        >
          <img 
            src="/funny/confused_monkey_scientist_1778349723248.png" 
            alt="Monkey" 
            className="floating-crazy"
            style={{ width: '200px', border: '5px solid white', marginBottom: '20px' }}
          />
        </motion.div>
        <h1 className="glitch-text" data-text="CHAOS CORNER" style={{ fontSize: '4rem', color: 'var(--acid-green)' }}>
          CHAOS CORNER
        </h1>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'var(--hot-pink)', display: 'inline-block', padding: '5px 15px', marginTop: '10px', color: 'black' }}>
          JAHAN LOG PAGAL HOTE HAIN! 🤪
        </p>
      </header>

      {/* JOKE SECTION */}
      <section className="crazy-card" style={{ marginBottom: '40px' }}>
        <h2 style={{ color: 'var(--cyan)', marginBottom: '20px' }}>Joke of the Moment</h2>
        <motion.p 
          key={jokeIndex}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ fontSize: '1.8rem', minHeight: '100px', marginBottom: '20px' }}
        >
          {jokes[jokeIndex]}
        </motion.p>
        <button className="crazy-btn" onClick={nextJoke}>ANOTHER ONE! 🤣</button>
      </section>

      {/* INTERACTIVE SCANNER */}
      <section className="crazy-card" style={{ marginBottom: '40px', borderLeftColor: 'var(--hot-pink)' }}>
        <h2 style={{ color: 'var(--acid-green)', marginBottom: '20px' }}>Personality Scanner 🔍</h2>
        <p style={{ marginBottom: '20px' }}>Place your virtual finger on the screen (or just click the button below).</p>
        <div style={{ textAlign: 'center' }}>
          {isScanning ? (
            <motion.div 
              animate={{ x: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 0.1 }}
              style={{ fontSize: '2rem', color: 'var(--hot-pink)' }}
            >
              SCANNING BRAIN... (Wait, it's empty?)
            </motion.div>
          ) : scanResult ? (
            <motion.div initial={{ scale: 2 }} animate={{ scale: 1 }} style={{ fontSize: '2rem', color: 'white' }}>
              {scanResult}
            </motion.div>
          ) : null}
          {!isScanning && <button className="crazy-btn" onClick={runScanner} style={{ marginTop: '20px' }}>START SCAN 🚀</button>}
        </div>
      </section>

      {/* IMAGE BREAK */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <div className="crazy-card" style={{ flex: '1', minWidth: '300px' }}>
          <img src="/funny/alien_taco_ear_1778349738811.png" alt="Alien" style={{ width: '100%', marginBottom: '10px' }} />
          <h3>Alien vs Taco</h3>
          <p>He's trying his best, okay?</p>
        </div>
        <div className="crazy-card" style={{ flex: '1', minWidth: '300px', boxOffset: '10px' }}>
          <img src="/funny/skating_banana_1778349760961.png" alt="Banana" style={{ width: '100%', marginBottom: '10px' }} />
          <h3>B-NANA FLOW</h3>
          <p>Too cool for the fruit bowl.</p>
        </div>
      </div>

      {/* POEMS SECTION */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '30px' }}>Legendary Shayari ✍️</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {poems.map((p, i) => (
            <motion.div 
              key={i} 
              className="crazy-card"
              whileHover={{ rotate: i % 2 === 0 ? 2 : -2 }}
            >
              <h3 style={{ color: 'var(--hot-pink)', marginBottom: '10px' }}>{p.title}</h3>
              <p style={{ fontSize: '1.2rem', whiteSpace: 'pre-line' }}>{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE SELF-DESTRUCT SECTION */}
      <section className="crazy-card" style={{ marginBottom: '60px', textAlign: 'center', borderColor: 'red', boxShadow: '10px 10px 0px red' }}>
        <h2 style={{ color: 'red', fontSize: '3rem', marginBottom: '20px' }}>⚠️ DANGER ZONE ⚠️</h2>
        <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>DO NOT CLICK THE RED BUTTON. REPEAT: DO NOT CLICK.</p>
        
        {isDestructing ? (
          <div style={{ padding: '40px' }}>
            <motion.h1 
              animate={{ scale: [1, 1.5, 1], color: ['#ff0000', '#ffffff', '#ff0000'] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              style={{ fontSize: '6rem' }}
            >
              {countdown}
            </motion.h1>
            <p className="glitch-text" data-text="SELF DESTRUCT INITIATED!">SELF DESTRUCT INITIATED!</p>
          </div>
        ) : showCat ? (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ padding: '20px' }}>
            <img 
              src="/funny/lazy_super_cat_1778350094204.png" 
              alt="Lazy Cat" 
              style={{ width: '300px', border: '10px solid white' }}
            />
            <h2 style={{ marginTop: '20px', color: 'var(--acid-green)' }}>DESTRUCTION CANCELLED!</h2>
            <p>Our superhero cat was supposed to press the 'Explode' button, but he fell asleep after eating too much pizza. Lucky you! 🍕💤</p>
            <button className="crazy-btn" onClick={() => setShowCat(false)} style={{ marginTop: '20px' }}>WHEW! RESET 😅</button>
          </motion.div>
        ) : (
          <button 
            className="crazy-btn" 
            style={{ background: 'red', color: 'white', fontSize: '2rem' }}
            onClick={startDestruct}
          >
            I'M A REBEL, CLICK ME! 💣
          </button>
        )}
      </section>

      {/* VELLA-PANTI CERTIFICATE */}
      <section className="crazy-card" style={{ marginBottom: '60px', background: 'white', color: 'black', boxShadow: '10px 10px 0px var(--cyan)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🎓 The Vella-panti University</h2>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>Enter your name to receive your official 'Vella' Degree.</p>
        
        {!degreeName ? (
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <input 
              type="text" 
              placeholder="Your Name Here..." 
              id="name-input"
              style={{ padding: '10px', border: '4px solid black', fontSize: '1.2rem', width: '70%' }}
            />
            <button 
              className="crazy-btn" 
              style={{ fontSize: '1rem' }}
              onClick={() => {
                const name = document.getElementById('name-input').value;
                if(name) setDegreeName(name);
              }}
            >
              GET DEGREE 📜
            </button>
          </div>
        ) : (
          <motion.div 
            initial={{ rotate: -10, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            style={{ 
              border: '10px double black', 
              padding: '40px', 
              textAlign: 'center',
              position: 'relative',
              background: '#fffdf0'
            }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'underline' }}>CERTIFICATE OF SUPREME USELESSNESS</div>
            <p style={{ marginTop: '20px' }}>This is to certify that</p>
            <h1 style={{ fontSize: '3rem', margin: '10px 0', borderBottom: '2px solid black', display: 'inline-block' }}>{degreeName}</h1>
            <p style={{ marginTop: '20px' }}>Has successfully wasted 10 minutes of their life on this website instead of doing something productive. We are proud of your zero contribution to society.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
              <div>
                <div style={{ fontWeight: 'bold' }}>Dr. Pagal Insaan</div>
                <div style={{ fontSize: '0.8rem' }}>Dean of Time-Wasting</div>
              </div>
              <div style={{ width: '80px', height: '80px', background: 'red', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', transform: 'rotate(-20deg)', border: '4px dashed white' }}>
                SEAL OF VELLA
              </div>
            </div>
            <button className="crazy-btn" onClick={() => setDegreeName("")} style={{ marginTop: '30px', background: '#ccc' }}>TRY AGAIN 🔄</button>
          </motion.div>
        )}
      </section>

      {/* THE IMPOSSIBLE BUTTON (Moved here and made smaller) */}
      <section style={{ height: '200px', position: 'relative', border: '5px dashed white', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginBottom: '60px' }}>
        <h3 style={{ opacity: 0.2 }}>CHASE ME IF YOU CAN...</h3>
        <motion.button
          className="crazy-btn"
          style={{ 
            position: 'absolute',
            left: btnPos.x,
            top: btnPos.y,
            background: 'white',
            color: 'black',
            fontSize: '1rem'
          }}
          onMouseEnter={moveBtn}
          onClick={() => alert("HOW?! 😱")}
        >
          TOUCH ME!
        </motion.button>
      </section>

      {/* HONEST RATING */}
      <div style={{ textAlign: 'center', marginBottom: '100px' }}>
        <h2>Rate this masterpiece?</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
          <button className="crazy-btn" onClick={() => alert("I know, I'm a genius. 😎")}>Masterpiece</button>
          <button className="crazy-btn" onClick={() => alert("Haters gonna hate. Go watch pogo! 📺")}>It's Trash</button>
          <button className="crazy-btn" onClick={() => alert("Police is on the way to arrest you for your bad taste! 🚓")}>I'm Calling Police</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '100px 0', borderTop: '5px solid white' }}>
        <h2 className="rotate-infinite" style={{ display: 'inline-block', fontSize: '3rem', color: 'var(--acid-green)' }}>★</h2>
        <p style={{ fontSize: '1.5rem', marginTop: '20px' }}>
          Ab pakka jao, server ka bill badh raha hai! 💸
        </p>
        <p style={{ 
          fontSize: '1.8rem', 
          marginTop: '40px', 
          color: 'var(--hot-pink)', 
          fontWeight: 'bold',
          background: 'white',
          padding: '10px 20px',
          display: 'inline-block',
          border: '4px solid black',
          boxShadow: '5px 5px 0px var(--cyan)'
        }}>
          Jyotsana, smile ke saath ek selfie zaroor bhej dena, varna main sochunga achha nahi bana! 😉📸
        </p>
        <p style={{ marginTop: '40px', opacity: 0.5 }}>© 2026 The Chaos Lab. No Refund for wasted time.</p>
      </footer>

      {isDestructing && (
        <style>{`
          body { animation: shake 0.1s infinite; }
          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }
        `}</style>
      )}
    </div>
  );
};

export default App;
