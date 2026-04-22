import React, { useState } from 'react';
import './index.css';

const chapters = [
  {
    type: 'cover',
    title: 'Jyotsana',
    subtitle: 'Soul living in my heart'
  },
  {
    num: 'Chapter 01',
    title: 'The First Spark ✨',
    emoji: '🔥',
    content: 'Duniya mein 8 billion log hain, magar meri nazar hamesha "voh" ek insaan dhoondti thi. Aur jab tum mili, toh aisa laga jaise movie ka koi slow-motion scene chal raha ho! 🎬',
    note: 'P.S. Pehli baar mein hi tumne mera dil chura liya tha! 🕵️‍♀️💕'
  },
  {
    num: 'Chapter 02',
    title: 'Sweet Quietness 🤫',
    emoji: '🍂',
    content: 'Log kehte hain silence awkward hota hai, magar tumhare sath khamoshi bhi kitni music jaisi lagti hai na? Bina bole itni baatein kar lena sirf humein aata hai. ☕',
    note: 'Fun Fact: Tumhari khamoshi mein bhi ek alag hi swag hai! 😎'
  },
  {
    num: 'Chapter 03',
    title: 'Your Little Quirks 😸',
    emoji: '🧸',
    content: 'Woh jo tum gusse mein apni naak sikodti ho, ya jab tum excited hoti ho toh tumhari aankhein chamakne lagti hain—yeh sab dekh kar main bas hasta rehta hoon. Kitni cute ho tum! 🌸',
    note: 'Note: Tumhari pagal-panti hi toh meri favorite hai! 🤪❤️'
  },
  {
    num: 'Chapter 04',
    title: 'Relaxation Zone 🧘‍♀️',
    emoji: '☁️',
    content: 'Tension? Stress? 🚫 Chodo un sab ko! Jab bhi thaka hua feel karo, bas aankhein band karo aur socho hum saath mein ice-cream kha rahe hain. Sab problems gayab ho jayengi! 🍦✨',
    note: 'Task: Abhi ke abhi ek lambi saans lo... aur smile karo! 😊'
  },
  {
    num: 'Chapter 05',
    title: 'Absolute Queen 👸',
    emoji: '👑',
    content: 'Log filter use karte hain, magar tumhein zarurat hi nahi hai. Tumhare natural smile ke aage filters fail hain. Tum sirf meri queen nahi, tum mera pura kingdom ho! 🏰💖',
    note: 'Warning: Itni pyaari mat bana karo, nazar lag jayegi! 🧿'
  },
  {
    num: 'Chapter 06',
    title: 'Multiverse of Us 🌌',
    emoji: '🛸',
    content: 'Agar main kisi dusre planet par bhi hota, toh alien banke tumhare pass aata! 👽 Kyunki gravity humein nahi, humaara pyaar humein khichta hai. Har universe mein "Bas Tum". 💫',
    note: 'Imagination: Kya hum aliens banke bhi itne hi cute lagte? 🛸💕'
  },
  {
    num: 'Chapter 07',
    title: 'The Radio You 📻',
    emoji: '🎵',
    content: 'Tumhari aawaz sunna mera favorite kaam hai. Chahe tum koi boring story sunao ya sirf "Hmm" kaho, mere liye woh kisi hit gaane se kam nahi hai. Remix karke sunun kya? 😂',
    note: 'Dedication: Yeh chapter tumhari pyaari si voice ke naam! 🎙️❤️'
  },
  {
    num: 'Chapter 08',
    title: 'Night Owl Story 🦉',
    emoji: '🌙',
    content: 'Raat ko jab baarish hoti hai aur tum mere khayalon mein aati ho, toh neend kahan aayegi? Bas tumhari purani photos dekhta hoon aur phir se tumse pyaar ho jata hai. 🌧️💞',
    note: 'Secret: Kabhi-kabhi main tumhari photos ko "Hi" bhi bolta hoon! 🤭'
  },
  {
    num: 'Chapter 09',
    title: 'Pinky Promise 🤙',
    emoji: '🤝',
    content: 'Wada raha... tumhare har nakhre uthaunga, tumhari har zid poori karunga (within budget! 😂). Main hamesha tumhara "Personal Cheerleader" rahunga. 📣🥰',
    note: 'Vow: Main kabhi tumhara hath nahi chhodunga. Promise! 🤞❤️'
  },
  {
    num: 'The Final Chapter',
    title: 'To Be Continued... 📖',
    emoji: '🌈',
    content: 'Yeh kitab toh bas trailer hai, puri film toh abhi baki hai mere dost! 🎥 Har naya din, humari kahani ka naya romantic aur funny episode hoga. Main hamesha tumhara yehi "Personal Cheerleader" rahunga! ❤️',
    note: 'Next Step: Check the very last page... 💌'
  },
  {
    type: 'letter',
    num: 'A Special Note',
    title: 'A Letter for You 💌',
    content: 'Jyotsana, yeh kitab likhte waqt mere dil mein sirf ek hi baat thi—ki tumhare chehre par woh smile dekh sakun jo mere liye duniya ki sabse badi khushi hai. Main nahi jaanta life humein kahan le jayegi, magar jitna bhi safar hai, main use tumhare sath jeena chahta hoon. Tum sirf ek ehsaas nahi, tum meri woh khwahish ho jo puri toh ho gayi hai, magar khamosh nahi hui. Mere paas alfaz kam hain, magar jazbaat behisab hain. \n\nBas ek baat kehni thi—agar yeh sab padh kar tumhein sach mein dil se achaa lage, toh hi reply karna... barna koi baat nahi, ise tumhare liye ek pyari yaad samajh kar rehne dena. Main hamesha tumhara wahi wahi wahi rahungA. ❤️',
    note: 'With infinite love, Always. 🤙🌹'
  }
];

