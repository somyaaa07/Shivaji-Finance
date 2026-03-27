import { useState } from "react";
import {
  Mail, Phone, MapPin,
  User, Home, Briefcase, GraduationCap, Car, Coins, Building2, Stethoscope,
  ArrowRight, ChevronRight, Shield, BadgeCheck, Lock, Award, Check,
  MessageCircle,
} from "lucide-react";

const COMPANY_LINKS = ["HOME", "ABOUT US", "APPLY FOR LOANS", "CONTACT"];

const SOCIALS = [];

const BADGES = [
  { label: "SEC Registered", icon: <Shield size={10} /> },
  { label: "FINRA Member",   icon: <BadgeCheck size={10} /> },
  { label: "SIPC Protected", icon: <Lock size={10} /> },
  { label: "SOC 2 Type II",  icon: <Award size={10} /> },
];

const CONTACT = [
  { label: "Email",   value: "hello@shivajifinance.com",          icon: <Mail size={13} /> },
  { label: "Phone",   value: "+91 9999999999",                    icon: <Phone size={13} /> },
  { label: "Address", value: "Galaxy Diamond Plaza, Gr. Noida, 201030", icon: <MapPin size={13} /> },
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
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{ flex:1, borderRadius:7, padding:"8px 12px", fontSize:"0.79rem", background:"rgba(43,57,75,0.07)", border:"1px solid rgba(43,57,75,0.18)", color:"#2b394b", outline:"none", fontFamily:"inherit" }}
      />
      <button
        onClick={() => { if (email.trim()) { setSent(true); setEmail(""); }}}
        style={{ borderRadius:7, padding:"8px 14px", fontSize:"0.79rem", fontWeight:700, background:"linear-gradient(135deg,#2b394b,#3d5266)", color:"#cdcde4", border:"none", cursor:"pointer", fontFamily:"inherit", display:"flex", alignItems:"center", gap:5 }}>
        Subscribe <ArrowRight size={12}/>
      </button>
    </div>
  );
}

