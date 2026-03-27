import { useState, useEffect, useRef } from "react";

// ── PALETTE ──
const C = {
  navy: "#1a2535",
  navyDark: "#2b394b",
  navyMid: "#243044",
  navyLight: "#2e3d52",
  slate: "#4a6080",
  slateLight: "#6b84a0",
  accent: "#5b7fa6",
  accentLight: "#7fa3c8",
  cream: "#cacdd2",
  white: "#fff",
  text: "#1a2535",
  textMuted: "#6b7a8d",
  border: "#e2e6ea",
  greyLight: "#f2f4f7",
};

const features = [
  { icon: "◈", title: "Integrity First", desc: "Every decision is made with complete transparency and in your best interest." },
  { icon: "◎", title: "Right Time. Every Time.", desc: "Punctual service ensures smooth operations and lasting partnerships." },
  { icon: "◆", title: "Strategic Insights", desc: "Thorough analysis empowers you to optimize strategies and reduce risks." },
];

const steps = [
  { num: "01", title: "Sign Up with ID Card", desc: "Quick identity verification to get started securely." },
  { num: "02", title: "User Configuration", desc: "Set your financial goals and risk preferences." },
  { num: "03", title: "Select Investment Plan", desc: "Choose from curated plans tailored to your needs." },
  { num: "04", title: "Enter the Transaction", desc: "Fund your account safely and start investing." },
  { num: "05", title: "Enjoy Full Access", desc: "Track your portfolio and access expert guidance anytime." },
];

const team = [
  { name: "Rajesh Shivaji", role: "Founder & CEO", exp: "28 yrs", quote: "Wealth is built through discipline, not luck." },
  { name: "Priya Menon", role: "Chief Investment Officer", exp: "18 yrs", quote: "Smart investing means aligning money with purpose." },
  { name: "Arjun Kulkarni", role: "Head of Wealth Management", exp: "15 yrs", quote: "Every portfolio tells a personal story." },
];

const foundationItems = [
  {
    tag: "Our Mission",
    heading: "Empowering Every Financial Decision",
    body: "To provide every Indian household and business with access to world-class financial planning, investment expertise, and wealth management — making prosperity accessible, not exclusive. We exist to simplify complex financial landscapes into clear, confident decisions.",
    stats: [{ v: "24+", l: "Years" }, { v: "12k+", l: "Clients" }],
    img: "/about-img/img3.jpg",
  },
  {
    tag: "Our Vision",
    heading: "A Financially Secure India by 2030",
    body: "To be India's most trusted financial partner — known not just for the returns we generate, but for the lives we transform. We envision a future where every family we serve moves from financial anxiety to financial confidence, backed by strategies built to last generations.",
    quote: "Wealth is not about having a lot of money; it's about having a lot of options.",
    img: "/about-img/img2.jpg",
  },
  {
    tag: "Our Values",
    heading: "Principles That Drive Everything We Do",
    body: "Transparency, Excellence, Legacy, Partnership — these aren't just words on a wall. They are the lens through which every investment decision, every client conversation, and every strategic recommendation is made at Shivaji Finance.",
    values: ["Transparency", "Excellence", "Legacy", "Partnership"],
    img: "/about-img/img1.jpg",
  },
];

// ── HOOKS ──
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  const numericTarget = parseInt(String(target).replace(/\D/g, "")) || 0;
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = Math.max(1, Math.ceil(numericTarget / 60));
    const t = setInterval(() => {
      s += step;
      if (s >= numericTarget) { setCount(numericTarget); clearInterval(t); }
      else setCount(s);
    }, 20);
    return () => clearInterval(t);
  }, [inView, numericTarget]);
  return <span ref={ref}>{count.toLocaleString("en-IN")}{suffix}</span>;
}

