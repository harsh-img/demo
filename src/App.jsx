import React, { useState } from 'react';
import './index.css';

const pages = [
  {
    type: 'cover',
    title: 'JYOTSANA',
    subtitle: 'THE ISHQ EDITION',
    edition: 'Love, Laugh & Gym',
    image: '/WhatsApp Image 2026-05-04 at 4.57.59 PM (2).jpeg'
  },
  {
    type: 'editorial',
    title: 'Editor’s Note',
    content: 'Yeh magazine sirf ek document nahi hai, yeh meri feeling ka ek chota sa hissa hai. Humari baatein, humari ladai, aur woh pyaari si smile... sab kuch isme capture karne ki koshish ki hai. Hinglish mein bolu toh: "Tum bohot special ho, aur yeh magazine tumhare liye mera ek chota sa effort hai."',
    image: '/WhatsApp Image 2026-05-04 at 4.57.59 PM (1).jpeg',
    footer: '— Your Favorite Gym Boy'
  },
  {
    type: 'funny',
    title: 'Gym Se Zyada Mushkil?',
    content: 'Main gym mein 100kg ka deadlift toh maar leta hoon, magar jab tum "Hmm" likhti ho na... wahan mera cardio fail ho jata hai! 😂 Gym mein protein shake peeta hoon, magar tumhari smile dekh kar jo energy milti hai, uska koi muqabla nahi hai. Log kehte hain workout se muscles bante hain, magar tumse baat karke mera dil banta hai.',
    image: '/WhatsApp Image 2026-05-04 at 4.58.00 PM (1).jpeg',
    tag: 'Fitness vs Feelings'
  },
  {
    type: 'romantic',
    title: 'The First Spark',
    content: 'Yaad hai humari woh pehli lambi baat? Mujhe laga tha bas normal dosti hogi, magar tumhari baton ne aisa magic kiya ki main "sakht launda" se direct "shayar" ban gaya. ❤️ Tumhari har chhoti baat mere liye ek badi memory ban jati hai. It’s not just love, it’s a vibe that only we share.',
    image: '/WhatsApp Image 2026-05-04 at 4.57.59 PM.jpeg',
    quote: '"Tum woh sakoon ho jo mujhe shorr mein bhi milta hai."'
  },
  {
    type: 'funny',
    title: 'Tantraums & Tissues',
    content: 'Tumhare nakhre handle karna meri life ki sabse favorite workout routine hai. 😂 Kabhi gussa, kabhi pyaari si zid—main sab seh lunga, bas tum hamesha mere sath rehna. Agar tum gussa ho toh main Bahubali ban kar ladunga (magar sirf tumhari khushi ke liye!). P.S. Tumhare liye mere pas hamesha extra tissues aur chocolate ready rahenge.',
    image: '/WhatsApp Image 2026-05-04 at 4.58.00 PM.jpeg',
    tag: 'Handle with Care'
  },
  {
    type: 'full-img',
    title: 'Visual Poetry',
    content: 'Kuch pal aise hote hain jinhe words mein bayaan nahi kiya ja sakta. Bas dekh kar hi feel hota hai.',
    image: '/WhatsApp Image 2026-05-04 at 4.58.00 PM (2).jpeg',
    quote: 'Life is beautiful because you are in it.'
  },
  {
    type: 'romantic',
    title: 'The Foodie Bond',
    content: 'Mera sapna hai ki hum dunya bhar ka khana saath mein explore karein. Pasta ho ya Pani-Puri, tumhare saath har niwala double tasty ho jata hai. 😂 Main cook karunga (aur tum try karna bina complain kiye!), aur phir hum dher saari baatein karenge. Food + You = Perfect Date.',
    image: '/WhatsApp Image 2026-05-04 at 4.58.01 PM.jpeg',
    quote: 'Soulmates who eat together, stay together!'
  },
  {
    type: 'letter',
    title: 'A Heartfelt Letter',
    date: 'May 04, 2026',
    to: 'To: My Dev Sena',
    body: 'Hey, yeh mere mann ki baat hai. Maine pehle bhi kaha tha, tum ek baar apne samrajye ka Bahubali bana kar toh dekho. Main guarantee deta hoon ki tumhe kabhi kisi ne woh ehsaas nahi karaya hoga jo main karunga. Life mein ups and downs toh aate rahenge, magar main tumhara "permanent" banna chahta hoon. Kya hum saath mein yeh life manage kar sakte hain? ❤️',
    closing: 'Aapka apna, Gym Boy 💪'
  },
  {
    type: 'future',
    title: 'Future Forecast',
    content: 'Aane wale saalon mein: 100% chance of laughter, 0% chance of leaving your side, and infinite moments of love. Humari story toh abhi shuru hui hai, aur mujhe pata hai ki climax "Happily Ever After" hi hoga. Bas ek chance de ke toh dekho? 😉',
    image: '/WhatsApp Image 2026-05-04 at 4.58.01 PM (1).jpeg',
    tag: 'Infinite Love'
  },
  {
    type: 'back-cover',
    title: 'THE END?',
    subtitle: 'Wait, no. It’s just the beginning.',
    message: 'I am waiting for your answer... ⏳',
    extra: 'I love you, Jyotsana ❤️',
    whatsapp: 'https://wa.me/919413128045?text=Hey%20Bahubali!%20Magazine%20dekh%20li...%20Bohot%20mast%20hai!%20😍❤️'
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

  const resetMagazine = (e) => {
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
      
      <button 
        className="mute-btn" 
        onClick={() => setIsMuted(!isMuted)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '1.5rem'
        }}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      <div className="magazine-container">
        <div className="magazine">
          {pages.map((page, index) => (
            <div 
              key={index}
              className={`page ${flippedPages.includes(index) ? 'flipped' : ''}`}
              style={{ zIndex: pages.length - index }}
              onClick={() => togglePage(index)}
            >
              <div className="page-content">
                {/* Cover Page */}
                {page.type === 'cover' && (
                  <div className="cover-page" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${page.image}")` }}>
                    <h1 className="mag-title">{page.title}</h1>
                    <p className="sub-title">{page.subtitle}</p>
                    <div className="edition">{page.edition}</div>
                    <div style={{ position: 'absolute', bottom: '20px', fontSize: '0.9rem', opacity: 0.8 }}>Click to Flip →</div>
                  </div>
                )}

                {/* Editorial/Romantic/Funny Pages (Grid Layout) */}
                {(page.type === 'editorial' || page.type === 'romantic' || page.type === 'funny' || page.type === 'future') && (
                  <div className={`mag-grid ${page.type === 'funny' ? 'page-dark' : ''}`}>
                    <div className="text-section">
                      {page.tag && <span style={{ color: 'var(--primary-accent)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>{page.tag}</span>}
                      <h1 className="mag-h1">{page.title}</h1>
                      <p className="mag-p">{page.content}</p>
                      {page.quote && <p className="quote-text" style={{ color: 'var(--primary-accent)', marginTop: '20px' }}>{page.quote}</p>}
                      {page.footer && <p style={{ marginTop: '20px', fontStyle: 'italic', fontWeight: 'bold' }}>{page.footer}</p>}
                    </div>
                    <div className="img-section">
                      <img src={page.image} alt={page.title} className="mag-img" />
                    </div>
                  </div>
                )}

                {/* Full Image Page */}
                {page.type === 'full-img' && (
                  <div className="full-img-page">
                    <img src={page.image} alt={page.title} />
                    <div className="quote-overlay">
                      <h1 className="mag-h1" style={{ color: 'white' }}>{page.title}</h1>
                      <p className="quote-text">{page.quote}</p>
                    </div>
                  </div>
                )}

                {/* Letter Page */}
                {page.type === 'letter' && (
                  <div className="letter-page">
                    <div className="letter-header">
                      <p>{page.date}</p>
                      <h3>{page.to}</h3>
                    </div>
                    <div className="letter-body">
                      <p>{page.body}</p>
                    </div>
                    <div className="letter-footer" style={{ marginTop: '40px' }}>
                      <p>Aapka apna,</p>
                      <h2 style={{ fontFamily: 'Dancing Script' }}>Gym Boy 💪 ❤️</h2>
                    </div>
                  </div>
                )}

                {/* Back Cover */}
                {page.type === 'back-cover' && (
                  <div className="cover-page" style={{ background: '#1a1a1a', color: 'white' }}>
                    <h1 className="mag-title" style={{ fontSize: '3rem' }}>{page.title}</h1>
                    <p className="sub-title">{page.subtitle}</p>
                    <div className="heart-animation" style={{ fontSize: '4rem', margin: '20px 0' }}>❤️</div>
                    <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{page.message}</p>
                    <h3 style={{ fontFamily: 'Dancing Script', fontSize: '2rem', color: 'var(--primary-accent)' }}>{page.extra}</h3>
                    <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                      <button className="cta-btn" onClick={resetMagazine} style={{ border: 'none', cursor: 'pointer' }}>Read Again 🔄</button>
                      <a href={page.whatsapp} target="_blank" rel="noreferrer" className="cta-btn">Send Answer 💬</a>
                    </div>
                  </div>
                )}
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
        <div className="float-item" style={{ top: '50%', left: '80%' }}>💪</div>
      </div>
    </div>
  );
}