function FLink({ children }) {
  const [h, setH] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ display:"flex", alignItems:"center", gap:5, color: h ? "#2b394b" : "#5a7080", fontSize:"0.79rem", textDecoration:"none", padding:"3px 0", transition:"color 0.15s" }}>
      <ChevronRight size={10} style={{ opacity: h ? 1 : 0.3, transition:"all 0.15s", transform: h ? "translateX(2px)" : "none" }}/>
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .fr {
          background: linear-gradient(180deg, #cacdd2 0%, #c4c8ce 100%);
          font-family: 'DM Sans', sans-serif;
          position: relative;
        }
        .fr::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #2b394b, #cdcde4, #2b394b, transparent);
        }

        .nl-band {
          padding: 26px 32px;
          border-bottom: 1px solid rgba(43,57,75,0.1);
          background: radial-gradient(ellipse at 50% -20%, rgba(43,57,75,0.06) 0%, transparent 60%);
        }

        /* ── Main grid: 4 columns ── */
        .mg {
          display: grid;
          grid-template-columns: 1.1fr 1fr 1.5fr 1.1fr;
          gap: 28px;
          padding: 36px 32px 28px;
          max-width: 1360px;
          margin: 0 auto;
          align-items: start;
        }

        /* tablet */
        @media (max-width: 1024px) {
          .mg {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            padding: 28px 24px 22px;
          }
        }

        /* mobile */
        @media (max-width: 560px) {
          .mg {
            grid-template-columns: 1fr;
            padding: 22px 18px 18px;
          }
          .nl-band { padding: 18px 18px; }
        }

        .cl {
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2b394b;
          opacity: 0.5;
          margin: 0 0 10px 0;
        }

        .soc {
          width: 30px; height: 30px;
          border-radius: 7px;
          border: 1px solid rgba(43,57,75,0.18);
          background: rgba(43,57,75,0.06);
          color: #4a5d70;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.18s;
        }
        .soc:hover { background: #2b394b; border-color: #2b394b; color: #cdcde4; }

        .sp {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(43,57,75,0.04);
          border: 1px solid rgba(43,57,75,0.09);
          border-radius: 7px;
          padding: 6px 9px;
          text-decoration: none;
          transition: all 0.18s;
        }
        .sp:hover {
          background: rgba(43,57,75,0.09);
          border-color: rgba(43,57,75,0.2);
          transform: translateX(2px);
        }
        .sp-ic {
          width: 22px; height: 22px;
          border-radius: 5px;
          background: rgba(43,57,75,0.08);
          border: 1px solid rgba(43,57,75,0.12);
          display: flex; align-items: center; justify-content: center;
          color: #2b394b;
          flex-shrink: 0;
        }

        .cr {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 7px 0;
          border-bottom: 1px solid rgba(43,57,75,0.07);
        }
        .cr:last-child { border-bottom: none; }
        .ci {
          width: 26px; height: 26px;
          border-radius: 6px;
          background: rgba(43,57,75,0.07);
          border: 1px solid rgba(43,57,75,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #2b394b;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .btn-p {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, #2b394b, #3d5266);
          color: #cdcde4;
          border: none; border-radius: 7px;
          padding: 7px 14px;
          font-size: 0.76rem; font-weight: 700;
          cursor: pointer; text-decoration: none;
          font-family: inherit;
          box-shadow: 0 3px 10px rgba(43,57,75,0.2);
          transition: all 0.18s;
        }
        .btn-p:hover { transform: translateY(-1px); box-shadow: 0 5px 16px rgba(43,57,75,0.3); }

        .bdg {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.62rem; font-weight: 700; letter-spacing: 0.06em;
          color: #2b394b;
          border: 1px solid rgba(43,57,75,0.15);
          border-radius: 5px;
          padding: 4px 10px;
          background: rgba(43,57,75,0.04);
        }
        .br-row {
          padding: 9px 32px;
          border-top: 1px solid rgba(43,57,75,0.08);
          border-bottom: 1px solid rgba(43,57,75,0.08);
        }
        .bb { padding: 12px 32px; }
        .sg { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }

        /* Hours divider */
        .hr-box {
          background: rgba(43,57,75,0.05);
          border: 1px solid rgba(43,57,75,0.1);
          border-radius: 9px;
          padding: 12px 13px;
          margin-top: 14px;
        }
      `}</style>

      <footer className="fr">

        {/* ── Newsletter ── */}
        <div className="nl-band">
          <div style={{ maxWidth:1360, margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:18 }}>
            <div>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.35rem", color:"#2b394b", margin:"0 0 3px 0" }}>Stay ahead of the market.</h2>
              <p style={{ color:"#5a7080", fontSize:"0.78rem", margin:0 }}>Weekly insights and market analysis — straight to your inbox.</p>
            </div>
            <div style={{ width:"100%", maxWidth:360 }}><NewsletterForm/></div>
          </div>
        </div>

        {/* ── Main grid (4 cols) ── */}
        <div className="mg">

          {/* Col 1: Brand + Company links */}
          <div>
            <a href="/" style={{ textDecoration:"none", display:"inline-block", marginBottom:8 }}>
              <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.15rem", color:"#2b394b", fontWeight:700 }}>Shivaji Finance</span>
            </a>
            <p style={{ color:"#5a7080", fontSize:"0.76rem", lineHeight:1.65, marginBottom:12, maxWidth:200 }}>
              Intelligent financing for everyone. Fulfill your goals with trusted loan solutions.
            </p>
            {SOCIALS.length > 0 && (
              <div style={{ display:"flex", gap:6, marginBottom:18 }}>
                {SOCIALS.map(s => <button key={s.label} className="soc" title={s.label}>{s.icon}</button>)}
              </div>
            )}

            {/* Company navigation */}
          

            {/* Support hours directly under company links */}
            <div className="hr-box">
              <p style={{ fontSize:"0.57rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em", color:"#2b394b", opacity:0.5, margin:"0 0 8px 0" }}>Support Hours</p>
              {HOURS.map(h => (
                <div key={h.day} style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                  <span style={{ fontSize:"0.71rem", color:"#5a7080" }}>{h.day}</span>
                  <span style={{ fontSize:"0.71rem", fontWeight:600, color: h.open ? "#2b394b" : "#b0b8c1" }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Contact */}
          <div>

                <p className="cl">Company</p>
            <ul style={{ listStyle:"none", margin:0, padding:0 }}>
              {COMPANY_LINKS.map(l => <li key={l}><FLink>{l}</FLink></li>)}
            </ul>

          
          </div>

          {/* Col 3: Services */}
          <div>

            <p className="cl">Contact Us</p>
            {CONTACT.map(c => (
              <div key={c.label} className="cr">
                <div className="ci">{c.icon}</div>
                <div>
                  <p style={{ fontSize:"0.58rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.07em", color:"#8aa0b0", margin:"0 0 1px 0" }}>{c.label}</p>
                  <p style={{ fontSize:"0.74rem", fontWeight:600, color:"#2b394b", margin:0, lineHeight:1.35 }}>{c.value}</p>
                </div>
              </div>
            ))}
        
          
          </div>

          {/* Col 4: About / Quick CTA */}
          <div>
           
      
  <p className="cl">Our Services</p>
            <div className="sg">
              {SERVICES.map(s => (
                <a key={s.name} href="#" className="sp">
                  <div className="sp-ic">{s.icon}</div>
                  <span style={{ fontSize:"0.69rem", fontWeight:600, color:"#2b394b", lineHeight:1.2 }}>{s.name}</span>
                </a>
              ))}
            </div>
        

          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="bb" style={{ borderTop:"1px solid rgba(43,57,75,0.08)" }}>
          <div style={{ maxWidth:1360, margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:8 }}>
            <p style={{ fontSize:"0.69rem", color:"#7a95a5", margin:0 }}>
              © {new Date().getFullYear()} Shivaji Finance, Inc. All rights reserved. Member{" "}
              <a href="#" style={{ color:"#4a6070", textDecoration:"none" }}>FINRA</a> /{" "}
              <a href="#" style={{ color:"#4a6070", textDecoration:"none" }}>SIPC</a>.
            </p>
            <div style={{ display:"flex", gap:14 }}>
              {["Privacy Policy"].map(i => (
                <a
                  key={i} href="#"
                  style={{ fontSize:"0.69rem", color:"#4a5d70", textDecoration:"none" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#2b394b"}
                  onMouseLeave={e => e.currentTarget.style.color = "#4a5d70"}>
                  {i}
                </a>
              ))}
            </div>
          </div>
          <div style={{ maxWidth:1360, margin:"7px auto 0", borderTop:"1px solid rgba(43,57,75,0.08)", paddingTop:7 }}>
            <p style={{ fontSize:"0.62rem", color:"#8aa0b0", lineHeight:1.65, margin:0 }}>
              Loans are subject to approval. Interest rates and terms vary based on eligibility. Shivaji Finance does not provide tax, legal, or accounting advice. Please consult your own advisors before engaging in any transaction.
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}