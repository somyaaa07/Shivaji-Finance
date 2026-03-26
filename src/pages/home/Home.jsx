import { useState, useEffect } from "react";
import ApplyPage from "../../common/Applynow";

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
    document:   <svg {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  };
  return icons[name] || null;
};

const LOANS = [
  { icon: "home",       title: "Home Loan",     rate: "7.5%", tag: "Most Popular",     desc: "Flexible tenures up to 30 years with zero processing fees" },
  { icon: "car",        title: "Auto Loan",      rate: "8.2%", tag: "Instant Disbursal",desc: "Same-day release with zero hidden charges guaranteed" },
  { icon: "briefcase",  title: "Business Loan",  rate: "9.0%", tag: "Up to ₹50 Lakhs", desc: "Flexible capital solutions tailored to your business" },
  { icon: "graduation", title: "Education Loan", rate: "6.8%", tag: "Lowest EMI",       desc: "Finance premier institutions with ease and confidence" },
];

const STATS = [
  { value: "₹2,500Cr+", label: "Disbursed",      icon: "rupee" },
  { value: "1.2L+",     label: "Customers",       icon: "users" },
  { value: "48 hrs",    label: "Avg. Approval",   icon: "clock" },
  { value: "4.9 ★",     label: "Customer Rating", icon: "star"  },
];

const STEPS = [
  { icon: "document", num: "01", title: "Apply Online",       desc: "3-minute digital application with just the basics" },
  { icon: "shield",   num: "02", title: "Quick Verification", desc: "Real-time document verification in minutes" },
  { icon: "zap",      num: "03", title: "Instant Disbursal",  desc: "Funds credited to your account within 48 hours" },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Homeowner · Mumbai",     text: "The entire process was seamless. Got my home loan approved in just 2 days!", rating: 5, initials: "PS" },
  { name: "Rahul Mehta",  role: "Business Owner · Delhi", text: "ClearFund offered the best rates and their support team was exceptional.",    rating: 5, initials: "RM" },
  { name: "Anita Rao",    role: "Student · Bengaluru",    text: "Education loan process was smooth and transparent. Highly recommended!",       rating: 5, initials: "AR" },
];

const FAQS = [
  { q: "What documents are required?",  a: "PAN card, Aadhar, bank statements (last 6 months), income proof, and address proof." },
  { q: "How long does approval take?",  a: "Most applications get approved within 48 hours after complete document submission." },
  { q: "Is there a prepayment penalty?",a: "No. We charge zero prepayment penalty — pay off anytime without extra cost." },
  { q: "Does it affect my CIBIL score?",a: "Checking your eligibility is a soft inquiry and has no impact on your CIBIL score." },
];

const D = "#2b394b";

