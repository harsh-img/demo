import { useState, useCallback } from "react";
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
      "Shaadi mere liye sirf label nahi — commitment ka full volume. Tumhare saath family, friends, stress, success — sab split screen mein, haath pakde.",
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

export default function App() {
  const [proposalOpen, setProposalOpen] = useState(false);
  const [saidYes, setSaidYes] = useState(false);

  const openProposal = useCallback(() => setProposalOpen(true), []);
  const closeProposal = useCallback(() => {
    if (!saidYes) setProposalOpen(false);
  }, [saidYes]);
  const onYes = useCallback(() => setSaidYes(true), []);

  return (
    <div className="spa">
      <div className="spa__bg" aria-hidden />
      <div className="spa__grain" aria-hidden />

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
            <button type="button" className="btn btn--solid btn--wide" onClick={openProposal}>
              Apna jawab yahan
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
            onClick={saidYes ? undefined : closeProposal}
          >
            <motion.div
              className="modal"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              {!saidYes ? (
                <>
                  <p className="modal__kicker">{NAME}</p>
                  <h2 id="proposal-title" className="modal__title">
                    Kya tum meri <em>shaadi</em> karogi?
                  </h2>
                  <p className="modal__body">
                    Partner banogi meri zindagi ka — good days, bad days, aur woh saare beech ke days jahan bas tumhara haath chahiye hoga?
                  </p>
                  <div className="modal__actions">
                    <button type="button" className="btn btn--solid btn--yes" onClick={onYes}>
                      Haan, bilkul
                    </button>
                    <button type="button" className="btn btn--ghost" onClick={closeProposal}>
                      Thoda time chahiye
                    </button>
                  </div>
                </>
              ) : (
                <motion.div
                  className="modal__yes"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="modal__ring" aria-hidden />
                  <h2 className="modal__title modal__title--sm">Toh phir official:</h2>
                  <p className="modal__body modal__body--big">
                    I love you. Aur ab se tum meri fiancée — meri family, meri pride, meri peace.
                  </p>
                  <p className="modal__cheek">Jaldi milo… hug tight, kiss soft, baaki sab baad mein ♥</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {saidYes && <div className="confetti" aria-hidden />}
    </div>
  );
}
