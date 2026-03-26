import { useState } from "react";
import {
   Mail, Phone, MapPin,
  User, Home, Briefcase, GraduationCap, Car, Coins, Building2, Stethoscope,
  FileText, ArrowRight, ChevronRight, Shield, BadgeCheck, Lock, Award, Check,
  MessageCircle,
} from "lucide-react";

const RESOURCE_LINKS   = ["About Us", "Press & Media", "Investor Relations", "Our Mission", "Blog"];
const LEGAL_LINKS    = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"];
const COMPANY_LINKS = ["Help Center", "Market Data", "Calculator Tools", "API Access"];

const SOCIALS = [
//   { label: "Twitter", icon: <Twitter size={14} /> },
//   { label: "LinkedIn", icon: <Linkedin size={14} /> },
//   { label: "YouTube",  icon: <Youtube size={14} /> },
];

const BADGES = [
  { label: "SEC Registered", icon: <Shield size={10} /> },
  { label: "FINRA Member",   icon: <BadgeCheck size={10} /> },
  { label: "SIPC Protected", icon: <Lock size={10} /> },
  { label: "SOC 2 Type II",  icon: <Award size={10} /> },
];

const CONTACT = [
  { label: "Email",   value: "hello@shivajifinance.com", icon: <Mail size={13} /> },
  { label: "Phone",   value: "+1 (800) 555-0192",        icon: <Phone size={13} /> },
  { label: "Address", value: "Galaxy Diamond Palaza,Gr.Noida,201030", icon: <MapPin size={13} /> },
];

const SERVICES = [
  { name: "Personal Loan",         icon: <User size={13} /> },
  { name: "Home Loan",             icon: <Home size={13} /> },
  { name: "Business Loan",         icon: <Briefcase size={13} /> },
  { name: "Education Loan",        icon: <GraduationCap size={13} /> },
  { name: "Auto Loan",             icon: <Car size={13} /> },
  { name: "Gold Loan",             icon: <Coins size={13} /> },
  { name: "Loan Against Property", icon: <Building2 size={13} /> },
  { name: "Medical Loan",          icon: <Stethoscope size={13} /> },
];

const HOURS = [
  { day: "Mon – Fri", time: "9 AM – 6 PM",  open: true },
  { day: "Saturday",  time: "10 AM – 4 PM", open: true },
  { day: "Sunday",    time: "Closed",        open: false },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent]   = useState(false);
  if (sent) return (
    <div style={{ display:"flex", alignItems:"center", gap:8, color:"#2b394b", fontSize:"0.82rem", fontWeight:600 }}>
      <span style={{ width:20, height:20, borderRadius:"50%", background:"#2b394b", color:"#cdcde4", display:"flex", alignItems:"center", justifyContent:"center" }}><Check size={11}/></span>
      You're on the list!
    </div>
  );
  return (
    <div style={{ display:"flex", gap:6 }}>
      <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com"
        style={{ flex:1, borderRadius:7, padding:"8px 12px", fontSize:"0.79rem", background:"rgba(43,57,75,0.07)", border:"1px solid rgba(43,57,75,0.18)", color:"#2b394b", outline:"none", fontFamily:"inherit" }}
      />
      <button onClick={()=>{ if(email.trim()){ setSent(true); setEmail(""); }}}
        style={{ borderRadius:7, padding:"8px 14px", fontSize:"0.79rem", fontWeight:700, background:"linear-gradient(135deg,#2b394b,#3d5266)", color:"#cdcde4", border:"none", cursor:"pointer", fontFamily:"inherit", display:"flex", alignItems:"center", gap:5 }}>
        Subscribe <ArrowRight size={12}/>
      </button>
    </div>
  );
}

