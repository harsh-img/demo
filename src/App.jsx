import { useEffect, useRef } from 'react';
import './App.css';

/* ─────────────────────────────────────
   PARTICLES CANVAS
───────────────────────────────────── */
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let id;
    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const pts = Array.from({ length: 90 }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 1.6 + 0.3,
      dx: (Math.random() - .5) * .35,
      dy: (Math.random() - .5) * .35,
      a: Math.random() * .55 + .15,
      c: Math.random() > .5 ? '#e8547a' : '#a855f7',
    }));
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c; ctx.globalAlpha = p.a; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      ctx.globalAlpha = 1;
      id = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} id="particles" aria-hidden="true" />;
}

/* ─────────────────────────────────────
   FLOATING HEARTS
───────────────────────────────────── */
const EMOJIS = ['❤️','💕','💖','💗','💓','💝','🌹','✨','💫','🌸','🥀','💞'];
function FloatingHearts() {
  return (
    <div className="fhearts" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} className="fh" style={{
          left: `${Math.random() * 100}%`,
          fontSize: `${.9 + Math.random() * 1.1}rem`,
          animationDelay: `${Math.random() * 14}s`,
          animationDuration: `${10 + Math.random() * 13}s`,
        }}>{EMOJIS[Math.floor(Math.random() * EMOJIS.length)]}</span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────
   HEARTBEAT BAR
───────────────────────────────────── */
function HeartbeatBar() {
  return (
    <div className="hb-wrap" aria-hidden="true">
      {Array.from({ length: 11 }).map((_, i) => <div key={i} className="hb-bar" />)}
    </div>
  );
}

/* ─────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ═════════════════════════════════════
   APP
═════════════════════════════════════ */
export default function App() {
  useReveal();

  return (
    <>
      <Particles />

      {/* ══════════ HERO ══════════ */}
      <section className="hero" id="home">
        <FloatingHearts />

        <span className="hero-badge">
          <span className="dot" />
          Phase 2 &mdash; Officially Begins 💫
        </span>

        <h1 className="hero-title">
          <span className="grad-rose">Sirf Ek</span><br />
          <span className="hero-name">Jyotsana…</span>
          <span className="grad-gold">Bas Tum.</span>
        </h1>

        <p className="hero-tagline">
          Tumse milne ke baad jaana — kuch log<br />
          dil mein rehne ke liye hi aate hain.
        </p>

        <div className="hero-cta">
          <a href="#letter" className="btn btn-rose">Meri Baat Suno ❤️</a>
          <a href="#izhaar" className="btn btn-ghost">Mera Izhaar Padho</a>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span>Scroll karo</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* ══════════ OPEN LETTER ══════════ */}
      <section id="letter" className="letter-bg">
        <div className="inner">
          <div className="reveal">
            <span className="label">Dil Ki Baat</span>
            <div className="divider" />
            <h2 className="sec-title">Ek Khat — Sirf Tumhare Naam</h2>
          </div>

          <div className="letter-card reveal" style={{ marginTop: '2rem' }}>
            <p className="letter-opening">Jyotsana,</p>

            <p className="letter-para">
              Main nahi jaanta yeh khat tum padho gi ya nahi — lekin jo dil mein hai
              woh ek baar likhna zaroori tha. Kyunki kuch cheezein andar rakh ke
              ghoot jaana theek nahi hota.
            </p>

            <p className="letter-para">
              Jab pehli baar tumse mila, toh kuch alag nahi laga. Lekin phir dheere dheere —
              tumhari baatein, tumhara andaaz, tumhari ek chhoti si muskaan jo tum karte waqt
              begaana dete ho — <strong>sab kuch dil mein utar gaya.</strong> Pata nahi kab
              hua, lekin hua zaroor. Aur ab ek din bhi aisa nahi jaata jab tumhara khayal
              na aaye.
            </p>

            <p className="letter-para">
              Main jaanta hun yeh asan nahi. Main jaanta hun shayad tum yeh padh ke
              awkward feel karo. Lekin ek baat poori sacchaayi se kehna chahta hun:
              <strong> main sirf tum par dhyan deta hun.</strong> Koi plan B nahi,
              koi option C nahi. Bas tum — aur bas yeh dil jo tumhare liye dhadakta hai.
            </p>

            <p className="letter-para">
              Phase 1 mein main koshish karta raha, seekhta raha, aur haan —
              <em> fail bhi hua.</em> Lekin uss failure ne mujhe yeh sikhaya ki
              jo cheez sacchi hoti hai, woh ek mahine ki haar se rukti nahi.
              Phase 2 shuru ho chuka hai. Aur is baar main aur taiyaar hun.
            </p>

            <p className="letter-closing">Sirf tumhara — ❤️</p>
          </div>
        </div>
      </section>

      {/* ══════════ SHAYARI SECTION ══════════ */}
      <section className="shayari-section" id="shayari">
        <div className="inner">
          <div className="center reveal">
            <span className="label">Dil Ki Zuban</span>
            <div className="divider divider-c" />
            <h2 className="sec-title"><span className="grad-rose">Shayari</span> — Sirf Tumhare Liye</h2>
            <p className="sec-text" style={{ maxWidth: '580px', margin: '0 auto' }}>
              Jo main bolne se darta hun, woh dil ne shabdon mein piro diya hai.
            </p>
          </div>

          {/* Main featured shayari */}
          <div className="card reveal" style={{ textAlign: 'center', margin: '3rem 0 0', padding: '3rem 2.5rem' }}>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1.2rem' }}>🌹</span>
            <p className="shayari-text">
              Teri aankhon mein jo chamak hai,<br />
              woh meri raatons ki roshni hai —<br />
              Tujhe dekha toh laga jaise,<br />
              meri har dua qubool ho gayi.
            </p>
            <span className="shayari-attr">— Wrote by Harsh Aggarwal, Sirf Tumhare Liye</span>
          </div>

          <div className="shayari-grid" style={{ marginTop: '2rem' }}>
            {[
              {
                lines: `Tu hi meri subah hai,\nTu hi mera shaam —\nJis jagah bhi tu nahi,\nWoh jagah hai anjaan.`,
              },
              {
                lines: `Dil mein ek arzoo hai,\nBas teri muskaan dekhun —\nZindagi mein ek khwahish hai,\nTujhse "haan" sun sakun.`,
              },
              {
                lines: `Kuch rishte alfazon se nahi,\nKhamoshi se bante hain —\nMain teri har baat samjhunga,\nTujhe bolna nahi padega.`,
              },
              {
                lines: `Woh jo tere qareeb rehta hai,\nSamjh le woh dunya mein amir hai —\nAur main toh sirf chahta hun,\nKash woh main hi hun.`,
              },
              {
                lines: `Pyaar kabhi maanga nahi,\nBas diya hai dil ne tumhe —\nAur agar tum na bhi kaho,\nYeh dhadakna nahi rukega.`,
              },
              {
                lines: `Jyotsana… ek naam hai,\nMagar mera toh ek duniya hai —\nUske bagair jo hai yahan,\nWoh sirf ek tanhai hai.`,
              },
            ].map((s, i) => (
              <div className="shayari-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <p>{s.lines.split('\n').map((l, j) => <span key={j}>{l}<br /></span>)}</p>
              </div>
            ))}
          </div>

          <HeartbeatBar />
        </div>
      </section>

      {/* ══════════ PHASE TIMELINE ══════════ */}
      <section id="phases">
        <div className="inner">
          <div className="center reveal">
            <span className="label">Mera Safar</span>
            <div className="divider divider-c" />
            <h2 className="sec-title">Phase 1 &rarr; <span className="grad-purple">Phase 2</span></h2>
            <p className="sec-text" style={{ maxWidth: '560px', margin: '0 auto' }}>
              Ek mahina guzra, aur main wahi nahi raha. Yahan hai poori kahani.
            </p>
          </div>

          <div className="timeline-wrap">
            <div className="tl-line" aria-hidden="true" />

            {/* Phase 1 */}
            <div className="tl-item reveal">
              <div className="tl-content">
                <span className="phase-tag tag-1">Phase 1 — Pehla Mahina</span>
                <h3>Dil Laya, Magar Haar Gaya…</h3>
                <p>
                  Phase 1 woh waqt tha jab main ne pehli baar tumhare liye kuch feel kiya.
                  Andar se himmat thi, lekin baar baar rukta raha. Sochta raha — "kya kahun,
                  kaise kahun, kya woh samjhengi?"
                  <br /><br />
                  Koshish ki — chhoti chhoti baaton mein, chhote chhote ishaaron mein.
                  Lekin shayad woh kaafi nahi tha. <strong>Phase 1 mein main 'fail' hua.</strong>
                  <br /><br />
                  Lekin iss failure ne mujhe yeh samjhaya ki saccha pyaar ek attempt se
                  nahi, <em>ek iraade se hota hai.</em>
                </p>
              </div>
              <div className="tl-dot dot-1">💔</div>
              <div className="tl-empty" />
            </div>

            {/* Turning Point */}
            <div className="tl-item reveal">
              <div className="tl-empty" />
              <div className="tl-dot" style={{ borderColor: 'var(--gold)', boxShadow: '0 0 22px rgba(247,200,115,.5)' }}>🔄</div>
              <div className="tl-content">
                <span className="phase-tag" style={{ background:'rgba(247,200,115,.12)', color:'var(--gold)', border:'1px solid rgba(247,200,115,.25)' }}>Turning Point</span>
                <h3>Dard Ne Uthaya — Toot Ke Nahi</h3>
                <p>
                  Phase 1 ke baad bahut kuch socha. Khud se sawal kiya —
                  <em>"Kya yeh sach mein feel karta hun ya bas ek phase hai?"</em>
                  <br /><br />
                  Aur jawab aaya: <strong>yeh sirf feel nahi — yeh tum ho.</strong>
                  Jyotsana, tumhara khayal tab bhi aaya jab main distract hone ki koshish karta tha.
                  Tab bhi aaya jab raat ko sone ki koshish karta tha.
                  Aur tab bhi — <em>jab subah uthta tha.</em>
                  <br /><br />
                  Woh pal tha jab samjha — yeh rukne ki cheez nahi. Yeh badhne ki hai.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="tl-item reveal">
              <div className="tl-content">
                <span className="phase-tag tag-2">Phase 2 — Ab Se</span>
                <h3>Nayi Shuruaat — Naya Irada 🔥</h3>
                <p>
                  Phase 2 sirf ek mahina nahi hai — yeh ek <strong>wada hai khud se.</strong>
                  Is baar main Phase 1 se zyaada taiyaar hun. Zyaada honest. Zyaada clear.
                  <br /><br />
                  Main nahi chodunGa — jab tak tum khud nahi kahogi ki rukun.
                  Na thakna hai, na rokna hai. Bas dil se dena hai — bina kisi hisaab ke,
                  bina kisi expectation ke.
                  <br /><br />
                  <strong>Jyotsana</strong>, Phase 2 mein main tumhe yeh dikhana chahta hun
                  ki <em>sacchi chahat aisi hoti hai jo haar ke baad bhi nahi harti.</em>
                </p>
              </div>
              <div className="tl-dot dot-2">🔥</div>
              <div className="tl-empty" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHY YOU ══════════ */}
      <section id="why" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,84,122,.09), transparent)' }}>
        <div className="inner">
          <div className="center reveal">
            <span className="label">Kyun Tum?</span>
            <div className="divider divider-c" />
            <h2 className="sec-title">Woh Wajeh Jo Tumhe<br /><span className="grad-rose">Alag Banati Hain</span></h2>
            <p className="sec-text" style={{ maxWidth: '560px', margin: '0 auto' }}>
              Kisi ke liye pyaar karna easy hota hai — lekin <em>sirf ek</em> ke liye karna,
              woh Jyotsana jaisi hoti hai.
            </p>
          </div>

          <div className="why-grid">
            {[
              { n:'01', title:'Tumhari Aankhen', text:'Woh ek jagah hain jo poori kahani khud bayan karti hain — bina ek lafz ke. Uss mein jo depth hai, woh main kabhi puri samajh nahi paunga, lekin hamesha koshish karta rahunga.' },
              { n:'02', title:'Tumhari Aawaz', text:'Jab tum bolti ho, to baki sab background mein chala jata hai. Ek baar tumhari aawaz kaan mein padh gayi, to sab kuch theek lagne lagta hai.' },
              { n:'03', title:'Tumhara Andaaz', text:'Tum jo bhi karo — chhota sa kaam ho ya bada — uss mein ek alag hi rangat hoti hai. Na duplicate, na copy. Sirf Jyotsana.' },
              { n:'04', title:'Tumhari Soch', text:'Tum sochti ho jisme depth hai. Jo baatein tum karte ho, unka ek matlab hota hai — aur us matlab ke andar aur bhi kuch hota hai. Main uss sab ko jaanna chahta hun.' },
              { n:'05', title:'Tumhara Dil', text:'Jo tum andar se ho — woh bahut khoobsurat hai. Log sirf bahar ki khoobsurti dekhte hain. Lekin main tumhare andar ke insaan se pyaar karta hun.' },
              { n:'06', title:'Bas Tum Ho', text:'Koi logical reason nahi. Koi checklist nahi. Dil ne khud chun liya. Aur dil ke faislon ka koi jawab nahi hota — woh bas hote hain.' },
            ].map((w, i) => (
              <div className="why-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="why-num">{w.n}</span>
                <div className="why-title">{w.title}</div>
                <p className="why-text">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PROMISES ══════════ */}
      <section id="promises">
        <div className="inner">
          <div className="center reveal">
            <span className="label">Mera Wada</span>
            <div className="divider divider-c" />
            <h2 className="sec-title">Jo Main Tumhare Liye<br /><span className="grad-rose">Karna Chahta Hun</span></h2>
            <p className="sec-text" style={{ maxWidth: '560px', margin: '0 auto 0' }}>
              Yeh sirf lafz nahi — yeh woh cheezein hain jo main sach mein mehsoos karta hun.
            </p>
          </div>
          <div className="promise-grid">
            {[
              { e:'🌙', t:'Raat Ko Saath Rehna', d:'Agar kabhi raat ke andheron mein akela feel ho — ek message karo. Main hun. Bina sawaal ke, bina shart ke.' },
              { e:'🫂', t:'Bina Kahe Samajhna', d:'Tumhe sab bold karke explain nahi karna padega. Main tumhara chup bhi sahunga aur tumhara toota hua bhi.' },
              { e:'🌹', t:'Chhoti Khushiyan Banana', d:'Jo ek chhoti si cheez tumhe smile dila de — main woh cheez duniya ki kisi bhi jagah se dhundh ke launga.' },
              { e:'🛡️', t:'Tumhara Raksha Karna', d:'Na sirf musibat mein — balki un logon se bhi jo tumhari feelings ka mazak udaate hain.' },
              { e:'🎯', t:'Sirf Tumpe Dhyan Dena', d:'Koi second thought nahi, koi comparison nahi. Mere liye sirf tum ho — hamesha.' },
              { e:'✨', t:'Tumhe Better Mahsoos Karana', d:'Jis din tumhara bura ho — main uss din ka ek achha hissa banana chahta hun.' },
              { e:'🤝', t:'Kabhi Pressure Nahi Dena', d:'Pyaar force nahi hota. Main wait kar sakta hun. Jab tumhara dil chahe — tab.' },
              { e:'💌', t:'Apni Feelings Chhupana Nahi', d:'Is baar main honest rahunGA. Jo feel hoga woh bolunga — kyunki tum deserve karti ho sach.' },
            ].map((p, i) => (
              <div className="promise-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="p-icon" style={{ animationDelay: `${i * 0.3}s` }}>{p.e}</span>
                <div className="p-title">{p.t}</div>
                <p className="p-text">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ EMOTIONAL IZHAAR ══════════ */}
      <section className="izhaar-section" id="izhaar">
        <div className="inner-sm">
          <div className="izhaar-box reveal">
            <p className="izhaar-title">— Mera Sachcha Izhaar —</p>
            <div className="divider divider-c" />
            <p className="izhaar-title" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: 'rgba(255,255,255,.65)', fontFamily:'Poppins,sans-serif', marginBottom:'.5rem' }}>
              Jyotsana, main kehna chahta hun ki...
            </p>
            <div className="izhaar-name">Main Tumse Pyaar Karta Hun</div>

            <p className="izhaar-text">
              Yeh sirf ek feeling nahi — yeh ek <strong>jazbaat hai jo main rok nahi sakta.</strong>
              Tumhari har ek baat yaad hai mujhe. Tumhara har andaaz dil mein basa hua hai.
              Main chahta hun ki tum jaano — yeh izhaar na drama hai, na attention seeking.
            </p>
            <p className="izhaar-text">
              Yeh woh dil ki awaaz hai jo andar bahut din se dabi thi.
              Aaj bol diya — kyunki <strong>tumhara haq banta tha jaanne ka.</strong>
            </p>

            <div style={{ marginTop: '2rem' }}>
              {['❤️','💕','❤️'].map((e, i) => (
                <span key={i} style={{ fontSize: '2.2rem', margin: '0 .4rem', animation: `bob ${1.8 + i * .3}s ease-in-out infinite`, display: 'inline-block' }}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CONDITIONS ══════════ */}
      <section id="conditions" style={{ background: 'linear-gradient(180deg,transparent,rgba(26,8,32,.5),transparent)' }}>
        <div className="inner">
          <div className="reveal">
            <span className="label">Meri Sharti</span>
            <div className="divider" />
            <h2 className="sec-title">Main Tab Tak Nahi ChodunGA Jab Tak…</h2>
            <p className="sec-text">
              Main jaanta hun yeh unusual hai. Lekin main honest rahunGA.
              Sirf teen situations hain jab main ek kadam peechhe hatunGA:
            </p>
          </div>

          <div className="cond-list">
            {[
              { i:'🚫', c:<><strong>"Nahi"</strong> — Agar tum seedha, clearly keh do ki tumhara koi interest nahi — main poori respect ke saath peechhe hat jaunga. Kabhi bura nahi manunga.</> },
              { i:'💔', c:<><strong>"Mujhe nahi karna tumse"</strong> — Agar tumhara dil already faisla kar chuka hai, main force nahi karunga. Pyaar obligation se nahi hota.</> },
              { i:'🤍', c:<><strong>"Mujhe koi aur pasand hai"</strong> — Agar tumhara dil kisi aur ka hai, main khud peechhe hatunga. Tumhari khushi meri khushi se zyaada zaroori hai.</> },
              { i:'🤝', c:<><strong>"Hum sirf dost hain"</strong> — Agar yeh tumhara final faisla hai, main accept karunga. Heavy heart ke saath — lekin accept karunga.</> },
            ].map((c, i) => (
              <div className="cond-item reveal" key={i} style={{ transitionDelay: `${i * 0.13}s` }}>
                <span className="cond-icon">{c.i}</span>
                <p className="cond-text">{c.c}</p>
              </div>
            ))}
          </div>

          <div className="card reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p className="sec-text" style={{ color: 'rgba(255,255,255,.85)', fontSize: '1.04rem' }}>
              Aur jab tak yeh cheezein nahi hoti —
              <br /><strong style={{ color: 'var(--rose-light)' }}>main yahan hun. Roz. Bina thake. Bina roke.</strong><br /><br />
              Kyunki sachi chahat waiting se nahi darti. Woh rukti nahi — sirf aur gehra hoti jaati hai.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ BOLD VOW ══════════ */}
      <section className="vow-section" id="vow">
        <div className="inner">
          <div className="vow-box reveal">
            <p className="vow-label">— Mera Akhri Wada —</p>
            <div className="divider divider-c" />
            <p className="vow-text">
              <span className="hl">Jo mujhe pasand hai na,</span><br />
              uske liye main<br />
              <span className="hl">bahut bahut bahut</span><br />
              kar sakta hun —<br /><br />
              <span style={{ color: 'rgba(255,255,255,.9)' }}>aur ab meri</span>&nbsp;
              <span className="hl">chahat</span><br />
              <span style={{ color: 'rgba(255,255,255,.9)' }}>aur bhi</span>&nbsp;
              <span className="hl" style={{ fontSize: '1.3em' }}>badh gayi hai</span><br />
              <span style={{ fontSize: '.9em', color: 'rgba(255,255,255,.75)' }}>tumhare liye — Jyotsana.</span>
            </p>
            <div style={{ marginTop: '2.5rem', fontSize: '3rem', animation: 'bob 2s ease-in-out infinite', display:'block' }}>💖</div>
          </div>
        </div>
      </section>

      {/* ══════════ FINAL ══════════ */}
      <section className="final-section" id="final">
        <span className="final-emoji">🌹</span>
        <p className="final-text">
          Zindagi mein bahut log aate hain aur nikal jaate hain —<br />
          lekin kuch log dil mein hamesha ke liye reh jaate hain.<br />
          Tum meri us jagah ho, Jyotsana.<br /><br />
          <strong>Ab kehne ki der sirf tumhari hai…</strong>
        </p>
        <div className="signature">— Sirf Tumhara ❤️</div>
        <p style={{ marginTop: '1.2rem', fontSize: '.82rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', fontFamily: 'Poppins, sans-serif' }}>Wrote by Harsh Aggarwal</p>
      </section>
    </>
  );
}
