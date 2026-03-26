
import { useState, useEffect, useRef } from "react";

// ── PALETTE — Navy + Slate + White, no gold ──
const C = {

  navy: "#1a2535",
  navyDark: "#2b394b",
  navyMid: "#243044",
  navyLight: "#2e3d52",
  slate: "#4a6080",
  slateLight: "#6b84a0",
  accent: "#5b7fa6",
  accentLight: "#7fa3c8",
  cream: "#f8f7f5",
  white: "#ffffff",
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
  const [heroRef, heroIn] = useInView(0.05);
  const [featRef, featIn] = useInView(0.1);
  const [aboutRef, aboutIn] = useInView(0.1);
  const [missionRef, missionIn] = useInView(0.05);
  const [stepsRef, stepsIn] = useInView(0.1);
  const [teamRef, teamIn] = useInView(0.1);
  const [ctaRef, ctaIn] = useInView(0.1);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.white, color: C.text, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
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
        .step-card:hover .snum { color: ${C.accentLight} !important; }
        .step-card:hover .stitle { color: ${C.white} !important; }
        .step-card:hover .sdesc { color: rgba(255,255,255,0.55) !important; }
        .badge-spin { animation: spin 16s linear infinite; transform-origin: 50% 50%; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .foundation-img-wrap { flex: 0 0 480px; height: 400px; border-radius: 8px; overflow: hidden; position: relative; }
        .foundation-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; display: block; }
        .foundation-img-wrap:hover img { transform: scale(1.04); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${C.greyLight}; }
        ::-webkit-scrollbar-thumb { background: ${C.navy}; border-radius: 3px; }
      `}</style>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(/3.png)`,
          backgroundSize: "cover", backgroundPosition: "center ",
        }} />
    
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "160px 56px 88px", width: "100%" }}>
          <div style={{ maxWidth: 680 }}>
            <div className={`fade-up ${heroIn ? "in" : ""}`} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              border: "1px solid rgba(255,255,255,0.18)", borderRadius: 2,
              padding: "7px 20px", marginBottom: 32,
              background: "rgba(255,255,255,0.05)",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.accentLight, boxShadow: `0 0 10px ${C.accent}` }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.75)", letterSpacing: "2.5px", textTransform: "uppercase" }}>
                Est. 2001 · Trusted by 12,000+
              </span>
            </div>

            <h1 className={`fade-up d1 ${heroIn ? "in" : ""}`} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 5.5vw, 5rem)",
              fontWeight: 700, color: C.white,
              lineHeight: 1.08, marginBottom: 26, letterSpacing: "-0.5px",
            }}>
              Enabling Your Path<br />
              to <em style={{ color: C.accentLight, fontStyle: "italic" }}>Financial</em><br />
              Growth &amp; Success
            </h1>

            <p className={`fade-up d2 ${heroIn ? "in" : ""}`} style={{
              fontSize: "1.05rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.82,
              marginBottom: 44, maxWidth: 500, fontWeight: 300,
            }}>
              Empowering your financial journey with the right tools and expert guidance —
              helping you grow, manage, and achieve lasting success for over 24 years.
            </p>

            <div className={`fade-up d3 ${heroIn ? "in" : ""}`} style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 80 }}>
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

            <div className={`fade-up d4 ${heroIn ? "in" : ""}`} style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 36 }}>
              {[
                { value: "24", suffix: "+", label: "Years of Experience" },
                { value: "500", suffix: "Cr+", label: "Assets Managed" },
                { value: "12000", suffix: "+", label: "Happy Clients" },
                { value: "98", suffix: "%", label: "Client Retention" },
              ].map((s, i) => (
                <div key={i} style={{ paddingRight: 44, marginRight: 44, borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.1rem", fontWeight: 700, color: C.white, lineHeight: 1 }}>
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.38)", fontWeight: 500, letterSpacing: "0.5px", marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spinning badge */}
        <div style={{ position: "absolute", bottom: 52, right: 80, zIndex: 3 }}>
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
      </section>

      {/* ══════════════════════════════════════════
          FEATURES STRIP
      ══════════════════════════════════════════ */}
      <section ref={featRef} style={{ background: C.navyDark, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
            {features.map((f, i) => (
              <div key={i} className={`fade-up d${i + 1} ${featIn ? "in" : ""}`} style={{
                padding: "48px 44px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                display: "flex", gap: 22, alignItems: "flex-start",
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 4, flexShrink: 0,
                  background: "rgba(91,127,166,0.1)", border: "1px solid rgba(91,127,166,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.1rem", color: C.accentLight,
                }}>{f.icon}</div>
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
      <section ref={aboutRef} style={{ background: C.cream, padding: "120px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px", display: "flex", gap: 88, alignItems: "center" }}>

          {/* LEFT — stacked images */}
          <div className={`fade-in ${aboutIn ? "in" : ""}`} style={{ flex: "0 0 500px", position: "relative", height: 560 }}>
            <div style={{
              position: "absolute", top: 0, left: 0, width: 340, height: 420,
              borderRadius: "4px 4px 60px 4px", overflow: "hidden",
              boxShadow: "0 32px 72px rgba(26,37,53,0.16)",
            }}>
              <img src="https://i.pinimg.com/736x/47/c2/26/47c22631fef301d3cb16e812f82ca7fa.jpg" alt="Finance advisor"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, rgba(15,24,36,0.65) 100%)" }} />
            </div>

            <div style={{
              position: "absolute", bottom: 0, right: 0, width: 240, height: 300,
              borderRadius: "4px 4px 4px 60px", overflow: "hidden",
              boxShadow: "0 24px 56px rgba(26,37,53,0.2)", border: `4px solid ${C.cream}`,
            }}>
              <img src="/about-img/img4.jpg" alt="Team meeting"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div style={{
              position: "absolute", top: 374, left: -36, zIndex: 5,
              background: C.navyDark, borderRadius: 8, padding: "10px 20px",
              boxShadow: "0 16px 48px rgba(26,37,53,0.28)",
              border: "1px solid rgba(91,127,166,0.15)", minWidth: 168,
            }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "2rem", color: C.white, lineHeight: 1 }}>₹500Cr+</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.42)", fontWeight: 500, marginTop: 6, letterSpacing: "0.4px" }}>Assets Under Management</div>
            </div>

          </div>

          {/* RIGHT — text */}
          <div className={`fade-up d2 ${aboutIn ? "in" : ""}`} style={{ flex: 1 }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: C.accent, marginBottom: 18 }}>About Us</div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
              fontSize: "clamp(2rem, 3.5vw, 3rem)", color: C.navy, lineHeight: 1.15, marginBottom: 10,
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
            }}
              onMouseEnter={e => { e.currentTarget.style.background = C.navy; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.navyDark; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Discover Our Story
              <svg viewBox="0 0 20 20" fill="none" width="14"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR FOUNDATION
      ══════════════════════════════════════════ */}
      <section ref={missionRef} style={{ background: C.navyDark, padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>

        {/* Section header */}
        <div className={`fade-up ${missionIn ? "in" : ""}`} style={{ textAlign: "center", marginBottom: 80, position: "relative", zIndex: 1, padding: "0 56px" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(127,163,200,0.7)", marginBottom: 18 }}>Our Foundation</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: C.white, lineHeight: 1.1, marginBottom: 16 }}>
            The principles that drive<br /><em style={{ color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>everything we do</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", margin: "0 auto" }} />
        </div>

        {/* Alternating rows */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px", position: "relative", zIndex: 1 }}>
          {foundationItems.map((item, i) => {
            const isReverse = i % 2 !== 0;
            return (
              <div key={i} className={`fade-up ${missionIn ? "in" : ""}`}
                style={{
                  display: "flex", alignItems: "center", gap: 88,
                  padding: "80px 0",
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
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)", color: C.white, lineHeight: 1.18, marginBottom: 22 }}>{item.heading}</h3>
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
      <section ref={stepsRef} style={{ background: C.cream, padding: "120px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}>
          <div className={`fade-up ${stepsIn ? "in" : ""}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 68 }}>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: C.accent, marginBottom: 16 }}>Registration</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: C.navy, lineHeight: 1.15 }}>
                Our Easy Steps<br />For Registration
              </h2>
            </div>
            <p style={{ maxWidth: 360, fontSize: "0.92rem", color: C.textMuted, lineHeight: 1.78 }}>
              Designed with your convenience in mind — getting started takes just a few minutes on any device.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {steps.slice(0, 3).map((s, i) => (
              <div key={i} className={`fade-up d${i + 1} ${stepsIn ? "in" : ""} step-card`} style={{
                background: C.white, borderRadius: 8, padding: "36px 32px",
                border: `1px solid ${C.border}`, boxShadow: "0 2px 16px rgba(26,37,53,0.05)",
              }}>
                <div className="snum" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "3rem", color: C.accent, marginBottom: 20, lineHeight: 1, opacity: 0.55 }}>{s.num}</div>
                <h4 className="stitle" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.15rem", color: C.navy, marginBottom: 10 }}>{s.title}</h4>
                <p className="sdesc" style={{ fontSize: "0.87rem", color: C.textMuted, lineHeight: 1.72 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginTop: 16, maxWidth: "66.7%" }}>
            {steps.slice(3).map((s, i) => (
              <div key={i} className={`fade-up d${i + 4} ${stepsIn ? "in" : ""} step-card`} style={{
                background: C.white, borderRadius: 8, padding: "36px 32px",
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
      <section ref={teamRef} style={{ background: C.white, padding: "120px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}>
          <div className={`fade-up ${teamIn ? "in" : ""}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72 }}>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: C.accent, marginBottom: 16 }}>Our Leadership</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 2.9rem)", color: C.navy, lineHeight: 1.1 }}>
                The minds behind<br /><em style={{ color: C.slate, fontStyle: "italic" }}>the mission</em>
              </h2>
            </div>
            <div style={{ width: 48, height: 1, background: C.border, marginBottom: 10 }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
            {team.map((t, i) => (
              <div key={i} className={`fade-up d${i + 1} ${teamIn ? "in" : ""} hover-up`} style={{
                background: C.cream, borderRadius: 8, overflow: "hidden",
                border: `1px solid ${C.border}`, boxShadow: "0 4px 24px rgba(26,37,53,0.06)",
              }}>
                <div style={{ height: 3, background: C.navy }} />
                <div style={{ padding: "40px 36px 36px" }}>
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
        <div style={{ position: "absolute", top: "50%", right: 60, transform: "translateY(-50%)", width: 440, height: 440, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", top: "50%", right: 100, transform: "translateY(-50%)", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.03)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "120px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 80 }}>
          <div className={`fade-up ${ctaIn ? "in" : ""}`} style={{ maxWidth: 600 }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>Start Today</div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4rem)", color: C.white, lineHeight: 1.08, marginBottom: 24,
            }}>
              Ready to grow your<br />
              wealth <em style={{ color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>with us?</em>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.84, marginBottom: 52, maxWidth: 480 }}>
              Join thousands of satisfied clients who trust Shivaji Finance to navigate their financial future.
              Your journey to lasting wealth starts with one conversation.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button style={{
                background: C.white, color: C.navyDark, border: "none", borderRadius: 4,
                padding: "16px 44px", fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: "0.92rem", cursor: "pointer",
                letterSpacing: "0.4px", transition: "all 0.25s",
                boxShadow: "0 10px 32px rgba(0,0,0,0.35)",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 18px 44px rgba(0,0,0,0.45)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,0.35)"; }}
              >Book a Free Consultation</button>
              <button style={{
                background: "transparent", color: C.white,
                border: "1px solid rgba(255,255,255,0.2)", borderRadius: 4,
                padding: "16px 36px", fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, fontSize: "0.92rem", cursor: "pointer", transition: "all 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.background = "transparent"; }}
              >View Our Services →</button>
            </div>
          </div>

          {/* Right — vertical stacked stats */}
          <div className={`fade-up d2 ${ctaIn ? "in" : ""}`} style={{ display: "flex", flexDirection: "column", gap: 2, flexShrink: 0, minWidth: 260 }}>
            {[
              { v: "₹500Cr+", l: "Assets Managed" },
              { v: "12,000+", l: "Happy Clients" },
              { v: "98%", l: "Client Retention" },
              { v: "24+ Yrs", l: "In Business" },
            ].map((s, i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: i === 0 ? "8px 8px 0 0" : i === 3 ? "0 0 8px 8px" : 0,
                padding: "24px 28px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                backdropFilter: "blur(8px)",
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.7rem", color: C.white, lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.3)", fontWeight: 500, letterSpacing: "0.5px", textAlign: "right" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
