import { useMemo, useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MEDIA } from "./data/mediaFiles.js";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const CELEBRATION_SONG_SRC = encodeURI(
  "/Ishqa Ve Chadeya - Ishqa Ve _ Zeeshan Ali _ Punjabi Song.mp3"
);

/** Cropped hero — lives in /public (not dev sena gallery) */
const BANNER_IMAGE_SRC = encodeURI("/WhatsApp Image 2026-04-12 at 3.54.10 PM.jpeg");

function mediaSrc(file) {
  return `/dev%20sena/${encodeURIComponent(file)}`;
}

function mixMedia(items) {
  const imgs = items.filter((m) => m.kind === "image");
  const vids = items.filter((m) => m.kind === "video");
  const out = [];
  let i = 0;
  let j = 0;
  while (i < imgs.length || j < vids.length) {
    if (i < imgs.length) out.push(imgs[i++]);
    if (j < vids.length) out.push(vids[j++]);
  }
  return out;
}

const GALLERY_MEDIA = mixMedia(MEDIA);

/** Hinglish nav — single source for header + footer */
const NAV_ITEMS = [
  { id: "banner", label: "Hero" },
  { id: "about", label: "Jyotsana" },
  { id: "gallery", label: "Gallery" },
  { id: "moments", label: "Moments" },
  { id: "letter", label: "Letter" },
  { id: "gift", label: "Gift" },
];

const COPY = {
  banner: {
    line1: "Jab se mile… ab tak —",
    lineBig: "ek hi kahani, bas unfold hoti ja rahi hai.",
    line2: "Dates ab sirf numbers nahi… har ek ke peeche tum ho.",
    right1: "Photos bol jaati hain woh feeling",
    right2: "jo words chhod dete hain halfway.",
    badge: "♥ for Jyotsana",
    scroll: "Niche scroll karo",
    micro: "life's good ♥",
  },
  about: {
    title: "Jyotsana — dil ke itne paas ki chuppi bhi sukoon lagti hai",
    paras: [
      "Tumhari hasi, tumhari chup, tumhara saath… in sab ne sikhaya ki pyaar zor se nahi, ehsaas se banta hai.",
      "Gym ki tired selfie ho ya scooter pe hawa, raaste ki chai ho ya bas tumhare paas baithna — har cheez ne bol diya: ‘hum’ chhota shabd hai, par feeling infinite.",
    ],
  },
  gallery: {
    title: "Gallery — saari yaadein mixed, jaise real life",
    body: "Koi category sort nahi… jo dil ne save kiya wahi yahan. Portrait seedha khada, landscape wide — bilkul waise hi jaise click hua tha.",
  },
  moments: {
    title: "Moments reel",
    body: "Neeche wali strip silently chalti hai — purane din + naye din, ek hi flow mein. Pause karke dekhna.",
  },
  letter: {
    title: "Ek chhota sa letter",
    lines: [
      "Jyotsana,",
      "Kabhi lagta ho duniya sprint kar rahi hai… toh yaad rakhna: kuch rishte slow walk par sabse gehra feel dete hain.",
      "Main har us din ka thankful hoon jis din tum aayi — aur har us pal ka jo aaj tak saath chala.",
      "— tumhari kahani sunne wala",
    ],
  },
  gift: {
    hint: "Neeche box pe tap karo — chhota sa surprise andar.",
    cta: "Gift khol do",
    insideTitle: "Sirf tumhare liye",
    insideText: "Yeh poori site hi ek gift hai — yaadon ka, words ka, aur us ‘hum’ ka jo explain karna mushkil hai isliye photos rakh di.",
  },
  footer: {
    tagline: "jab se mile… ab tak — bas tum, bas hum, bas yaadein.",
    line: "Har frame ek quiet thank you hai — tumhare liye, hum dono ke liye, aur us story ke liye jo ab bhi likhi ja rahi hai.",
    sub: "Pyaar bhara · always",
    stripLabel: "Chhoti si throwback strip",
    backToTop: "↑ wapas hero pe",
  },
};

