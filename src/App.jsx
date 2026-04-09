import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

/** Served from /public — filename has spaces */
const CELEBRATION_SONG_SRC = encodeURI(
  "/Ishqa Ve Chadeya - Ishqa Ve _ Zeeshan Ali _ Punjabi Song.mp3"
);

const blocks = [
  {
    title: "Dil ki baat (bina pressure ke) 🤍",
    lines: [
      "Main tumse pyaar karta hoon — lekin pyaar ka matlab kabhi bhi dabaaav nahin hota.",
      "Tumhari marzi, tumhari speed, tumhari boundaries… sabse pehle.",
      "Agar tum “nahi” bolo, toh woh bhi bilkul theek hai — respect ke saath.",
    ],
  },
  {
    title: "Jo galti hui… 💔",
    lines: [
      "Kal relationship ke naam par ladayi hui, kyunki main tum par pressure daal raha tha.",
      "Main samajh gaya hoon: force = love nahi hota.",
      "Main tumhari feelings ko space dena chahta hoon, aur khud ko bhi improve karna chahta hoon.",
    ],
  },
  {
    title: "A few lines in English ✨",
    lines: [
      "I care about you, not just the idea of “us.”",
      "Your comfort matters more than my expectations.",
      "I choose to love you with patience, respect, and calm.",
    ],
  },
  {
    title: "A small poem 🌹",
    lines: [
      "Maine tumhe apne khayalon mein",
      "kabhi apna ‘right’ samajh liya…",
      "par tum toh ek ‘choice’ ho,",
      "jise izzat se samjha jaata hai.",
      "",
      "Aaj main bas itna chahta hoon—",
      "tum muskurao, bina kisi darr ke,",
      "aur main sudhar jaaun,",
      "bina kisi shor ke.",
    ],
  },
];

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
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSong = () => {
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio(CELEBRATION_SONG_SRC);
      audio.loop = true;
      audio.volume = 0.85;
      audioRef.current = audio;
    }

    if (audio.paused) {
      void audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="app">
      <div className="stars-layer" aria-hidden="true" />
      <Particles />
      <FallingRoses />

      <main className="apology-stage">
        <motion.header
          className="apology-hero"
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-pill">Respect • Patience • No pressure</div>
          <h1 className="hero-title">
            Ek soft sa message… <span aria-hidden="true">🤍</span>
          </h1>
          <p className="hero-sub">
            Yeh page bas feelings ko gently bolne ke liye hai — tumhari comfort sabse pehle.
          </p>

          <motion.button
            type="button"
            className="btn-song"
            onClick={toggleSong}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isPlaying ? "Pause song ⏸️" : "Play song ▶️"}
          </motion.button>
        </motion.header>

        <section className="apology-grid">
          {blocks.map((b, idx) => (
            <motion.article
              key={b.title}
              className="apology-card"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15 + idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="card-title">{b.title}</h2>
              <div className="card-body">
                {b.lines.map((line, i) =>
                  line === "" ? (
                    <div key={`${b.title}-sp-${i}`} className="card-spacer" />
                  ) : (
                    <p key={`${b.title}-${i}`} className="card-line">
                      {line}
                    </p>
                  )
                )}
              </div>
            </motion.article>
          ))}
        </section>

        <motion.section
          className="sorry-card"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="card-title">I’m sorry… 😔</h2>
          <p className="sorry-text">
            Kal maine tum par pressure daal kar tumhe uncomfortable feel karwaya. Main uske liye dil se{" "}
            <strong>sorry</strong> hoon. Aage se main tumhari boundaries ka poora respect karunga — bina force, bina
            zid, bina arguments.
          </p>
          <p className="sorry-text">
            Agar tumhe space chahiye, main dunga. Agar tum baat karna chaho, main calm tareeke se sununga. Tumhari
            khushi mere liye sabse important hai. 🤍
          </p>
          <div className="sorry-sign">— with respect, and a better me</div>
        </motion.section>
      </main>
    </div>
  );
}
