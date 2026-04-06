import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const secret = "143";

const fullText = `Jyotsana…

Jaise kali dheere-dheere khil kar
gulaab ban jaati hai hawa mein —
waise hi tumne mere dil ke andheron mein
ek nayi roshni jagayi hai.

Tera naam hi toh jyoti jaisa hai:
komal, garam, raasta dikhane wala.
Teri hansi mein chhupi hai subah,
teri khaamoshi mein bhi ek geet sa.

Main poora nahin, par tere liye
har roz thoda behtar banne ki koshish mein hoon.
Tu meri duniya ka woh phool hai
jo sirf mere liye khilta hai…

Is khilte hue gulaab ki tarah,
dil se ek baat kehni hai… 💍`;

const pageTransition = {
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(8px)",
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  },
};

const PETAL_ANGLES = [0, 60, 120, 180, 240, 300];
const INNER_ANGLES = [30, 90, 150, 210, 270, 330];

/** Served from /public — filename has spaces */
const CELEBRATION_SONG_SRC = encodeURI(
  "/Ishqa Ve Chadeya - Ishqa Ve _ Zeeshan Ali _ Punjabi Song.mp3"
);

function MiniRoseSvg({ className, gradId }) {
  return (
    <svg className={className} viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff8fab" />
          <stop offset="55%" stopColor="#e85d8b" />
          <stop offset="100%" stopColor="#a61e4d" />
        </linearGradient>
      </defs>
      <path
        d="M16 36 Q14 28 15 22 Q12 18 10 14 Q14 12 16 16 Q18 12 22 14 Q20 18 17 22 Q18 28 16 36"
        fill="none"
        stroke="#1b4332"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse cx="16" cy="12" rx="10" ry="12" fill={`url(#${gradId})`} />
      <ellipse cx="11" cy="11" rx="5" ry="8" fill="#ff4d6d" opacity="0.85" transform="rotate(-25 11 11)" />
      <ellipse cx="21" cy="11" rx="5" ry="8" fill="#ff4d6d" opacity="0.85" transform="rotate(25 21 11)" />
      <circle cx="16" cy="13" r="4" fill="#4a0518" />
    </svg>
  );
}

function FallingRoses() {
  const items = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => {
        const seed = i * 17 + (i % 5) * 23;
        return {
          id: i,
          left: `${(seed * 2.7) % 100}%`,
          delay: ((i * 0.37) % 9).toFixed(2),
          duration: 9 + (i % 7) + (i % 3) * 0.5,
          drift: i % 2 === 0 ? 1 : -1,
          scale: 0.55 + (i % 5) * 0.12,
          sway: 18 + (i % 6) * 6,
        };
      }),
    []
  );

  return (
    <div className="falling-roses-layer" aria-hidden="true">
      {items.map((p) => (
        <div
          key={p.id}
          className="falling-rose-wrap"
          style={{
            left: p.left,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            "--rose-drift": p.drift,
            "--rose-scale": p.scale,
            "--rose-sway": p.sway,
          }}
        >
          <MiniRoseSvg className="falling-rose-svg" gradId={`frg-${p.id}`} />
        </div>
      ))}
    </div>
  );
}

function BloomingRose() {
  const ox = 60;
  const oy = 70;
  return (
    <div className="blooming-rose-wrap" aria-hidden="true">
      <svg className="blooming-rose-svg" viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rosePetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8fab" />
            <stop offset="50%" stopColor="#e85d8b" />
            <stop offset="100%" stopColor="#a61e4d" />
          </linearGradient>
          <linearGradient id="roseInnerGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffccd5" />
            <stop offset="100%" stopColor="#ff4d6d" />
          </linearGradient>
        </defs>
        <motion.path
          d={`M${ox} 142 Q${ox - 4} 115 ${ox - 2} 92 Q${ox} 82 ${ox} ${oy + 6}`}
          stroke="#1b4332"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        />
        <motion.path
          d={`M${ox - 2} ${oy + 18} Q${ox - 18} ${oy + 12} ${ox - 22} ${oy + 22} Q${ox - 10} ${oy + 20} ${ox - 2} ${oy + 24}`}
          fill="#2d6a4f"
          stroke="#1b4332"
          strokeWidth="0.4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, type: "spring", stiffness: 220, damping: 16 }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <motion.path
          d={`M${ox + 2} ${oy + 32} Q${ox + 20} ${oy + 24} ${ox + 26} ${oy + 36} Q${ox + 12} ${oy + 32} ${ox + 2} ${oy + 36}`}
          fill="#2d6a4f"
          stroke="#1b4332"
          strokeWidth="0.4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.58, type: "spring", stiffness: 220, damping: 16 }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <g transform={`translate(${ox}, ${oy})`}>
          {PETAL_ANGLES.map((deg, i) => (
            <motion.g key={deg} transform={`rotate(${deg})`}>
              <motion.ellipse
                cx="0"
                cy="-24"
                rx="12"
                ry="27"
                fill="url(#rosePetalGrad)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.2 + i * 0.09,
                  type: "spring",
                  stiffness: 200,
                  damping: 11,
                }}
                style={{ transformOrigin: `0px ${-24}px` }}
              />
            </motion.g>
          ))}
          {INNER_ANGLES.map((deg, i) => (
            <motion.g key={`in-${deg}`} transform={`rotate(${deg})`}>
              <motion.ellipse
                cx="0"
                cy="-14"
                rx="7.5"
                ry="17"
                fill="url(#roseInnerGrad)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.75 + i * 0.055,
                  type: "spring",
                  stiffness: 260,
                  damping: 14,
                }}
                style={{ transformOrigin: `0px ${-14}px` }}
              />
            </motion.g>
          ))}
          <motion.circle
            cx="0"
            cy="0"
            r="8"
            fill="#4a0518"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 320, damping: 16 }}
          />
        </g>
      </svg>
      <motion.p
        className="rose-caption"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.45 }}
      >
        tumhare liye khilta hua gulaab
      </motion.p>
    </div>
  );
}

