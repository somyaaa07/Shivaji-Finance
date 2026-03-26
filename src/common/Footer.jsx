import { useState } from "react";
import { Link } from "react-router-dom";

// ── Footer link columns ───────────────────────────────────────────────────────
const COLUMNS = [
  {
    heading: "Products",
    links: ["Equity Trading", "Crypto Exchange", "Robo-Advisor", "Retirement Accounts", "Options & Futures", "Fractional Shares"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Press & Media", "Investor Relations", "Our Mission", "Blog"],
  },
  {
    heading: "Resources",
    links: ["Help Center", "Learning Hub", "Market News", "API Docs", "Status Page", "Community"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclosures", "Regulatory Info", "Security"],
  },
];

const SOCIALS = [
  {
    label: "Twitter / X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

const BADGES = ["SEC Registered", "FINRA Member", "SIPC Protected", "SOC 2 Type II"];

// ── Newsletter input ──────────────────────────────────────────────────────────
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); setEmail(""); }
  };

  return sent ? (
    <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
      <span>✓</span> You're on the list — welcome aboard!
    </div>
  ) : (
    <div className="flex gap-2 mt-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-2.5
                   text-sm text-slate-200 placeholder-slate-500 outline-none
                   focus:border-yellow-500/50 transition-colors"
      />
      <button
        onClick={handleSubmit}
        className="rounded-lg px-5 py-2.5 text-sm font-bold text-[#0b0f1a]
                   transition-all hover:brightness-110 active:scale-95"
        style={{ background: "linear-gradient(135deg,#f0b429,#d97706)", boxShadow: "0 0 16px rgba(240,180,41,.3)" }}
      >
        Subscribe
      </button>
    </div>
  );
}

// ── Main Footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        .footer-link {
          color: #64748b;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          text-align: left;
        }
        .footer-link:hover { color: #e2e8f0; }
        .social-btn {
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: #64748b;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .social-btn:hover {
          background: rgba(240,180,41,0.1);
          border-color: rgba(240,180,41,0.3);
          color: #f0b429;
        }
        .badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em;
          color: #475569;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px;
          padding: 4px 10px;
          background: rgba(255,255,255,0.02);
        }
        .divider { border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 0; }
        .gradient-border {
          position: relative;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(240,180,41,0.4), rgba(99,102,241,0.3), transparent);
        }
      `}</style>

      <footer
        className="gradient-border relative"
        style={{ background: "linear-gradient(180deg, #0b0f1a 0%, #080c15 100%)" }}
      >
        {/* ── Top CTA Banner ── */}
        <div
          className="border-b border-white/5 py-10 px-6"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(240,180,41,0.06) 0%, transparent 70%)" }}
        >
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2
                className="text-2xl md:text-3xl text-slate-100 mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Stay ahead of the market.
              </h2>
              <p className="text-slate-500 text-sm">
                Weekly insights, portfolio tips, and market analysis — straight to your inbox.
              </p>
            </div>
            <div className="w-full md:w-96">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10">

            {/* Brand column */}
            <div className="col-span-2">
              {/* Logo */}
              <a href="/" className="inline-flex items-center gap-2 no-underline mb-4">
              
                <span
                  className="text-[1.22rem] tracking-tight text-slate-100"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Shivaji Finance
                 
                </span>
              </a>

              <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-[230px]">
                Intelligent investing for everyone. Build wealth with confidence using real‑time data and expert tools.
              </p>

              {/* Socials */}
              <div className="flex gap-2 mb-6">
                {SOCIALS.map((s) => (
                  <button key={s.label} className="social-btn" title={s.label}>
                    {s.icon}
                  </button>
                ))}
              </div>

              {/* App store badges */}
              <div className="flex flex-wrap gap-2">
                <button
                  className="flex items-center gap-2 rounded-lg border border-white/10
                             bg-white/4 px-3 py-2 transition-all hover:border-yellow-500/30 hover:bg-yellow-500/5"
                >
                  <span className="text-lg">🍎</span>
                  <span className="text-left">
                    <span className="block text-[0.62rem] text-slate-500 leading-none">Download on the</span>
                    <span className="block text-[0.78rem] font-semibold text-slate-300 leading-none mt-0.5">App Store</span>
                  </span>
                </button>
                <button
                  className="flex items-center gap-2 rounded-lg border border-white/10
                             bg-white/4 px-3 py-2 transition-all hover:border-yellow-500/30 hover:bg-yellow-500/5"
                >
                  <span className="text-lg">▶</span>
                  <span className="text-left">
                    <span className="block text-[0.62rem] text-slate-500 leading-none">Get it on</span>
                    <span className="block text-[0.78rem] font-semibold text-slate-300 leading-none mt-0.5">Google Play</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Link columns */}
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate-500 mb-4">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Trust Badges ── */}
        <div className="border-t border-white/5 px-6 py-5">
          <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-3">
            {BADGES.map((b) => (
              <span key={b} className="badge">
                <span style={{ color: "#f0b429", fontSize: "0.7rem" }}>✦</span>
                {b}
              </span>
            ))}
          </div>
        </div>

        <hr className="divider" />

        {/* ── Bottom bar ── */}
        <div className="px-6 py-5">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[0.75rem] text-slate-600">
              © {new Date().getFullYear()} Aurex Financial, Inc. All rights reserved. Securities offered through Aurex Brokerage, LLC, member{" "}
              <a href="#" className="footer-link" style={{ fontSize: "inherit", display: "inline" }}>FINRA</a>
              {" "}/{" "}
              <a href="#" className="footer-link" style={{ fontSize: "inherit", display: "inline" }}>SIPC</a>.
            </p>
            <div className="flex items-center gap-4">
              {["Privacy", "Terms", "Cookies", "Accessibility"].map((item) => (
                <a key={item} href="#" className="footer-link" style={{ fontSize: "0.75rem" }}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer  */}
          <div className="mx-auto max-w-7xl mt-4">
            <p className="text-[0.68rem] text-slate-700 leading-relaxed">
              Investing involves risk, including the possible loss of principal. Past performance does not guarantee future results.
              Aurex Financial does not provide tax, legal, or accounting advice. This material has been prepared for informational
              purposes only. Please consult your own tax, legal, and accounting advisors before engaging in any transaction.
              Cryptocurrency trading is highly speculative and involves significant risk of loss.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}