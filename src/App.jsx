import React, { useState } from 'react';
import './index.css';

const magContent = [
  {
    type: 'hero',
    title: 'JYOTSANA',
    subtitle: 'THE MODERN MUSE',
    image: '/WhatsApp Image 2026-05-04 at 4.58.00 PM (2).jpeg',
    badge: 'MAY 2026 ISSUE'
  },
  {
    type: 'narrative',
    title: 'THE GLOW',
    dropCap: 'S',
    content: 'Style toh bohot logo ke pas hota hai, magar "Grace" sirf tumhare pas hai. Tumhari hassi mein ek alag hi vibe hai jo sabko attract karti hai. Humari baatein aur tumhari nakhre—yeh combination life ko interesting banata hai. Hinglish mein bole toh: "Tum sirf ek girl nahi, tum ek high-end magazine ki star ho!"',
    image: '/WhatsApp Image 2026-05-04 at 4.57.59 PM (1).jpeg',
    vertical: 'VIBRANT // 2026'
  },
  {
    type: 'minimal',
    title: 'FITNESS & FINESSE',
    content: 'Gym ke pasine se lekar camera ke samne ki chamak tak... tum har look mein "Perfect" lagti ho. Mera favorite view? Bas tumhara muskuraata hua chehra.',
    image: '/WhatsApp Image 2026-05-04 at 4.58.00 PM (1).jpeg',
    tag: 'POWER UP'
  },
  {
    type: 'layered',
    title: 'DIL SE',
    quote: 'Tum woh sukoon ho jo mujhe shorr mein bhi milta hai.',
    image: '/WhatsApp Image 2026-05-04 at 4.58.00 PM.jpeg'
  },
  {
    type: 'collage-modern',
    images: [
      '/WhatsApp Image 2026-05-04 at 4.57.59 PM.jpeg',
      '/WhatsApp Image 2026-05-04 at 4.58.01 PM.jpeg',
      '/WhatsApp Image 2026-05-04 at 4.58.00 PM (2).jpeg',
      '/WhatsApp Image 2026-05-04 at 4.57.59 PM (2).jpeg'
    ]
  },
  {
    type: 'narrative',
    title: 'TASTE OF US',
    dropCap: 'F',
    content: 'Food and Us... ek aisi love story jo kabhi khatam nahi hogi. Pizza ki slice ho ya coffee ki cup, tumhare saath har cheez ka taste premium ho jata hai. Humara safar aise hi chalta rahe, baaton aur khane ke saath.',
    image: '/WhatsApp Image 2026-05-04 at 4.58.01 PM (1).jpeg',
    vertical: 'LIFESTYLE // MAY'
  },
  {
    type: 'proposal-page',
    title: 'THE FINAL ACT',
    content: 'Kya tum mere life ki permanent "Main Lead" banogi? Ek chance de ke toh dekho, yeh story "Superhit" hogi! ❤️',
    image: '/WhatsApp Image 2026-05-04 at 4.57.59 PM (2).jpeg'
  },
  {
    type: 'back-cover-modern',
    title: 'WAITING...',
    message: 'I love you, Jyotsana. Waiting for your yes!',
    whatsapp: 'https://wa.me/919413128045'
  }
];

