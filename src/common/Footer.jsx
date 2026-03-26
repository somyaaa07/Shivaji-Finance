import { useState } from "react";

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
];

const BADGES = ["SEC Registered", "FINRA Member", "SIPC Protected", "SOC 2 Type II"];

// ── Contact Info ──────────────────────────────────────────────────────────────
const CONTACT = [
  {
    label: "General Inquiries",
    value: "hello@shivajifinance.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Support",
    value: "+1 (800) 555-0192",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Office",
    value: "200 Financial St, New York, NY",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// ── Services ──────────────────────────────────────────────────────────────────
const SERVICES = [
  { name: "Wealth Management", desc: "Personalized strategies for long-term growth" },
  { name: "Tax-Advantaged Accounts", desc: "IRAs, 401(k) rollovers & more" },
  { name: "Portfolio Analytics", desc: "Real-time insights and risk assessment" },
  { name: "Financial Planning", desc: "Goal-based plans with expert guidance" },
];

// ── Newsletter input ──────────────────────────────────────────────────────────
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) { setSent(true); setEmail(""); }
  };

  return sent ? (
    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "#2b394b" }}>
      <span>✓</span> You're on the list — welcome aboard!
    </div>
  ) : (
    <div className="flex gap-2 mt-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
        style={{
          background: "rgba(43,57,75,0.07)",
          border: "1px solid rgba(43,57,75,0.18)",
          color: "#2b394b",
        }}
      />
      <button
        onClick={handleSubmit}
        className="rounded-lg px-5 py-2.5 text-sm font-bold transition-all hover:brightness-105 active:scale-95"
        style={{
          background: "linear-gradient(135deg,#2b394b,#3d5266)",
          color: "#cdcde4",
          boxShadow: "0 4px 14px rgba(43,57,75,0.25)",
        }}
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

        .footer-root {
          background: linear-gradient(180deg, #cacdd2 0%, #c4c8ce 100%);
          position: relative;
        }
        .footer-root::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #2b394b, #cdcde4, #2b394b, transparent);
        }

        .footer-link {
          color: #4a5d70;
          font-size: 0.84rem;
          text-decoration: none;
          transition: color 0.18s;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          text-align: left;
          display: block;
        }
        .footer-link:hover { color: #2b394b; }

        .social-btn {
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(43,57,75,0.18);
          background: rgba(43,57,75,0.07);
          color: #4a5d70;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .social-btn:hover {
          background: #2b394b;
          border-color: #2b394b;
          color: #cdcde4;
        }

        .badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em;
          color: #2b394b;
          border: 1px solid rgba(43,57,75,0.2);
          border-radius: 6px;
          padding: 4px 10px;
          background: rgba(43,57,75,0.06);
        }

        .divider { border: none; border-top: 1px solid rgba(43,57,75,0.12); margin: 0; }

        .section-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #2b394b;
          margin-bottom: 1rem;
          opacity: 0.6;
        }

        .service-card {
          background: rgba(43,57,75,0.05);
          border: 1px solid rgba(43,57,75,0.1);
          border-radius: 10px;
          padding: 12px 14px;
          transition: all 0.2s;
        }
        .service-card:hover {
          background: rgba(43,57,75,0.1);
          border-color: rgba(43,57,75,0.22);
          transform: translateY(-1px);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(43,57,75,0.1);
        }
        .contact-item:last-child { border-bottom: none; }

        .apply-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #2b394b, #3d5266);
          color: #cdcde4;
          border: none;
          border-radius: 10px;
          padding: 11px 22px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(43,57,75,0.22);
        }
        .apply-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(43,57,75,0.32);
          filter: brightness(1.1);
        }
        .apply-btn-outline {
          background: transparent;
          color: #2b394b;
          border: 1.5px solid rgba(43,57,75,0.4);
          box-shadow: none;
        }
        .apply-btn-outline:hover {
          background: rgba(43,57,75,0.06);
          box-shadow: none;
        }

        .cta-banner {
          border-bottom: 1px solid rgba(43,57,75,0.1);
          padding: 40px 24px;
          background: radial-gradient(ellipse at 50% -20%, rgba(43,57,75,0.08) 0%, transparent 65%);
        }

        .apply-section {
          background: linear-gradient(135deg, rgba(43,57,75,0.08), rgba(205,205,228,0.3));
          border-top: 1px solid rgba(43,57,75,0.1);
          border-bottom: 1px solid rgba(43,57,75,0.1);
          padding: 40px 24px;
        }
      `}</style>

      <footer className="footer-root">

        {/* ── Newsletter CTA ── */}
        <div className="cta-banner">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#2b394b" }}>
                Stay ahead of the market.
              </h2>
              <p className="text-sm" style={{ color: "#5a7080" }}>
                Weekly insights, portfolio tips, and market analysis — straight to your inbox.
              </p>
            </div>
            <div className="w-full md:w-96">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* ── Apply Now Section ── */}
        <div className="apply-section">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="section-label">Careers at Shivaji Finance</p>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#2b394b" }}>
                  Join our growing team
                </h3>
                <p className="text-sm max-w-md" style={{ color: "#5a7080" }}>
                  We're hiring analysts, engineers, and advisors who are passionate about transforming personal finance.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="apply-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Apply Now
                </a>
                <a href="#" className="apply-btn apply-btn-outline">
                  View Open Roles
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* Brand + Contact */}
            <div className="md:col-span-3">
              <a href="/" className="inline-flex items-center gap-2 no-underline mb-4">
                <span className="text-[1.22rem] tracking-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#2b394b" }}>
                  Shivaji Finance
                </span>
              </a>
              <p className="text-sm leading-relaxed mb-5 max-w-[220px]" style={{ color: "#5a7080" }}>
                Intelligent investing for everyone. Build wealth with confidence using real-time data and expert tools.
              </p>

              {/* Socials */}
              <div className="flex gap-2 mb-6">
                {SOCIALS.map((s) => (
                  <button key={s.label} className="social-btn" title={s.label}>
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {COLUMNS.map((col) => (
                <div key={col.heading}>
                  <p className="section-label">{col.heading}</p>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="footer-link">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="md:col-span-2">
              <p className="section-label">Our Services</p>
              <div className="space-y-2">
                {SERVICES.map((s) => (
                  <div key={s.name} className="service-card">
                    <p className="text-[0.82rem] font-semibold" style={{ color: "#2b394b" }}>{s.name}</p>
                    <p className="text-[0.72rem] mt-0.5" style={{ color: "#6a8090" }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-2">
              <p className="section-label">Contact Us</p>
              <div>
                {CONTACT.map((c) => (
                  <div key={c.label} className="contact-item">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: "#2b394b" }}>{c.icon}</span>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-wide" style={{ color: "#8aa0b0" }}>{c.label}</p>
                      <p className="text-[0.8rem] font-medium" style={{ color: "#2b394b" }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="apply-btn mt-5" style={{ fontSize: "0.78rem", padding: "8px 16px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get in Touch
              </a>
            </div>

          </div>
        </div>

        {/* ── Trust Badges ── */}
        <div className="border-t px-6 py-5" style={{ borderColor: "rgba(43,57,75,0.1)" }}>
          <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-3">
            {BADGES.map((b) => (
              <span key={b} className="badge">
                <span style={{ color: "#2b394b", fontSize: "0.65rem" }}>✦</span>
                {b}
              </span>
            ))}
          </div>
        </div>

        <hr className="divider" />

        {/* ── Bottom bar ── */}
        <div className="px-6 py-5">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[0.75rem]" style={{ color: "#7a95a5" }}>
              © {new Date().getFullYear()} Shivaji Finance, Inc. All rights reserved. Securities offered through Shivaji Brokerage, LLC, member{" "}
              <a href="#" className="footer-link" style={{ fontSize: "inherit", display: "inline", color: "#4a6070" }}>FINRA</a>
              {" "}/{" "}
              <a href="#" className="footer-link" style={{ fontSize: "inherit", display: "inline", color: "#4a6070" }}>SIPC</a>.
            </p>
            <div className="flex items-center gap-4">
              {["Privacy", "Terms", "Cookies", "Accessibility"].map((item) => (
                <a key={item} href="#" className="footer-link" style={{ fontSize: "0.75rem" }}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mx-auto max-w-7xl mt-4">
            <p className="text-[0.68rem] leading-relaxed" style={{ color: "#8aa0b0" }}>
              Investing involves risk, including the possible loss of principal. Past performance does not guarantee future results.
              Shivaji Finance does not provide tax, legal, or accounting advice. This material has been prepared for informational
              purposes only. Please consult your own tax, legal, and accounting advisors before engaging in any transaction.
              Cryptocurrency trading is highly speculative and involves significant risk of loss.
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}