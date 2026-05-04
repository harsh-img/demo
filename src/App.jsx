import React, { useState } from 'react';
import './index.css';

const magazineContent = [
  {
    type: 'vogue-cover',
    title: 'JYOTSANA',
    image: '/WhatsApp Image 2026-05-04 at 4.57.59 PM (2).jpeg',
    headlines: [
      { h: 'The Gym Boy Secret', p: 'How a simple smile changed everything' },
      { h: 'Love & Laughter', p: '10 ways to handle his tantrums' },
      { h: 'The Bahubali Era', p: 'Protecting the kingdom of heart' }
    ],
    issue: 'MAY 2026',
    price: '$FREE / PRICELESS'
  },
  {
    type: 'editorial',
    title: 'The Muse',
    dropCap: 'T',
    content: 'Tumhari har photo ek story kehti hai, aur har story mein ek hi hero hai—Tum. Yeh magazine sirf ek design nahi hai, yeh ek tribute hai us insaan ke liye jo meri duniya ko vibrant banata hai. Log kehte hain ki perfection nahi hoti, magar shayad unhone tumhe haste huye nahi dekha. Hinglish mein bolu toh: "Aapka style, aapka smile, aur aapki baatein—sab kuch toh top-notch hai!"',
    image: '/WhatsApp Image 2026-05-04 at 4.57.59 PM (1).jpeg'
  },
  {
    type: 'fashion-spread',
    title: 'Glow Up',
    content: 'Gym mein pasina bahana ek taraf, aur tumhari ek jhalak dekhna ek taraf. Mera favorite workout routine? Tumhare nakhre uthana! 😂 Log protein shakes peete hain, mujhe bas tumhari presence chahiye energy ke liye.',
    image: '/WhatsApp Image 2026-05-04 at 4.58.00 PM (1).jpeg',
    tag: 'FASHION & FITNESS'
  },
  {
    type: 'quote',
    text: 'Tum woh sukoon ho jo mujhe shorr mein bhi milta hai. Kuch pal aise hote hain jinhe sirf feel kiya ja sakta hai.',
    author: '— Yours Truly'
  },
  {
    type: 'collage',
    images: [
      '/WhatsApp Image 2026-05-04 at 4.57.59 PM.jpeg',
      '/WhatsApp Image 2026-05-04 at 4.58.00 PM.jpeg',
      '/WhatsApp Image 2026-05-04 at 4.58.00 PM (2).jpeg',
      '/WhatsApp Image 2026-05-04 at 4.58.01 PM.jpeg'
    ]
  },
  {
    type: 'fashion-spread',
    title: 'The Foodie Bond',
    content: 'Pasta ho ya Pani-Puri, tumhare saath har niwala double tasty ho jata hai. Mera sapna hai ki hum dunya bhar ka khana saath mein explore karein. Soulmates who eat together, stay together!',
    image: '/WhatsApp Image 2026-05-04 at 4.58.01 PM (1).jpeg',
    tag: 'LIFESTYLE & TASTE'
  },
  {
    type: 'premium-letter',
    title: 'THE PROPOSAL',
    body: 'Hey Dev Sena, tum ek baar apne samrajye ka Bahubali bana kar toh dekho. Life mein ups and downs toh aate rahenge, magar main tumhara permanent banna chahta hoon. Kya hum saath mein yeh life manage kar sakte hain? ❤️'
  },
  {
    type: 'vogue-cover',
    title: 'THE END?',
    image: '/WhatsApp Image 2026-05-04 at 4.58.01 PM (1).jpeg',
    headlines: [
      { h: 'Waiting for you', p: 'The clock is ticking... ⏳' },
      { h: 'I LOVE YOU', p: 'Always and Forever' }
    ],
    issue: 'FOREVER EDITION',
    price: 'Awaiting Answer...',
    isBack: true
  }
];