const QUOTES = [
  { lines: ["Naam hai Jyotsana,", "aur lagta hai roshni ne", "finally ek chehra choose kar liya."] },
  { lines: ["Jab se mile hain,", "calendar ki dates ab", "sirf memories ban gayi."] },
  { lines: ["Shor mein bhi sukoon hai", "agar tumhari awaaz ho,", "aur khamoshi mein bhi gaana."] },
  { lines: ["Jo humne jiya hai", "use explain karna mushkil,", "isliye frames rakh diye."] },
];

function SmartMedia({ file, kind, compact = false, caption }) {
  const [orient, setOrient] = useState(null);

  const onImgLoad = (e) => {
    const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
    setOrient(h > w ? "portrait" : "landscape");
  };

  const onVideoMeta = (e) => {
    const v = e.currentTarget;
    if (v.videoWidth && v.videoHeight) {
      setOrient(v.videoHeight > v.videoWidth ? "portrait" : "landscape");
    }
  };

  const rootClass = [
    "smart-media",
    compact && "smart-media--compact",
    orient === "portrait" && "smart-media--portrait",
    orient === "landscape" && "smart-media--landscape",
    !orient && "smart-media--loading",
  ]
    .filter(Boolean)
    .join(" ");

  const src = mediaSrc(file);

  return (
    <figure className={rootClass}>
      <div className="smart-media__inner">
        {kind === "video" ? (
          <video
            className="smart-media__el"
            src={src}
            controls
            playsInline
            preload="metadata"
            onLoadedMetadata={onVideoMeta}
          />
        ) : (
          <img className="smart-media__el" src={src} alt="" loading="lazy" decoding="async" onLoad={onImgLoad} />
        )}
      </div>
      {caption ? <figcaption className="smart-media__cap">{caption}</figcaption> : null}
    </figure>
  );
}

