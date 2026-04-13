import { useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const NAME = "Jyotsana";

const SECTIONS = [
  {
    id: "open",
    kicker: "Chapter 0 — dil ki language",
    title: "Pehle ek baat clear kar doon",
    paras: [
      "Yeh page koi assignment nahi hai. Koi abstract bhi nahi. Yeh sirf tumhare naam ka ek lamba sa breath hai — jisme main jitna bol sakta hoon, utna pyaar likh raha hoon.",
      "Tum aise ho jisse padhna achha lagta hai: har line mein depth, har chup mein meaning, har smile mein ek naya chapter.",
    ],
  },
  {
    id: "mind",
    kicker: "Chapter 1 — brain + dil",
    title: "Agar pyaar ko PhD dena hota… tum meri thesis hoti",
    paras: [
      "Log kehte hain research lonely hoti hai. Phir tum mile — aur lagta hai sabse gehri theory bhi do logon ke beech mein likhi ja sakti hai.",
      "Tum meri favourite hypothesis ho jo roz prove hoti hai: ki sukoon, spark, aur seriousness ek hi insaan mein reh sakte hain. Tum mein rehte hain.",
    ],
  },
  {
    id: "body",
    kicker: "Chapter 2 — seedha, sensual, sincere",
    title: "Pyaar sirf words mein nahi… skin aur saans mein bhi",
    paras: [
      "Jab tum paas hoti ho toh waqt slow ho jaata hai — tumhari ungliyon ka touch, gale lagne ki woh warmth, tumhari awaaz ka paas aana… sab kuch itna real lagta hai ki screen fake lagne lagti hai.",
      "Main tumhe chahna chahta hoon — softly bhi, intensely bhi. Tumhari hansi pe crush, tumhari chup pe respect, aur tumhari nazron mein woh jo kehne se pehle hi sab bol deti hai… us pe poora dil.",
      "Sexy tumhare liye sirf dikhaawa nahi: tumhari confidence, tumhari softness, tumhari boundaries — sab milkar ek aisi attraction banati hai jisse main sharmata nahi, proud feel karta hoon.",
    ],
  },
  {
    id: "heart",
    kicker: "Chapter 3 — vulnerable",
    title: "Darr bhi hai… par tumhare saath kam lagta hai",
    paras: [
      "Zindagi ne sikhaya hai ki har cheez guarantee card ke saath nahi aati. Phir bhi tumhare saath woh feeling aati hai jaisa koi safe word mil gaya ho — bas naam tumhara ho.",
      "Main imperfect hoon, moody kabhi, zyada sochne wala kabhi. Par ek baat pakki hai: tumhe choose karna, tumhari care karna, tumhare sapnon ko apna maanna — yeh meri priority list ka top hai.",
    ],
  },
  {
    id: "future",
    kicker: "Chapter 4 — aage",
    title: "Future hum likhenge — ek saath, ek rhythm mein",
    paras: [
      "Mujhe tumhare saath woh sab chahiye: lazy Sundays, serious talks, random dance, raat ko chai, aur woh choti choti rituals jo ‘couple’ se zyada ‘home’ banate hain.",
      "Aage jo bhi likhein, chahta hoon tum uska centre rahogi — khushi ho ya thakan, sab mein woh ease jahan bas haath pakadna kaafi ho jaye.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** Short-lived popper bursts — mount with unique id */
function PartyPopper({ burstId, variant }) {
  const n = variant === "yes" ? 64 : 36;
  const bits = useMemo(
    () =>
      Array.from({ length: n }, (_, i) => ({
        i,
        a: (i / n) * 360 + Math.random() * 18,
        d: 100 + Math.random() * 200,
        delay: Math.random() * 0.14,
        spin: 360 + Math.random() * 540,
        xo: (Math.random() - 0.5) * 50,
        yo: (Math.random() - 0.5) * 50,
        w: 5 + Math.random() * 7,
        h: 7 + Math.random() * 12,
      })),
    [burstId, n]
  );

  return (
    <div className="popper-root" aria-hidden>
      {bits.map((b) => (
        <span
          key={`${burstId}-${b.i}`}
          className={`popper-bit popper-bit--${variant}`}
          style={{
            "--a": `${b.a}deg`,
            "--d": `${b.d}px`,
            "--delay": `${b.delay}s`,
            "--spin": `${b.spin}deg`,
            "--xo": `${b.xo}px`,
            "--yo": `${b.yo}px`,
            width: b.w,
            height: b.h,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const jawaabRef = useRef(null);
  const [proposalOpen, setProposalOpen] = useState(false);
  /** null = sawaal | 'yes' | 'later' = answered — modal band nahi hota inhe pe */
  const [proposalOutcome, setProposalOutcome] = useState(null);
  const [bursts, setBursts] = useState([]);

  const firePoppers = useCallback((variant, times = 1) => {
    for (let t = 0; t < times; t++) {
      const delay = t * 200;
      window.setTimeout(() => {
        const id = `${Date.now()}-${t}-${Math.random()}`;
        setBursts((prev) => [...prev, { id, variant }]);
        window.setTimeout(() => {
          setBursts((prev) => prev.filter((b) => b.id !== id));
        }, 1200);
      }, delay);
    }
  }, []);

  const scrollToJawaab = useCallback(() => {
    jawaabRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const openProposal = useCallback(() => {
    setProposalOutcome(null);
    setProposalOpen(true);
  }, []);

  const closeProposal = useCallback(() => {
    setProposalOpen(false);
    setProposalOutcome(null);
  }, []);

  const onBackdropClick = useCallback(() => {
    if (proposalOutcome !== null) return;
    closeProposal();
  }, [proposalOutcome, closeProposal]);

  const onYes = useCallback(() => {
    setProposalOutcome("yes");
    firePoppers("yes", 3);
  }, [firePoppers]);

  const onNeedTime = useCallback(() => {
    setProposalOutcome("later");
    firePoppers("later", 2);
  }, [firePoppers]);

  const backToQuestion = useCallback(() => {
    setProposalOutcome(null);
  }, []);

  return (
    <div className="spa">
      <div className="spa__bg" aria-hidden />
      <div className="spa__grain" aria-hidden />

      {bursts.map((b) => (
        <PartyPopper key={b.id} burstId={b.id} variant={b.variant} />
      ))}

      <header className="spa-header">
        <span className="spa-header__mark" aria-hidden>
          ♥
        </span>
        <span className="spa-header__name">{NAME}</span>
        <span className="spa-header__tag">one page · poora dil</span>
      </header>

      <main>
        <section className="hero" id="top">
          <motion.div
            className="hero__inner"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="hero__eyebrow" variants={fadeUp} custom={0}>
              {NAME},
            </motion.p>
            <motion.h1 className="hero__title" variants={fadeUp} custom={1}>
              Tum meri sabse
              <span className="hero__title-accent"> gehri </span>
              feeling ho
            </motion.h1>
            <motion.p className="hero__lead" variants={fadeUp} custom={2}>
              Emotional bhi, intelligent bhi, aur jab tum paas hoti ho toh dil mein ek aisi heat jo shabd kam pad jaate hain. Neeche padhna — end mein ek sawaal hai jo zindagi badal sakta hai.
            </motion.p>
            <motion.div className="hero__cta" variants={fadeUp} custom={3}>
              <a className="btn btn--ghost" href="#story">
                Padhna shuru karo
              </a>
              <button type="button" className="btn btn--solid" onClick={openProposal}>
                Seedha proposal pe
              </button>
            </motion.div>
          </motion.div>
          <div className="hero__scroll" aria-hidden>
            <span />
          </div>
        </section>

        <section className="story" id="story">
          {SECTIONS.map((block, idx) => (
            <motion.article
              key={block.id}
              className="story-block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="story-block__index" aria-hidden>
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="story-block__kicker">{block.kicker}</p>
              <h2 className="story-block__title">{block.title}</h2>
              <div className="story-block__body">
                {block.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </section>

        <section className="bridge">
          <motion.div
            className="bridge__card"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="bridge__kicker">Ab seedhi baat</p>
            <p className="bridge__text">
              Saari baatein isliye likhi hain taaki tum samjho: main tumse pyaar karta hoon — dimag se, dil se, aur us tarah se bhi jo sirf tumhare paas rehne se samajh aati hai.
            </p>
            <button type="button" className="btn btn--solid btn--wide" onClick={scrollToJawaab}>
              Apna jawab yahan
            </button>
          </motion.div>
        </section>

        <section className="jawaab" id="jawaab" ref={jawaabRef}>
          <motion.div
            className="jawaab__card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="jawaab__kicker">Last stop · tumhari baari</p>
            <h2 className="jawaab__title">Yahan aa gaye — ab dil kholo</h2>
            <p className="jawaab__text">
              Neeche wale button se wohi sawaal khulega. Jawab jo bhi ho, likha hua milega — kuch band nahi hoga beech mein ♥
            </p>
            <button type="button" className="btn btn--solid btn--wide" onClick={openProposal}>
              Dil ka jawaab yahan khol do
            </button>
          </motion.div>
        </section>
      </main>

      <footer className="spa-footer">
        <p>
          {NAME} — tum ho toh lagta hai sab kuch possible hai.
          <br />
          <span className="spa-footer__sub">dil se · ab aur hamesha</span>
        </p>
      </footer>

      <AnimatePresence>
        {proposalOpen && (
          <motion.div
            className="modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="proposal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onBackdropClick}
          >
            <motion.div
              className="modal"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                {proposalOutcome === null && (
                  <motion.div
                    key="q"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="modal__kicker">{NAME}</p>
                    <h2 id="proposal-title" className="modal__title">
                      Kya tum <em>mere saath</em> yeh pyaar poori tarah jeena chahogi?
                    </h2>
                    <p className="modal__body">
                      Dil se, honestly — bas hum. Acche din, mushkil din, aur woh saare beech ke pal jahan sirf tumhara saath chahiye.
                    </p>
                    <div className="modal__actions">
                      <button type="button" className="btn btn--solid btn--yes" onClick={onYes}>
                        Haan, bilkul
                      </button>
                      <button type="button" className="btn btn--ghost" onClick={onNeedTime}>
                        Thoda time chahiye
                      </button>
                    </div>
                  </motion.div>
                )}

                {proposalOutcome === "yes" && (
                  <motion.div
                    key="yes"
                    className="modal__yes"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45 }}
                  >
                    <span className="modal__glow" aria-hidden />
                    <h2 className="modal__title modal__title--sm">Bas, dil ne sun liya:</h2>
                    <p className="modal__body modal__body--big">
                      I love you. Tum meri khushi ho, meri pride ho, meri sukoon — ab yeh pakka hai.
                    </p>
                    <p className="modal__cheek">Jaldi milo… hug tight, kiss soft, baaki sab baad mein ♥</p>
                    <p className="modal__note">
                      Yeh screen band kar bhi sakti ho jab mann kare — par jo likha hai woh permanent mood mein rehne wala hai.
                    </p>
                    <button type="button" className="btn btn--ghost btn--full" onClick={closeProposal}>
                      Theek hai, dil full smile ♥
                    </button>
                  </motion.div>
                )}

                {proposalOutcome === "later" && (
                  <motion.div
                    key="later"
                    className="modal__later"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45 }}
                  >
                    <span className="modal__glow modal__glow--soft" aria-hidden />
                    <h2 className="modal__title modal__title--sm">Dil yeh keh raha hai — bilkul theek hai:</h2>
                    <p className="modal__body modal__body--big">
                      Tumhari har feeling qeemti hai. Time chahiye toh lo poora — main rush nahi karunga, pressure nahi banunga.
                    </p>
                    <p className="modal__body">
                      Jab dil bole, tab aa jana; main yahin rahunga, same respect aur same pyaar ke saath. Tumhari speed meri favourite hai — isliye kuch band nahi hua, bas pause jaisa feel ho toh woh bhi pyaar hai.
                    </p>
                    <p className="modal__cheek">Thoda waqt lena weak nahi… dil se sochna strong lagta hai. Proud hoon tum par ♥</p>
                    <div className="modal__actions">
                      <button type="button" className="btn btn--solid btn--yes" onClick={backToQuestion}>
                        Sawaal phir se padhna hai
                      </button>
                      <button type="button" className="btn btn--ghost btn--full" onClick={closeProposal}>
                        Theek, dil ne note kar liya ♥
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {proposalOutcome === "yes" && <div className="confetti" aria-hidden />}
    </div>
  );
}
