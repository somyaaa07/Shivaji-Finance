import { useState, useEffect, useRef } from "react";

const GOLD = "#cbcfd4";
const DARK = "#2b3a4c";
const CREAM = "#cbcfd4";
const MID = "#2e3f52";

const Icon = ({ name, size = 20, style = {} }) => {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", style: { display: "block", ...style } };
  const icons = {
    home:       <svg {...p}><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>,
    car:        <svg {...p}><path d="M5 17H3v-5l2-5h14l2 5v5h-2"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/><path d="M5 12h14"/></svg>,
    briefcase:  <svg {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
    graduation: <svg {...p}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    check:      <svg {...p} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>,
    arrow:      <svg {...p} strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    shield:     <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    clock:      <svg {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    star:       <svg {...p} fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    users:      <svg {...p}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    trending:   <svg {...p} strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    zap:        <svg {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    quote:      <svg {...p} fill="currentColor" stroke="none"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/></svg>,
    phone:      <svg {...p}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.72 6.72l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    rupee:      <svg {...p} strokeWidth="2"><line x1="6" y1="6" x2="18" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><path d="M6 12l6 8"/><path d="M6 6h8a4 4 0 010 8H6"/></svg>,
    plus:       <svg {...p} strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    document:   <svg {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    award:      <svg {...p}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
    heart:      <svg {...p}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    map:        <svg {...p}><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/></svg>,
    mail:       <svg {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  };
  return icons[name] || null;
};

const LOANS = [
  { icon: "home",       title: "Home Loan",     rate: "7.5%", tag: "Most Popular",     desc: "Flexible tenures up to 30 years. Zero processing fees. Own your dream home today.", color: "#2b3a4c" },
  { icon: "car",        title: "Auto Loan",      rate: "8.2%", tag: "Instant Disbursal",desc: "Drive off today. Same-day release with zero hidden charges guaranteed.", color: "#2e3f52" },
  { icon: "briefcase",  title: "Business Loan",  rate: "9.0%", tag: "Up to ₹50 Lakhs", desc: "Flexible capital solutions tailored to fuel your business ambitions.", color: "#2b3a4c" },
  { icon: "graduation", title: "Education Loan", rate: "6.8%", tag: "Lowest EMI",       desc: "Finance premier institutions. Invest in your brightest future.", color: "#2e3f52" },
];

const STATS = [
  { value: "₹2,500Cr+", label: "Total Disbursed",    icon: "rupee" },
  { value: "1.2L+",     label: "Happy Customers",    icon: "users" },
  { value: "48 hrs",    label: "Avg. Approval",      icon: "clock" },
  { value: "4.9★",      label: "Rating",             icon: "star" },
];

const STEPS = [
  { icon: "document", num: "01", title: "Apply Online",       desc: "3-minute digital application. No paperwork, no queues." },
  { icon: "shield",   num: "02", title: "Quick Verification", desc: "Real-time KYC. AI reviews your application in minutes." },
  { icon: "zap",      num: "03", title: "Instant Disbursal",  desc: "Funds credited within 48 hours of approval." },
];

const TESTIMONIALS = [
  { name: "Priya Sharma",  role: "Homeowner · Mumbai",      text: "The entire process was seamless. Got my home loan approved in just 2 days!", rating: 5 },
  { name: "Rahul Mehta",   role: "Business Owner · Delhi",  text: "Best rates in the market. Their support team walked me through every step.", rating: 5 },
  { name: "Anita Rao",     role: "Student · Bengaluru",     text: "Education loan process was smooth and completely transparent.", rating: 5 },
];

const FAQS = [
  { q: "What documents are required?",  a: "PAN card, Aadhar, bank statements (last 6 months), income proof, and address proof." },
  { q: "How long does approval take?",  a: "Most applications get approved within 48 hours after complete document submission." },
  { q: "Is there a prepayment penalty?",a: "No. We charge zero prepayment penalty — pay off anytime without extra cost." },
  { q: "Does it affect my CIBIL score?",a: "Checking your eligibility is a soft inquiry and has no impact on your CIBIL score." },
];

export default function ShivajiFinance() {
  const [amount, setAmount] = useState(1000000);
  const [tenure, setTenure] = useState(10);
  const [activeFaq, setFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLoan, setHoveredLoan] = useState(null);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["home","loans","calculator","about","contact"];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) { setActiveNav(s); break; }
        }
      }
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const r = 8.5 / 1200, n = tenure * 12;
  const emi      = Math.round((amount * r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1));
  const total    = emi * n;
  const interest = total - amount;
  const fmt      = v => v.toLocaleString("en-IN");
  const apPct    = ((amount - 50000) / 4950000) * 100;
  const tpPct    = ((tenure - 1) / 29) * 100;

  return (
    <div style={{ fontFamily:"'Cormorant Garamond','Georgia',serif", background: CREAM, color: DARK, overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        html { scroll-behavior: smooth; }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
        @keyframes floatY   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes tickerL  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes shimmer  { 0%{transform:translateX(-150%)} 100%{transform:translateX(150%)} }
        @keyframes spin     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse    { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }

        .sans { font-family:'DM Sans',sans-serif; }

        /* NAV LINKS */
        .nl { 
          font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500;
          color:rgba(255,255,255,.5); text-decoration:none; letter-spacing:.07em;
          text-transform:uppercase; position:relative; padding:6px 0; transition:color .3s;
        }
        .nl::after { content:''; position:absolute; bottom:-2px; left:50%; width:0; height:1px; background:${GOLD}; transition:all .35s; transform:translateX(-50%); }
        .nl:hover { color:white; }
        .nl:hover::after { width:100%; }
        .nl.active { color:${GOLD}; }
        .nl.active::after { width:100%; background:${GOLD}; }

        /* BUTTONS */
        .btn-primary {
          background:${GOLD}; color:${DARK}; border:none; border-radius:3px;
          padding:14px 36px; font-size:12px; font-weight:600; cursor:pointer;
          font-family:'DM Sans',sans-serif; letter-spacing:.09em; text-transform:uppercase;
          position:relative; overflow:hidden; transition:all .3s;
        }
        .btn-primary::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent);
          transform:translateX(-150%); transition:transform .5s;
        }
        .btn-primary:hover { transform:translateY(-2px); box-shadow:0 14px 40px rgba(203,207,212,.35); }
        .btn-primary:hover::before { transform:translateX(150%); }

        .btn-ghost {
          background:transparent; color:rgba(255,255,255,.65); border:1px solid rgba(255,255,255,.2);
          border-radius:3px; padding:13px 30px; font-size:12px; font-weight:500; cursor:pointer;
          font-family:'DM Sans',sans-serif; letter-spacing:.07em; text-transform:uppercase; transition:all .3s;
        }
        .btn-ghost:hover { border-color:rgba(255,255,255,.55); color:white; }

        .btn-outline {
          background:transparent; color:${DARK}; border:1.5px solid ${DARK};
          border-radius:3px; padding:12px 28px; font-size:12px; font-weight:600; cursor:pointer;
          font-family:'DM Sans',sans-serif; letter-spacing:.07em; text-transform:uppercase; transition:all .3s;
        }
        .btn-outline:hover { background:${DARK}; color:${GOLD}; }

        /* RANGE SLIDER */
        input[type=range] { -webkit-appearance:none; width:100%; height:2px; border-radius:2px; outline:none; cursor:pointer; }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance:none; width:20px; height:20px; border-radius:50%;
          background:${GOLD}; border:3px solid ${DARK}; box-shadow:0 0 0 3px rgba(203,207,212,.25);
          cursor:pointer; transition:box-shadow .25s;
        }
        input[type=range]::-webkit-slider-thumb:hover { box-shadow:0 0 0 6px rgba(203,207,212,.2); }

        /* LOAN CARD */
        .loan-card {
          background:white; border-radius:6px; overflow:hidden;
          border:1px solid rgba(43,58,76,.09); cursor:pointer;
          transition:all .45s cubic-bezier(.22,.68,0,1.1);
          position:relative;
        }
        .loan-card:hover { transform:translateY(-12px); box-shadow:0 40px 80px rgba(43,58,76,.18); }

        /* STAT CARD */
        .stat-card {
          background:rgba(255,255,255,.04); border:1px solid rgba(203,207,212,.14);
          border-radius:6px; padding:44px 36px; text-align:center;
          transition:all .3s; position:relative; overflow:hidden;
        }
        .stat-card::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:2px;
          background:${GOLD}; transform:scaleX(0); transition:transform .4s;
        }
        .stat-card:hover { background:rgba(203,207,212,.07); border-color:rgba(203,207,212,.3); }
        .stat-card:hover::after { transform:scaleX(1); }

        /* TESTIMONIAL */
        .t-card {
          background:white; border-radius:6px; border:1px solid rgba(43,58,76,.08);
          transition:all .35s; overflow:hidden;
        }
        .t-card:hover { transform:translateY(-8px); box-shadow:0 28px 64px rgba(43,58,76,.14); }

        /* FAQ */
        .faq-item { background:white; border-radius:6px; border:1px solid rgba(43,58,76,.08); overflow:hidden; transition:all .3s; }
        .faq-body { max-height:0; overflow:hidden; transition:max-height .45s ease; }
        .faq-body.open { max-height:180px; }

        /* DECORATIVE */
        .section-label {
          display:inline-flex; align-items:center; gap:10px; margin-bottom:20px;
        }
        .section-label::before,.section-label::after {
          content:''; height:1px; width:28px;
        }
        .section-label-light::before,.section-label-light::after { background:rgba(203,207,212,.4); }
        .section-label-dark::before,.section-label-dark::after { background:rgba(43,58,76,.25); }

        .floating-card { animation: floatY 7s ease-in-out infinite; animation-delay:1s; }

        /* STEP CONNECTOR */
        .step-line {
          position:absolute; top:36px; left:calc(100% + 8px); width:calc(100% - 16px); 
          height:1px; background:linear-gradient(to right,rgba(203,207,212,.4),transparent);
        }
      `}</style>

      {/* ══════════════ NAV ══════════════ */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:1000, height:74,
        padding:"0 72px", display:"flex", alignItems:"center", justifyContent:"space-between",
        background: scrolled ? `${DARK}f2` : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(203,207,212,.1)` : "none",
        transition:"all .45s ease",
      }}>
        {/* Logo */}
        <div style={{display:"flex", alignItems:"center", gap:14}}>
          <div style={{
            width:40, height:40, background:`linear-gradient(135deg,${GOLD},rgba(203,207,212,.7))`,
            borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:`0 4px 16px rgba(203,207,212,.4)`,
          }}>
            <span style={{fontFamily:"'Cormorant Garamond',serif", fontSize:24, fontWeight:700, color:DARK, lineHeight:1}}>S</span>
          </div>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:21, fontWeight:700, color:"white", lineHeight:1.1, letterSpacing:".01em"}}>Shivaji Finance</div>
            <div className="sans" style={{fontSize:8, color:GOLD, letterSpacing:".22em", textTransform:"uppercase", fontWeight:600, marginTop:1}}>NBFC · Est. 2009</div>
          </div>
        </div>

        {/* Nav Links */}
        <div style={{display:"flex", gap:36}}>
          {["Home","Loans","Calculator","About","Contact"].map(l=>(
            <a key={l} href={`#${l.toLowerCase()}`} className={`nl ${activeNav===l.toLowerCase()?"active":""}`}>{l}</a>
          ))}
        </div>

        <div style={{display:"flex", gap:10}}>
          <button className="btn-ghost" style={{padding:"9px 22px", fontSize:11}}>Sign In</button>
          <button className="btn-primary" style={{padding:"10px 26px", fontSize:11}}>Apply Now</button>
        </div>
      </nav>

      {/* ══════════════ HERO ══════════════ */}
      <section id="home" style={{position:"relative", height:"100vh", minHeight:760, overflow:"hidden", background:DARK}}>
        {/* Geometric BG pattern */}
        <svg style={{position:"absolute", inset:0, width:"100%", height:"100%", opacity:.035}} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,2 58,17 58,47 30,62 2,47 2,17" fill="none" stroke={GOLD} strokeWidth="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)"/>
        </svg>

        {/* Radial glows */}
        <div style={{position:"absolute", top:"-20%", right:"-5%", width:700, height:700, borderRadius:"50%", background:`radial-gradient(circle,rgba(203,207,212,.08) 0%,transparent 70%)`, pointerEvents:"none"}}/>
        <div style={{position:"absolute", bottom:"-10%", left:"-5%", width:500, height:500, borderRadius:"50%", background:`radial-gradient(circle,rgba(203,207,212,.05) 0%,transparent 70%)`, pointerEvents:"none"}}/>

        {/* Gold vertical accent */}
        <div style={{position:"absolute", top:0, left:72, width:1, height:"100%", background:`linear-gradient(to bottom,transparent,${GOLD}30,transparent)`, pointerEvents:"none"}}/>

        <div style={{position:"relative", zIndex:2, height:"100%", display:"flex", alignItems:"center", padding:"0 80px", gap:80, maxWidth:1440, margin:"0 auto"}}>
          {/* Left column */}
          <div style={{flex:1, maxWidth:620, animation:"fadeUp .9s cubic-bezier(.22,.68,0,1.2) both"}}>
            {/* Badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:10, marginBottom:36,
              background:"rgba(203,207,212,.07)", border:`1px solid rgba(203,207,212,.18)`,
              borderRadius:40, padding:"8px 18px 8px 12px",
            }}>
              <div style={{width:6, height:6, borderRadius:"50%", background:GOLD, animation:"blink 1.8s infinite"}}/>
              <span className="sans" style={{fontSize:11, color:GOLD, fontWeight:500, letterSpacing:".05em"}}>RBI Regulated · Trusted by 1.2L+ Indians</span>
            </div>

            <h1 style={{fontSize:"clamp(52px,6vw,92px)", lineHeight:.98, fontWeight:700, color:"white", marginBottom:28, letterSpacing:"-.01em"}}>
              Building<br/>
              <em style={{fontStyle:"italic", fontWeight:400, color:GOLD}}>Wealth</em> &amp;<br/>
              Dreams.
            </h1>

            <p className="sans" style={{fontSize:15, color:"rgba(255,255,255,.38)", lineHeight:1.95, maxWidth:400, marginBottom:44, fontWeight:300}}>
              India's most transparent lending partner — fair rates, zero hidden fees, and a commitment to your financial freedom.
            </p>

            <div style={{display:"flex", gap:12, marginBottom:56}}>
              <button className="btn-primary" style={{padding:"15px 40px", fontSize:13}}>Check Eligibility</button>
              <button className="btn-ghost" style={{padding:"15px 28px", fontSize:13, display:"flex", alignItems:"center", gap:8}}>
                <Icon name="phone" size={14} style={{color:"rgba(255,255,255,.6)"}}/>
                Talk to Expert
              </button>
            </div>

            {/* Trust bar */}
            <div style={{display:"flex", gap:32, paddingTop:32, borderTop:"1px solid rgba(255,255,255,.06)"}}>
              {["RBI Regulated","256-bit SSL","Zero Fees","Free CIBIL"].map(b=>(
                <div key={b} style={{display:"flex", alignItems:"center", gap:7}}>
                  <div style={{width:16, height:16, borderRadius:"50%", background:"rgba(203,207,212,.1)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
                    <Icon name="check" size={9} style={{color:GOLD}}/>
                  </div>
                  <span className="sans" style={{fontSize:11, color:"rgba(255,255,255,.28)", fontWeight:400, letterSpacing:".03em"}}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — offer card */}
          <div style={{width:380, flexShrink:0}} className="floating-card">
            <div style={{
              background:"rgba(255,255,255,.04)", backdropFilter:"blur(40px)",
              border:`1px solid rgba(203,207,212,.18)`, borderRadius:8,
              padding:36, boxShadow:`0 60px 120px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.07)`,
              animation:"fadeUp .9s cubic-bezier(.22,.68,0,1.2) .2s both",
            }}>
              {/* Card top */}
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6}}>
                <div>
                  <p className="sans" style={{fontSize:9, color:GOLD, textTransform:"uppercase", letterSpacing:".18em", fontWeight:600, marginBottom:12}}>Pre-Approved Offer</p>
                  <p style={{fontSize:62, fontWeight:700, color:"white", lineHeight:1}}>₹15<span style={{fontSize:32, color:GOLD}}>L</span></p>
                </div>
                <div style={{
                  background:`linear-gradient(135deg,${GOLD},rgba(203,207,212,.6))`,
                  width:52, height:52, borderRadius:6,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  boxShadow:`0 8px 24px rgba(203,207,212,.3)`,
                }}>
                  <Icon name="zap" size={24} style={{color:DARK}}/>
                </div>
              </div>
              <p className="sans" style={{fontSize:10, color:"rgba(255,255,255,.2)", marginBottom:28, letterSpacing:".04em"}}>Valid 72 hrs · Exclusive offer</p>

              <div style={{height:1, background:`linear-gradient(to right,rgba(203,207,212,.3),transparent)`, marginBottom:26}}/>

              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:26}}>
                {[["Rate","7.5% p.a."],["Tenure","30 yrs"],["EMI","₹12,450"]].map(([l,v])=>(
                  <div key={l} style={{
                    background:"rgba(255,255,255,.05)", borderRadius:4, padding:"14px 8px",
                    textAlign:"center", border:"1px solid rgba(203,207,212,.1)",
                  }}>
                    <p className="sans" style={{fontSize:8, color:"rgba(255,255,255,.25)", textTransform:"uppercase", letterSpacing:".12em", marginBottom:7}}>{l}</p>
                    <p className="sans" style={{fontSize:13, fontWeight:700, color:"white"}}>{v}</p>
                  </div>
                ))}
              </div>

              {[["Processing Fee","₹0"],["Prepayment Charge","Nil"]].map(([k,v])=>(
                <div key={k} style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid rgba(255,255,255,.05)"}}>
                  <span className="sans" style={{fontSize:12, color:"rgba(255,255,255,.28)", fontWeight:300}}>{k}</span>
                  <span className="sans" style={{fontSize:12, fontWeight:700, color:GOLD}}>{v}</span>
                </div>
              ))}

              <button className="btn-primary" style={{width:"100%", padding:"15px", fontSize:13, marginTop:24, borderRadius:4}}>
                Claim This Offer →
              </button>
              <p className="sans" style={{textAlign:"center", fontSize:10, color:"rgba(255,255,255,.16)", marginTop:12, letterSpacing:".04em"}}>No CIBIL impact · check freely</p>
            </div>

            {/* live pill */}
            <div style={{marginTop:12, display:"flex", justifyContent:"flex-end"}}>
              <div style={{
                background:"rgba(255,255,255,.06)", backdropFilter:"blur(16px)",
                borderRadius:40, border:`1px solid rgba(203,207,212,.12)`,
                padding:"8px 16px", display:"inline-flex", alignItems:"center", gap:8,
              }}>
                <span style={{width:7, height:7, borderRadius:"50%", background:"#6ee7b7", display:"block", animation:"blink 1.6s infinite"}}/>
                <span className="sans" style={{fontSize:11, color:"rgba(255,255,255,.4)", fontWeight:400}}>2,345 applied today</span>
              </div>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div style={{position:"absolute", bottom:40, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity:.35}}>
          <span className="sans" style={{fontSize:9, color:"white", letterSpacing:".18em", textTransform:"uppercase"}}>Scroll</span>
          <div style={{width:1, height:40, background:`linear-gradient(to bottom,white,transparent)`}}/>
        </div>
      </section>

      {/* ══════════════ TICKER ══════════════ */}
      <div style={{background:GOLD, padding:"14px 0", overflow:"hidden", position:"relative"}}>
        <div style={{display:"flex", width:"max-content", animation:"tickerL 22s linear infinite"}}>
          {[...Array(4)].map((_,row)=>(
            <div key={row} style={{display:"flex", gap:0, flexShrink:0}}>
              {["Home Loans from 7.5%","Auto Loans from 8.2%","Business Loans from 9.0%","Education Loans from 6.8%","Zero Processing Fees","RBI Regulated NBFC"].map(t=>(
                <span key={t} className="sans" style={{fontSize:11, fontWeight:700, color:DARK, letterSpacing:".07em", textTransform:"uppercase", padding:"0 40px", whiteSpace:"nowrap"}}>
                  {t} <span style={{opacity:.3, margin:"0 8px"}}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════ LOANS ══════════════ */}
      <section id="loans" style={{padding:"130px 80px", background:CREAM}}>
        <div style={{maxWidth:1320, margin:"0 auto"}}>
          {/* Header */}
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"flex-end", marginBottom:80}}>
            <div>
              <div className="section-label section-label-dark">
                <span className="sans" style={{fontSize:9, fontWeight:700, color:"rgba(43,58,76,.45)", textTransform:"uppercase", letterSpacing:".18em"}}>Our Products</span>
              </div>
              <h2 style={{fontSize:"clamp(44px,4.5vw,72px)", fontWeight:700, color:DARK, lineHeight:.97}}>
                Loans crafted<br/><em style={{fontStyle:"italic", fontWeight:300, color:MID}}>for every dream</em>
              </h2>
            </div>
            <div style={{paddingBottom:8}}>
              <p className="sans" style={{fontSize:14, color:"rgba(43,58,76,.45)", lineHeight:2, maxWidth:360, marginBottom:28, fontWeight:300}}>
                Transparent products, fair rates, and human support — designed for real people with real ambitions.
              </p>
              <button className="btn-outline">Compare All Loans →</button>
            </div>
          </div>

          {/* Cards grid — asymmetric */}
          <div style={{display:"grid", gridTemplateColumns:"1.35fr 1fr 1fr 1fr", gap:18}}>
            {LOANS.map((loan, idx) => (
              <div
                key={loan.title}
                className="loan-card"
                onMouseEnter={() => setHoveredLoan(idx)}
                onMouseLeave={() => setHoveredLoan(null)}
                style={{boxShadow: hoveredLoan===idx ? "0 40px 80px rgba(43,58,76,.18)" : "0 2px 20px rgba(43,58,76,.07)"}}
              >
                {/* Color top bar */}
                <div style={{height:3, background:`linear-gradient(to right,${GOLD},rgba(203,207,212,.3))`}}/>

                {/* Icon + rate header */}
                <div style={{
                  background:`linear-gradient(160deg,${DARK} 0%,${MID} 100%)`,
                  padding: idx===0 ? "36px 32px" : "28px 24px",
                  position:"relative", overflow:"hidden",
                }}>
                  <div style={{position:"absolute", top:-30, right:-30, width:120, height:120, borderRadius:"50%", background:"rgba(203,207,212,.04)"}}/>
                  <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
                    <div>
                      <span className="sans" style={{fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", color:GOLD, background:"rgba(203,207,212,.1)", padding:"4px 10px", borderRadius:2}}>{loan.tag}</span>
                      <p style={{fontSize: idx===0 ? 52 : 42, fontWeight:700, color:"white", lineHeight:1, marginTop:14}}>{loan.rate}</p>
                      <p className="sans" style={{fontSize:10, color:"rgba(255,255,255,.3)", marginTop:4}}>per annum</p>
                    </div>
                    <div style={{
                      width: idx===0 ? 48 : 40, height: idx===0 ? 48 : 40,
                      background:"rgba(203,207,212,.1)", borderRadius:4,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      border:`1px solid rgba(203,207,212,.15)`,
                      transform: hoveredLoan===idx ? "rotate(10deg)" : "none",
                      transition:"transform .3s",
                    }}>
                      <Icon name={loan.icon} size={idx===0?22:18} style={{color:GOLD}}/>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{padding: idx===0 ? "28px 32px" : "22px 24px"}}>
                  <h3 style={{fontSize: idx===0 ? 24 : 20, fontWeight:700, color:DARK, marginBottom:10}}>{loan.title}</h3>
                  <p className="sans" style={{fontSize:12, color:"rgba(43,58,76,.48)", lineHeight:1.85, marginBottom:20, fontWeight:300}}>{loan.desc}</p>
                  <div style={{
                    display:"flex", justifyContent:"space-between", alignItems:"center",
                    paddingTop:16, borderTop:"1px solid rgba(43,58,76,.07)",
                  }}>
                    <span className="sans" style={{fontSize:10, fontWeight:700, color:GOLD, textTransform:"uppercase", letterSpacing:".1em"}}>Apply Now</span>
                    <div style={{
                      width:30, height:30, borderRadius:"50%",
                      background: hoveredLoan===idx ? GOLD : "rgba(43,58,76,.07)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      transition:"background .25s", flexShrink:0,
                    }}>
                      <Icon name="arrow" size={13} style={{color: hoveredLoan===idx ? DARK : DARK}}/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ STATS BAR ══════════════ */}
      <section style={{background:DARK, padding:"0 80px", position:"relative", overflow:"hidden"}}>
        <div style={{position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(to right,transparent,${GOLD}50,transparent)`}}/>
        <div style={{position:"absolute", bottom:0, left:0, right:0, height:1, background:`linear-gradient(to right,transparent,rgba(203,207,212,.15),transparent)`}}/>

        <div style={{maxWidth:1320, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0}}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding:"64px 40px", textAlign:"center",
              borderRight: i < 3 ? "1px solid rgba(203,207,212,.08)" : "none",
              position:"relative", overflow:"hidden",
            }}>
              <div style={{
                width:48, height:48, borderRadius:"50%",
                background:"rgba(203,207,212,.07)", border:"1px solid rgba(203,207,212,.12)",
                display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px",
              }}>
                <Icon name={s.icon} size={20} style={{color:GOLD}}/>
              </div>
              <p style={{fontSize:52, fontWeight:700, color:"white", lineHeight:1, marginBottom:10}}>{s.value}</p>
              <p className="sans" style={{fontSize:11, color:"rgba(255,255,255,.35)", textTransform:"uppercase", letterSpacing:".12em", fontWeight:500}}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section style={{background:CREAM, padding:"130px 80px", position:"relative", overflow:"hidden"}}>
        {/* decorative large text */}
        <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", fontSize:180, fontWeight:700, fontStyle:"italic", color:"rgba(43,58,76,.025)", fontFamily:"'Cormorant Garamond',serif", pointerEvents:"none", userSelect:"none", whiteSpace:"nowrap"}}>Process</div>

        <div style={{maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1}}>
          <div style={{textAlign:"center", marginBottom:88}}>
            <div className="section-label section-label-dark" style={{justifyContent:"center"}}>
              <span className="sans" style={{fontSize:9, fontWeight:700, color:"rgba(43,58,76,.45)", textTransform:"uppercase", letterSpacing:".18em"}}>How It Works</span>
            </div>
            <h2 style={{fontSize:"clamp(42px,4.5vw,68px)", fontWeight:700, color:DARK, lineHeight:1.0}}>
              Funded in <em style={{fontStyle:"italic", fontWeight:300}}>3 easy steps</em>
            </h2>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:24, position:"relative"}}>
            {STEPS.map((step, idx) => (
              <div key={step.title} style={{
                background:"white", borderRadius:8, padding:"52px 40px",
                border:"1px solid rgba(43,58,76,.08)",
                boxShadow:"0 4px 24px rgba(43,58,76,.06)",
                position:"relative", overflow:"hidden",
                transition:"all .35s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-8px)"; e.currentTarget.style.boxShadow="0 28px 64px rgba(43,58,76,.14)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 24px rgba(43,58,76,.06)"; }}
              >
                {/* step number watermark */}
                <div style={{position:"absolute", top:16, right:20, fontFamily:"'Cormorant Garamond',serif", fontSize:96, fontWeight:700, color:`rgba(43,58,76,.04)`, lineHeight:1, userSelect:"none"}}>{step.num}</div>

                {/* Gold top bar on first */}
                {idx===0 && <div style={{position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(to right,${GOLD},transparent)`}}/>}

                {/* Icon orb */}
                <div style={{
                  width:64, height:64, borderRadius:"50%",
                  background: idx===1 ? DARK : `rgba(43,58,76,.06)`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  marginBottom:28, boxShadow: idx===1 ? `0 12px 32px rgba(43,58,76,.25)` : "none",
                }}>
                  <Icon name={step.icon} size={26} style={{color: idx===1 ? GOLD : DARK}}/>
                </div>

                {/* Connector line */}
                {idx < 2 && (
                  <div style={{
                    position:"absolute", right:-24, top:52, width:24, height:1,
                    background:`linear-gradient(to right,rgba(43,58,76,.15),transparent)`, zIndex:2,
                  }}/>
                )}

                <div style={{
                  display:"inline-block", background:`rgba(203,207,212,.15)`, borderRadius:2,
                  padding:"3px 10px", marginBottom:16,
                }}>
                  <span className="sans" style={{fontSize:10, fontWeight:700, color:GOLD, letterSpacing:".1em"}}>{step.num}</span>
                </div>
                <h3 style={{fontSize:28, fontWeight:700, color:DARK, marginBottom:12, lineHeight:1.1}}>{step.title}</h3>
                <p className="sans" style={{fontSize:13, color:"rgba(43,58,76,.48)", lineHeight:1.9, fontWeight:300}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ EMI CALCULATOR ══════════════ */}
      <section id="calculator" style={{background:DARK, padding:"130px 80px", position:"relative", overflow:"hidden"}}>
        <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:800, height:800, borderRadius:"50%", background:"radial-gradient(circle,rgba(203,207,212,.04) 0%,transparent 70%)", pointerEvents:"none"}}/>
        <div style={{position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(to right,transparent,${GOLD}50,transparent)`}}/>

        <div style={{maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1}}>
          <div style={{textAlign:"center", marginBottom:80}}>
            <div className="section-label section-label-light" style={{justifyContent:"center"}}>
              <span className="sans" style={{fontSize:9, fontWeight:700, color:GOLD, textTransform:"uppercase", letterSpacing:".18em"}}>Plan Your Loan</span>
            </div>
            <h2 style={{fontSize:"clamp(42px,4.5vw,68px)", fontWeight:700, color:"white", lineHeight:1.0}}>
              EMI <em style={{fontStyle:"italic", fontWeight:300, color:GOLD}}>Calculator</em>
            </h2>
          </div>

          <div style={{
            display:"grid", gridTemplateColumns:"1fr 1fr", borderRadius:8, overflow:"hidden",
            boxShadow:"0 60px 120px rgba(0,0,0,.4)", border:"1px solid rgba(203,207,212,.1)",
          }}>
            {/* Left controls */}
            <div style={{background:"rgba(255,255,255,.04)", backdropFilter:"blur(20px)", padding:"60px 52px", position:"relative", overflow:"hidden", borderRight:"1px solid rgba(203,207,212,.08)"}}>
              <div style={{position:"absolute", top:0, left:0, width:2, height:"100%", background:`linear-gradient(to bottom,${GOLD},transparent)`}}/>

              <h3 style={{fontSize:38, fontWeight:700, color:"white", marginBottom:52, lineHeight:1.1}}>
                Adjust your<br/><em style={{fontStyle:"italic", color:GOLD}}>preferences</em>
              </h3>

              {/* Amount slider */}
              <div style={{marginBottom:48}}>
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:18}}>
                  <span className="sans" style={{fontSize:10, color:"rgba(255,255,255,.3)", textTransform:"uppercase", letterSpacing:".12em", fontWeight:600}}>Loan Amount</span>
                  <span style={{fontSize:30, fontWeight:700, color:"white", lineHeight:1}}>₹{fmt(amount)}</span>
                </div>
                <input type="range" min={50000} max={5000000} step={50000} value={amount}
                  onChange={e=>setAmount(+e.target.value)}
                  style={{background:`linear-gradient(to right,${GOLD} ${apPct}%,rgba(255,255,255,.1) 0%)`}}/>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:10}}>
                  <span className="sans" style={{fontSize:10, color:"rgba(255,255,255,.2)"}}>₹50K</span>
                  <span className="sans" style={{fontSize:10, color:"rgba(255,255,255,.2)"}}>₹50L</span>
                </div>
              </div>

              {/* Tenure slider */}
              <div style={{marginBottom:48}}>
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:18}}>
                  <span className="sans" style={{fontSize:10, color:"rgba(255,255,255,.3)", textTransform:"uppercase", letterSpacing:".12em", fontWeight:600}}>Tenure</span>
                  <span style={{fontSize:30, fontWeight:700, color:"white"}}>{tenure} yrs</span>
                </div>
                <input type="range" min={1} max={30} step={1} value={tenure}
                  onChange={e=>setTenure(+e.target.value)}
                  style={{background:`linear-gradient(to right,${GOLD} ${tpPct}%,rgba(255,255,255,.1) 0%)`}}/>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:10}}>
                  <span className="sans" style={{fontSize:10, color:"rgba(255,255,255,.2)"}}>1 yr</span>
                  <span className="sans" style={{fontSize:10, color:"rgba(255,255,255,.2)"}}>30 yrs</span>
                </div>
              </div>

              {/* Rate */}
              <div style={{background:"rgba(203,207,212,.07)", border:"1px solid rgba(203,207,212,.16)", borderRadius:6, padding:"20px 24px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div>
                  <p className="sans" style={{fontSize:10, color:"rgba(255,255,255,.3)", textTransform:"uppercase", letterSpacing:".1em", marginBottom:5}}>Interest Rate</p>
                  <p className="sans" style={{fontSize:11, color:GOLD, fontWeight:500}}>Fixed · per annum</p>
                </div>
                <p style={{fontSize:46, fontWeight:700, color:GOLD, lineHeight:1}}>8.5%</p>
              </div>
            </div>

            {/* Right results */}
            <div style={{background:"white", padding:"60px 52px", display:"flex", flexDirection:"column"}}>
              {/* EMI display */}
              <div style={{marginBottom:36, paddingBottom:36, borderBottom:"1px solid rgba(43,58,76,.08)"}}>
                <p className="sans" style={{fontSize:10, color:"rgba(43,58,76,.35)", textTransform:"uppercase", letterSpacing:".14em", fontWeight:700, marginBottom:14}}>Monthly EMI</p>
                <p style={{fontSize:"clamp(56px,5.5vw,80px)", fontWeight:700, color:DARK, lineHeight:1}}>₹{fmt(emi)}</p>
                <p className="sans" style={{fontSize:13, color:"rgba(43,58,76,.35)", marginTop:10}}>for {tenure} year{tenure>1?"s":""} · {n} instalments</p>

                {/* Progress bar */}
                <div style={{marginTop:24}}>
                  <div style={{height:8, borderRadius:4, background:"rgba(43,58,76,.07)", overflow:"hidden"}}>
                    <div style={{height:"100%", width:`${Math.round(amount/total*100)}%`, background:`linear-gradient(to right,${DARK},${MID})`, borderRadius:4, transition:"width .6s ease"}}/>
                  </div>
                  <div style={{display:"flex", justifyContent:"space-between", marginTop:10}}>
                    <div style={{display:"flex", alignItems:"center", gap:6}}>
                      <div style={{width:8, height:8, borderRadius:2, background:DARK}}/>
                      <span className="sans" style={{fontSize:11, color:"rgba(43,58,76,.4)"}}>Principal {Math.round(amount/total*100)}%</span>
                    </div>
                    <div style={{display:"flex", alignItems:"center", gap:6}}>
                      <div style={{width:8, height:8, borderRadius:2, background:"rgba(43,58,76,.15)"}}/>
                      <span className="sans" style={{fontSize:11, color:"rgba(43,58,76,.4)"}}>Interest {Math.round(interest/total*100)}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div style={{flex:1, marginBottom:36}}>
                {[
                  ["Principal Amount", amount, false],
                  ["Total Interest",   interest, false],
                  ["Total Payment",    total,    true],
                ].map(([label, val, bold]) => (
                  <div key={label} style={{
                    display:"flex", justifyContent:"space-between", alignItems:"center",
                    padding:"16px 0",
                    borderBottom: label!=="Total Payment" ? "1px dashed rgba(43,58,76,.08)" : "none",
                  }}>
                    <span className="sans" style={{fontSize:14, color:"rgba(43,58,76,.45)", fontWeight: bold?600:400}}>{label}</span>
                    <span style={{fontSize: bold?32:22, fontWeight: bold?700:600, color: bold?GOLD:DARK}}>₹{fmt(val)}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary" style={{width:"100%", padding:"17px", fontSize:13, borderRadius:4}}>
                Apply for This Loan →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section style={{background:CREAM, padding:"130px 80px", position:"relative", overflow:"hidden"}}>
        <div style={{position:"absolute", top:"50%", right:-100, transform:"translateY(-50%)", fontSize:200, fontWeight:700, fontStyle:"italic", color:"rgba(43,58,76,.025)", fontFamily:"'Cormorant Garamond',serif", pointerEvents:"none", userSelect:"none", lineHeight:1}}>Trust</div>

        <div style={{maxWidth:1320, margin:"0 auto", position:"relative", zIndex:1}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:80, flexWrap:"wrap", gap:24}}>
            <div>
              <div className="section-label section-label-dark">
                <span className="sans" style={{fontSize:9, fontWeight:700, color:"rgba(43,58,76,.45)", textTransform:"uppercase", letterSpacing:".18em"}}>Testimonials</span>
              </div>
              <h2 style={{fontSize:"clamp(40px,4vw,64px)", fontWeight:700, color:DARK, lineHeight:1.0}}>
                Words from<br/><em style={{fontStyle:"italic", fontWeight:300}}>our customers</em>
              </h2>
            </div>
            <div style={{display:"flex", alignItems:"center", gap:6, paddingBottom:8}}>
              {[...Array(5)].map((_,i)=><Icon key={i} name="star" size={18} style={{color:GOLD}}/>)}
              <span className="sans" style={{fontSize:13, color:"rgba(43,58,76,.4)", marginLeft:12, fontWeight:400}}>4.9 · 12,400+ reviews</span>
            </div>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"1.25fr 1fr 1fr", gap:20}}>
            {TESTIMONIALS.map((t, idx) => (
              <div key={t.name} className="t-card" style={{boxShadow:"0 2px 20px rgba(43,58,76,.07)"}}>
                {/* Top accent */}
                <div style={{height:3, background: idx===0 ? `linear-gradient(to right,${DARK},${GOLD})` : `linear-gradient(to right,${GOLD}50,transparent)`}}/>
                <div style={{padding: idx===0 ? 40 : 30}}>
                  <div style={{display:"flex", gap:3, marginBottom:20}}>
                    {[...Array(t.rating)].map((_,i)=><Icon key={i} name="star" size={13} style={{color:GOLD}}/>)}
                  </div>
                  <Icon name="quote" size={32} style={{color:"rgba(43,58,76,.08)", marginBottom:14}}/>
                  <p className="sans" style={{fontSize: idx===0?15:13, color:"rgba(43,58,76,.52)", lineHeight:2, marginBottom:28, fontWeight:300}}>{t.text}</p>
                  <div style={{display:"flex", alignItems:"center", gap:14, borderTop:"1px solid rgba(43,58,76,.07)", paddingTop:20}}>
                    <div style={{
                      width:46, height:46, borderRadius:"50%", flexShrink:0,
                      background:`linear-gradient(135deg,${DARK},${MID})`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      border:`2px solid ${GOLD}`,
                    }}>
                      <span style={{fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontWeight:700, color:GOLD}}>
                        {t.name.split(" ").map(n=>n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p style={{fontWeight:700, color:DARK, fontSize:idx===0?20:17}}>{t.name}</p>
                      <p className="sans" style={{fontSize:11, color:"rgba(43,58,76,.38)", fontWeight:300}}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ + CONTACT ══════════════ */}
      <section id="contact" style={{background:DARK, padding:"130px 80px", position:"relative", overflow:"hidden"}}>
        <div style={{position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(to right,transparent,${GOLD}50,transparent)`}}/>

        <div style={{maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:100, alignItems:"start"}}>
          {/* Left sticky */}
          <div style={{position:"sticky", top:100}}>
            <div className="section-label section-label-light">
              <span className="sans" style={{fontSize:9, fontWeight:700, color:GOLD, textTransform:"uppercase", letterSpacing:".18em"}}>FAQ</span>
            </div>
            <h2 style={{fontSize:"clamp(38px,4vw,58px)", fontWeight:700, color:"white", lineHeight:1.0, marginBottom:20}}>
              Frequently<br/>asked<br/><em style={{fontStyle:"italic", fontWeight:300, color:GOLD}}>questions</em>
            </h2>
            <p className="sans" style={{fontSize:14, color:"rgba(255,255,255,.3)", lineHeight:2, maxWidth:260, marginBottom:36, fontWeight:300}}>
              Can't find an answer? Our experts are available 24 × 7.
            </p>
            <button className="btn-primary" style={{display:"flex", alignItems:"center", gap:10, marginBottom:48}}>
              <Icon name="phone" size={13} style={{color:DARK}}/> Contact Support
            </button>

            {/* Contact card */}
            <div style={{background:"rgba(255,255,255,.04)", border:"1px solid rgba(203,207,212,.12)", borderRadius:6, padding:"30px"}}>
              <p className="sans" style={{fontSize:9, color:GOLD, textTransform:"uppercase", letterSpacing:".14em", fontWeight:700, marginBottom:20}}>Get In Touch</p>
              {[
                {icon:"phone", text:"+91 20 4567 8900"},
                {icon:"mail",  text:"support@shivajifinance.in"},
                {icon:"map",   text:"Pune · Delhi · Mumbai · Bengaluru"},
              ].map(c=>(
                <div key={c.text} style={{display:"flex", alignItems:"center", gap:12, marginBottom:16}}>
                  <div style={{width:28, height:28, borderRadius:"50%", background:"rgba(203,207,212,.06)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
                    <Icon name={c.icon} size={12} style={{color:`rgba(203,207,212,.4)`}}/>
                  </div>
                  <span className="sans" style={{fontSize:12, color:"rgba(255,255,255,.35)", fontWeight:300}}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right FAQs */}
          <div style={{display:"flex", flexDirection:"column", gap:10}}>
            {FAQS.map((faq, idx) => (
              <div key={idx} className="faq-item" style={{
                background: activeFaq===idx ? "rgba(255,255,255,.05)" : "rgba(255,255,255,.03)",
                border:`1px solid rgba(203,207,212,${activeFaq===idx?.18:.08})`,
                transition:"all .3s",
              }}>
                <button
                  onClick={() => setFaq(activeFaq===idx ? null : idx)}
                  style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"24px 28px", background:"none", border:"none", cursor:"pointer", textAlign:"left", fontFamily:"'Cormorant Garamond',serif"}}
                >
                  <span style={{fontSize:20, fontWeight:600, color:"white", paddingRight:16}}>{faq.q}</span>
                  <div style={{
                    width:34, height:34, borderRadius:"50%", flexShrink:0,
                    background: activeFaq===idx ? GOLD : "rgba(203,207,212,.1)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    transition:"all .3s",
                  }}>
                    <Icon name="plus" size={14} style={{
                      color: activeFaq===idx ? DARK : GOLD,
                      transform: activeFaq===idx ? "rotate(45deg)" : "none",
                      transition:"transform .3s",
                    }}/>
                  </div>
                </button>
                <div className={`faq-body ${activeFaq===idx?"open":""}`}>
                  <p className="sans" style={{fontSize:14, color:"rgba(255,255,255,.42)", lineHeight:1.9, padding:"0 28px 24px", fontWeight:300}}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA BANNER ══════════════ */}
      <section style={{padding:"0 80px 100px", background:DARK}}>
        <div style={{maxWidth:1320, margin:"0 auto"}}>
          <div style={{
            position:"relative", overflow:"hidden", borderRadius:8,
            background:`linear-gradient(135deg,${MID} 0%,${DARK} 100%)`,
            padding:"80px 80px", display:"grid", gridTemplateColumns:"1fr auto",
            gap:60, alignItems:"center",
            border:"1px solid rgba(203,207,212,.1)",
            boxShadow:"0 40px 100px rgba(0,0,0,.3)",
          }}>
            {/* Decorative circles */}
            <div style={{position:"absolute", bottom:-100, right:300, width:320, height:320, borderRadius:"50%", border:"1px solid rgba(203,207,212,.06)", pointerEvents:"none"}}/>
            <div style={{position:"absolute", bottom:-160, right:200, width:500, height:500, borderRadius:"50%", border:"1px solid rgba(203,207,212,.03)", pointerEvents:"none"}}/>
            {/* Gold left accent */}
            <div style={{position:"absolute", top:0, left:0, width:4, height:"100%", background:GOLD}}/>
            {/* Top gradient line */}
            <div style={{position:"absolute", top:0, left:4, right:0, height:1, background:`linear-gradient(to right,${GOLD}40,transparent)`}}/>

            {/* Hex pattern */}
            <svg style={{position:"absolute", inset:0, width:"100%", height:"100%", opacity:.03}} xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="hex2" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse"><polygon points="30,2 58,17 58,47 30,62 2,47 2,17" fill="none" stroke={GOLD} strokeWidth="0.8"/></pattern></defs>
              <rect width="100%" height="100%" fill="url(#hex2)"/>
            </svg>

            <div style={{position:"relative", zIndex:1}}>
              <span className="sans" style={{fontSize:9, fontWeight:700, color:GOLD, textTransform:"uppercase", letterSpacing:".18em"}}>Get Started Today</span>
              <h2 style={{fontSize:"clamp(42px,4.5vw,72px)", fontWeight:700, color:"white", marginTop:14, lineHeight:.97}}>
                Your financial<br/><em style={{fontStyle:"italic", fontWeight:300, color:GOLD}}>freedom awaits.</em>
              </h2>
            </div>

            <div style={{position:"relative", zIndex:1, flexShrink:0, minWidth:320}}>
              <p className="sans" style={{fontSize:14, color:"rgba(255,255,255,.35)", lineHeight:2, marginBottom:32, fontWeight:300}}>
                Join 1,20,000+ Indians who chose transparency, fairness, and speed with Shivaji Finance.
              </p>
              <div style={{display:"flex", flexDirection:"column", gap:12}}>
                <button className="btn-primary" style={{padding:"17px 40px", fontSize:13, width:"100%"}}>Apply Now — It's Free</button>
                <button className="btn-ghost" style={{padding:"15px 40px", fontSize:13, width:"100%"}}>Talk to an Expert</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer id="about" style={{background:"#1e2d3e", padding:"80px 80px 40px", borderTop:`1px solid rgba(203,207,212,.08)`}}>
        <div style={{maxWidth:1320, margin:"0 auto"}}>
          <div style={{display:"grid", gridTemplateColumns:"1.8fr 1fr 1fr 1fr", gap:52, marginBottom:64}}>
            {/* Brand */}
            <div>
              <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:22}}>
                <div style={{width:40, height:40, background:`linear-gradient(135deg,${GOLD},rgba(203,207,212,.6))`, borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <span style={{fontFamily:"'Cormorant Garamond',serif", fontSize:24, fontWeight:700, color:DARK}}>S</span>
                </div>
                <div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:21, fontWeight:700, color:"white", letterSpacing:".01em"}}>Shivaji Finance</div>
                  <div className="sans" style={{fontSize:8, color:GOLD, letterSpacing:".2em", textTransform:"uppercase", fontWeight:600, marginTop:2}}>NBFC · Est. 2009</div>
                </div>
              </div>
              <p className="sans" style={{fontSize:13, color:"rgba(255,255,255,.22)", lineHeight:2, maxWidth:260, fontWeight:300, marginBottom:28}}>
                Making credit transparent, accessible, and honest for every Indian. Licensed NBFC regulated by the Reserve Bank of India.
              </p>
              <div style={{display:"flex", gap:8}}>
                {["RBI","SSL","PCI","ISO"].map(t=>(
                  <span key={t} className="sans" style={{fontSize:9, padding:"4px 10px", borderRadius:3, background:"rgba(203,207,212,.07)", border:"1px solid rgba(203,207,212,.12)", color:GOLD, fontWeight:700, letterSpacing:".1em"}}>{t}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              ["Products", ["Home Loan","Auto Loan","Business Loan","Education Loan"]],
              ["Company",  ["About Us","Leadership","Careers","Blog"]],
              ["Legal",    ["Privacy Policy","Terms of Use","Grievance","Cookies"]],
            ].map(([title, links]) => (
              <div key={title}>
                <p className="sans" style={{fontSize:9, fontWeight:700, color:GOLD, textTransform:"uppercase", letterSpacing:".16em", marginBottom:24}}>{title}</p>
                {links.map(link => (
                  <a key={link} href="#" className="sans" style={{display:"block", fontSize:13, color:"rgba(255,255,255,.22)", marginBottom:14, textDecoration:"none", fontWeight:300, letterSpacing:".02em", transition:"color .2s"}}
                    onMouseEnter={e=>e.target.style.color=GOLD}
                    onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.22)"}
                  >{link}</a>
                ))}
              </div>
            ))}
          </div>

  
        </div>
      </footer>
    </div>
  );
}