function MediaRail({ items, ariaLabel, compact }) {
  return (
    <div className="media-rail-wrap">
      <div className="media-rail-fade media-rail-fade--left" aria-hidden />
      <div className="media-rail-fade media-rail-fade--right" aria-hidden />
      <div className="media-rail" role="list" aria-label={ariaLabel}>
        {items.map((m) => (
          <div key={m.file} className="media-rail__slide" role="listitem">
            <SmartMedia file={m.file} kind={m.kind} compact={compact} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MarqueeStrip({ items }) {
  const doubled = useMemo(() => [...items, ...items], [items]);
  return (
    <div className="marquee-wrap">
      <div className="marquee" role="list">
        {doubled.map((m, idx) => (
          <div key={`${m.file}-${idx}`} className="marquee__item" role="listitem">
            <SmartMedia file={m.file} kind={m.kind} compact />
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionShell({ id, children, className = "" }) {
  return (
    <section id={id} className={`mem-section ${className}`.trim()}>
      {children}
    </section>
  );
}

function SoftGlows() {
  const blobs = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        top: `${10 + (i * 17) % 70}%`,
        left: `${5 + (i * 23) % 85}%`,
        scale: 0.9 + (i % 3) * 0.15,
        delay: (i * 0.4) % 2.4,
      })),
    []
  );
  return (
    <div className="soft-glows" aria-hidden="true">
      {blobs.map((b) => (
        <motion.div
          key={b.id}
          className="soft-glow"
          style={{ top: b.top, left: b.left, scale: b.scale }}
          initial={{ opacity: 0.12 }}
          animate={{ opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 10 + b.id, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
        />
      ))}
    </div>
  );
}

function ParticlesLite() {
  const items = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${(i * 5.7 + (i % 5) * 9) % 100}%`,
        delay: (i * 0.41) % 8,
        duration: 12 + (i % 6),
      })),
    []
  );
  return (
    <div className="particles-lite" aria-hidden="true">
      {items.map((p) => (
        <span
          key={p.id}
          className="particle-lite"
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

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${(i * 7.3) % 96}%`,
        delay: (i * 0.31) % 5,
        dur: 11 + (i % 5),
        scale: 0.45 + (i % 4) * 0.12,
      })),
    []
  );
  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: h.left,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.dur}s`,
            "--hs": h.scale,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

function GiftUnbox() {
  const [open, setOpen] = useState(false);
  const lidRef = useRef(null);
  const g = COPY.gift;

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    const lid = lidRef.current;
    if (lid) {
      gsap.set(lid, { transformPerspective: 900, transformOrigin: "50% 100%" });
      gsap.to(lid, { rotateX: -108, duration: 0.55, ease: "power2.inOut" });
    }
  };

  return (
    <SectionShell id="gift" className="gift-section-wrap">
      <div className="mem-section__head">
        <p className="mem-p gift-hint reveal-item">{g.hint}</p>
      </div>

      <div className="gift-stage">
        <div className="gift-box reveal-item">
          <div className="gift-box__glow" />
          <div ref={lidRef} className="gift-lid">
            <span className="gift-ribbon" aria-hidden />
          </div>
          <div className="gift-base">
            {!open ? (
              <button type="button" className="gift-cta" onClick={handleOpen}>
                {g.cta}
              </button>
            ) : (
              <div className="gift-inside">
                <p className="gift-inside__title">{g.insideTitle}</p>
                <p className="gift-inside__text">{g.insideText}</p>
                <div className="gift-sparkles" aria-hidden>
                  {"✦·✧·✦".split("").map((ch, i) => (
                    <span key={i} className="gift-sparkles__dot">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default function App() {
  const rootRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSong = () => {
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio(CELEBRATION_SONG_SRC);
      audio.loop = true;
      audio.volume = 0.75;
      audioRef.current = audio;
    }
    if (audio.paused) {
      void audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const marqueeItems = useMemo(() => GALLERY_MEDIA.slice(0, Math.min(48, GALLERY_MEDIA.length)), []);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;

    const ctx = gsap.context(() => {
      gsap.from(".banner-anim .banner-line", {
        y: 44,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.12,
      });

      gsap.from(".banner-anim-right .banner-line", {
        x: 36,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.35,
      });

      gsap.from(".banner-badge", {
        opacity: 0,
        scale: 0.92,
        duration: 0.55,
        ease: "back.out(1.6)",
        delay: 0.75,
      });

      gsap.utils.toArray(".reveal-block").forEach((block) => {
        const kids = block.querySelectorAll(".reveal-item");
        if (!kids.length) return;
        gsap.from(kids, {
          scrollTrigger: {
            trigger: block,
            start: "top 86%",
            once: true,
          },
          y: 28,
          opacity: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: "power2.out",
        });
      });

      const gallery = el.querySelector(".gallery-masonry");
      if (gallery) {
        const cells = gallery.querySelectorAll(".gallery-masonry__cell");
        gsap.from(cells, {
          scrollTrigger: {
            trigger: gallery,
            start: "top 82%",
            once: true,
          },
          opacity: 0,
          y: 36,
          duration: 0.48,
          ease: "power2.out",
          stagger: { amount: 0.85, from: "random" },
        });
      }

      gsap.from(".gift-box.reveal-item", {
        scrollTrigger: {
          trigger: ".gift-stage",
          start: "top 88%",
          once: true,
        },
        scale: 0.94,
        opacity: 0,
        duration: 0.55,
        ease: "power2.out",
      });
    }, el);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    const t = window.setTimeout(refresh, 700);
    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="app memoir">
      <div className="stars-layer" aria-hidden="true" />
      <ParticlesLite />
      <SoftGlows />
      <FloatingHearts />

      <header className="mem-topbar">
        <a href="#banner" className="mem-brand mem-brand--link">
          ♥ Jyotsana
        </a>
        <nav className="mem-nav" aria-label="Sections">
          {NAV_ITEMS.map(({ id, label }) => (
            <a key={id} className="mem-nav__link" href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <motion.button
          type="button"
          className="mem-music-btn"
          onClick={toggleSong}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          aria-pressed={isPlaying}
          aria-label="Toggle background music"
        >
          {isPlaying ? "♪" : "♫"}
        </motion.button>
      </header>

      <section id="banner" className="banner-hero">
        <div className="banner-hero__visual">
          <img className="banner-hero__img" src={BANNER_IMAGE_SRC} alt="" fetchPriority="high" />
          <div className="banner-hero__visual-scrim" aria-hidden />
          <span className="banner-hero__micro">{COPY.banner.micro}</span>
        </div>

        <div className="banner-hero__layout">
          <div className="banner-hero__left glass-card">
            <div className="banner-anim">
              <p className="banner-lines">
                <span className="banner-line">{COPY.banner.line1}</span>
                <span className="banner-line banner-lines__big">{COPY.banner.lineBig}</span>
                <span className="banner-line">{COPY.banner.line2}</span>
              </p>
            </div>
          </div>

          <div className="banner-hero__rightcol">
            <div className="banner-card-right glass-card glass-card--rose glass-card--glow">
              <div className="banner-anim-right">
                <p className="banner-lines banner-lines--right">
                  <span className="banner-line">{COPY.banner.right1}</span>
                  <span className="banner-line">{COPY.banner.right2}</span>
                </p>
                <span className="banner-badge">{COPY.banner.badge}</span>
              </div>
            </div>
          </div>

          <a className="banner-scroll banner-hero__scroll" href="#about">
            {COPY.banner.scroll} <span className="banner-scroll__arr">↓</span>
          </a>
        </div>
      </section>

      <main className="mem-main">
        <SectionShell id="about" className="about-wrap reveal-block">
          <div className="about-grid about-grid--wide">
            <div className="about-copy glass-card">
              <h2 className="mem-h2 reveal-item">{COPY.about.title}</h2>
              {COPY.about.paras.map((p, i) => (
                <p key={i} className="mem-p reveal-item">
                  {p}
                </p>
              ))}
            </div>
            <div className="poetry-grid poetry-grid--about">
              {QUOTES.map((q, idx) => (
                <article key={idx} className="poetry-card reveal-item">
                  <blockquote className="poetry-lines poetry-lines--hinglish">
                    {q.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell id="gallery" className="gallery-section gallery-section--bleed">
          <div className="gallery-section__inner reveal-block">
            <h2 className="mem-h2 reveal-item">{COPY.gallery.title}</h2>
            <p className="mem-p reveal-item">{COPY.gallery.body}</p>
          </div>
          <div className="gallery-masonry" role="list">
            {GALLERY_MEDIA.map((m) => (
              <div key={m.file} className="gallery-masonry__cell" role="listitem">
                <SmartMedia file={m.file} kind={m.kind} compact />
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="moments" className="moments-section reveal-block">
          <h2 className="mem-h2 reveal-item">{COPY.moments.title}</h2>
          <p className="mem-p reveal-item">{COPY.moments.body}</p>
          <div className="moments-panel glass-card glass-card--dark">
            <MarqueeStrip items={marqueeItems} />
          </div>
        </SectionShell>

        <SectionShell id="letter" className="letter-section reveal-block">
          <div className="letter-paper glass-card">
            <h2 className="mem-h2 letter-title reveal-item">{COPY.letter.title}</h2>
            {COPY.letter.lines.map((line, i) => (
              <p key={i} className={`mem-p letter-line reveal-item ${i === 0 ? "letter-line--dear" : ""}`}>
                {line}
              </p>
            ))}
            <div className="letter-seal" aria-hidden>
              ♥
            </div>
          </div>
        </SectionShell>

        <GiftUnbox />

        <footer id="footer" className="site-footer reveal-block">
          <div className="site-footer__glow" aria-hidden />
          <div className="site-footer__accent" aria-hidden />
          <div className="site-footer__inner">
            <div className="site-footer__top">
              <div className="site-footer__brand reveal-item">
                <span className="site-footer__mark" aria-hidden>
                  ♥
                </span>
                <div className="site-footer__brand-text">
                  <span className="site-footer__name">Jyotsana</span>
                  <p className="site-footer__tagline">{COPY.footer.tagline}</p>
                </div>
              </div>
              <nav className="site-footer__nav reveal-item" aria-label="Quick links">
                {NAV_ITEMS.map(({ id, label }) => (
                  <a key={id} className="site-footer__nav-link" href={`#${id}`}>
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="site-footer__divider reveal-item" aria-hidden />

            <p className="site-footer__quote reveal-item">{COPY.footer.line}</p>
            <p className="site-footer__subline reveal-item">{COPY.footer.sub}</p>

            <div className="site-footer__strip reveal-item">
              <span className="site-footer__strip-label">{COPY.footer.stripLabel}</span>
              <MediaRail items={GALLERY_MEDIA.slice(0, 24)} ariaLabel="Footer memories" compact />
            </div>

            <div className="site-footer__bottom reveal-item">
              <span className="site-footer__tiny">forever grateful · ek hi page, poori kahani</span>
              <a href="#banner" className="site-footer__to-top">
                {COPY.footer.backToTop}
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
