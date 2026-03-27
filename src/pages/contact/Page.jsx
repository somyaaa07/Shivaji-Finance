import React, { useState,useEffect } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [focused, setFocused] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

    

    :root {
      --light: #cdd2e4;
      --dark:  #2b394b;
      --dark2: #1a2332;
      --accent: #c8cdd4;
    }

    html { font-size: 16px; }
    body { font-family: 'Cormorant Garamond', serif; background: #cacdd2; color: var(--dark); }
    .page { min-height: 100vh; overflow-x: hidden; width: 100%; }

    /* ─── HERO ─── */
    .hero {
      position: relative;
      min-height: 92vh;
      display: flex; flex-direction: column;
      justify-content: flex-end;
      overflow: hidden;
    }
    .hero-img {
      position: absolute; inset: 0;
      background-image: url('/11.png');
      background-size: cover;
      background-position: center top;
      z-index: 0;
    }
    .hero-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(
        to bottom,
        rgba(10, 15, 25, 0.45) 0%,
        rgba(8, 12, 22, 0.65) 40%,
        rgba(5, 10, 18, 0.88) 100%
      );
      z-index: 1;
    }

    .hero-bg-word {
      position: absolute; right: -1%; top: 50%; z-index: 2;
      transform: translateY(-52%);
      font-size: clamp(120px, 20vw, 420px);
      font-weight: 700; font-style: italic;
      color: rgba(255,255,255,0.04);
      line-height: 1; user-select: none; pointer-events: none;
      letter-spacing: -0.04em;
    }
   
    .hero-content {
      position: relative; z-index: 3;
      padding: 0 64px 80px;
      animation: fadeUp 0.9s ease both;
    }
    .hero-tag {
      display: inline-flex; align-items: center; gap: 12px;
      font-size: 10px; letter-spacing: 0.42em; text-transform: uppercase;
      color: rgba(255,255,255,0.55); margin-bottom: 28px; font-weight: 700;
    }
    .hero-tag-dash { width: 32px; height: 1px; background: rgba(255,255,255,0.35); }
    .hero-h1 {
      font-size: clamp(48px, 9vw, 116px);
      font-weight: 700;
      line-height: 0.95;
      color: #ffffff;
      letter-spacing: -0.02em; margin-bottom: 40px;
      text-shadow: 0 2px 40px rgba(0,0,0,0.4);
    }
    .hero-h1 em { font-style: italic; font-weight: 700; color: #e2e8f0; }
    .hero-bottom {
      display: flex; align-items: flex-end;
      justify-content: space-between; gap: 40px; flex-wrap: wrap;
    }
    .hero-desc {
      font-size: clamp(15px, 1.6vw, 20px); font-weight: 400;
      color: rgba(255,255,255,0.72); max-width: 440px; line-height: 1.8;
    }
    .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0; }
    .btn-solid {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 15px 38px; background: #ffffff; color: #2b394b;
      font-family: 'Cormorant Garamond', serif;
      font-size: 13px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
      border: none; cursor: pointer;
      transition: opacity 0.25s, transform 0.25s;
    }
    .btn-solid:hover { opacity: 0.88; transform: translateY(-2px); }
    .btn-ghost {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 15px 38px; background: transparent; color: #ffffff;
      font-family: 'Cormorant Garamond', serif;
      font-size: 13px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
      border: 1px solid rgba(255,255,255,0.35); cursor: pointer;
      transition: border-color 0.25s, background 0.25s, transform 0.25s;
    }
    .btn-ghost:hover { border-color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.08); transform: translateY(-2px); }
    .hero-scroll {
      position: absolute; bottom: 0; right: 64px; z-index: 3;
      display: flex; flex-direction: column; align-items: center; gap: 8px; padding-bottom: 24px;
    }
    .hero-scroll-bar {
      width: 1px; height: 60px;
      background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
      animation: pulse 2s ease-in-out infinite;
    }
    .hero-scroll-lbl {
      writing-mode: vertical-rl;
      font-size: 9px; letter-spacing: 0.35em; text-transform: uppercase;
      color: rgba(255,255,255,0.3);
    }

    /* ─── STATS ─── */
    .stats { background: var(--dark); border-top: 1px solid rgba(255,255,255,0.06); }
    .stats-grid {
      max-width: 1200px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(4,1fr);
    }
    .stat {
      padding: 32px 40px;
      border-right: 1px solid rgba(255,255,255,0.06);
      transition: background 0.25s;
    }
    .stat:last-child { border-right: none; }
    .stat:hover { background: rgba(255,255,255,0.04); }
    .stat-n { font-size: clamp(28px, 4vw, 44px); font-weight: 700; font-style: italic; color: #ffffff; line-height: 1; }
    .stat-l { font-size: 9px; letter-spacing: 0.32em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-top: 8px; font-weight: 700; }

    /* ─── SHARED ─── */
    .wrap { max-width: 1280px; margin: 0 auto; padding: 0 64px; }
    .eyebrow {
      font-size: 9px; letter-spacing: 0.45em; text-transform: uppercase;
      color: rgba(13,17,23,0.5); margin-bottom: 18px;
      display: flex; align-items: center; gap: 12px;
      font-weight: 700;
    }
    .eyebrow::before { content: ''; width: 28px; height: 1px; background: rgba(13,17,23,0.3); }
    .sec-title {
      font-size: clamp(32px, 5vw, 66px);
      font-weight: 700; line-height: 1.05; color: #2b394b; margin-bottom: 20px;
    }
    .sec-title em { font-style: italic; font-weight: 700; color: #1a2332; }

    /* ─── CONTACT ─── */
    .contact-sec { padding: 120px 0; }
    .contact-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 96px; align-items: start; }
    .sec-body {
      font-size: 18px; font-weight: 400; line-height: 1.8;
      color: rgba(13,17,23,0.6); margin-bottom: 56px;
    }
    .crows { border-top: 1px solid rgba(13,17,23,0.12); }
    .crow {
      display: flex; align-items: flex-start; gap: 26px;
      padding: 26px 0; border-bottom: 1px solid rgba(13,17,23,0.12);
      transition: padding-left 0.25s; cursor: default;
    }
    .crow:hover { padding-left: 10px; }
    .crow:hover .crow-icon { background: var(--dark); }
    .crow:hover .crow-icon svg { stroke: #ffffff; }
    .crow-icon {
      flex-shrink: 0; width: 44px; height: 44px;
      border: 1px solid rgba(13,17,23,0.22);
      display: flex; align-items: center; justify-content: center;
      transition: background 0.25s;
    }
    .crow-icon svg { width: 17px; height: 17px; stroke: #2b394b; transition: stroke 0.25s; }
    .crow-lbl {
      font-size: 13px; letter-spacing: 0.35em; text-transform: uppercase;
      color: rgba(13,17,23,0.45); margin-bottom: 6px; font-weight: 900;
    }
    .crow-vals p { font-size: 17px; color: #2b394b; line-height: 1.65; font-weight: 600; }
    .crow-note { font-size: 13px; font-style: italic; color: rgba(13,17,23,0.42); margin-top: 4px; }

    /* ─── FORM ─── */
    .form-card {
      background: var(--dark);
      padding: 56px 52px;
      position: relative; overflow: hidden;
    }
    .form-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9) 50%, transparent);
    }
    .form-watermark {
      position: absolute; right: -8px; bottom: -16px;
      font-size: 200px; font-weight: 700; font-style: italic;
      color: rgba(255,255,255,0.03); line-height: 1;
      pointer-events: none; user-select: none;
    }
    .form-tag { font-size: 9px; letter-spacing: 0.45em; text-transform: uppercase; color: rgba(232,234,237,0.7); margin-bottom: 12px; font-weight: 700; }
    .form-ttl { font-size: clamp(26px, 3vw, 36px); font-weight: 700; color: #ffffff; line-height: 1.15; margin-bottom: 6px; }
    .form-ttl em { font-style: italic; font-weight: 700; color: #e2e8f0; }
    .form-sub { font-size: 15px; color: rgba(232,234,237,0.4); margin-bottom: 40px; font-weight: 300; }
    .fields { display: flex; flex-direction: column; gap: 22px; position: relative; z-index: 1; }
    .row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    .f { display: flex; flex-direction: column; gap: 7px; }
    .f-lbl {
      font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
      color: rgba(255,255,255,0.75); transition: color 0.2s; font-weight: 700;
    }
    .f.on .f-lbl { color: rgba(255,255,255,0.95); }
    .f-inp {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-bottom-color: rgba(255,255,255,0.75);
      color: #ffffff;
      font-family: 'Cormorant Garamond', serif; font-size: 16px;
      padding: 13px 16px; outline: none; width: 100%;
      transition: border-color 0.25s, background 0.25s;
    }
    .f-inp::placeholder { color: rgba(255,255,255,0.28); }
    .f-inp:focus { border-color: rgba(255,255,255,0.95); background: rgba(255,255,255,0.08); }
    select.f-inp option { background: var(--dark); color: #ffffff; }
    textarea.f-inp { resize: none; }
    .sub-btn {
      width: 100%; padding: 18px;
      background: #ffffff; color: #2b394b;
      font-family: 'Cormorant Garamond', serif;
      font-size: 13px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      transition: opacity 0.25s, transform 0.25s; margin-top: 4px;
    }
    .sub-btn:hover { opacity: 0.85; transform: translateY(-1px); }
    .sub-btn.ok { background: rgba(255,255,255,0.1); color: #ffffff; border: 1px solid rgba(255,255,255,0.2); }

    /* ─── MAP ─── */
    .map-sec { padding: 0 0 120px; }
    .map-head { margin-bottom: 44px; }
    .map-box { position: relative; overflow: hidden; border: 1px solid rgba(13,17,23,0.15); }
    .map-box iframe { display: block; width: 100%; height: 420px; border: none; }
    .map-pin {
      position: absolute; top: 24px; left: 24px;
      background: var(--dark); padding: 22px 28px;
    }
    .map-pin-lbl { font-size: 9px; letter-spacing: 0.35em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 8px; font-weight: 700; }
    .map-pin-addr { font-size: 15px; color: #ffffff; line-height: 1.65; font-weight: 400; }
    .branches {
      margin-top: 2px; display: grid; grid-template-columns: repeat(4,1fr);
      border: 1px solid rgba(13,17,23,0.12);
    }
    .branch {
      padding: 28px 24px; border-right: 1px solid rgba(13,17,23,0.12);
      transition: background 0.25s; cursor: default;
    }
    .branch:last-child { border-right: none; }
    .branch:hover { background: var(--dark); }
    .branch:hover .br-city,
    .branch:hover .br-addr,
    .branch:hover .br-ph { color: rgba(255,255,255,0.7); }
    .br-city { font-size: 18px; font-weight: 700; color: #2b394b; margin-bottom: 8px; transition: color 0.25s; }
    .br-addr { font-size: 13px; color: rgba(13,17,23,0.55); line-height: 1.6; transition: color 0.25s; font-weight: 400; }
    .br-ph { font-size: 13px; color: rgba(13,17,23,0.42); margin-top: 8px; transition: color 0.25s; font-weight: 600; }

    /* ─── FAQ ─── */
    .faq-sec { padding: 0 0 120px; }
    .faq-head { margin-bottom: 52px; }
    .faq-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 2px; background: rgba(13,17,23,0.1);
    }
    .faq-card {
      background: #f0f2f5; padding: 40px 44px;
      transition: background 0.3s; cursor: default;
    }
    .faq-card:hover { background: var(--dark); }
    .faq-card:hover .faq-num { color: rgba(255,255,255,0.2); }
    .faq-card:hover .faq-q   { color: #ffffff; }
    .faq-card:hover .faq-a   { color: rgba(255,255,255,0.55); }
    .faq-num { font-size: 10px; letter-spacing: 0.3em; color: rgba(13,17,23,0.3); margin-bottom: 14px; transition: color 0.3s; font-weight: 700; }
    .faq-q   { font-size: clamp(17px, 2vw, 21px); font-weight: 700; color: #2b394b; line-height: 1.3; margin-bottom: 14px; transition: color 0.3s; }
    .faq-a   { font-size: 15px; color: rgba(13,17,23,0.58); line-height: 1.8; font-weight: 400; transition: color 0.3s; }

    /* ─── CTA ─── */
    .cta {
      background: var(--dark); padding: 100px 24px;
      text-align: center; position: relative; overflow: hidden;
    }
    .cta-dots {
      position: absolute; inset: 0; pointer-events: none;
      background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 36px 36px;
    }
    .cta-inner { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }
    .cta-tag { font-size: 9px; letter-spacing: 0.42em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 20px; font-weight: 700; }
    .cta-h { font-size: clamp(36px, 6vw, 72px); font-weight: 700; color: #ffffff; line-height: 1.05; margin-bottom: 16px; }
    .cta-h em { font-style: italic; color: #e2e8f0; }
    .cta-p { font-size: 17px; color: rgba(255,255,255,0.45); margin-bottom: 44px; font-weight: 400; }
    .cta-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

    /* ─── ANIMATIONS ─── */
    @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
    @keyframes pulse  { 0%,100% { opacity:.3; } 50% { opacity:.9; } }

    /* ─── RESPONSIVE: TABLET (≤960px) ─── */
    @media (max-width: 960px) {
      .wrap { padding: 0 36px; }
      .hero-content { padding: 0 36px 64px; }
      .contact-split { grid-template-columns: 1fr; gap: 60px; }
      .contact-sec { padding: 80px 0; }
      .stats-grid { grid-template-columns: repeat(2,1fr); }
      .stat { padding: 28px 32px; }
      .branches { grid-template-columns: repeat(2,1fr); }
      .faq-grid { grid-template-columns: 1fr; }
      .form-card { padding: 44px 36px; }
      .row2 { grid-template-columns: 1fr 1fr; }
      .hero-bg-word { display: none; }
      .hero-scroll { display: none; }
      .map-sec { padding: 0 0 80px; }
      .faq-sec { padding: 0 0 80px; }
      .cta { padding: 80px 24px; }
    }

    /* ─── RESPONSIVE: LARGE MOBILE (≤768px) ─── */
    @media (max-width: 768px) {
      .wrap { padding: 0 24px; }
      .hero-content { padding: 0 24px 52px; }
      .hero-h1 { font-size: clamp(40px, 11vw, 72px); margin-bottom: 28px; }
      .hero-bottom { flex-direction: column; align-items: flex-start; gap: 28px; }
      .hero-btns { width: 100%; }
      .btn-solid, .btn-ghost { flex: 1; justify-content: center; padding: 14px 20px; }
      .contact-sec { padding: 64px 0; }
      .sec-title { font-size: clamp(30px, 8vw, 48px); }
      .faq-card { padding: 30px 28px; }
      .form-card { padding: 36px 24px; }
      .row2 { grid-template-columns: 1fr; gap: 22px; }
      .branches { grid-template-columns: repeat(2, 1fr); }
      .br-city { font-size: 16px; }
      .branch { padding: 22px 18px; }
      .map-box iframe { height: 300px; }
      .map-pin { padding: 16px 20px; }
      .map-pin-addr { font-size: 13px; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .stat-n { font-size: clamp(26px, 6vw, 38px); }
      .hero-vline { display: none; }
      .cta { padding: 64px 20px; }
      .cta-btns { flex-direction: column; align-items: center; }
      .cta-btns .btn-solid,
      .cta-btns .btn-ghost { width: 100%; max-width: 320px; justify-content: center; }
    }

    /* ─── RESPONSIVE: SMALL MOBILE (≤480px) ─── */
    @media (max-width: 480px) {
      .wrap { padding: 0 16px; }
      .hero-content { padding: 0 16px 44px; }
      .hero-h1 { font-size: clamp(36px, 12vw, 56px); line-height: 1; margin-bottom: 24px; }
      .hero-desc { font-size: 15px; }
      .hero-tag { font-size: 9px; margin-bottom: 20px; }
      .contact-sec { padding: 52px 0; }
      .sec-body { font-size: 16px; margin-bottom: 40px; }
      .crow { gap: 18px; padding: 20px 0; }
      .crow-vals p { font-size: 15px; }
      .form-card { padding: 28px 16px; }
      .form-ttl { font-size: clamp(22px, 7vw, 30px); }
      .form-sub { font-size: 13px; margin-bottom: 28px; }
      .fields { gap: 18px; }
      .f-inp { padding: 12px 14px; font-size: 15px; }
      .sub-btn { padding: 16px; font-size: 12px; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .stat { padding: 20px 16px; }
      .stat-n { font-size: clamp(22px, 8vw, 32px); }
      .stat-l { font-size: 8px; }
      .branches { grid-template-columns: 1fr 1fr; }
      .branch { padding: 18px 14px; }
      .br-city { font-size: 15px; }
      .br-addr, .br-ph { font-size: 12px; }
      .map-box iframe { height: 240px; }
      .map-pin { top: 12px; left: 12px; padding: 12px 16px; }
      .map-pin-addr { font-size: 12px; }
      .faq-card { padding: 24px 20px; }
      .faq-q { font-size: 16px; }
      .faq-a { font-size: 14px; }
      .map-sec { padding: 0 0 60px; }
      .faq-sec { padding: 0 0 60px; }
      .cta { padding: 52px 16px; }
      .cta-h { font-size: clamp(30px, 10vw, 48px); }
      .cta-p { font-size: 15px; }
    }

    /* ─── EXTRA SMALL (≤360px) ─── */
    @media (max-width: 360px) {
      .hero-h1 { font-size: 32px; }
      .btn-solid, .btn-ghost { padding: 13px 16px; font-size: 11px; }
      .branches { grid-template-columns: 1fr; }
      .branch { border-right: none; border-bottom: 1px solid rgba(13,17,23,0.1); }
      .branch:last-child { border-bottom: none; }
      .form-card { padding: 24px 14px; }
      .stats-grid { grid-template-columns: 1fr 1fr; }
    }
  `;


useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
      <style>{css}</style>
      <div className="page">

        {/* HERO */}
        <section className="hero">
          <div className="hero-img" />
          <div className="hero-overlay" />
          <div className="hero-dots" />
          <div className="hero-bg-word">LOAN</div>
          {[20, 40, 60, 80].map(p => (
            <div key={p} className="hero-vline" style={{ left: `${p}%` }} />
          ))}
          <div className="hero-content">
            <div className="hero-tag">
              <span className="hero-tag-dash" />
              Premier Financial Services
            </div>
            <h1 className="hero-h1">
              We're Here<br />to <em>Guide</em><br />You Forward
            </h1>
            <div className="hero-bottom">
              <p className="hero-desc">
                Personal loans, mortgages, and business financing — our specialists bring clarity and confidence to every financial decision.
              </p>
              <div className="hero-btns">
                <button className="btn-solid">Start Application <ArrowRight size={14} /></button>
                <button className="btn-ghost">Meet a Specialist</button>
              </div>
            </div>
          </div>
      
        </section>

        {/* STATS */}
        <div className="stats">
          <div className="stats-grid">
            {[
              { n: '₹2.4CR', l: 'Loans Disbursed' },
              { n: '48,000+', l: 'Happy Clients' },
              { n: '24 hrs', l: 'Approval Time' },
              { n: '15 Years', l: 'Trusted Service' },
            ].map((s, i) => (
              <div key={i} className="stat">
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <section className="contact-sec">
          <div className="wrap">
            <div className="contact-split">
              <div>
                <div className="eyebrow">Contact Us</div>
                <h2 className="sec-title">Let's <em>talk</em><br />financing</h2>
                <p className="sec-body">
                  Questions about our loan products or your application? Our dedicated team is here to help you find the right solution — on terms that work for you.
                </p>
                <div className="crows">
                  {[
                    { Icon: Phone,  label: 'Call Us',  vals: ['+91 9990607660',],           note: 'Mon – Fri, 8am – 8pm EST' },
                    { Icon: Mail,   label: 'Email Us', vals: ['support@shivaji.com',],  note: 'Response within 24 hours' },
                    { Icon: MapPin, label: 'Visit Us', vals: ['Nav durga Mandir, Nirala Greenshire, Sector 2,'],      note: 'Headquarters, open Mon – Sat' },
                  ].map(({ Icon, label, vals, note }, i) => (
                    <div key={i} className="crow">
                      <div className="crow-icon"><Icon /></div>
                      <div>
                        <div className="crow-lbl">{label}</div>
                        <div className="crow-vals">{vals.map((v, j) => <p key={j}>{v}</p>)}</div>
                        <div className="crow-note">{note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-card">
                <div className="form-watermark">01</div>
                <div className="form-tag">Send a Message</div>
                <h3 className="form-ttl">Tell us what<br />you <em>need</em></h3>
                <p className="form-sub">Our experts respond within one business day.</p>
                <form onSubmit={handleSubmit} className="fields">
                  <div className={`f${focused === 'name' ? ' on' : ''}`}>
                    <label className="f-lbl">Full Name *</label>
                    <input type="text" name="name" required placeholder="Full Name"
                      value={formData.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                      className="f-inp" />
                  </div>
                  <div className="row2">
                    <div className={`f${focused === 'email' ? ' on' : ''}`}>
                      <label className="f-lbl">Email *</label>
                      <input type="email" name="email" required placeholder="mail@example.com"
                        value={formData.email} onChange={handleChange}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                        className="f-inp" />
                    </div>
                    <div className={`f${focused === 'phone' ? ' on' : ''}`}>
                      <label className="f-lbl">Phone</label>
                      <input type="tel" name="phone" placeholder="(+91) 9XXXXXXXXX"
                        value={formData.phone} onChange={handleChange}
                        onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                        className="f-inp" />
                    </div>
                  </div>
                  <div className={`f${focused === 'subject' ? ' on' : ''}`}>
                    <label className="f-lbl">Loan Interest *</label>
                    <select name="subject" required value={formData.subject} onChange={handleChange}
                      onFocus={() => setFocused('subject')} onBlur={() => setFocused('')}
                      className="f-inp">
                      <option value="">Select a loan type</option>
                      <option value="personal">Personal Loan</option>
                      <option value="mortgage">Mortgage / Home Loan</option>
                      <option value="auto">Auto Loan</option>
                      <option value="business">Business Loan</option>
                      <option value="student">Student Loan</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className={`f${focused === 'message' ? ' on' : ''}`}>
                    <label className="f-lbl">Your Message *</label>
                    <textarea name="message" required rows={5}
                      placeholder="Tell us about your loan requirements, desired amount, and any questions…"
                      value={formData.message} onChange={handleChange}
                      onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                      className="f-inp" />
                  </div>
                  <button type="submit" className={`sub-btn${submitted ? ' ok' : ''}`}>
                    {submitted
                      ? '✓ Message Sent — We\'ll be in touch'
                      : <><span>Send Message</span><Send size={14} /></>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="map-sec">
          <div className="wrap">
            <div className="map-head">
              <div className="eyebrow">Our Location</div>
              <h2 className="sec-title">Find Our <em>Headquarters</em></h2>
            </div>
            <div className="map-box">
              <iframe title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112109.8564273855!2d77.36367113322723!3d28.586783849690633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee4b71461185%3A0xd1989111c49e52fa!2sGalaxy%20Diamond%20Plaza!5e0!3m2!1sen!2sin!4v1774598775004!5m2!1sen!2sin"
                allowFullScreen loading="lazy" />
              <div className="map-pin">
                <div className="map-pin-lbl">Headquarters</div>
                <div className="map-pin-addr">Galaxy Diamond Plaza <br />Noida,203010<br />UP</div>
              </div>
            </div>
            <div className="branches">
              {[
                { city: 'Manhattan',     address: '350 Fifth Ave, Suite 2300', phone: '+91 9999999999' },
                { city: 'Brooklyn',      address: '123 MetroTech Center',      phone: '+91 9999999999' },
                { city: 'Queens',        address: '90-15 Queens Blvd',         phone: '+91 9999999999' },
                { city: 'Staten Island', address: '2655 Richmond Ave',         phone: '+91 9999999999' },
              ].map((b, i) => (
                <div key={i} className="branch">
                  <div className="br-city">{b.city}</div>
                  <div className="br-addr">{b.address}</div>
                  <div className="br-ph">{b.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-sec">
          <div className="wrap">
            <div className="faq-head">
              <div className="eyebrow">FAQs</div>
              <h2 className="sec-title">Common <em>Questions</em></h2>
            </div>
            <div className="faq-grid">
              {[
                { q: 'What documents are needed for a loan application?', a: 'Typically, we require government-issued ID, proof of income (pay stubs or tax returns), recent bank statements, and proof of residence. Our team guides you through requirements specific to your loan type.' },
                { q: 'How long does loan approval take?',                  a: 'Most applications are processed within 24–48 hours. Same-day approvals are possible when all documents are submitted and verified promptly.' },
                { q: 'What credit score is required?',                     a: 'We work with a wide range of credit profiles. A score of 620+ is ideal for our best rates, but we have tailored programs for scores as low as 580.' },
                { q: 'Can I apply for a loan online?',                     a: 'Absolutely. Our entire application process is fully digital. You can also visit any branch for in-person assistance from one of our specialists.' },
              ].map((f, i) => (
                <div key={i} className="faq-card">
                  <div className="faq-num">0{i + 1}</div>
                  <div className="faq-q">{f.q}</div>
                  <div className="faq-a">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

   
      </div>
    </>
  );
};

export default ContactPage;