function Particles() {
  const items = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        id: i,
        left: `${(i * 3.17 + (i % 7) * 11) % 100}%`,
        delay: (i * 0.35) % 10,
        duration: 14 + (i % 9),
      })),
    []
  );

  return (
    <div className="particles" aria-hidden="true">
      {items.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const celebrationAudioRef = useRef(null);
  const [noBtnStyle, setNoBtnStyle] = useState({
    position: "absolute",
    top: "58%",
    left: "58%",
  });

  const canUnlock = input.trim() === secret;

  useEffect(() => {
    if (step !== 2) {
      setText("");
      return;
    }

    let i = 0;
    setText("");
    const id = window.setInterval(() => {
      i += 1;
      setText(fullText.slice(0, i));
      if (i >= fullText.length) window.clearInterval(id);
    }, 42);

    return () => window.clearInterval(id);
  }, [step]);

  const dodgeNo = () => {
    setNoBtnStyle({
      position: "absolute",
      top: `${8 + Math.random() * 72}%`,
      left: `${8 + Math.random() * 72}%`,
    });
  };

  const handleYes = () => {
    let audio = celebrationAudioRef.current;
    if (!audio) {
      audio = new Audio(CELEBRATION_SONG_SRC);
      celebrationAudioRef.current = audio;
    }
    audio.currentTime = 0;
    void audio.play().catch(() => {});
    setStep(3);
  };

  return (
    <div className="app">
      <div className="stars-layer" aria-hidden="true" />
      {step === 2 && <Particles />}

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="lock"
            className="stage"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className="lock-card"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2>Enter secret code</h2>
              <p className="lock-sub">Sirf tumhare liye 🔐</p>
              <div className="lock-input-wrap">
                <input
                  type="password"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="•••"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && canUnlock && setStep(1)}
                />
              </div>
              <motion.button
                type="button"
                className="btn-magic"
                disabled={!canUnlock}
                onClick={() => canUnlock && setStep(1)}
                whileHover={canUnlock ? { scale: 1.02 } : {}}
                whileTap={canUnlock ? { scale: 0.98 } : {}}
              >
                Unlock ❤️
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="video"
            className="video-shell"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setStep(2)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setStep(2)}
          >
            <video autoPlay muted playsInline className="video">
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay">
              <motion.div
                className="video-hint"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="dot" />
                Tap to continue
                <span aria-hidden="true"> ❤️</span>
              </motion.div>
            </div>
            <audio autoPlay>
              <source src="/voice.mp3" type="audio/mpeg" />
            </audio>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="letter"
            className="stage"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <audio autoPlay loop>
              <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" />
            </audio>

            <div className="letter-stage">
              <motion.div
                className="letter-rose"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <BloomingRose />
                </motion.div>
              </motion.div>

              <motion.h2
                className="letter-title"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                For Jyotsana ❤️
              </motion.h2>

              <motion.p
                className="letter-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                {text}
                {text.length > 0 && text.length < fullText.length && (
                  <motion.span
                    aria-hidden="true"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ marginLeft: 2 }}
                  >
                    |
                  </motion.span>
                )}
              </motion.p>

              <AnimatePresence>
                {text.length === fullText.length && (
                  <motion.div
                    className="proposal-box"
                    initial={{ opacity: 0, y: 32, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 16 }}
                  >
                    <h3>
                      Jyotsana — dil se aur poori izzat ke saath yeh poochhna chahta hoon:
                      kya tum mere saath relationship mein aana chahogi? Do you love me?
                      <span className="proposal-sub">
                        Will you be in a relationship with me? 💍
                      </span>
                    </h3>
                    <div className="proposal-actions">
                      <motion.button
                        type="button"
                        className="btn-yes"
                        onClick={handleYes}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.15 }}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        YES ❤️
                      </motion.button>
                      <motion.button
                        type="button"
                        className="btn-no"
                        style={noBtnStyle}
                        onMouseEnter={dodgeNo}
                        onFocus={dodgeNo}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        NO 😜
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="success"
            className="stage stage-success"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <FallingRoses />
            <motion.div
              className="success-card"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", delay: 0.1, stiffness: 200, damping: 12 }}
              >
                Yayyyy ❤️🎉
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.45 }}
              >
                You made me the happiest person alive 💖
              </motion.p>
              <motion.a
                className="btn-wa"
                href="https://wa.me/919413128045?text=I%20said%20YES%20❤️"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Message me 💬
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
