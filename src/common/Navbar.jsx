import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ApplyPage from "./Applynow";

// ── Ticker data ───────────────────────────────────────────────────────────────
const TICKERS = [
  { sym: "AAPL",  price: "189.30", chg: "+1.24%", up: true  },
  { sym: "TSLA",  price: "242.15", chg: "-0.87%", up: false },
  { sym: "NVDA",  price: "875.40", chg: "+3.12%", up: true  },
  { sym: "BTC",   price: "67,820", chg: "+2.45%", up: true  },
  { sym: "ETH",   price: "3,490",  chg: "-1.03%", up: false },
  { sym: "MSFT",  price: "415.60", chg: "+0.62%", up: true  },
  { sym: "AMZN",  price: "182.90", chg: "-0.41%", up: false },
  { sym: "GOOGL", price: "163.20", chg: "+1.88%", up: true  },
  { sym: "SPY",   price: "521.70", chg: "+0.33%", up: true  },
  { sym: "GOLD",  price: "2,318",  chg: "+0.76%", up: true  },
];


const NAV_ITEMS = [
  {
    label: "Home", path: "/",

  },
  {
    label: "About", path: "/about",

  },
  {
    label: "Service", path:"/service"
  },
  {
    label: "Calculate", path: "/calculate",
  
  },
  { label: "Conatct", path: "/contact" },
 
];


function AurexLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0b429"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="36" height="36" rx="10" fill="url(#logoGrad)"/>
      <polyline
        points="7,26 13,16 18,21 23,11 29,11"
        stroke="#0b0f1a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
        fill="none"
      />
      <polyline
        points="24,8 29,11 26,16"
        stroke="#0b0f1a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// ── Ticker Strip ──────────────────────────────────────────────────────────────
function TickerStrip() {
  const doubled = [...TICKERS, ...TICKERS];
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", background: "#0f1729", borderBottom: "1px solid rgba(240,180,41,0.1)", padding: "6px 0" }}>
      <div style={{ display: "inline-flex", gap: "2.5rem", animation: "ticker 24s linear infinite", paddingLeft: "1rem" }}>
        {doubled.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.72rem", letterSpacing: "0.04em" }}>
            <span style={{ fontWeight: 600, color: "#e2e8f0" }}>{t.sym}</span>
            <span style={{ color: "#64748b" }}>${t.price}</span>
            <span style={{ color: t.up ? "#22c55e" : "#ef4444" }}>{t.up ? "▲" : "▼"} {t.chg}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Dropdown Menu ─────────────────────────────────────────────────────────────
function DropdownMenu({ items, onClose }) {
  return (
    <>
      {items.map((d) => (
        <Link key={d.path} to={d.path} onClick={onClose} style={{ textDecoration: "none" }}>
          <div className="dropdown-item">
            <span className="dropdown-icon">{d.icon}</span>
            <span>
              <span style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "#e2e8f0" }}>{d.label}</span>
              <span style={{ display: "block", fontSize: "0.7rem", color: "#64748b" }}>{d.sub}</span>
            </span>
          </div>
        </Link>
      ))}
    </>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [openDropdown,  setOpenDropdown]  = useState(null);
  const [scrolled,      setScrolled]      = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false); // ← yahi toggle karo
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); setOpenDropdown(null); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest(".nav-item-wrapper")) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isParentActive = (item) => {
    if (location.pathname === item.path) return true;
    if (item.dropdown) return item.dropdown.some((d) => location.pathname.startsWith(d.path));
    return false;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; margin: 0; }

        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .nav-btn {
          position: relative; display: inline-flex; align-items: center; gap: 4px;
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 0.875rem; font-weight: 500;
          letter-spacing: 0.02em; color: #94a3b8; padding: 4px 0;
          transition: color 0.2s; text-decoration: none; white-space: nowrap;
        }
        .nav-btn::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, #f0b429, #f59e0b);
          transition: width 0.3s ease;
        }
        .nav-btn:hover, .nav-btn.active { color: #f8fafc; }
        .nav-btn:hover::after, .nav-btn.active::after { width: 100%; }

        .nav-dropdown {
          position: absolute; top: calc(100% + 12px); left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: #111827; border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 6px; min-width: 215px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.55); z-index: 200;
          opacity: 0; visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
        }
        .nav-dropdown.open {
          opacity: 1; visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 10px; border-radius: 8px; cursor: pointer; transition: background 0.15s;
        }
        .dropdown-item:hover { background: rgba(240,180,41,0.08); }
        .dropdown-icon {
          width: 30px; height: 30px; border-radius: 8px;
          background: rgba(240,180,41,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; flex-shrink: 0;
        }
        .mobile-menu {
          overflow: hidden; transition: max-height 0.35s ease, opacity 0.3s ease;
          background: #0f1729; border-top: 1px solid rgba(255,255,255,0.05);
        }
        .btn-login {
          background: transparent; border: 1px solid rgba(148,163,184,0.22);
          color: #94a3b8; font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem; font-weight: 500; padding: 8px 16px;
          border-radius: 7px; cursor: pointer; transition: all 0.2s;
        }
        .btn-login:hover {
          color: #f8fafc; border-color: rgba(240,180,41,0.4);
          background: rgba(240,180,41,0.06);
        }
        .btn-cta {
          background: linear-gradient(135deg, #f0b429, #d97706);
          color: #0b0f1a; font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem; font-weight: 700; padding: 8px 20px;
          border-radius: 7px; border: none; cursor: pointer;
          box-shadow: 0 0 18px rgba(240,180,41,0.28); transition: all 0.2s;
        }
        .btn-cta:hover {
          box-shadow: 0 0 28px rgba(240,180,41,0.5); transform: translateY(-1px);
        }
        .desktop-nav   { display: flex; }
        .hamburger-btn { display: none; }
        @media (max-width: 768px) {
          .desktop-nav   { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>

      <header style={{ position: "sticky", top: 0, zIndex: 100 }}>
        <TickerStrip />

        <nav style={{
          background: scrolled ? "rgba(11,15,26,0.97)" : "rgba(11,15,26,0.92)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
          transition: "all 0.3s",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

            {/* Logo */}
            <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.22rem", color: "#f8fafc", letterSpacing: "-0.02em" }}>
                Shivaji Finance
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="desktop-nav" style={{ alignItems: "center", gap: 28 }}>
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="nav-item-wrapper" style={{ position: "relative" }}
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to={item.path} className={`nav-btn ${isParentActive(item) ? "active" : ""}`}>
                    {item.label}
                    {item.dropdown && (
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.45, marginTop: 1 }}>
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </Link>
                  {item.dropdown && (
                    <div className={`nav-dropdown ${openDropdown === item.label ? "open" : ""}`}>
                      <DropdownMenu items={item.dropdown} onClose={() => setOpenDropdown(null)} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="desktop-nav" style={{ alignItems: "center", gap: 10 }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="btn-login">Log in</button>
              </Link>
              {/* Apply Now button  */}
              <button className="btn-cta" onClick={() => setShowApplyForm(true)}>
                Apply Now
              </button>
            </div>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(o => !o)} className="hamburger-btn"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4, flexDirection: "column", gap: 5 }}
              aria-label="Toggle menu">
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: "block", height: 1.5, borderRadius: 2,
                  background: menuOpen ? "#f0b429" : "#94a3b8", transition: "all 0.3s",
                  width: i === 2 ? (menuOpen ? 22 : 16) : 22,
                  transform: menuOpen
                    ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                    : i === 1 ? "scaleX(0)"
                    : "translateY(-6.5px) rotate(-45deg)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}/>
              ))}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="mobile-menu" style={{ maxHeight: menuOpen ? 560 : 0, opacity: menuOpen ? 1 : 0 }}>
            <div style={{ padding: "12px 24px 24px" }}>
              {NAV_ITEMS.map((item) => (
                <div key={item.label} style={{ marginBottom: 2 }}>
                  <Link to={item.path}
                    className={`nav-btn ${isParentActive(item) ? "active" : ""}`}
                    style={{ display: "block", padding: "10px 0", fontSize: "0.95rem" }}>
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div style={{ marginLeft: 8, paddingLeft: 12, borderLeft: "2px solid rgba(240,180,41,0.2)", marginBottom: 6 }}>
                      {item.dropdown.map((d) => (
                        <Link key={d.path} to={d.path}
                          style={{ textDecoration: "none", display: "block", padding: "5px 6px", fontSize: "0.8rem", color: "#64748b", transition: "color 0.2s" }}
                          onMouseEnter={e => e.currentTarget.style.color = "#cbd5e1"}
                          onMouseLeave={e => e.currentTarget.style.color = "#64748b"}>
                          {d.icon} {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                <Link to="/login" style={{ flex: 1, textDecoration: "none" }}>
                  <button className="btn-login" style={{ width: "100%" }}>Log in</button>
                </Link>
                <button className="btn-cta" style={{ flex: 1 }} onClick={() => { setMenuOpen(false); setShowApplyForm(true); }}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/*
        ── Apply Now Modal ──────────────────────────────────────────────────────
        ApplyPage ko asModal={true} pass karo → overlay popup mode mein render hoga
        onClose se showApplyForm false ho jaata hai
      */}
      {showApplyForm && (
        <ApplyPage
          asModal={true}
          onClose={() => setShowApplyForm(false)}
        />
      )}
    </>
  );
}