export default function App() {
  const [flippedPages, setFlippedPages] = useState([]);

  const togglePage = (index) => {
    if (flippedPages.includes(index)) {
      setFlippedPages(flippedPages.filter(id => id < index));
    } else {
      setFlippedPages([...flippedPages, index]);
    }
  };

  return (
    <div className="app-container">
      <div className="book-container">
        <div className="book">
          {chapters.map((chapter, index) => (
            <div 
              key={index}
              className={`page ${chapter.type === 'cover' ? 'cover' : ''} ${chapter.type === 'letter' ? 'letter' : ''} ${flippedPages.includes(index) ? 'flipped' : ''}`}
              style={{ zIndex: chapters.length - index }}
              onClick={() => togglePage(index)}
            >
              <div className="page-content">
                {chapter.type === 'cover' ? (
                  <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="cover-corner-br">✻</div>
                    <div className="floating-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>📔</div>
                    <h1>{chapter.title}</h1>
                    <p className="cover-tagline">{chapter.subtitle}</p>
                    <div style={{ marginTop: '4rem', opacity: 0.5, fontSize: '0.8rem' }}>
                      Panno ko paltein aur <br /> jaadu dekhein... ✨
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="chapter-num">
                      <span>{chapter.num}</span>
                      <span className="floating-icon">{chapter.emoji}</span>
                    </div>
                    <h2 className="chapter-title">{chapter.title}</h2>
                    <p className="page-text">{chapter.content}</p>
                    {chapter.note && (
                      <div className="handwritten">
                        {chapter.note}
                      </div>
                    )}
                    <div className="page-footer">
                      <span>Memories of Jyotsana</span>
                      <span>Page {index + 1}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="nav-hint" style={{ color: 'var(--gold)' }}>
        {flippedPages.length === 0 ? "Click to open the magic cover! ✨" : "Click the right side to keep reading... 📖"}
      </div>

      {/* Decorations */}
      <div style={{ position: 'fixed', top: '5%', left: '5%', fontSize: '2rem', opacity: 0.1, animation: 'float 4s infinite' }}>⭐</div>
      <div style={{ position: 'fixed', top: '15%', right: '15%', fontSize: '2rem', opacity: 0.1, animation: 'float 5s infinite' }}>💖</div>
      <div style={{ position: 'fixed', bottom: '10%', left: '10%', fontSize: '2rem', opacity: 0.1, animation: 'float 6s infinite' }}>🧸</div>
    </div>
  );
}
