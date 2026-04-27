import React, { useState, useEffect } from 'react';
import './index.css';

const chapters = [
  {
    type: 'cover',
    title: 'Jyotsana',
    subtitle: 'The Unfinished Symphony - Part II',
    edition: 'Emotional & Funny Edition'
  },
  {
    num: 'Chapter 01',
    title: 'The Sequel Nobody Asked For 😂',
    emoji: '🎬',
    content: 'Pehli kitab toh hit ho gayi (mere mann mein! 😜). Toh socha Part 2 bhi nikaal hi dete hain. Kyunki tumhari baatein aur tumhari yaadein itni zyada hain ki ek library bhi kam pad jaye. Tum mere life ki woh movie ho jiska interval main kabhi nahi chahta! 🍿',
    note: 'P.S. Ticket free hai, bas smile dena padega! ✨'
  },
  {
    num: 'Chapter 02',
    title: 'Gym Boy Logic 💪',
    emoji: '🏋️‍♂️',
    content: 'Main gym mein weights toh utha leta hoon, magar tumhare nakhre uthana sabse mushkil (aur favorite) exercise hai! 😂 Log kehte hain "No Pain, No Gain", magar tumhare sath toh "No Tum, No Gain" wala scene hai. Meri protein shake se zyada zarurat tumhari smile ki hai. 🥤',
    note: 'Workout Update: Aaj bhi dil ne sirf tumhare liye cardio kiya! ❤️'
  },
  {
    num: 'Chapter 03',
    title: 'Emotional Damage? 🥺',
    emoji: '🩹',
    content: 'Kabhi-kabhi main baith kar sochta hoon ki agar tum nahi hoti, toh main itna "filmy" kaise banta? Tumne mujhe ek "shayar" bana diya hai. Wese toh main thoda sakht hoon, magar tumhari ek "Hmm" par bhi pighal jata hoon. Yeh emotional attachment hai ya tumhara jaadu? ✨',
    note: 'Warning: Main bahut emotional ho raha hoon, tissues ready rakho! 🤧'
  },
  {
    num: 'Chapter 04',
    title: 'The "Foodie" Bond 🍕',
    emoji: '🍟',
    content: 'Yaad hai jab humne khane ki baatein ki thi? Mera sapna hai ki main tumhare liye kuch cook karun (aur tum use chup-chaap kha lo bina hospital jaye! 😂). Humari chemistry toh theek hai, magar humari "Foodistry" world-class honi chahiye! 🍔',
    note: 'Note: Tumhari pasand ka har khana, meri recipe book mein saved hai! 📖'
  },
  {
    num: 'Chapter 05',
    title: 'Chance De Ke Toh Dekho 🤝',
    emoji: '🎯',
    content: 'Acha suno, log kehte hain ki life mein ek baar risk lena chahiye. Toh ek baar mujhe chance de ke toh dekho? Main guarantee toh nahi de sakta ki sab kuch movie jaisa hoga, magar yeh vada hai ki tumhare raste mein kabhi koi kaanta nahi aane dunga. Ek baar trust karke dekho, shayad main wohi hoon jiska tumne intezaar kiya ho. 🌹',
    note: 'Task: Bas ek baar "Haan" kehne ki koshish toh karo! 😉'
  },
  {
    num: 'Chapter 06',
    title: 'Bahubali of Your Kingdom 👑',
    emoji: '🛡️',
    content: 'Tumhara dil ek samrajye (kingdom) hai, aur main chahta hoon ki tum mujhe wahan ka "Bahubali" bana kar dekho. Main sirf tumhare liye ladunga, sirf tumhara sath dunga. Tumhe kabhi kisi ne woh ehsaas nahi karaya hoga jo main karunga. Fikr mat karo, main insaan hi hoon, kha nahi jaunga! 😂',
    note: 'Dev Sena, tumhare intezaar mein Mahishmati (mera dil) ruka hua hai! 🏰'
  },
  {
    num: 'The Final Letter',
    title: 'Mann Ki Baat 💌',
    emoji: '🖋️',
    content: 'Yeh koi chapter nahi hai, yeh meri rooh ki awaaz hai. Agla panna palto, wahan tumhare liye ek aakhri paigam hai. Shayad iske baad mujhe mauka na mile, magar jo hai, sab sach hai. ❤️',
    note: 'Last Page is waiting for you...'
  },
  {
    type: 'letter',
    num: 'A Heartfelt Letter',
    title: 'Dear Dev Sena ✉️',
    content: {
      date: 'April 27, 2026',
      to: 'To: My Dev Sena (The Queen of My Thoughts)',
      from: 'From: Your Gym Boy',
      subject: 'Subject: Ek Aakhri Koshish aur Dil Ki Baat',
      body: 'hey dev sena yeh mere mnn ki baat hai joh likh raha hu mai jyada kuch nahi bolunga bss yeh ki tum ek baar apne samrajye ka bhahubali bna krr toh dekho tumko kabhi kissi ne ehsas nahi karaya hoga boh ehsaas karunga fikr mt krr insaan hi hu kha nahi jayunga jab bhi tumko esalage mai tumko uncomertable kr raha hu toh khud hi mujhe bta dena life mai ups and down toh aate rahenge lekin mai tuhmara permanent bnn na chahta hu mai sath hu tumahre jindagi mai tantraums lage rehnge toh kya hmm sath mai inko manage kr skte hai ? .\n\nBese bhi aaj iss link ka expiration time hai 12 bje raat phir iska bill generate hojayega link bnd toh yeh bhi ho skta hai mera last letter ho iske baad kuch nahi likhunga kyuki mai abh tut chuka hu. Bss itna hi bolna tha.',
      closing: 'Aapka apna,\nGym Boy 💪❤️'
    }
  },
  {
    type: 'end',
    title: 'The End?',
    message: 'I am waiting for your answer... ⏳',
    extra: 'I love you meri jaan ❤️'
  }
];

