import { useState, useEffect } from "react";


function AurexLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradAP" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0b429"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="10" fill="url(#logoGradAP)"/>
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

// ── ApplyPage Component ───────────────────────────────────────────────────────
// Props:
//   asModal  {boolean}  — render as a full-screen overlay modal (default: false = standalone page)
//   onClose  {function} — required when asModal=true; called when user dismisses the modal
//
// Usage as MODAL (e.g. from Navbar):
//   {showApply && <ApplyPage asModal onClose={() => setShowApply(false)} />}
//
// Usage as PAGE (e.g. React Router route):
//   <Route path="/apply" element={<ApplyPage />} />

export default function ApplyPage({ asModal = false, onClose }) {
  const [step, setStep]     = useState(1); // 1 = personal, 2 = financial, 3 = success
  const [form, setForm]     = useState({
    firstName: "", lastName: "", email: "", phone: "",
    dob: "", country: "India",
    investAmount: "", experience: "", goal: "",
  });
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  // Lock body scroll when used as modal
  useEffect(() => {
    if (asModal) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [asModal]);

  // ── Validation ──
  const validate1 = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim())  e.lastName  = "Required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim())     e.phone     = "Required";
    if (!form.dob)              e.dob       = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const validate2 = () => {
    const e = {};
    if (!form.investAmount) e.investAmount = "Required";
    if (!form.experience)   e.experience   = "Required";
    if (!form.goal)         e.goal         = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next   = () => { if (step === 1 && validate1()) { setErrors({}); setStep(2); } };
  const submit = () => { if (validate2()) setStep(3); };

  // ── Reusable field wrapper ──
  const Field = ({ label, error, children }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <label style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#94a3b8" }}>
        {label}
      </label>
      {children}
      {error && <span style={{ fontSize: "0.7rem", color: "#f87171" }}>{error}</span>}
    </div>
  );

  const inputStyle = (hasErr) => ({
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${hasErr ? "#f87171" : "rgba(255,255,255,0.1)"}`,
    borderRadius: 8, padding: "11px 14px", fontSize: "0.875rem",
    color: "#e2e8f0", fontFamily: "'DM Sans',sans-serif", outline: "none",
    transition: "border-color 0.2s", width: "100%", boxSizing: "border-box",
  });

  const selectStyle = (hasErr) => ({
    ...inputStyle(hasErr),
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%2364748b' stroke-width='1.5' stroke-linecap='round' fill='none'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
    paddingRight: 36, cursor: "pointer",
  });

  // ── Inner card (shared between modal + page) ──
  const card = (
    <div
      onClick={e => e.stopPropagation()}
      style={{
        background: "linear-gradient(145deg, #111827 0%, #0f1729 100%)",
        border: "1px solid rgba(240,180,41,0.15)",
        borderRadius: 20,
        width: "100%",
        maxWidth: 560,
        maxHeight: asModal ? "90vh" : "none",
        overflowY: "auto",
        boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(240,180,41,0.08)",
        animation: "apSlideUp 0.3s ease",
        position: "relative",
      }}
    >
      {/* Glow accent top */}
      <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: "linear-gradient(90deg,transparent,rgba(240,180,41,0.5),transparent)" }}/>

      {/* Close button — only in modal mode */}
      {asModal && onClose && (
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16, width: 32, height: 32,
            borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)", color: "#94a3b8",
            cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: "1rem", zIndex: 1,
          }}
        >✕</button>
      )}

      <div style={{ padding: "36px 36px 32px" }}>
        {step < 3 ? (
          <>
            {/* ── Header ── */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
               
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "#f8fafc" }}>Shivaji Finance</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.4rem,4vw,1.8rem)", color: "#f8fafc", margin: "0 0 6px" }}>
                {step === 1 ? "Create Your Account" : "Financial Profile"}
              </h2>
              <p style={{ color: "#64748b", fontSize: "0.85rem", margin: 0 }}>
                {step === 1 ? "Start your investment journey with Aurex today." : "Help us personalise your investment experience."}
              </p>
            </div>

            {/* ── Step indicator ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
              {[1, 2].map(s => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: s <= step ? "linear-gradient(135deg,#f0b429,#d97706)" : "rgba(255,255,255,0.06)",
                    border: s <= step ? "none" : "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.75rem", fontWeight: 700,
                    color: s <= step ? "#0b0f1a" : "#475569",
                    transition: "all 0.3s",
                  }}>{s < step ? "✓" : s}</div>
                  <span style={{ fontSize: "0.75rem", color: s === step ? "#f0b429" : "#475569", fontWeight: s === step ? 600 : 400 }}>
                    {s === 1 ? "Personal Info" : "Financial"}
                  </span>
                  {s < 2 && <div style={{ width: 32, height: 1, background: step > 1 ? "rgba(240,180,41,0.4)" : "rgba(255,255,255,0.08)" }}/>}
                </div>
              ))}
            </div>

            {/* ── Step 1 — Personal Info ── */}
            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <Field label="First Name" error={errors.firstName}>
                    <input value={form.firstName} onChange={e => set("firstName", e.target.value)} placeholder="Rahul" style={inputStyle(errors.firstName)}
                      onFocus={e => e.target.style.borderColor = "rgba(240,180,41,0.5)"} onBlur={e => e.target.style.borderColor = errors.firstName ? "#f87171" : "rgba(255,255,255,0.1)"}/>
                  </Field>
                  <Field label="Last Name" error={errors.lastName}>
                    <input value={form.lastName} onChange={e => set("lastName", e.target.value)} placeholder="Sharma" style={inputStyle(errors.lastName)}
                      onFocus={e => e.target.style.borderColor = "rgba(240,180,41,0.5)"} onBlur={e => e.target.style.borderColor = errors.lastName ? "#f87171" : "rgba(255,255,255,0.1)"}/>
                  </Field>
                </div>
                <Field label="Email Address" error={errors.email}>
                  <input type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="rahul@example.com" style={inputStyle(errors.email)}
                    onFocus={e => e.target.style.borderColor = "rgba(240,180,41,0.5)"} onBlur={e => e.target.style.borderColor = errors.email ? "#f87171" : "rgba(255,255,255,0.1)"}/>
                </Field>
                <Field label="Phone Number" error={errors.phone}>
                  <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+91 98765 43210" style={inputStyle(errors.phone)}
                    onFocus={e => e.target.style.borderColor = "rgba(240,180,41,0.5)"} onBlur={e => e.target.style.borderColor = errors.phone ? "#f87171" : "rgba(255,255,255,0.1)"}/>
                </Field>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <Field label="Date of Birth" error={errors.dob}>
                    <input type="date" value={form.dob} onChange={e => set("dob", e.target.value)} style={{ ...inputStyle(errors.dob), colorScheme: "dark" }}
                      onFocus={e => e.target.style.borderColor = "rgba(240,180,41,0.5)"} onBlur={e => e.target.style.borderColor = errors.dob ? "#f87171" : "rgba(255,255,255,0.1)"}/>
                  </Field>
                  <Field label="Country">
                    <select value={form.country} onChange={e => set("country", e.target.value)} style={{ ...selectStyle(false), background: "#0f172a" }}
                      onFocus={e => e.target.style.borderColor = "rgba(240,180,41,0.5)"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}>
                      {["India","United States","United Kingdom","Singapore","UAE","Australia","Canada","Germany","Other"].map(c => (
                        <option key={c} value={c} style={{ background: "#0f172a" }}>{c}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <button onClick={next} style={{
                  marginTop: 4, background: "linear-gradient(135deg,#f0b429,#d97706)", color: "#0b0f1a",
                  fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "0.9rem",
                  padding: "13px", borderRadius: 9, border: "none", cursor: "pointer",
                  boxShadow: "0 0 20px rgba(240,180,41,0.3)", transition: "all 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 32px rgba(240,180,41,0.5)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(240,180,41,0.3)"}
                >Continue →</button>
              </div>
            )}

            {/* ── Step 2 — Financial ── */}
            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <Field label="Investment Amount" error={errors.investAmount}>
                  <select value={form.investAmount} onChange={e => set("investAmount", e.target.value)} style={{ ...selectStyle(errors.investAmount), background: "#0f172a" }}
                    onFocus={e => e.target.style.borderColor = "rgba(240,180,41,0.5)"} onBlur={e => e.target.style.borderColor = errors.investAmount ? "#f87171" : "rgba(255,255,255,0.1)"}>
                    <option value="" style={{ background: "#0f172a" }}>Select amount range</option>
                    {["Under ₹50,000","₹50,000 – ₹2,00,000","₹2,00,000 – ₹10,00,000","₹10,00,000 – ₹50,00,000","Above ₹50,00,000"].map(a => (
                      <option key={a} value={a} style={{ background: "#0f172a" }}>{a}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Investment Experience" error={errors.experience}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                    {["Beginner","Intermediate","Expert"].map(lvl => (
                      <button key={lvl} onClick={() => set("experience", lvl)} style={{
                        padding: "10px 6px", borderRadius: 9, fontSize: "0.8rem", fontWeight: 600,
                        cursor: "pointer", transition: "all 0.2s", fontFamily: "'DM Sans',sans-serif",
                        border: form.experience === lvl ? "1px solid rgba(240,180,41,0.5)" : "1px solid rgba(255,255,255,0.08)",
                        background: form.experience === lvl ? "rgba(240,180,41,0.12)" : "rgba(255,255,255,0.03)",
                        color: form.experience === lvl ? "#f0b429" : "#64748b",
                      }}>{lvl}</button>
                    ))}
                  </div>
                  {errors.experience && <span style={{ fontSize: "0.7rem", color: "#f87171" }}>{errors.experience}</span>}
                </Field>
                <Field label="Primary Investment Goal" error={errors.goal}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      ["🎯","Wealth Building","Long-term capital growth"],
                      ["🏠","Major Purchase","Home, car or education"],
                      ["🏖️","Retirement","Building a retirement corpus"],
                      ["📈","Trading","Active market participation"],
                    ].map(([icon, title, desc]) => (
                      <button key={title} onClick={() => set("goal", title)} style={{
                        display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
                        borderRadius: 10, cursor: "pointer", transition: "all 0.2s", textAlign: "left",
                        fontFamily: "'DM Sans',sans-serif",
                        border: form.goal === title ? "1px solid rgba(240,180,41,0.4)" : "1px solid rgba(255,255,255,0.07)",
                        background: form.goal === title ? "rgba(240,180,41,0.07)" : "rgba(255,255,255,0.02)",
                      }}>
                        <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                        <span>
                          <span style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: form.goal === title ? "#f0b429" : "#e2e8f0" }}>{title}</span>
                          <span style={{ fontSize: "0.72rem", color: "#64748b" }}>{desc}</span>
                        </span>
                        {form.goal === title && <span style={{ marginLeft: "auto", color: "#f0b429", fontSize: "0.9rem" }}>✓</span>}
                      </button>
                    ))}
                  </div>
                  {errors.goal && <span style={{ fontSize: "0.7rem", color: "#f87171" }}>{errors.goal}</span>}
                </Field>

                <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                  <button onClick={() => { setStep(1); setErrors({}); }} style={{
                    flex: 1, background: "rgba(255,255,255,0.04)", color: "#94a3b8",
                    fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: "0.875rem",
                    padding: "13px", borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer",
                  }}>← Back</button>
                  <button onClick={submit} style={{
                    flex: 2, background: "linear-gradient(135deg,#f0b429,#d97706)", color: "#0b0f1a",
                    fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "0.9rem",
                    padding: "13px", borderRadius: 9, border: "none", cursor: "pointer",
                    boxShadow: "0 0 20px rgba(240,180,41,0.3)", transition: "all 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 32px rgba(240,180,41,0.5)"}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(240,180,41,0.3)"}
                  >Submit Application</button>
                </div>

                <p style={{ textAlign: "center", fontSize: "0.72rem", color: "#334155", margin: 0 }}>
                  🔒 256-bit SSL encrypted · SEBI regulated · Your data is safe
                </p>
              </div>
            )}
          </>
        ) : (
          /* ── Step 3: Success ── */
          <div style={{ textAlign: "center", padding: "20px 0 8px" }}>
            <div style={{
              width: 72, height: 72, borderRadius: "50%", margin: "0 auto 24px",
              background: "linear-gradient(135deg,#f0b429,#d97706)",
              boxShadow: "0 0 40px rgba(240,180,41,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "2rem", animation: "apPop 0.4s ease",
            }}>✓</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", color: "#f8fafc", margin: "0 0 10px" }}>
              Application Submitted!
            </h2>
            <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 8 }}>
              Welcome, <strong style={{ color: "#f0b429" }}>{form.firstName}</strong>! Your Aurex account application has been received.
              We'll verify your details and send confirmation to <strong style={{ color: "#e2e8f0" }}>{form.email}</strong> within 24 hours.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", margin: "28px 0 8px" }}>
              {[["📧","Email Sent"],["🔍","KYC Pending"],["✅","Account Active"]].map(([ic, label], i) => (
                <div key={label} style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                  padding: "14px 18px", borderRadius: 12,
                  background: i === 0 ? "rgba(240,180,41,0.1)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${i === 0 ? "rgba(240,180,41,0.3)" : "rgba(255,255,255,0.07)"}`,
                  minWidth: 90,
                }}>
                  <span style={{ fontSize: "1.4rem" }}>{ic}</span>
                  <span style={{ fontSize: "0.7rem", color: i === 0 ? "#f0b429" : "#475569", fontWeight: 600 }}>{label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={asModal && onClose ? onClose : () => window.history.back()}
              style={{
                marginTop: 24, background: "linear-gradient(135deg,#f0b429,#d97706)", color: "#0b0f1a",
                fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "0.875rem",
                padding: "12px 32px", borderRadius: 9, border: "none", cursor: "pointer",
                boxShadow: "0 0 20px rgba(240,180,41,0.3)",
              }}
            >{asModal ? "Back to Aurex" : "← Go Back"}</button>
          </div>
        )}
      </div>
    </div>
  );

  // ── Render: MODAL overlay or standalone PAGE ──
  if (asModal) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
          @keyframes apSlideUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
          @keyframes apFadeIn  { from { opacity:0 } to { opacity:1 } }
          @keyframes apPop     { 0%{ transform:scale(0.5); opacity:0 } 70%{ transform:scale(1.1) } 100%{ transform:scale(1); opacity:1 } }
        `}</style>
        <div
          onClick={onClose}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(7,11,20,0.85)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "16px", animation: "apFadeIn 0.2s ease",
          }}
        >
          {card}
        </div>
      </>
    );
  }

  // Standalone page
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #070b14; font-family: 'DM Sans', sans-serif; }
        @keyframes apSlideUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
        @keyframes apPop     { 0%{ transform:scale(0.5); opacity:0 } 70%{ transform:scale(1.1) } 100%{ transform:scale(1); opacity:1 } }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: rgba(240,180,41,0.3); border-radius: 10px; }
      `}</style>
      <div style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 60% 0%, rgba(240,180,41,0.07) 0%, transparent 60%), #070b14",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "40px 16px",
      }}>
        {card}
      </div>
    </>
  );
}