export default function ClearFund() {
  const [amount, setAmount] = useState(1000000);
  const [tenure, setTenure] = useState(10);
  const [activeFaq, setFaq]  = useState(null);
  const [scrolled, setScrolled] = useState(false);
  // ── Apply Modal State ──
  const [showApplyForm, setShowApplyForm] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
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

  // ── Helper: open modal ──
  const openApply = () => setShowApplyForm(true);

  return (
    <div style={{ fontFamily:"'Sora',sans-serif", background:"#f5f3ef", color:D, overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}
        @keyframes shimX{0%{transform:translateX(-120%)}100%{transform:translateX(120%)}}

        .fu{animation:fadeUp .65s cubic-bezier(.22,.68,0,1.1) forwards;opacity:0}
        .fi{animation:fadeIn .7s ease forwards;opacity:0}
        .d1{animation-delay:.12s}.d2{animation-delay:.24s}.d3{animation-delay:.36s}
        .d4{animation-delay:.48s}.d5{animation-delay:.6s}

        .nl{color:rgba(255,255,255,.6);font-size:13px;font-weight:500;text-decoration:none;letter-spacing:.02em;position:relative;transition:color .2s}
        .nl::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1.5px;background:white;transition:width .25s}
        .nl:hover{color:white}.nl:hover::after{width:100%}

        .btn-dark{background:${D};color:white;border:none;border-radius:7px;padding:12px 28px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;letter-spacing:.02em;transition:transform .2s,box-shadow .2s}
        .btn-dark:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(43,57,75,.35)}
        .btn-outline{background:transparent;color:white;border:1.5px solid rgba(255,255,255,.3);border-radius:7px;padding:11px 22px;font-size:14px;font-weight:500;cursor:pointer;font-family:inherit;transition:all .2s}
        .btn-outline:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.6)}

        input[type=range]{-webkit-appearance:none;width:100%;height:4px;border-radius:4px;outline:none;cursor:pointer}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:${D};border:3px solid white;box-shadow:0 2px 10px rgba(43,57,75,.4);cursor:pointer}

        .loan-card{background:white;border-radius:18px;padding:30px;cursor:pointer;border:1px solid rgba(43,57,75,.07);transition:transform .3s,box-shadow .3s;position:relative;overflow:hidden}
        .loan-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:${D};transform:scaleX(0);transform-origin:left;transition:transform .35s}
        .loan-card:hover{transform:translateY(-7px);box-shadow:0 22px 56px rgba(43,57,75,.12)}
        .loan-card:hover::after{transform:scaleX(1)}

        .step-card{background:white;border-radius:20px;padding:38px 32px;border:1px solid rgba(43,57,75,.07);transition:transform .3s,box-shadow .3s;position:relative;overflow:hidden}
        .step-card:hover{transform:translateY(-6px);box-shadow:0 20px 52px rgba(43,57,75,.11)}

        .t-card{background:white;border-radius:18px;padding:32px;border:1px solid rgba(43,57,75,.07);transition:transform .3s,box-shadow .3s}
        .t-card:hover{transform:translateY(-5px);box-shadow:0 18px 48px rgba(43,57,75,.1)}

        .faq-body{max-height:0;overflow:hidden;transition:max-height .35s ease}
        .faq-body.open{max-height:150px}

        .shimmer-btn{position:relative;overflow:hidden}
        .shimmer-btn::after{content:'';position:absolute;top:0;left:0;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent);animation:shimX 3.5s ease infinite}
      `}</style>

      {/* ══════════ APPLY MODAL ══════════ */}
      {showApplyForm && (
        <ApplyPage asModal onClose={() => setShowApplyForm(false)} />
      )}

      {/* ══════════ HERO ══════════ */}
      <section style={{position:"relative",height:"100vh",minHeight:700,overflow:"hidden"}}>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85&auto=format&fit=crop"
          alt="Dream home"
          style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 60%",filter:"brightness(.38) saturate(.7)"}}
        />
        <div style={{position:"absolute",inset:0,background:`linear-gradient(115deg,${D}ee 0%,${D}bb 50%,rgba(43,57,75,.3) 100%)`}}/>
        {[16,34,52,70,86].map(p=>(
          <div key={p} style={{position:"absolute",top:0,bottom:0,left:`${p}%`,width:1,background:"rgba(255,255,255,.04)"}}/>
        ))}

        <div style={{position:"relative",zIndex:2,height:"100%",display:"flex",alignItems:"center",padding:"0 72px",gap:72,maxWidth:1380,margin:"0 auto"}}>
          {/* Left headline */}
          <div style={{flex:1}}>
            <div className="fu" style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.09)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.13)",borderRadius:100,padding:"6px 16px",marginBottom:30}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:"#6ee7b7",display:"inline-block",animation:"blink 2s infinite"}}/>
              <span style={{fontSize:11,color:"rgba(255,255,255,.75)",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase"}}>Trusted by 1,00,000+ Indians</span>
            </div>

            <h1 className="fu d1" style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(54px,6.5vw,92px)",lineHeight:1.0,fontWeight:800,color:"white",marginBottom:26}}>
              Smart Loans<br/>
              for Your<br/>
              <em style={{fontStyle:"italic",color:"rgba(255,255,255,.55)"}}>Dreams.</em>
            </h1>

            <p className="fu d2" style={{fontSize:16,color:"rgba(255,255,255,.5)",lineHeight:1.9,maxWidth:420,marginBottom:40}}>
              Get instant approval, competitive rates, and zero hidden charges. Your financial freedom starts here.
            </p>

            <div className="fu d3" style={{display:"flex",gap:12,marginBottom:48}}>
              {/* ── CHECK ELIGIBILITY BUTTON ── */}
              <button className="btn-dark" style={{padding:"14px 36px",fontSize:15,borderRadius:8}} onClick={openApply}>
                Check Eligibility →
              </button>
              <button className="btn-outline" style={{padding:"14px 24px",fontSize:15,borderRadius:8,display:"flex",alignItems:"center",gap:8}}>
                <Icon name="phone" size={15} style={{color:"white"}}/> Talk to Expert
              </button>
            </div>

            <div className="fu d4" style={{display:"flex",gap:24}}>
              {["RBI Regulated","256-bit SSL","Zero Hidden Fees"].map(b=>(
                <div key={b} style={{display:"flex",alignItems:"center",gap:7}}>
                  <div style={{width:18,height:18,borderRadius:"50%",background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.18)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Icon name="check" size={9} style={{color:"rgba(255,255,255,.8)"}}/>
                  </div>
                  <span style={{fontSize:12,color:"rgba(255,255,255,.4)",fontWeight:500}}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right float card */}
          <div className="fu d3" style={{width:375,flexShrink:0,animation:"floatY 5s ease-in-out infinite",animationDelay:"1.2s"}}>
            <div style={{
              background:"rgba(255,255,255,.065)",backdropFilter:"blur(28px)",
              border:"1px solid rgba(255,255,255,.13)",borderRadius:24,
              padding:34,boxShadow:"0 40px 100px rgba(0,0,0,.45)",
            }}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                <div>
                  <p style={{fontSize:10,color:"rgba(255,255,255,.35)",textTransform:"uppercase",letterSpacing:".12em",marginBottom:8}}>Pre-approved Offer</p>
                  <p style={{fontFamily:"'Playfair Display',serif",fontSize:54,fontWeight:700,color:"white",lineHeight:1}}>₹15L</p>
                </div>
                <div style={{background:"white",width:48,height:48,borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <Icon name="zap" size={22} style={{color:D}}/>
                </div>
              </div>
              <p style={{fontSize:12,color:"rgba(255,255,255,.28)",marginBottom:26}}>Exclusive offer · valid 72 hours</p>

              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:26}}>
                {[["Rate","7.5%"],["Tenure","30 yrs"],["EMI","₹12,450"]].map(([l,v])=>(
                  <div key={l} style={{background:"rgba(255,255,255,.07)",borderRadius:11,padding:"11px 6px",textAlign:"center",border:"1px solid rgba(255,255,255,.08)"}}>
                    <p style={{fontSize:9,color:"rgba(255,255,255,.3)",textTransform:"uppercase",letterSpacing:".1em",marginBottom:5}}>{l}</p>
                    <p style={{fontSize:15,fontWeight:700,color:"white"}}>{v}</p>
                  </div>
                ))}
              </div>

              <div style={{height:1,background:"rgba(255,255,255,.09)",marginBottom:20}}/>
              {[["Processing Fee","₹0"],["Prepayment Charge","None"]].map(([k,v])=>(
                <div key={k} style={{display:"flex",justifyContent:"space-between",marginBottom:10}}>
                  <span style={{fontSize:13,color:"rgba(255,255,255,.38)"}}>{k}</span>
                  <span style={{fontSize:13,fontWeight:700,color:"rgba(255,255,255,.82)"}}>{v}</span>
                </div>
              ))}
              <div style={{marginBottom:6}}/>

              {/* ── CLAIM THIS OFFER BUTTON ── */}
              <button className="btn-dark shimmer-btn" style={{width:"100%",padding:"14px",fontSize:15,borderRadius:12}} onClick={openApply}>
                Claim This Offer →
              </button>
              <p style={{textAlign:"center",fontSize:11,color:"rgba(255,255,255,.22)",marginTop:12}}>No CIBIL impact · check freely</p>
            </div>

            <div style={{marginTop:14,background:"rgba(255,255,255,.08)",backdropFilter:"blur(12px)",borderRadius:100,border:"1px solid rgba(255,255,255,.11)",padding:"9px 18px",display:"inline-flex",alignItems:"center",gap:8,float:"right"}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:"#6ee7b7",display:"inline-block",animation:"blink 1.6s infinite"}}/>
              <span style={{fontSize:12,color:"rgba(255,255,255,.6)",fontWeight:500}}>2,345 applied today</span>
            </div>
          </div>
        </div>

        <div style={{position:"absolute",bottom:30,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:7,opacity:.35}}>
          <span style={{fontSize:10,color:"white",letterSpacing:".16em",textTransform:"uppercase"}}>Scroll</span>
          <div style={{width:1,height:40,background:"linear-gradient(to bottom,white,transparent)"}}/>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <div style={{background:D,padding:"0 72px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
          {STATS.map((s,i)=>(
            <div key={s.label} style={{
              padding:"48px 32px",textAlign:"center",
              borderRight:i<3?"1px solid rgba(255,255,255,.09)":"none",
              transition:"background .2s",cursor:"default",
            }}
            onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.04)"}
            onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
              <Icon name={s.icon} size={24} style={{color:"rgba(255,255,255,.28)",margin:"0 auto 14px"}}/>
              <p style={{fontFamily:"'Playfair Display',serif",fontSize:44,fontWeight:700,color:"white",lineHeight:1}}>{s.value}</p>
              <p style={{fontSize:11,color:"rgba(255,255,255,.38)",marginTop:8,textTransform:"uppercase",letterSpacing:".12em"}}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ LOANS ══════════ */}
      <section style={{padding:"110px 72px",background:"#f5f3ef"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"flex-end",marginBottom:60}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                <div style={{height:2,width:28,background:D}}/>
                <span style={{fontSize:11,fontWeight:700,color:"rgba(43,57,75,.45)",textTransform:"uppercase",letterSpacing:".14em"}}>Our Products</span>
              </div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(38px,4vw,62px)",fontWeight:800,color:D,lineHeight:1.05}}>
                Loans for<br/><em style={{fontStyle:"italic"}}>every need</em>
              </h2>
            </div>
            <div>
              <p style={{fontSize:15,color:"rgba(43,57,75,.48)",lineHeight:1.85,maxWidth:360,marginBottom:24}}>
                Carefully designed loan products — fair, transparent, and built for real people with real ambitions.
              </p>
              {/* ── COMPARE ALL LOANS BUTTON ── */}
              <button className="btn-dark" style={{borderRadius:8}} onClick={openApply}>Compare All Loans →</button>
            </div>
          </div>

          {/* 4-col grid */}
          <div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr 1fr 1fr",gap:18,alignItems:"start"}}>
            {LOANS.map((loan,idx)=>(
              <div key={loan.title} className="loan-card" style={{paddingTop:idx===0?38:28}} onClick={openApply}>
                <div style={{width:52,height:52,background:"rgba(43,57,75,.07)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20}}>
                  <Icon name={loan.icon} size={22} style={{color:D}}/>
                </div>
                <span style={{display:"inline-block",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:".08em",color:"rgba(43,57,75,.4)",background:"rgba(43,57,75,.06)",padding:"4px 10px",borderRadius:100,marginBottom:14}}>{loan.tag}</span>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:21,fontWeight:700,color:D,marginBottom:8}}>{loan.title}</h3>
                <p style={{fontSize:idx===0?40:34,fontWeight:800,color:D,lineHeight:1,marginBottom:12}}>{loan.rate}</p>
                <p style={{fontSize:13,color:"rgba(43,57,75,.48)",lineHeight:1.75,marginBottom:24}}>{loan.desc}</p>
                <div style={{borderTop:"1px solid rgba(43,57,75,.08)",paddingTop:18,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:13,fontWeight:600,color:D}}>Apply Now</span>
                  <div style={{width:30,height:30,borderRadius:"50%",background:"rgba(43,57,75,.07)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Icon name="arrow" size={13} style={{color:D}}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section style={{background:D,padding:"110px 72px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:240,fontFamily:"'Playfair Display',serif",fontWeight:800,color:"rgba(255,255,255,.022)",lineHeight:1,userSelect:"none",whiteSpace:"nowrap",pointerEvents:"none"}}>PROCESS</div>

        <div style={{maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1}}>
          <div style={{textAlign:"center",marginBottom:72}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:16}}>
              <div style={{height:1,width:32,background:"rgba(255,255,255,.2)"}}/>
              <span style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.38)",textTransform:"uppercase",letterSpacing:".14em"}}>Simple Process</span>
              <div style={{height:1,width:32,background:"rgba(255,255,255,.2)"}}/>
            </div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(38px,4vw,60px)",fontWeight:800,color:"white"}}>Funded in 3 easy steps</h2>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 40px 1fr 40px 1fr",alignItems:"start",gap:0}}>
            {STEPS.map((step,idx)=>(
              <>
                <div key={step.title} className="step-card">
                  <div style={{position:"absolute",top:18,right:22,fontFamily:"'Playfair Display',serif",fontSize:72,fontWeight:800,color:"rgba(43,57,75,.05)",lineHeight:1}}>{step.num}</div>
                  <div style={{width:60,height:60,background:D,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:24,boxShadow:"0 8px 24px rgba(43,57,75,.22)"}}>
                    <Icon name={step.icon} size={26} style={{color:"white"}}/>
                  </div>
                  <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700,color:D,marginBottom:10}}>{step.title}</h3>
                  <p style={{fontSize:14,color:"rgba(43,57,75,.5)",lineHeight:1.8}}>{step.desc}</p>
                </div>
                {idx<2 && (
                  <div key={`sep-${idx}`} style={{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:56}}>
                    <Icon name="arrow" size={20} style={{color:"rgba(255,255,255,.2)"}}/>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ EMI CALCULATOR ══════════ */}
      <section style={{background:"#f5f3ef",padding:"110px 72px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",borderRadius:26,overflow:"hidden",boxShadow:"0 28px 80px rgba(43,57,75,.13)",border:"1px solid rgba(43,57,75,.09)"}}>

            {/* Left dark */}
            <div style={{background:D,padding:"60px 52px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",bottom:-70,right:-70,width:220,height:220,borderRadius:"50%",background:"rgba(255,255,255,.03)"}}/>
              <div style={{position:"absolute",top:-50,left:-50,width:160,height:160,borderRadius:"50%",background:"rgba(255,255,255,.025)"}}/>
              <div style={{position:"relative",zIndex:1}}>
                <span style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.32)",textTransform:"uppercase",letterSpacing:".14em"}}>Plan Your Loan</span>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:46,fontWeight:800,color:"white",marginTop:10,marginBottom:48,lineHeight:1.1}}>EMI<br/>Calculator</h2>

                <div style={{marginBottom:40}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>
                    <span style={{fontSize:11,color:"rgba(255,255,255,.38)",textTransform:"uppercase",letterSpacing:".1em",fontWeight:600}}>Loan Amount</span>
                    <span style={{fontSize:22,fontWeight:800,color:"white"}}>₹{fmt(amount)}</span>
                  </div>
                  <input type="range" min={50000} max={5000000} step={50000} value={amount} onChange={e=>setAmount(+e.target.value)}
                    style={{background:`linear-gradient(to right,white ${apPct}%,rgba(255,255,255,.14) 0%)`}}/>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:6}}>
                    <span style={{fontSize:11,color:"rgba(255,255,255,.22)"}}>₹50K</span>
                    <span style={{fontSize:11,color:"rgba(255,255,255,.22)"}}>₹50L</span>
                  </div>
                </div>

                <div style={{marginBottom:40}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>
                    <span style={{fontSize:11,color:"rgba(255,255,255,.38)",textTransform:"uppercase",letterSpacing:".1em",fontWeight:600}}>Tenure</span>
                    <span style={{fontSize:22,fontWeight:800,color:"white"}}>{tenure} years</span>
                  </div>
                  <input type="range" min={1} max={30} step={1} value={tenure} onChange={e=>setTenure(+e.target.value)}
                    style={{background:`linear-gradient(to right,white ${tpPct}%,rgba(255,255,255,.14) 0%)`}}/>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:6}}>
                    <span style={{fontSize:11,color:"rgba(255,255,255,.22)"}}>1 yr</span>
                    <span style={{fontSize:11,color:"rgba(255,255,255,.22)"}}>30 yrs</span>
                  </div>
                </div>

                <div style={{background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.1)",borderRadius:14,padding:"18px 22px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <p style={{fontSize:11,color:"rgba(255,255,255,.32)",textTransform:"uppercase",letterSpacing:".1em"}}>Interest Rate</p>
                    <p style={{fontSize:11,color:"rgba(255,255,255,.22)",marginTop:3}}>fixed, per annum</p>
                  </div>
                  <p style={{fontFamily:"'Playfair Display',serif",fontSize:38,fontWeight:700,color:"white"}}>8.5%</p>
                </div>
              </div>
            </div>

            {/* Right white */}
            <div style={{background:"white",padding:"60px 52px",display:"flex",flexDirection:"column"}}>
              <div style={{paddingBottom:36,marginBottom:36,borderBottom:"1px solid rgba(43,57,75,.08)"}}>
                <p style={{fontSize:11,color:"rgba(43,57,75,.32)",textTransform:"uppercase",letterSpacing:".14em",fontWeight:700,marginBottom:12}}>Monthly EMI</p>
                <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(52px,5vw,76px)",fontWeight:800,color:D,lineHeight:1}}>₹{fmt(emi)}</p>
                <p style={{fontSize:13,color:"rgba(43,57,75,.35)",marginTop:10}}>for {tenure} years · {n} instalments</p>
                <div style={{marginTop:24,height:8,borderRadius:4,background:"rgba(43,57,75,.07)",overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${(amount/total)*100}%`,background:D,borderRadius:4,transition:"width .5s ease"}}/>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:7}}>
                  <span style={{fontSize:11,color:"rgba(43,57,75,.38)"}}>Principal {Math.round(amount/total*100)}%</span>
                  <span style={{fontSize:11,color:"rgba(43,57,75,.38)"}}>Interest {Math.round(interest/total*100)}%</span>
                </div>
              </div>

              <div style={{flex:1,marginBottom:32}}>
                {[["Principal Amount",amount,false],["Total Interest",interest,false],["Total Payment",total,true]].map(([label,val,bold])=>(
                  <div key={label} style={{display:"flex",justifyContent:"space-between",padding:"13px 0",borderBottom:label!=="Total Payment"?"1px dashed rgba(43,57,75,.09)":"none"}}>
                    <span style={{fontSize:14,color:"rgba(43,57,75,.48)",fontWeight:bold?600:400}}>{label}</span>
                    <span style={{fontSize:14,fontWeight:bold?800:600,color:bold?D:"rgba(43,57,75,.72)"}}>₹{fmt(val)}</span>
                  </div>
                ))}
              </div>

              {/* ── APPLY FOR THIS LOAN BUTTON ── */}
              <button className="btn-dark" style={{width:"100%",padding:"15px",fontSize:15,borderRadius:10}} onClick={openApply}>
                Apply for this Loan →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section style={{background:D,padding:"110px 72px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,right:0,width:450,height:450,borderRadius:"50%",background:"rgba(255,255,255,.025)",transform:"translate(35%,-35%)"}}/>
        <div style={{position:"absolute",bottom:0,left:0,width:300,height:300,borderRadius:"50%",background:"rgba(255,255,255,.02)",transform:"translate(-35%,35%)"}}/>

        <div style={{maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:64,flexWrap:"wrap",gap:24}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                <div style={{height:1,width:28,background:"rgba(255,255,255,.2)"}}/>
                <span style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.35)",textTransform:"uppercase",letterSpacing:".14em"}}>Testimonials</span>
              </div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(36px,4vw,58px)",fontWeight:800,color:"white",lineHeight:1.05}}>
                What our<br/><em style={{fontStyle:"italic"}}>customers say</em>
              </h2>
            </div>
            <div style={{display:"flex",gap:4,alignItems:"center"}}>
              {[...Array(5)].map((_,i)=><Icon key={i} name="star" size={18} style={{color:"rgba(255,255,255,.45)"}}/>)}
              <span style={{fontSize:14,color:"rgba(255,255,255,.45)",marginLeft:10,fontWeight:600}}>4.9 / 5.0</span>
            </div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1.15fr 1fr 1fr",gap:20}}>
            {TESTIMONIALS.map((t,idx)=>(
              <div key={t.name} className="t-card" style={{padding:idx===0?40:30}}>
                <div style={{display:"flex",gap:2,marginBottom:18}}>
                  {[...Array(t.rating)].map((_,i)=><Icon key={i} name="star" size={13} style={{color:"#f59e0b"}}/>)}
                </div>
                <Icon name="quote" size={28} style={{color:"rgba(43,57,75,.1)",marginBottom:12}}/>
                <p style={{fontSize:idx===0?16:14,color:"rgba(43,57,75,.62)",lineHeight:1.9,marginBottom:26}}>{t.text}</p>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:44,height:44,borderRadius:"50%",background:D,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:"white"}}>{t.initials}</div>
                  <div>
                    <p style={{fontWeight:700,color:D,fontSize:15}}>{t.name}</p>
                    <p style={{fontSize:12,color:"rgba(43,57,75,.4)"}}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section style={{background:"#f5f3ef",padding:"110px 72px"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1.5fr",gap:80,alignItems:"start"}}>
          <div style={{position:"sticky",top:100}}>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
              <div style={{height:2,width:28,background:D}}/>
              <span style={{fontSize:11,fontWeight:700,color:"rgba(43,57,75,.4)",textTransform:"uppercase",letterSpacing:".14em"}}>FAQ</span>
            </div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(36px,4vw,54px)",fontWeight:800,color:D,lineHeight:1.1,marginBottom:18}}>
              Frequently<br/>asked<br/><em style={{fontStyle:"italic"}}>questions</em>
            </h2>
            <p style={{fontSize:14,color:"rgba(43,57,75,.42)",lineHeight:1.85,maxWidth:260,marginBottom:32}}>
              Can't find an answer? Our team is here 24/7.
            </p>
            <button className="btn-dark" style={{borderRadius:8,display:"flex",alignItems:"center",gap:8}}>
              <Icon name="phone" size={14} style={{color:"white"}}/> Contact Support
            </button>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {FAQS.map((faq,idx)=>(
              <div key={idx} style={{
                background:"white",borderRadius:16,overflow:"hidden",
                border:`1px solid rgba(43,57,75,${activeFaq===idx?.12:.06})`,
                boxShadow:activeFaq===idx?"0 8px 32px rgba(43,57,75,.09)":"none",
                transition:"all .3s",
              }}>
                <button onClick={()=>setFaq(activeFaq===idx?null:idx)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"22px 26px",background:"none",border:"none",cursor:"pointer",textAlign:"left",fontFamily:"inherit"}}>
                  <span style={{fontSize:15,fontWeight:600,color:D,paddingRight:16}}>{faq.q}</span>
                  <div style={{width:30,height:30,borderRadius:"50%",flexShrink:0,background:activeFaq===idx?D:"rgba(43,57,75,.07)",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .25s"}}>
                    <Icon name="plus" size={13} style={{color:activeFaq===idx?"white":D,transform:activeFaq===idx?"rotate(45deg)":"none",transition:"transform .25s"}}/>
                  </div>
                </button>
                <div className={`faq-body ${activeFaq===idx?"open":""}`}>
                  <p style={{fontSize:14,color:"rgba(43,57,75,.52)",lineHeight:1.85,padding:"0 26px 22px"}}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{padding:"80px 72px",background:"#f5f3ef"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{
            background:D,borderRadius:28,padding:"76px 72px",
            display:"grid",gridTemplateColumns:"1fr auto",gap:48,alignItems:"center",
            position:"relative",overflow:"hidden",
          }}>
            <div style={{position:"absolute",right:-90,top:-90,width:340,height:340,borderRadius:"50%",border:"1px solid rgba(255,255,255,.06)"}}/>
            <div style={{position:"absolute",right:60,bottom:-120,width:220,height:220,borderRadius:"50%",border:"1px solid rgba(255,255,255,.04)"}}/>
            <div style={{position:"absolute",left:400,top:0,bottom:0,width:1,background:"rgba(255,255,255,.055)"}}/>

            <div style={{position:"relative",zIndex:1}}>
              <span style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.36)",textTransform:"uppercase",letterSpacing:".14em"}}>Get Started Today</span>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(38px,4vw,64px)",fontWeight:800,color:"white",marginTop:10,lineHeight:1.05}}>
                Ready to get<br/><em style={{fontStyle:"italic",color:"rgba(255,255,255,.55)"}}>started?</em>
              </h2>
            </div>

            <div style={{position:"relative",zIndex:1}}>
              <p style={{fontSize:15,color:"rgba(255,255,255,.42)",lineHeight:1.85,maxWidth:300,marginBottom:28}}>
                Join thousands of happy customers who trusted ClearFund for their financial journey.
              </p>
              <div style={{display:"flex",gap:12}}>
                <button className="btn-outline">Learn More</button>
                {/* ── APPLY NOW — FREE BUTTON ── */}
                <button
                  onClick={openApply}
                  style={{background:"white",color:D,border:"none",borderRadius:7,padding:"13px 32px",fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"all .2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 10px 32px rgba(0,0,0,.22)"}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none"}}>
                  Apply Now — Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}