export default function App() {
  const [flippedPages, setFlippedPages] = useState([]);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const diff = midnight - now;
      if (diff <= 0) {
        setTimeLeft('Link Expired');
        clearInterval(timer);
      } else {
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        setTimeLeft(`${h}h ${m}m ${s}s remaining`);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const togglePage = (index) => {
    if (flippedPages.includes(index)) {
      setFlippedPages(flippedPages.filter(id => id < index));
    } else {
      setFlippedPages([...flippedPages, index]);
    }
  };

  return (
    <div className="app-container">
      <div className="expiry-banner">
        ⚠️ This book expires at 12:00 AM tonight! {timeLeft}
      </div>

      <div className="book-container">
        <div className="book">
          {chapters.map((chapter, index) => (
            <div 
              key={index}
              className={`page ${chapter.type || ''} ${flippedPages.includes(index) ? 'flipped' : ''}`}
              style={{ zIndex: chapters.length - index }}
              onClick={() => togglePage(index)}
            >
              <div className="page-content">
                <div className="page-front">
                  {chapter.type === 'cover' ? (
                    <div className="cover-design">
                      <div className="ornament-top">❦</div>
                      <div className="floating-icon book-icon">📜</div>
                      <h1 className="main-title">{chapter.title}</h1>
                      <div className="divider"></div>
                      <p className="subtitle">{chapter.subtitle}</p>
                      <p className="edition">{chapter.edition}</p>
                      <div className="instruction">Click to reveal the next chapter... ✨</div>
                      <div className="ornament-bottom">❦</div>
                    </div>
                  ) : chapter.type === 'letter' ? (
                    <div className="letter-design">
                      <div className="letter-header">
                        <p>{chapter.content.date}</p>
                        <p>{chapter.content.to}</p>
                        <p>{chapter.content.from}</p>
                      </div>
                      <div className="letter-subject">{chapter.content.subject}</div>
                      <div className="letter-body">
                        {chapter.content.body.split('\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                      <div className="letter-footer">
                        {chapter.content.closing.split('\n').map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                  ) : chapter.type === 'end' ? (
                    <div className="end-design">
                      <div className="heart-animation">❤️</div>
                      <h2 className="end-text">{chapter.title}</h2>
                      <p className="end-message">{chapter.message}</p>
                      <h3 className="end-extra">{chapter.extra}</h3>
                      <div className="action-buttons">
                        <button className="btn restart" onClick={(e) => { e.stopPropagation(); setFlippedPages([]); }}>
                          Read Part 2 Again 🔄
                        </button>
                        <a 
                          href="https://wa.me/919413128045?text=Hey%20Bahubali!%20Part%202%20padha%20maine...%20Emotional%20tha!%20😭❤️" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn message"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Send My Answer 💬
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="chapter-design">
                      <div className="chapter-meta">
                        <span className="chapter-num-tag">{chapter.num}</span>
                        <span className="chapter-emoji-icon">{chapter.emoji}</span>
                      </div>
                      <h2 className="chapter-title-text">{chapter.title}</h2>
                      <div className="content-wrapper">
                        <p className="chapter-text-content">{chapter.content}</p>
                        {chapter.note && (
                          <div className="handwritten-note">
                            {chapter.note}
                          </div>
                        )}
                      </div>
                      <div className="page-numbering">
                        <span>The Journey of Us</span>
                        <span>Chapter {index}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="floating-decorations">
        <div className="float-item">💖</div>
        <div className="float-item">✨</div>
        <div className="float-item">🔥</div>
        <div className="float-item">🧸</div>
      </div>
    </div>
  );
}