export default function App() {
  const [flippedPages, setFlippedPages] = useState([]);
  const [isMuted, setIsMuted] = useState(false);

  const togglePage = (index) => {
    if (flippedPages.includes(index)) {
      setFlippedPages(flippedPages.filter(id => id < index));
    } else {
      setFlippedPages([...flippedPages, index]);
    }
  };

  const reset = (e) => {
    e.stopPropagation();
    setFlippedPages([]);
  };

  return (
    <div className="app-container">
      <audio 
        src="/Ishqa Ve Chadeya - Ishqa Ve _ Zeeshan Ali _ Punjabi Song.mp3" 
        autoPlay 
        loop 
        muted={isMuted}
      />
      
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000, display: 'flex', gap: '10px' }}>
        <button className="mute-btn" onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? '🔇' : '🔊'}
        </button>
      </div>

      <div className="magazine-wrapper">
        <div className="magazine">
          {magazineContent.map((page, index) => (
            <div 
              key={index}
              className={`page ${flippedPages.includes(index) ? 'flipped' : ''}`}
              style={{ zIndex: magazineContent.length - index }}
              onClick={() => togglePage(index)}
            >
              <div className="page-content">
                
                {/* Vogue Cover Layout */}
                {(page.type === 'vogue-cover') && (
                  <div className="vogue-cover" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("${page.image}")` }}>
                    <div className="mag-float top-left">{page.issue}</div>
                    <h1 className="vogue-title">{page.title}</h1>
                    <div className="cover-headlines">
                      {page.headlines.map((h, i) => (
                        <div key={i} className="headline-item">
                          <h3>{h.h}</h3>
                          <p>{h.p}</p>
                        </div>
                      ))}
                    </div>
                    <div className="cover-footer">
                      <span>{page.price}</span>
                      <span>Vol. 1 // Issue 2</span>
                    </div>
                    {page.isBack && (
                      <div style={{ position: 'absolute', bottom: '100px', width: 'calc(100% - 80px)', display: 'flex', gap: '20px' }}>
                        <button className="mute-btn" style={{ width: 'auto', borderRadius: '30px', padding: '0 20px', background: 'var(--accent)', color: 'white' }} onClick={reset}>Restart</button>
                        <a href="https://wa.me/919413128045" target="_blank" rel="noreferrer" className="mute-btn" style={{ width: 'auto', borderRadius: '30px', padding: '0 20px', textDecoration: 'none', background: 'white', color: 'black' }}>Reply 💬</a>
                      </div>
                    )}
                  </div>
                )}

                {/* Editorial Layout */}
                {page.type === 'editorial' && (
                  <div className="inner-layout">
                    <div className="feature-text">
                      <div className="mag-float top-left">THE MUSE // VOL 1</div>
                      <h1 className="feature-title">{page.title}</h1>
                      <div className="feature-p">
                        <span className="drop-cap">{page.dropCap}</span>
                        {page.content}
                      </div>
                    </div>
                    <div className="feature-img-box">
                      <img src={page.image} alt="Muse" />
                    </div>
                  </div>
                )}

                {/* Fashion Spread */}
                {page.type === 'fashion-spread' && (
                  <div className="inner-layout">
                    <div className="feature-img-box">
                      <img src={page.image} alt="Spread" />
                    </div>
                    <div className="feature-text" style={{ background: '#000', color: '#fff' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '3px' }}>{page.tag}</span>
                      <h1 className="feature-title" style={{ color: '#fff' }}>{page.title}</h1>
                      <p className="feature-p" style={{ color: '#ccc' }}>{page.content}</p>
                    </div>
                  </div>
                )}

                {/* Quote Layout */}
                {page.type === 'quote' && (
                  <div className="quote-page">
                    <div className="quote-icon">“</div>
                    <p className="quote-main">{page.text}</p>
                    <p className="quote-author">{page.author}</p>
                    <div className="mag-float bottom-right">L'AMOUR // PAGE 04</div>
                  </div>
                )}

                {/* Collage Layout */}
                {page.type === 'collage' && (
                  <div className="collage-grid">
                    {page.images.map((img, i) => (
                      <div key={i} className="collage-item">
                        <img src={img} alt="Collage" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Letter Layout */}
                {page.type === 'premium-letter' && (
                  <div className="premium-letter">
                    <div className="letter-top">{page.title}</div>
                    <div className="letter-content">
                      <p>{page.body}</p>
                      <p style={{ marginTop: '50px' }}>— Aapka Apna, Gym Boy 💪</p>
                    </div>
                    <div className="mag-float bottom-right">CONFIDENTIAL // 2026</div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5, fontSize: '0.8rem', letterSpacing: '2px' }}>
        CLICK TO FLIP PAGES • EXPERIENCE THE LUXURY
      </div>
    </div>
  );
}
