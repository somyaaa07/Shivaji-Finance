import React, { useState } from 'react';
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
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --light: #cacdd2;
      --dark:  #2b394b;
    }

    body { font-family: 'Cormorant Garamond', serif; background: var(--light); color: var(--dark); }
    .page { min-height: 100vh; overflow-x: hidden; }

    /* ─── HERO ─── */
    .hero {
      position: relative;
      min-height: 92vh;
      background: var(--dark);
      display: flex; flex-direction: column;
      justify-content: flex-end;
      overflow: hidden;
    }
    .hero-dots {
      position: absolute; inset: 0; pointer-events: none;
      background-image: radial-gradient(circle, rgba(202,205,210,0.15) 1px, transparent 1px);
      background-size: 32px 32px;
    }
    .hero-bg-word {
      position: absolute; right: -1%; top: 50%;
      transform: translateY(-52%);
      font-size: clamp(240px, 28vw, 420px);
      font-weight: 700; font-style: italic;
      color: rgba(202,205,210,0.035);
      line-height: 1; user-select: none; pointer-events: none;
      letter-spacing: -0.04em;
    }
    .hero-vline {
      position: absolute; top: 0; bottom: 0; width: 1px;
      background: rgba(202,205,210,0.06);
    }
    .hero-content {
      position: relative; z-index: 1;
      padding: 0 64px 80px;
      animation: fadeUp 0.9s ease both;
    }
    .hero-tag {
      display: inline-flex; align-items: center; gap: 12px;
      font-size: 10px; letter-spacing: 0.42em; text-transform: uppercase;
      color: rgba(202,205,210,0.45); margin-bottom: 28px;
    }
    .hero-tag-dash { width: 32px; height: 1px; background: rgba(202,205,210,0.3); }
    .hero-h1 {
      font-size: clamp(54px, 9vw, 116px);
      font-weight: 300; line-height: 0.95;
      color: var(--light); letter-spacing: -0.02em; margin-bottom: 40px;
    }
    .hero-h1 em { font-style: italic; font-weight: 400; }
    .hero-bottom {
      display: flex; align-items: flex-end;
      justify-content: space-between; gap: 40px; flex-wrap: wrap;
    }
    .hero-desc {
      font-size: clamp(16px, 1.6vw, 20px); font-weight: 300;
      color: rgba(202,205,210,0.5); max-width: 440px; line-height: 1.8;
    }
    .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0; }
    .btn-solid {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 15px 38px; background: var(--light); color: var(--dark);
      font-family: 'Cormorant Garamond', serif;
      font-size: 13px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
      border: none; cursor: pointer;
      transition: opacity 0.25s, transform 0.25s;
    }
    .btn-solid:hover { opacity: 0.82; transform: translateY(-2px); }
    .btn-ghost {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 15px 38px; background: transparent; color: var(--light);
      font-family: 'Cormorant Garamond', serif;
      font-size: 13px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
      border: 1px solid rgba(202,205,210,0.22); cursor: pointer;
      transition: border-color 0.25s, transform 0.25s;
    }
    .btn-ghost:hover { border-color: rgba(202,205,210,0.65); transform: translateY(-2px); }
    .hero-scroll {
      position: absolute; bottom: 0; right: 64px;
      display: flex; flex-direction: column; align-items: center; gap: 8px; padding-bottom: 24px;
    }
    .hero-scroll-bar {
      width: 1px; height: 60px;
      background: linear-gradient(to bottom, rgba(202,205,210,0.45), transparent);
      animation: pulse 2s ease-in-out infinite;
    }
    .hero-scroll-lbl {
      writing-mode: vertical-rl;
      font-size: 9px; letter-spacing: 0.35em; text-transform: uppercase;
      color: rgba(202,205,210,0.28);
    }

    /* ─── STATS ─── */
    .stats { background: var(--dark); border-top: 1px solid rgba(202,205,210,0.08); }
    .stats-grid {
      max-width: 1200px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(4,1fr);
    }
    .stat {
      padding: 32px 40px;
      border-right: 1px solid rgba(202,205,210,0.08);
      transition: background 0.25s;
    }
    .stat:last-child { border-right: none; }
    .stat:hover { background: rgba(202,205,210,0.04); }
    .stat-n { font-size: 44px; font-weight: 300; font-style: italic; color: var(--light); line-height: 1; }
    .stat-l { font-size: 9px; letter-spacing: 0.32em; text-transform: uppercase; color: rgba(202,205,210,0.35); margin-top: 8px; }

    /* ─── SHARED ─── */
    .wrap { max-width: 1200px; margin: 0 auto; padding: 0 64px; }
    .eyebrow {
      font-size: 9px; letter-spacing: 0.45em; text-transform: uppercase;
      color: rgba(43,57,75,0.4); margin-bottom: 18px;
      display: flex; align-items: center; gap: 12px;
    }
    .eyebrow::before { content: ''; width: 28px; height: 1px; background: rgba(43,57,75,0.25); }
    .sec-title {
      font-size: clamp(38px, 5vw, 66px);
      font-weight: 300; line-height: 1.05; color: var(--dark); margin-bottom: 20px;
    }
    .sec-title em { font-style: italic; }

    /* ─── CONTACT ─── */
    .contact-sec { padding: 120px 0; }
    .contact-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 96px; align-items: start; }
    .sec-body {
      font-size: 18px; font-weight: 300; line-height: 1.8;
      color: rgba(43,57,75,0.58); margin-bottom: 56px;
    }
    .crows { border-top: 1px solid rgba(43,57,75,0.1); }
    .crow {
      display: flex; align-items: flex-start; gap: 26px;
      padding: 26px 0; border-bottom: 1px solid rgba(43,57,75,0.1);
      transition: padding-left 0.25s; cursor: default;
    }
    .crow:hover { padding-left: 10px; }
    .crow:hover .crow-icon { background: var(--dark); }
    .crow:hover .crow-icon svg { stroke: var(--light); }
    .crow-icon {
      flex-shrink: 0; width: 44px; height: 44px;
      border: 1px solid rgba(43,57,75,0.18);
      display: flex; align-items: center; justify-content: center;
      transition: background 0.25s;
    }
    .crow-icon svg { width: 17px; height: 17px; stroke: var(--dark); transition: stroke 0.25s; }
    .crow-lbl {
      font-size: 9px; letter-spacing: 0.35em; text-transform: uppercase;
      color: rgba(43,57,75,0.38); margin-bottom: 6px;
    }
    .crow-vals p { font-size: 17px; color: var(--dark); line-height: 1.65; }
    .crow-note { font-size: 13px; font-style: italic; color: rgba(43,57,75,0.38); margin-top: 4px; }

    /* ─── FORM ─── */
    .form-card {
      background: var(--dark);
      padding: 56px 52px;
      position: relative; overflow: hidden;
    }
    .form-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, rgba(202,205,210,0.3) 50%, transparent);
    }
    .form-watermark {
      position: absolute; right: -8px; bottom: -16px;
      font-size: 200px; font-weight: 700; font-style: italic;
      color: rgba(202,205,210,0.03); line-height: 1;
      pointer-events: none; user-select: none;
    }
    .form-tag { font-size: 9px; letter-spacing: 0.45em; text-transform: uppercase; color: rgba(202,205,210,0.32); margin-bottom: 12px; }
    .form-ttl { font-size: 36px; font-weight: 300; color: var(--light); line-height: 1.15; margin-bottom: 6px; }
    .form-ttl em { font-style: italic; }
    .form-sub { font-size: 15px; color: rgba(202,205,210,0.35); margin-bottom: 40px; font-weight: 300; }
    .fields { display: flex; flex-direction: column; gap: 22px; position: relative; z-index: 1; }
    .row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    .f { display: flex; flex-direction: column; gap: 7px; }
    .f-lbl {
      font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
      color: rgba(202,205,210,0.32); transition: color 0.2s;
    }
    .f.on .f-lbl { color: rgba(202,205,210,0.72); }
    .f-inp {
      background: rgba(202,205,210,0.05);
      border: 1px solid rgba(202,205,210,0.1);
      border-bottom-color: rgba(202,205,210,0.2);
      color: var(--light);
      font-family: 'Cormorant Garamond', serif; font-size: 16px;
      padding: 13px 16px; outline: none; width: 100%;
      transition: border-color 0.25s, background 0.25s;
    }
    .f-inp::placeholder { color: rgba(202,205,210,0.18); }
    .f-inp:focus { border-color: rgba(202,205,210,0.45); background: rgba(202,205,210,0.08); }
    select.f-inp option { background: var(--dark); color: var(--light); }
    textarea.f-inp { resize: none; }
    .sub-btn {
      width: 100%; padding: 18px;
      background: var(--light); color: var(--dark);
      font-family: 'Cormorant Garamond', serif;
      font-size: 13px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase;
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      transition: opacity 0.25s, transform 0.25s; margin-top: 4px;
    }
    .sub-btn:hover { opacity: 0.85; transform: translateY(-1px); }
    .sub-btn.ok { background: rgba(202,205,210,0.12); color: var(--light); border: 1px solid rgba(202,205,210,0.25); }

    /* ─── MAP ─── */
    .map-sec { padding: 0 0 120px; }
    .map-head { margin-bottom: 44px; }
    .map-box { position: relative; overflow: hidden; border: 1px solid rgba(43,57,75,0.14); }
    .map-box iframe { display: block; width: 100%; height: 420px; border: none; }
    .map-pin {
      position: absolute; top: 24px; left: 24px;
      background: var(--dark); padding: 22px 28px;
    }
    .map-pin-lbl { font-size: 9px; letter-spacing: 0.35em; text-transform: uppercase; color: rgba(202,205,210,0.4); margin-bottom: 8px; }
    .map-pin-addr { font-size: 15px; color: var(--light); line-height: 1.65; font-weight: 300; }
    .branches {
      margin-top: 2px; display: grid; grid-template-columns: repeat(4,1fr);
      border: 1px solid rgba(43,57,75,0.1);
    }
    .branch {
      padding: 28px 24px; border-right: 1px solid rgba(43,57,75,0.1);
      transition: background 0.25s; cursor: default;
    }
    .branch:last-child { border-right: none; }
    .branch:hover { background: var(--dark); }
    .branch:hover .br-city,
    .branch:hover .br-addr,
    .branch:hover .br-ph { color: rgba(202,205,210,0.7); }
    .br-city { font-size: 18px; font-weight: 500; color: var(--dark); margin-bottom: 8px; transition: color 0.25s; }
    .br-addr { font-size: 13px; color: rgba(43,57,75,0.52); line-height: 1.6; transition: color 0.25s; }
    .br-ph { font-size: 13px; color: rgba(43,57,75,0.4); margin-top: 8px; transition: color 0.25s; }

    /* ─── FAQ ─── */
    .faq-sec { padding: 0 0 120px; }
    .faq-head { margin-bottom: 52px; }
    .faq-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 2px; background: rgba(43,57,75,0.1);
    }
    .faq-card {
      background: var(--light); padding: 40px 44px;
      transition: background 0.3s; cursor: default;
    }
    .faq-card:hover { background: var(--dark); }
    .faq-card:hover .faq-num { color: rgba(202,205,210,0.25); }
    .faq-card:hover .faq-q   { color: var(--light); }
    .faq-card:hover .faq-a   { color: rgba(202,205,210,0.52); }
    .faq-num { font-size: 10px; letter-spacing: 0.3em; color: rgba(43,57,75,0.28); margin-bottom: 14px; transition: color 0.3s; }
    .faq-q   { font-size: 21px; font-weight: 500; color: var(--dark); line-height: 1.3; margin-bottom: 14px; transition: color 0.3s; }
    .faq-a   { font-size: 15px; color: rgba(43,57,75,0.58); line-height: 1.8; font-weight: 300; transition: color 0.3s; }

    /* ─── CTA ─── */
    .cta {
      background: var(--dark); padding: 100px 24px;
      text-align: center; position: relative; overflow: hidden;
    }
    .cta-dots {
      position: absolute; inset: 0; pointer-events: none;
      background-image: radial-gradient(circle, rgba(202,205,210,0.07) 1px, transparent 1px);
      background-size: 36px 36px;
    }
    .cta-inner { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }
    .cta-tag { font-size: 9px; letter-spacing: 0.42em; text-transform: uppercase; color: rgba(202,205,210,0.3); margin-bottom: 20px; }
    .cta-h { font-size: clamp(42px, 6vw, 72px); font-weight: 300; color: var(--light); line-height: 1.05; margin-bottom: 16px; }
    .cta-h em { font-style: italic; }
    .cta-p { font-size: 17px; color: rgba(202,205,210,0.42); margin-bottom: 44px; font-weight: 300; }
    .cta-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

    /* ─── ANIMATIONS ─── */
    @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
    @keyframes pulse  { 0%,100% { opacity:.3; } 50% { opacity:.9; } }

    /* ─── RESPONSIVE ─── */
    @media (max-width: 960px) {
      .wrap { padding: 0 28px; }
      .hero-content { padding: 0 28px 64px; }
      .contact-split { grid-template-columns: 1fr; gap: 60px; }
      .stats-grid { grid-template-columns: repeat(2,1fr); }
      .branches { grid-template-columns: repeat(2,1fr); }
      .faq-grid { grid-template-columns: 1fr; }
      .form-card { padding: 40px 28px; }
      .row2 { grid-template-columns: 1fr; }
      .hero-bg-word, .hero-scroll { display: none; }
    }
    @media (max-width: 600px) {
      .hero-content { padding: 0 20px 56px; }
      .wrap { padding: 0 20px; }
      .branches { grid-template-columns: 1fr 1fr; }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="page">

        {/* HERO */}
        <section className="hero">
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
          <div className="hero-scroll">
            <div className="hero-scroll-bar" />
            <span className="hero-scroll-lbl">Scroll</span>
          </div>
        </section>

        {/* STATS */}
        <div className="stats">
          <div className="stats-grid">
            {[
              { n: '$2.4B+', l: 'Loans Disbursed' },
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
                    { Icon: Phone,  label: 'Call Us',  vals: ['+1 (888) 123-4567', '+1 (888) 765-4321'],           note: 'Mon – Fri, 8am – 8pm EST' },
                    { Icon: Mail,   label: 'Email Us', vals: ['support@loanpro.com', 'applications@loanpro.com'],  note: 'Response within 24 hours' },
                    { Icon: MapPin, label: 'Visit Us', vals: ['123 Financial District', 'New York, NY 10005'],      note: 'Headquarters, open Mon – Sat' },
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
                    <input type="text" name="name" required placeholder="John Doe"
                      value={formData.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                      className="f-inp" />
                  </div>
                  <div className="row2">
                    <div className={`f${focused === 'email' ? ' on' : ''}`}>
                      <label className="f-lbl">Email *</label>
                      <input type="email" name="email" required placeholder="john@example.com"
                        value={formData.email} onChange={handleChange}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                        className="f-inp" />
                    </div>
                    <div className={`f${focused === 'phone' ? ' on' : ''}`}>
                      <label className="f-lbl">Phone</label>
                      <input type="tel" name="phone" placeholder="(555) 123-4567"
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
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0115%2C40.7055%2C-73.9995%2C40.7175&layer=mapnik&marker=40.7115%2C-74.0055"
                allowFullScreen loading="lazy" />
              <div className="map-pin">
                <div className="map-pin-lbl">Headquarters</div>
                <div className="map-pin-addr">123 Financial District<br />New York, NY 10005<br />United States</div>
              </div>
            </div>
            <div className="branches">
              {[
                { city: 'Manhattan',     address: '350 Fifth Ave, Suite 2300', phone: '+1 (212) 555-0100' },
                { city: 'Brooklyn',      address: '123 MetroTech Center',      phone: '+1 (718) 555-0200' },
                { city: 'Queens',        address: '90-15 Queens Blvd',         phone: '+1 (718) 555-0300' },
                { city: 'Staten Island', address: '2655 Richmond Ave',         phone: '+1 (718) 555-0400' },
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

        {/* CTA */}
        <div className="cta">
          <div className="cta-dots" />
          <div className="cta-inner">
            <div className="cta-tag">Take the Next Step</div>
            <h3 className="cta-h">Ready to Begin<br />Your <em>Journey?</em></h3>
            <p className="cta-p">Get pre-approved in minutes. No obligations, no hidden fees.</p>
            <div className="cta-btns">
              <button className="btn-solid">Apply for a Loan <ArrowRight size={14} /></button>
              <button className="btn-ghost">Learn More</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ContactPage;