function FLink({ children }) {
  const [h, setH] = useState(false);
  return (
    <a href="#" onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ display:"flex", alignItems:"center", gap:5, color: h ? "#2b394b" : "#5a7080", fontSize:"0.79rem", textDecoration:"none", padding:"3px 0", transition:"color 0.15s" }}>
      <ChevronRight size={10} style={{ opacity: h?1:0.3, transition:"all 0.15s", transform: h?"translateX(2px)":"none" }}/>
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .fr{ background:linear-gradient(180deg,#cacdd2 0%,#c4c8ce 100%); font-family:'DM Sans',sans-serif; position:relative; }
        .fr::before{ content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#2b394b,#cdcde4,#2b394b,transparent); }

        .nl-band{ padding:26px 32px; border-bottom:1px solid rgba(43,57,75,0.1); background:radial-gradient(ellipse at 50% -20%,rgba(43,57,75,0.06) 0%,transparent 60%); }
        .ca-strip{ padding:20px 32px; background:rgba(43,57,75,0.05); border-bottom:1px solid rgba(43,57,75,0.1); }

        .mg{
          display:grid;
          grid-template-columns:1.1fr 0.8fr 0.8fr 1.5fr 1fr;
          gap:24px; padding:32px 32px 24px; max-width:1360px; margin:0 auto;
        }
        @media(max-width:1100px){ .mg{ grid-template-columns:1fr 1fr 1fr; } }
        @media(max-width:680px) { .mg{ grid-template-columns:1fr 1fr; padding:20px 24px; } .nl-band,.ca-strip{ padding:18px 24px; } }
        @media(max-width:440px) { .mg{ grid-template-columns:1fr; } }

        .cl{ font-size:0.58rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#2b394b; opacity:0.5; margin:0 0 10px 0; }

        .soc{ width:30px; height:30px; border-radius:7px; border:1px solid rgba(43,57,75,0.18); background:rgba(43,57,75,0.06); color:#4a5d70; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.18s; }
        .soc:hover{ background:#2b394b; border-color:#2b394b; color:#cdcde4; }

        .sp{ display:flex; align-items:center; gap:7px; background:rgba(43,57,75,0.04); border:1px solid rgba(43,57,75,0.09); border-radius:7px; padding:6px 9px; text-decoration:none; transition:all 0.18s; }
        .sp:hover{ background:rgba(43,57,75,0.09); border-color:rgba(43,57,75,0.2); transform:translateX(2px); }
        .sp-ic{ width:22px; height:22px; border-radius:5px; background:rgba(43,57,75,0.08); border:1px solid rgba(43,57,75,0.12); display:flex; align-items:center; justify-content:center; color:#2b394b; flex-shrink:0; }

        .cr{ display:flex; align-items:flex-start; gap:9px; padding:7px 0; border-bottom:1px solid rgba(43,57,75,0.07); }
        .cr:last-child{ border-bottom:none; }
        .ci{ width:26px; height:26px; border-radius:6px; background:rgba(43,57,75,0.07); border:1px solid rgba(43,57,75,0.1); display:flex; align-items:center; justify-content:center; color:#2b394b; flex-shrink:0; margin-top:1px; }

        .btn-p{ display:inline-flex; align-items:center; gap:6px; background:linear-gradient(135deg,#2b394b,#3d5266); color:#cdcde4; border:none; border-radius:7px; padding:7px 14px; font-size:0.76rem; font-weight:700; cursor:pointer; text-decoration:none; font-family:inherit; box-shadow:0 3px 10px rgba(43,57,75,0.2); transition:all 0.18s; }
        .btn-p:hover{ transform:translateY(-1px); box-shadow:0 5px 16px rgba(43,57,75,0.3); }
        .btn-o{ display:inline-flex; align-items:center; gap:6px; background:transparent; color:#2b394b; border:1.5px solid rgba(43,57,75,0.3); border-radius:7px; padding:7px 14px; font-size:0.76rem; font-weight:600; cursor:pointer; text-decoration:none; font-family:inherit; transition:all 0.18s; }
        .btn-o:hover{ background:rgba(43,57,75,0.06); border-color:rgba(43,57,75,0.45); }

        .bdg{ display:inline-flex; align-items:center; gap:5px; font-size:0.62rem; font-weight:700; letter-spacing:0.06em; color:#2b394b; border:1px solid rgba(43,57,75,0.15); border-radius:5px; padding:4px 10px; background:rgba(43,57,75,0.04); }
        .br-row{ padding:9px 32px; border-top:1px solid rgba(43,57,75,0.08); border-bottom:1px solid rgba(43,57,75,0.08); }
        .bb{ padding:12px 32px; }
        .sg{ display:grid; grid-template-columns:1fr 1fr; gap:5px; }
      `}</style>

      <footer className="fr">

        {/* Newsletter */}
        <div className="nl-band">
          <div style={{ maxWidth:1360, margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:18 }}>
            <div>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.35rem", color:"#2b394b", margin:"0 0 3px 0" }}>Stay ahead of the market.</h2>
              <p style={{ color:"#5a7080", fontSize:"0.78rem", margin:0 }}>Weekly insights and market analysis — straight to your inbox.</p>
            </div>
            <div style={{ width:"100%", maxWidth:360 }}><NewsletterForm/></div>
          </div>
        </div>

  

       
        <div className="mg">

          
          <div>
            <a href="/" style={{ textDecoration:"none", display:"inline-block", marginBottom:8 }}>
              <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.15rem", color:"#2b394b", fontWeight:700 }}>Shivaji Finance</span>
            </a>
            <p style={{ color:"#5a7080", fontSize:"0.76rem", lineHeight:1.65, marginBottom:12, maxWidth:195 }}>
              Intelligent investing for everyone. Build wealth with real-time data and expert tools.
            </p>
            <div style={{ display:"flex", gap:6, marginBottom:18 }}>
              {SOCIALS.map(s=><button key={s.label} className="soc" title={s.label}>{s.icon}</button>)}
            </div>
            <p className="cl">Company</p>
            <ul style={{ listStyle:"none" }}>
              {COMPANY_LINKS.map(l=><li key={l}><FLink>{l}</FLink></li>)}
            </ul>
          </div>

        
          <div>
            <p className="cl">Company</p>
            <ul style={{ listStyle:"none", marginBottom:16 }}>
              {RESOURCE_LINKS.map(l=><li key={l}><FLink>{l}</FLink></li>)}
            </ul>
            <p className="cl">Legal</p>
            <ul style={{ listStyle:"none" }}>
              {LEGAL_LINKS.map(l=><li key={l}><FLink>{l}</FLink></li>)}
            </ul>
          </div>

          
          <div>
            <p className="cl">Contact Us</p>
            {CONTACT.map(c=>(
              <div key={c.label} className="cr">
                <div className="ci">{c.icon}</div>
                <div>
                  <p style={{ fontSize:"0.58rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.07em", color:"#8aa0b0", margin:"0 0 1px 0" }}>{c.label}</p>
                  <p style={{ fontSize:"0.74rem", fontWeight:600, color:"#2b394b", margin:0, lineHeight:1.35 }}>{c.value}</p>
                </div>
              </div>
            ))}
            <a href="#" className="btn-p" style={{ marginTop:12 }}>
              <MessageCircle size={12}/> Get in Touch
            </a>
          </div>

          {/* Col 4: Services */}
          <div>
            <p className="cl">Our Services</p>
            <div className="sg">
              {SERVICES.map(s=>(
                <a key={s.name} href="#" className="sp">
                  <div className="sp-ic">{s.icon}</div>
                  <span style={{ fontSize:"0.69rem", fontWeight:600, color:"#2b394b", lineHeight:1.2 }}>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 5: CTA + Hours */}
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            <p className="cl">Get Started</p>

            <div style={{ background:"linear-gradient(145deg,#2b394b,#3d5266)", borderRadius:11, padding:"16px 14px", boxShadow:"0 5px 18px rgba(43,57,75,0.2)" }}>
              <p style={{ fontSize:"0.9rem", fontWeight:700, color:"#cdcde4", fontFamily:"'Playfair Display',serif", margin:"0 0 5px 0" }}>Ready to invest?</p>
              <p style={{ fontSize:"0.71rem", color:"rgba(205,205,228,0.6)", margin:"0 0 12px 0", lineHeight:1.55 }}>Open an account in minutes and start building wealth today.</p>
              <a href="#" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:5, background:"#cdcde4", color:"#2b394b", borderRadius:7, padding:"8px 0", fontSize:"0.74rem", fontWeight:700, textDecoration:"none" }}>
                Open Account <ArrowRight size={12}/>
              </a>
            </div>

            <div style={{ background:"rgba(43,57,75,0.05)", border:"1px solid rgba(43,57,75,0.1)", borderRadius:9, padding:"12px 13px" }}>
              <p style={{ fontSize:"0.57rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em", color:"#2b394b", opacity:0.5, margin:"0 0 8px 0" }}>Support Hours</p>
              {HOURS.map(h=>(
                <div key={h.day} style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                  <span style={{ fontSize:"0.71rem", color:"#5a7080" }}>{h.day}</span>
                  <span style={{ fontSize:"0.71rem", fontWeight:600, color: h.open?"#2b394b":"#b0b8c1" }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Badges */}
        <div className="br-row">
          <div style={{ maxWidth:1360, margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:8 }}>
            {BADGES.map(b=>(
              <span key={b.label} className="bdg">
                <span style={{ color:"#2b394b" }}>{b.icon}</span>{b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bb">
          <div style={{ maxWidth:1360, margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:8 }}>
            <p style={{ fontSize:"0.69rem", color:"#7a95a5", margin:0 }}>
              © {new Date().getFullYear()} Shivaji Finance, Inc. All rights reserved. Member{" "}
              <a href="#" style={{ color:"#4a6070", textDecoration:"none" }}>FINRA</a> / <a href="#" style={{ color:"#4a6070", textDecoration:"none" }}>SIPC</a>.
            </p>
            <div style={{ display:"flex", gap:14 }}>
              {["Privacy","Terms","Cookies","Accessibility"].map(i=>(
                <a key={i} href="#" style={{ fontSize:"0.69rem", color:"#4a5d70", textDecoration:"none" }}
                  onMouseEnter={e=>e.currentTarget.style.color="#2b394b"}
                  onMouseLeave={e=>e.currentTarget.style.color="#4a5d70"}>{i}</a>
              ))}
            </div>
          </div>
          <div style={{ maxWidth:1360, margin:"7px auto 0", borderTop:"1px solid rgba(43,57,75,0.08)", paddingTop:7 }}>
            <p style={{ fontSize:"0.62rem", color:"#8aa0b0", lineHeight:1.65, margin:0 }}>
              Investing involves risk, including the possible loss of principal. Past performance does not guarantee future results. Shivaji Finance does not provide tax, legal, or accounting advice. Please consult your own advisors before engaging in any transaction.
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}