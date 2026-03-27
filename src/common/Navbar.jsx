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
  { label: "Home",      path: "/" },
  { label: "About",     path: "/about" },
  { label: "Service",   path: "/service" },
  { label: "Apply for Loan", path: "/applyloan" },
  { label: "Contact",   path: "/contact" },
];

// ── Ticker Strip ──────────────────────────────────────────────────────────────
function TickerStrip() {
  const doubled = [...TICKERS, ...TICKERS];
  return (
    <div style={{
      overflow: "hidden", whiteSpace: "nowrap",
      background: "#2b394b",
      borderBottom: "1px solid rgba(205,205,228,0.15)",
      padding: "6px 0",
    }}>
      <div style={{
        display: "inline-flex", gap: "2.5rem",
        animation: "ticker 24s linear infinite", paddingLeft: "1rem",
      }}>
        {doubled.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.72rem", letterSpacing: "0.04em" }}>
            <span style={{ fontWeight: 600, color: "#cdcde4" }}>{t.sym}</span>
            <span style={{ color: "rgba(205,205,228,0.5)" }}>${t.price}</span>
            <span style={{ color: t.up ? "#4ade80" : "#f87171" }}>{t.up ? "▲" : "▼"} {t.chg}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [openDropdown,  setOpenDropdown]  = useState(null);
  const [scrolled,      setScrolled]      = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
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
        body { font-family: 'DM Sans', sans-serif; }

        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Nav link */
        .nav-btn {
          position: relative; display: inline-flex; align-items: center; gap: 4px;
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 0.875rem; font-weight: 500;
          letter-spacing: 0.02em; color: #4a5d70; padding: 4px 0;
          transition: color 0.2s; text-decoration: none; white-space: nowrap;
        }
        .nav-btn::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #2b394b, #3d5266);
          transition: width 0.3s ease;
        }
        .nav-btn:hover, .nav-btn.active { color: #2b394b; }
        .nav-btn:hover::after, .nav-btn.active::after { width: 100%; }

        /* Dropdown */
        .nav-dropdown {
          position: absolute; top: calc(100% + 12px); left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: #f0f1f4;
          border: 1px solid rgba(43,57,75,0.12);
          border-radius: 12px; padding: 6px; min-width: 215px;
          box-shadow: 0 16px 36px rgba(43,57,75,0.14); z-index: 200;
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
        .dropdown-item:hover { background: rgba(43,57,75,0.07); }
        .dropdown-icon {
          width: 30px; height: 30px; border-radius: 8px;
          background: rgba(43,57,75,0.08);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; flex-shrink: 0;
        }

        /* Mobile menu */
        .mobile-menu {
          overflow: hidden; transition: max-height 0.35s ease, opacity 0.3s ease;
          background: #cacdd2;
          border-top: 1px solid rgba(43,57,75,0.1);
        }

        /* Buttons */
        .btn-login {
          background: transparent;
          border: 1.5px solid rgba(43,57,75,0.25);
          color: #4a5d70;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem; font-weight: 500; padding: 8px 16px;
          border-radius: 7px; cursor: pointer; transition: all 0.2s;
        }
        .btn-login:hover {
          color: #2b394b;
          border-color: rgba(43,57,75,0.5);
          background: rgba(43,57,75,0.06);
        }
        .btn-cta {
          background: linear-gradient(135deg, #2b394b, #3d5266);
          color: #cdcde4;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem; font-weight: 700; padding: 8px 20px;
          border-radius: 7px; border: none; cursor: pointer;
          box-shadow: 0 4px 16px rgba(43,57,75,0.22);
          transition: all 0.2s;
        }
        .btn-cta:hover {
          box-shadow: 0 6px 24px rgba(43,57,75,0.35);
          transform: translateY(-1px);
          filter: brightness(1.08);
        }

        /* Nav top border accent */
        .nav-accent-border {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #2b394b, #cdcde4, #2b394b, transparent);
          pointer-events: none;
        }

        .desktop-nav   { display: flex; }
        .hamburger-btn { display: none; }
        @media (max-width: 768px) {
          .desktop-nav   { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>

      <header style={{ position: "sticky", top: 0, zIndex: 100 }}>
        {/* Ticker */}
        <TickerStrip />

        {/* Main nav */}
        <nav style={{
          position: "relative",
          background: scrolled
            ? "rgba(202,205,210,0.98)"
            : "rgba(202,205,210,0.95)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(43,57,75,0.1)",
          boxShadow: scrolled ? "0 4px 24px rgba(43,57,75,0.1)" : "none",
          transition: "all 0.3s",
        }}>
          <div className="nav-accent-border" />

          <div style={{
            maxWidth: 1200, margin: "0 auto", padding: "0 24px",
            height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>

            {/* Logo */}
            <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.22rem", color: "#2b394b", letterSpacing: "-0.02em",
              }}>
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
                      {item.dropdown.map((d) => (
                        <Link key={d.path} to={d.path} onClick={() => setOpenDropdown(null)} style={{ textDecoration: "none" }}>
                          <div className="dropdown-item">
                            <span className="dropdown-icon">{d.icon}</span>
                            <span>
                              <span style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "#2b394b" }}>{d.label}</span>
                              <span style={{ display: "block", fontSize: "0.7rem", color: "#6a8090" }}>{d.sub}</span>
                            </span>
                          </div>
                        </Link>
                      ))}
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
              <button className="btn-cta" onClick={() => setShowApplyForm(true)}>
                Apply Now
              </button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="hamburger-btn"
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: 4, flexDirection: "column", gap: 5,
              }}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: "block", height: 2, borderRadius: 2,
                  background: menuOpen ? "#2b394b" : "#4a5d70",
                  transition: "all 0.3s",
                  width: i === 2 ? (menuOpen ? 22 : 16) : 22,
                  transform: menuOpen
                    ? i === 0 ? "translateY(7px) rotate(45deg)"
                    : i === 1 ? "scaleX(0)"
                    : "translateY(-7px) rotate(-45deg)"
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
                  <Link
                    to={item.path}
                    className={`nav-btn ${isParentActive(item) ? "active" : ""}`}
                    style={{ display: "block", padding: "10px 0", fontSize: "0.95rem" }}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div style={{
                      marginLeft: 8, paddingLeft: 12,
                      borderLeft: "2px solid rgba(43,57,75,0.2)",
                      marginBottom: 6,
                    }}>
                      {item.dropdown.map((d) => (
                        <Link key={d.path} to={d.path} style={{
                          textDecoration: "none", display: "block",
                          padding: "5px 6px", fontSize: "0.8rem", color: "#6a8090",
                          transition: "color 0.2s",
                        }}
                          onMouseEnter={e => e.currentTarget.style.color = "#2b394b"}
                          onMouseLeave={e => e.currentTarget.style.color = "#6a8090"}
                        >
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
                <button className="btn-cta" style={{ flex: 1 }}
                  onClick={() => { setMenuOpen(false); setShowApplyForm(true); }}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {showApplyForm && (
        <ApplyPage
          asModal={true}
          onClose={() => setShowApplyForm(false)}
        />
      )}
    </>
  );
}