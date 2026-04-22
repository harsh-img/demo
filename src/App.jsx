import React, { useState } from 'react';
import './index.css';

const chapters = [
  {
    type: 'cover',
    title: 'Jyotsana',
    subtitle: 'The Story of a Soul'
  },
  {
    num: 'Chapter 01',
    title: 'The First Breath',
    content: 'Zindagi mein bahut log aate hain, magar kuch log thahar jaate hain. Jab maine tumhein dekha, pehli baar laga ki waqt ki raftaar kam ho sakti hai. Tumhara naam sirf ek naam nahi, mere liye ek sukoon tha.'
  },
  {
    num: 'Chapter 02',
    title: 'The Silent Note',
    content: 'Baatein toh sab karte hain, magar tumhari khamoshi bahut kuch bol jati hai. Maine seekha hai ki tumhare chup rehne ke peeche bhi ek pura jahan chupa hota hai. Tumhari aankhein woh sab bol deti hain jo tum keh nahi paati.'
  },
  {
    num: 'Chapter 03',
    title: 'Hidden Magic',
    content: 'Tumhara baalon ko kaan ke peeche karna, ya sote waqt thoda sa muskurana—tumhein shayad pata bhi nahi, magar mere liye yeh kisi magic se kam nahi hai. In chhoti chhoti baaton mein hi toh tum basti ho.'
  },
  {
    num: 'Chapter 04',
    title: 'The Calm Center',
    content: 'Jab kabhi tumhein tension ho, ya duniya bojh lagne lage—bas yaad rakhna ki ek jagah aisi hai jahan sirf sukon hai. Mere khayalon mein tum hamesha mehfooz ho. Saas lo, gehra... sab theek hai.'
  },
  {
    num: 'Chapter 05',
    title: 'The Reflection',
    content: 'Log kaanch mein khud ko dekhte hain, magar main tumhein apni nazron se dikhana chahta hoon. Tum itni khoobsurat ho ki meri har shayari adhoori lagti hai. Tumhara hona hi meri sabse badi khushi hai.'
  },
  {
    num: 'Chapter 06',
    title: 'Parallel Worlds',
    content: 'Agar hazaron duniya hoti, toh har ek duniya mein main tumhein hi dhoondta. Humaara milna koi ittefaq nahi, shayad yeh sadiyon purana ek wada tha jo is zindagi mein pura ho raha hai.'
  },
  {
    num: 'Chapter 07',
    title: 'The Rhythm',
    content: 'Tumhari aawaz mere liye kisi dhun ki tarah hai. Din bhar ki thakan mitti hai jab tum bolti ho. Main chahta hoon ki tum hamesha hasti raho, kyunki tumhari hasi meri duniya ki sabse pyari sound hai.'
  },
  {
    num: 'Chapter 08',
    title: 'Night Thoughts',
    content: 'Jab raat gehari hoti hai aur duniya so jati hai, tab mere khayalon mein sirf tum hoti ho. Andhere mein bhi tumhari muskurahat ek roshni ki tarah chamakti hai. Tum mera woh sukoon ho jo neend mein bhi sath rehta hai.'
  },
  {
    num: 'Chapter 09',
    title: 'The Promise',
    content: 'Main wada karta hoon ki chahe mousam badle ya log, meri chahat tumhare liye wahi rahegi. Main hamesha tumhara hath thame rakhunga—khushi mein bhi aur un mushkil raaton mein bhi jab tum akela mehsoos karo.'
  },
  {
    num: 'Chapter 10',
    title: 'The Unending',
    content: 'Yeh kitab yahan khatam nahi hoti, yeh toh bas ek nayi shuruaat hai. Har naya din humaari kahani ka naya panna hoga. Jyotsana, tum meri zindagi ki woh kitab ho jise main baar-baar padhna chahta hoon.'
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
              className={`page ${chapter.type === 'cover' ? 'cover' : ''} ${flippedPages.includes(index) ? 'flipped' : ''}`}
              style={{ zIndex: chapters.length - index }}
              onClick={() => togglePage(index)}
            >
              <div className="page-content">
                {chapter.type === 'cover' ? (
                  <>
                    <h1>{chapter.title}</h1>
                    <p className="cover-tagline">{chapter.subtitle}</p>
                    <p style={{ marginTop: '3rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Click to Open My Heart</p>
                  </>
                ) : (
                  <>
                    <span className="chapter-num">{chapter.num}</span>
                    <h2 className="chapter-title">{chapter.title}</h2>
                    <p className="page-text">{chapter.content}</p>
                    <div style={{ marginTop: 'auto', textAlign: 'right', fontSize: '0.8rem', opacity: 0.4 }}>
                      Page {index + 1}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="nav-hint">
        {flippedPages.length === 0 ? "Open the book to start the journey" : "Click to flip pages"}
      </div>

      {/* Background Ambience */}
      <div style={{ position: 'fixed', top: '10%', right: '10%', fontSize: '2rem', opacity: 0.1 }}>🕯️</div>
      <div style={{ position: 'fixed', bottom: '15%', left: '15%', fontSize: '2rem', opacity: 0.1 }}>🌸</div>
    </div>
  );
}