export default function App() {
  const [flipped, setFlipped] = useState([]);
  const [muted, setMuted] = useState(false);

  const flip = (i) => {
    if (flipped.includes(i)) {
      setFlipped(flipped.filter(x => x < i));
    } else {
      setFlipped([...flipped, i]);
    }
  };

  return (
    <div className="app-container">
      <audio src="/Ishqa Ve Chadeya - Ishqa Ve _ Zeeshan Ali _ Punjabi Song.mp3" autoPlay loop muted={muted} />
      
      <button className="custom-mute" onClick={() => setMuted(!muted)}>
        {muted ? '🔇' : '🔊'}
      </button>

      <div className="mag-wrapper">
        <div className="magazine">
          {magContent.map((p, i) => (
            <div 
              key={i}
              className={`page ${flipped.includes(i) ? 'flipped' : ''}`}
              style={{ zIndex: magContent.length - i }}
              onClick={() => flip(i)}
            >
              <div className="page-content">
                
                {p.type === 'hero' && (
                  <div style={{ height: '100%', position: 'relative' }}>
                    <img src={p.image} className="mag-bg" alt="Hero" />
                    <div className="mag-badge">{p.badge}</div>
                    <div className="glass-panel">
                      <p className="mag-subtitle">{p.subtitle}</p>
                      <h1 className="mag-title-main">{p.title}</h1>
                    </div>
                  </div>
                )}

                {p.type === 'narrative' && (
                  <div className="layout-split">
                    <div className="side-text">
                      <h1 className="mag-title-main" style={{ fontSize: '3rem', WebkitTextFillColor: 'black' }}>{p.title}</h1>
                      <p style={{ lineHeight: '1.8' }}>
                        <span className="drop-cap-modern">{p.dropCap}</span>
                        {p.content}
                      </p>
                      <div className="vertical-text" style={{ color: '#ddd' }}>{p.vertical}</div>
                    </div>
                    <div style={{ position: 'relative' }}>
                      <img src={p.image} className="mag-bg" style={{ filter: 'none' }} alt="Narrative" />
                    </div>
                  </div>
                )}

                {p.type === 'minimal' && (
                  <div style={{ height: '100%', background: '#000' }}>
                    <img src={p.image} className="mag-bg" style={{ opacity: 0.7 }} alt="Minimal" />
                    <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%' }}>
                      <span style={{ color: 'var(--primary)', letterSpacing: '5px' }}>{p.tag}</span>
                      <h1 className="mag-title-main" style={{ fontSize: '4rem' }}>{p.title}</h1>
                      <p style={{ fontSize: '1.2rem', maxWidth: '400px' }}>{p.content}</p>
                    </div>
                  </div>
                )}

                {p.type === 'layered' && (
                  <div style={{ height: '100%', position: 'relative' }}>
                    <img src={p.image} className="mag-bg" alt="Layered" />
                    <div className="heart-glow">❤️</div>
                    <div style={{ position: 'absolute', top: '40%', left: '10%', right: '10%', textAlign: 'center' }}>
                      <h2 style={{ fontFamily: 'var(--font-accent)', fontSize: '3rem', textShadow: '0 5px 20px rgba(0,0,0,0.8)' }}>{p.quote}</h2>
                    </div>
                  </div>
                )}

                {p.type === 'collage-modern' && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', height: '100%', gap: '1px', background: '#000' }}>
                    {p.images.map((img, idx) => (
                      <div key={idx} style={{ position: 'relative', overflow: 'hidden' }}>
                        <img src={img} style={{ width: '100%', height: '100%', object-fit: 'cover' }} alt="Collage" />
                      </div>
                    ))}
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', color: '#000', padding: '10px 30px', fontWeight: '900', letterSpacing: '5px' }}>GALLERY</div>
                  </div>
                )}

                {p.type === 'proposal-page' && (
                  <div style={{ height: '100%', background: '#fff' }}>
                    <img src={p.image} className="mag-bg" style={{ filter: 'brightness(0.3)' }} alt="Proposal" />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '80%' }}>
                      <h1 className="mag-title-main">{p.title}</h1>
                      <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-accent)' }}>{p.content}</p>
                    </div>
                  </div>
                )}

                {p.type === 'back-cover-modern' && (
                  <div style={{ height: '100%', background: '#111', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
                    <h1 className="mag-title-main" style={{ fontSize: '4rem' }}>{p.title}</h1>
                    <p style={{ marginBottom: '40px' }}>{p.message}</p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                      <button className="custom-mute" style={{ width: 'auto', borderRadius: '30px', padding: '0 30px' }} onClick={(e) => { e.stopPropagation(); setFlipped([]); }}>Restart</button>
                      <a href={p.whatsapp} target="_blank" rel="noreferrer" className="custom-mute" style={{ width: 'auto', borderRadius: '30px', padding: '0 30px', textDecoration: 'none' }}>Say Yes! 💌</a>
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: '30px', fontSize: '0.7rem', letterSpacing: '5px', opacity: 0.4 }}>
        FLIP TO EXPLORE THE JOURNEY
      </div>
    </div>
  );
}
