import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingEmojis = ['😂', '✨', '⚡', '💖', '🔥', '😇', '🍕', '🎸'];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050505] selection:bg-pink-500/30 text-white font-['Outfit']">
      
      {/* Background Layer */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated Gradient Glows */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-pink-600/20 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" 
      />

      {/* Floating Emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.div
          key={i}
          className="fixed text-3xl pointer-events-none z-0"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: 0 
          }}
          animate={{ 
            y: ['0vh', '-100vh'],
            opacity: [0, 0.6, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
        >
          {emoji}
        </motion.div>
      ))}

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">
        
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12"
        >
          <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs tracking-[0.3em] uppercase text-pink-400 font-bold">
            Established 2026 • Vibes Only
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            SITUATION KO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500">SHMJHO</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-6"
          >
            <span className="text-2xl md:text-3xl font-light italic text-white/60">#BackchodiOnTop</span>
            <div className="h-px w-12 bg-white/20" />
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img src="/stickers.png" alt="vibes" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative glass p-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-pink-500 text-sm font-bold tracking-widest uppercase mb-4 block">Section 01</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 devanagari">सीरियस मत हो!</h2>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                  "Maje mai raho, reel se mai kuch tumko jatana nahi chahta bss thoda masti majak krta hu. 
                  Isliye tumko must watch likha tha."
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500">😎</div>
                <span className="font-medium text-white/90">Ok be cool!</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative glass p-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-blue-500 text-sm font-bold tracking-widest uppercase mb-4 block">Section 02</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 devanagari">दोस्ती बनी रहे...</h2>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                  "Jab tak tumko lagega, jab tum mujhe bol dena mai intezaar krta rahunga. 
                  Tab tak toh jese apn the achee dost, unki trh toh reh skte hai..."
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">😅</div>
                <span className="font-medium text-white/90">Majak masti wali life!</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Surprise Button Section */}
        <div className="mt-40 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center gap-12"
          >
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                onClick={() => setShowMessage(!showMessage)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-pink-500 hover:text-white transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                {showMessage ? "Close Message" : "Open Surprise 🎁"}
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  x: [0, -100, 100, -100, 0],
                  y: [0, 50, -50, 50, 0],
                  scale: 0.8
                }}
                className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl font-bold text-lg"
              >
                Don't Click 🚫
              </motion.button>
            </div>

            <AnimatePresence>
              {showMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  className="max-w-2xl p-12 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
                  <p className="text-3xl md:text-4xl font-light italic leading-relaxed text-white/90 devanagari">
                    "Phad liya? Ab smile krdo thoda! 😊 <br />
                    Hmara goal toh bss tumhari khushi hai."
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Final Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-60 mb-20 text-center"
        >
          <p className="text-white/40 text-sm tracking-[0.5em] uppercase mb-4">The Final Word</p>
          <h3 className="text-5xl md:text-7xl font-black italic text-white/20">BACKCHODI ON TOP</h3>
        </motion.div>

        <footer className="w-full border-t border-white/5 pt-10 pb-20 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm gap-6">
          <p>© 2026 Crafted for a Lovely Human</p>
          <div className="flex gap-8">
            <span>Chill Vibes</span>
            <span>Friendly Mode</span>
            <span>Waiting...</span>
          </div>
        </footer>

      </main>

      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white mix-blend-difference pointer-events-none z-[100]"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
          scale: showMessage ? 3 : 1
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
      />

    </div>
  );
};

export default App;