export default function About() {
  const w = useWindowWidth();
  const isMobile  = w < 640;
  const isTablet  = w >= 640 && w < 1024;
  const isDesktop = w >= 1024;

  const [heroRef,    heroIn]    = useInView(0.05);
  const [featRef,    featIn]    = useInView(0.1);
  const [aboutRef,   aboutIn]   = useInView(0.1);
  const [missionRef, missionIn] = useInView(0.05);
  const [stepsRef,   stepsIn]   = useInView(0.1);
  const [teamRef,    teamIn]    = useInView(0.1);
  const [ctaRef,     ctaIn]     = useInView(0.1);

  // Shorthand padding helpers
  const sectionPad  = isMobile ? "72px 0" : isTablet ? "88px 0" : "120px 0";
  const sidePad     = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 56px";

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.white, color: C.text, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .fade-up { opacity: 0; transform: translateY(40px); transition: opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1); }
        .fade-up.in { opacity: 1; transform: translateY(0); }
        .fade-in { opacity: 0; transition: opacity 0.9s ease; }
        .fade-in.in { opacity: 1; }
        .d1 { transition-delay: 0.05s; } .d2 { transition-delay: 0.18s; } .d3 { transition-delay: 0.3s; }
        .d4 { transition-delay: 0.42s; } .d5 { transition-delay: 0.54s; }
        .hover-up { transition: transform 0.3s cubic-bezier(.22,1,.36,1); cursor: default; }
        .hover-up:hover { transform: translateY(-5px); }

        .step-card { transition: all 0.3s ease; cursor: default; }
        .step-card:hover { background: ${C.navyDark} !important; border-color: ${C.navy} !important; }
        .step-card:hover .snum  { color: ${C.accentLight} !important; }
        .step-card:hover .stitle { color: ${C.white} !important; }
        .step-card:hover .sdesc  { color: rgba(255,255,255,0.55) !important; }

        .badge-spin { animation: spin 16s linear infinite; transform-origin: 50% 50%; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .foundation-img-wrap { border-radius: 8px; overflow: hidden; position: relative; }
        .foundation-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; display: block; }
        .foundation-img-wrap:hover img { transform: scale(1.04); }

        /* ── Hero stats scroll on very small screens ── */
        .hero-stats { display: flex; }
        @media (max-width: 480px) {
          .hero-stats {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 4px;
          }
          .hero-stats::-webkit-scrollbar { display: none; }
          .hero-stat-item { flex: 0 0 auto; }
        }

        /* ── Features grid ── */
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 767px) {
          .features-grid { grid-template-columns: 1fr; }
          .features-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .features-grid > div:last-child { border-bottom: none; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .features-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── About section layout ── */
        .about-inner { display: flex; gap: 88px; align-items: center; }
        @media (max-width: 1023px) {
          .about-inner { flex-direction: column; gap: 56px; }
        }

        /* ── About images container ── */
        .about-img-wrap { flex: 0 0 500px; position: relative; height: 560px; }
        @media (max-width: 1023px) {
          .about-img-wrap { flex: none; width: 100%; height: 420px; max-width: 560px; margin: 0 auto; }
        }
        @media (max-width: 480px) {
          .about-img-wrap { height: 320px; }
        }

        /* ── Foundation row ── */
        .foundation-row { display: flex; align-items: center; gap: 88px; }
        @media (max-width: 1023px) {
          .foundation-row { flex-direction: column !important; gap: 40px; }
        }

        /* ── Foundation image ── */
        .foundation-img-wrap { flex: 0 0 480px; height: 400px; }
        @media (max-width: 1023px) {
          .foundation-img-wrap { flex: none; width: 100%; height: 300px; }
        }
        @media (max-width: 480px) {
          .foundation-img-wrap { height: 240px; }
        }

        /* ── Steps grids ── */
        .steps-grid-top { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .steps-grid-bottom { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 16px; max-width: 66.7%; }
        @media (max-width: 767px) {
          .steps-grid-top    { grid-template-columns: 1fr; }
          .steps-grid-bottom { grid-template-columns: 1fr; max-width: 100%; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .steps-grid-top    { grid-template-columns: repeat(2, 1fr); }
          .steps-grid-bottom { grid-template-columns: repeat(2, 1fr); max-width: 100%; }
        }

        /* ── Team grid ── */
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        @media (max-width: 767px) {
          .team-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── CTA inner ── */
        .cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 80px; }
        @media (max-width: 1023px) {
          .cta-inner { flex-direction: column; gap: 52px; align-items: flex-start; }
        }

        /* ── CTA stats ── */
        .cta-stats { display: flex; flex-direction: column; gap: 2px; flex-shrink: 0; min-width: 260px; }
        @media (max-width: 1023px) {
          .cta-stats { width: 100%; max-width: 460px; }
        }
        @media (max-width: 480px) {
          .cta-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        }

        /* ── Team header ── */
        .team-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 72px; }
        @media (max-width: 640px) {
          .team-header { flex-direction: column; align-items: flex-start; gap: 24px; margin-bottom: 40px; }
        }

        /* ── Steps header ── */
        .steps-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 68px; }
        @media (max-width: 767px) {
          .steps-header { flex-direction: column; align-items: flex-start; gap: 20px; margin-bottom: 40px; }
        }

        /* ── Hero buttons ── */
        .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 80px; }
        @media (max-width: 480px) {
          .hero-btns { flex-direction: column; }
          .hero-btns button { width: 100%; text-align: center; justify-content: center; }
        }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${C.greyLight}; }
        ::-webkit-scrollbar-thumb { background: ${C.navy}; border-radius: 3px; }
      `}</style>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section ref={heroRef} style={{ position: "relative", minHeight: isMobile ? "100svh" : "70vh", display: "flex", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(/8.png)`,
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "absolute", inset: 0, background: isMobile ? "rgba(10,17,28,0.55)" : "transparent" }} />

        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: 1280, margin: "0 auto",
          padding: isMobile ? "40px 20px 48px" : isTablet ? "48px 32px 56px" : "20px 56px 18px",
          width: "100%",
        }}>
          <div style={{ maxWidth: 680 }}>

            {/* Badge pill */}
            <div className={`fade-up ${heroIn ? "in" : ""}`} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              border: "1px solid rgba(255,255,255,0.18)", borderRadius: 2,
              padding: "7px 20px", marginBottom: isMobile ? 24 : 32,
              background: "rgba(255,255,255,0.05)",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.accentLight, boxShadow: `0 0 10px ${C.accent}` }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.75)", letterSpacing: "2.5px", textTransform: "uppercase" }}>
                Est. 2001 · Trusted by 12,000+
              </span>
            </div>

            {/* Headline */}
            <h1 className={`fade-up d1 ${heroIn ? "in" : ""}`} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? "2.8rem" : isTablet ? "3.6rem" : "clamp(3rem, 5.5vw, 5rem)",
              fontWeight: 700, color: C.white,
              lineHeight: 1.08, marginBottom: isMobile ? 20 : 26, letterSpacing: "-0.5px",
            }}>
              Enabling Your Path<br />
              to <em style={{ color: C.accentLight, fontStyle: "italic" }}>Financial</em><br />
              Growth &amp; Success
            </h1>

            <p className={`fade-up d2 ${heroIn ? "in" : ""}`} style={{
              fontSize: isMobile ? "0.95rem" : "1.05rem",
              color: "rgba(255,255,255,0.58)", lineHeight: 1.82,
              marginBottom: isMobile ? 32 : 44, maxWidth: 500, fontWeight: 300,
            }}>
              Empowering your financial journey with the right tools and expert guidance —
              helping you grow, manage, and achieve lasting success for over 24 years.
            </p>

            {/* CTA buttons */}
            <div className={`fade-up d3 ${heroIn ? "in" : ""} hero-btns`}>
              <button style={{
                background: C.white, color: C.navyDark,
                border: "none", borderRadius: 4,
                padding: "14px 38px", fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: "0.9rem", cursor: "pointer",
                letterSpacing: "0.4px", transition: "all 0.25s",
                boxShadow: "0 8px 28px rgba(0,0,0,0.3)",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.3)"; }}
              >Get Started →</button>
              <button style={{
                background: "transparent", color: C.white,
                border: "1px solid rgba(255,255,255,0.28)", borderRadius: 4,
                padding: "14px 32px", fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.65)"; e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)"; e.currentTarget.style.background = "transparent"; }}
              >Learn More</button>
            </div>

            {/* Stats row */}
            <div className={`fade-up d4 ${heroIn ? "in" : ""} hero-stats`} style={{
              borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: isMobile ? 24 : 36,
            }}>
              {[
                { value: "24",    suffix: "+",    label: "Years of Experience" },
                { value: "500",   suffix: "Cr+",  label: "Assets Managed" },
                { value: "12000", suffix: "+",    label: "Happy Clients" },
                { value: "98",    suffix: "%",    label: "Client Retention" },
              ].map((s, i) => (
                <div key={i} className="hero-stat-item" style={{
                  paddingRight: isMobile ? 28 : 44,
                  marginRight:  isMobile ? 28 : 44,
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  flexShrink: 0,
                }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? "1.6rem" : "2.1rem", fontWeight: 700, color: C.white, lineHeight: 1 }}>
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.38)", fontWeight: 500, letterSpacing: "0.5px", marginTop: 6, whiteSpace: "nowrap" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spinning badge — hidden on mobile */}
        {!isMobile && (
          <div style={{ position: "absolute", bottom: isTablet ? 32 : 52, right: isTablet ? 32 : 80, zIndex: 3 }}>
            <div style={{ position: "relative", width: 112, height: 112 }}>
              <svg className="badge-spin" width="112" height="112" viewBox="0 0 112 112" style={{ position: "absolute" }}>
                <defs><path id="bp3" d="M56,8 A48,48 0 1,1 55.99,8" /></defs>
                <text fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="DM Sans,sans-serif" fontWeight="600" letterSpacing="3.5">
                  <textPath href="#bp3">Shivaji Finance • Est. 2001 •</textPath>
                </text>
              </svg>
              <div style={{
                position: "absolute", inset: 18, borderRadius: "50%",
                background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: C.white, fontSize: "1.35rem", lineHeight: 1 }}>24+</span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Yrs Trust</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════
          FEATURES STRIP
      ══════════════════════════════════════════ */}
      <section ref={featRef} style={{ background: C.navyDark, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className={`fade-up d${i + 1} ${featIn ? "in" : ""}`} style={{
                padding: isMobile ? "36px 24px" : isTablet ? "40px 32px" : "48px 44px",
                borderRight: !isMobile && i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                display: "flex", gap: 22, alignItems: "flex-start",
              }}>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.18rem", color: C.white, marginBottom: 9 }}>{f.title}</h3>
                  <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.72 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT US
      ══════════════════════════════════════════ */}
      <section ref={aboutRef} style={{ background: C.cream, padding: sectionPad }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: sidePad }}>
          <div className="about-inner">

            {/* LEFT — stacked images */}
            <div className={`fade-in ${aboutIn ? "in" : ""} about-img-wrap`}>
              {/* Main image */}
              <div style={{
                position: "absolute", top: 0, left: 0,
                width: isMobile ? "72%" : "68%",
                height: isMobile ? "76%" : "75%",
                borderRadius: "4px 4px 60px 4px", overflow: "hidden",
                boxShadow: "0 32px 72px rgba(26,37,53,0.16)",
              }}>
                <img src="https://i.pinimg.com/736x/47/c2/26/47c22631fef301d3cb16e812f82ca7fa.jpg"
                  alt="Finance advisor"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, rgba(15,24,36,0.65) 100%)" }} />
              </div>

              {/* Secondary image */}
              <div style={{
                position: "absolute", bottom: 0, right: 0,
                width: isMobile ? "48%" : "43%",
                height: isMobile ? "48%" : "54%",
                borderRadius: "4px 4px 4px 60px", overflow: "hidden",
                boxShadow: "0 24px 56px rgba(26,37,53,0.2)",
                border: `4px solid ${C.cream}`,
              }}>
                <img src="/about-img/img4.jpg" alt="Team meeting"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              {/* AUM badge */}
              <div style={{
                position: "absolute",
                top: isMobile ? "60%" : "67%",
                left: isMobile ? "-8px" : "-36px",
                zIndex: 5,
                background: C.navyDark, borderRadius: 8,
                padding: isMobile ? "8px 14px" : "10px 20px",
                boxShadow: "0 16px 48px rgba(26,37,53,0.28)",
                border: "1px solid rgba(91,127,166,0.15)", minWidth: 148,
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: isMobile ? "1.5rem" : "2rem", color: C.white, lineHeight: 1 }}>₹500Cr+</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.42)", fontWeight: 500, marginTop: 6, letterSpacing: "0.4px" }}>Assets Under Management</div>
              </div>
            </div>

            {/* RIGHT — text */}
            <div className={`fade-up d2 ${aboutIn ? "in" : ""}`} style={{ flex: 1 }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: C.accent, marginBottom: 18 }}>About Us</div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                fontSize: isMobile ? "2rem" : isTablet ? "2.4rem" : "clamp(2rem, 3.5vw, 3rem)",
                color: C.navy, lineHeight: 1.15, marginBottom: 10,
              }}>
                Trusted guidance for<br />
                <em style={{ color: C.slate, fontStyle: "italic" }}>financial growth</em>
              </h2>
              <div style={{ width: 48, height: 2, background: C.slate, marginBottom: 28, marginTop: 16, opacity: 0.4 }} />

              <p style={{ fontSize: "0.97rem", color: C.textMuted, lineHeight: 1.84, marginBottom: 36 }}>
                Shivaji Finance has been empowering individuals and businesses across India for over 24 years.
                Founded in 2001 by Rajesh Shivaji, we craft personalized financial strategies designed to align
                with your specific goals, challenges, and growth potential.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 22, marginBottom: 44 }}>
                {[
                  { title: "Strategic Financial Planning", desc: "Personalized strategies aligned with your specific goals, challenges, and growth potential." },
                  { title: "Boost Your Returns", desc: "Smart investment campaigns — from mutual funds to equities — designed to grow wealth steadily." },
                  { title: "Dedicated Expert Guidance", desc: "A dedicated advisor walks with you every step, ensuring every financial decision is well-informed." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(74,96,128,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2,
                    }}>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.slate }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.05rem", color: C.navy, marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: "0.87rem", color: C.textMuted, lineHeight: 1.68 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button style={{
                background: C.navy, color: C.white, border: "none",
                borderRadius: 4, padding: "14px 36px",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem",
                cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, transition: "all 0.25s",
                width: isMobile ? "100%" : "auto", justifyContent: isMobile ? "center" : "flex-start",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = C.navyDark; }}
              >
                Discover Our Story
                <svg viewBox="0 0 20 20" fill="none" width="14"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR FOUNDATION
      ══════════════════════════════════════════ */}
      <section ref={missionRef} style={{ background: C.navyDark, padding: `${isMobile ? "72px" : "100px"} 0 ${isMobile ? "60px" : "80px"}`, position: "relative", overflow: "hidden" }}>

        {/* Section header */}
        <div className={`fade-up ${missionIn ? "in" : ""}`} style={{
          textAlign: "center", marginBottom: isMobile ? 48 : 80,
          position: "relative", zIndex: 1, padding: sidePad,
        }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(127,163,200,0.7)", marginBottom: 18 }}>Our Foundation</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: isMobile ? "2rem" : "clamp(2.2rem, 4vw, 3.2rem)", color: C.white, lineHeight: 1.1, marginBottom: 16 }}>
            The principles that drive<br /><em style={{ color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>everything we do</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", margin: "0 auto" }} />
        </div>

        {/* Alternating rows */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: sidePad, position: "relative", zIndex: 1 }}>
          {foundationItems.map((item, i) => {
            const isReverse = !isMobile && !isTablet && i % 2 !== 0;
            return (
              <div key={i} className={`fade-up foundation-row ${missionIn ? "in" : ""}`}
                style={{
                  padding: isMobile ? "48px 0" : "80px 0",
                  borderBottom: i < foundationItems.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  flexDirection: isReverse ? "row-reverse" : "row",
                  transitionDelay: `${i * 0.12}s`,
                }}>

                {/* Image */}
                <div className="foundation-img-wrap" style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.45)" }}>
                  <img src={item.img} alt={item.tag} />
                  <div style={{
                    position: "absolute", bottom: 24, left: 24,
                    background: "rgba(15,24,36,0.8)", backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 4, padding: "8px 18px",
                  }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,255,255,0.65)", letterSpacing: "2px", textTransform: "uppercase" }}>{item.tag}</span>
                  </div>
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(127,163,200,0.65)", marginBottom: 20 }}>{item.tag}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: isMobile ? "1.7rem" : "clamp(1.7rem, 2.8vw, 2.4rem)", color: C.white, lineHeight: 1.18, marginBottom: 22 }}>{item.heading}</h3>
                  <div style={{ width: 36, height: 1, background: "rgba(255,255,255,0.12)", marginBottom: 22 }} />
                  <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.88, marginBottom: 32 }}>{item.body}</p>

                  {item.stats && (
                    <div style={{ display: "flex", gap: 44 }}>
                      {item.stats.map(({ v, l }) => (
                        <div key={l}>
                          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "2.2rem", color: C.white, lineHeight: 1 }}>{v}</div>
                          <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.32)", letterSpacing: "0.5px", marginTop: 6 }}>{l}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.quote && (
                    <div style={{
                      borderLeft: "2px solid rgba(255,255,255,0.1)",
                      paddingLeft: 20,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.05rem", fontStyle: "italic",
                      color: "rgba(255,255,255,0.28)", lineHeight: 1.7,
                    }}>
                      "{item.quote}"
                    </div>
                  )}

                  {item.values && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {item.values.map(v => (
                        <div key={v} style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.09)",
                          borderRadius: 4, padding: "9px 20px",
                          fontSize: "0.84rem", color: "rgba(255,255,255,0.5)",
                          fontWeight: 500, letterSpacing: "0.4px",
                          transition: "all 0.2s",
                        }}>{v}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          REGISTRATION STEPS
      ══════════════════════════════════════════ */}
      <section ref={stepsRef} style={{ background: C.cream, padding: sectionPad }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: sidePad }}>
          <div className={`fade-up ${stepsIn ? "in" : ""} steps-header`}>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: C.accent, marginBottom: 16 }}>Registration</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: isMobile ? "2rem" : "clamp(2rem, 3.5vw, 2.8rem)", color: C.navy, lineHeight: 1.15 }}>
                Our Easy Steps<br />For Registration
              </h2>
            </div>
            <p style={{ maxWidth: 360, fontSize: "0.92rem", color: C.textMuted, lineHeight: 1.78 }}>
              Designed with your convenience in mind — getting started takes just a few minutes on any device.
            </p>
          </div>

          <div className="steps-grid-top">
            {steps.slice(0, 3).map((s, i) => (
              <div key={i} className={`fade-up d${i + 1} ${stepsIn ? "in" : ""} step-card`} style={{
                background: C.white, borderRadius: 8, padding: isMobile ? "28px 24px" : "36px 32px",
                border: `1px solid ${C.border}`, boxShadow: "0 2px 16px rgba(26,37,53,0.05)",
              }}>
                <div className="snum" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "3rem", color: C.accent, marginBottom: 20, lineHeight: 1, opacity: 0.55 }}>{s.num}</div>
                <h4 className="stitle" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.15rem", color: C.navy, marginBottom: 10 }}>{s.title}</h4>
                <p className="sdesc" style={{ fontSize: "0.87rem", color: C.textMuted, lineHeight: 1.72 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="steps-grid-bottom">
            {steps.slice(3).map((s, i) => (
              <div key={i} className={`fade-up d${i + 4} ${stepsIn ? "in" : ""} step-card`} style={{
                background: C.white, borderRadius: 8, padding: isMobile ? "28px 24px" : "36px 32px",
                border: `1px solid ${C.border}`, boxShadow: "0 2px 16px rgba(26,37,53,0.05)",
              }}>
                <div className="snum" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "3rem", color: C.accent, marginBottom: 20, lineHeight: 1, opacity: 0.55 }}>{s.num}</div>
                <h4 className="stitle" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.15rem", color: C.navy, marginBottom: 10 }}>{s.title}</h4>
                <p className="sdesc" style={{ fontSize: "0.87rem", color: C.textMuted, lineHeight: 1.72 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR LEADERSHIP
      ══════════════════════════════════════════ */}
      <section ref={teamRef} style={{ background: C.white, padding: sectionPad }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: sidePad }}>
          <div className={`fade-up ${teamIn ? "in" : ""} team-header`}>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: C.accent, marginBottom: 16 }}>Our Leadership</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: isMobile ? "2rem" : "clamp(2rem, 3.5vw, 2.9rem)", color: C.navy, lineHeight: 1.1 }}>
                The minds behind<br /><em style={{ color: C.slate, fontStyle: "italic" }}>the mission</em>
              </h2>
            </div>
            {!isMobile && <div style={{ width: 48, height: 1, background: C.border, marginBottom: 10 }} />}
          </div>

          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className={`fade-up d${i + 1} ${teamIn ? "in" : ""} hover-up`} style={{
                background: C.cream, borderRadius: 8, overflow: "hidden",
                border: `1px solid ${C.border}`, boxShadow: "0 4px 24px rgba(26,37,53,0.06)",
              }}>
                <div style={{ height: 3, background: C.navy }} />
                <div style={{ padding: isMobile ? "28px 24px" : "40px 36px 36px" }}>
                  <div style={{ marginBottom: 24, display: "flex", alignItems: "center", gap: 18 }}>
                    <div style={{
                      width: 68, height: 68, borderRadius: "50%", flexShrink: 0,
                      background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyLight} 100%)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.5rem",
                      color: C.white, border: "2px solid rgba(91,127,166,0.18)",
                    }}>
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.2rem", color: C.navy, marginBottom: 4 }}>{t.name}</h3>
                      <div style={{ fontSize: "0.78rem", color: C.textMuted, fontWeight: 500 }}>{t.role}</div>
                    </div>
                  </div>

                  <div style={{ height: 1, background: C.border, marginBottom: 22 }} />

                  <p style={{ fontSize: "0.92rem", color: C.textMuted, lineHeight: 1.78, fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif", marginBottom: 26 }}>
                    "{t.quote}"
                  </p>

                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(74,96,128,0.07)", border: "1px solid rgba(74,96,128,0.15)",
                    borderRadius: 4, padding: "6px 14px",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.slate }} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: C.slate, letterSpacing: "0.4px" }}>{t.exp} Experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section ref={ctaRef} style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80)",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,17,28,0.97) 0%, rgba(22,35,52,0.94) 55%, rgba(10,17,28,0.9) 100%)" }} />
        {!isMobile && <>
          <div style={{ position: "absolute", top: "50%", right: 60, transform: "translateY(-50%)", width: 440, height: 440, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)" }} />
          <div style={{ position: "absolute", top: "50%", right: 100, transform: "translateY(-50%)", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.03)" }} />
        </>}

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: `${isMobile ? "72px" : "120px"} ${isMobile ? "20px" : isTablet ? "32px" : "56px"}` }}>
          <div className="cta-inner">
            <div className={`fade-up ${ctaIn ? "in" : ""}`} style={{ maxWidth: 600 }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>Start Today</div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                fontSize: isMobile ? "2.4rem" : "clamp(2.5rem, 5vw, 4rem)",
                color: C.white, lineHeight: 1.08, marginBottom: 24,
              }}>
                Ready to grow your<br />
                wealth <em style={{ color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>with us?</em>
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.84, marginBottom: 52, maxWidth: 480 }}>
                Join thousands of satisfied clients who trust Shivaji Finance to navigate their financial future.
                Your journey to lasting wealth starts with one conversation.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", flexDirection: isMobile ? "column" : "row" }}>
                <button style={{
                  background: C.white, color: C.navyDark, border: "none", borderRadius: 4,
                  padding: "16px 44px", fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: "0.92rem", cursor: "pointer",
                  letterSpacing: "0.4px", transition: "all 0.25s",
                  boxShadow: "0 10px 32px rgba(0,0,0,0.35)",
                  width: isMobile ? "100%" : "auto",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 18px 44px rgba(0,0,0,0.45)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,0.35)"; }}
                >Book a Free Consultation</button>
                <button style={{
                  background: "transparent", color: C.white,
                  border: "1px solid rgba(255,255,255,0.2)", borderRadius: 4,
                  padding: "16px 36px", fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500, fontSize: "0.92rem", cursor: "pointer", transition: "all 0.25s",
                  width: isMobile ? "100%" : "auto", textAlign: "center",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.background = "transparent"; }}
                >View Our Services →</button>
              </div>
            </div>

            {/* Right — stacked stats */}
            <div className={`fade-up d2 ${ctaIn ? "in" : ""} cta-stats`}>
              {[
                { v: "₹500Cr+", l: "Assets Managed" },
                { v: "12,000+", l: "Happy Clients" },
                { v: "98%",     l: "Client Retention" },
                { v: "24+ Yrs", l: "In Business" },
              ].map((s, i) => (
                <div key={i} style={{
                  background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: isMobile
                    ? 6
                    : i === 0 ? "8px 8px 0 0" : i === 3 ? "0 0 8px 8px" : 0,
                  padding: isMobile ? "18px 20px" : "24px 28px",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  backdropFilter: "blur(8px)",
                }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: isMobile ? "1.4rem" : "1.7rem", color: C.white, lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.3)", fontWeight: 500, letterSpacing: "0.5px", textAlign: "right" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}