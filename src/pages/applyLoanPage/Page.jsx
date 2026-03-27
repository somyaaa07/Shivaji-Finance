import { useState } from "react";
import {
  CheckCircle2, Circle, FileText, Printer, ChevronDown,
  BadgeCheck, Users, IndianRupee, Clock, Shield, Smartphone,
  Phone, Zap, Star, ArrowRight, Car, GraduationCap,
  Briefcase, Home, TrendingUp, AlertCircle, HeartPulse, Plane
} from "lucide-react";
 import ApplyPage from "../../common/Applynow";

const LOAN_TYPES = [
  { id: "home",      label: "Home Loan",      icon: Home        },
  { id: "auto",      label: "Auto Loan",      icon: Car         },
  { id: "education", label: "Education Loan", icon: GraduationCap },
  { id: "business",  label: "Business Loan",  icon: Briefcase   },
  { id: "medical",   label: "Medical Loan",   icon: HeartPulse  },
  { id: "travel",    label: "Travel Loan",    icon: Plane       },
];

const CHECKLISTS = {
  home: {
    title: "Home / Mortgage Loan Document Checklist",
    desc: "Home loans require property and financial documentation. Here's a complete list.",
    groups: [
      {
        title: "Personal Documents",
        items: ["Aadhaar Card", "PAN Card", "Address proof (utility bill / rental agreement)", "Passport-size photographs (3)"],
      },
      {
        title: "Financial Documents",
        items: ["Last 6 months bank statements", "ITR for last 2 years", "Salary slips (last 3 months)", "Existing loan statements (if any)"],
      },
      {
        title: "Property Documents",
        items: ["Sale deed / Agreement to sell", "Property title documents", "NOC from builder / society", "Approved building plan", "Property tax receipts"],
      },
    ],
  },
  auto: {
    title: "Auto / Vehicle Loan Document Checklist",
    desc: "Auto loans need both financial and vehicle-related documents. Here's what you'll need.",
    groups: [
      {
        title: "Personal Information",
        items: ["Aadhaar Card", "PAN Card", "Valid driving licence", "Proof of residence"],
      },
      {
        title: "Financial Information",
        items: ["Bank statements (3–6 months)", "Salary slips (last 3 months)", "Proof of down payment", "Proof of insurance / quote"],
      },
      {
        title: "Vehicle Information",
        items: ["Dealer quotation / invoice", "RC book (for used vehicles)", "Valuation report (for used vehicles)"],
      },
    ],
  },
  education: {
    title: "Education Loan Document Checklist",
    desc: "Education loans need academic and co-applicant (parent/guardian) documents.",
    groups: [
      {
        title: "Student Documents",
        items: ["Aadhaar & PAN of student", "Admission letter from institution", "Fee structure document", "Academic mark sheets (10th, 12th)", "Entrance exam scorecard (if applicable)"],
      },
      {
        title: "Co-Applicant (Parent / Guardian)",
        items: ["Aadhaar & PAN", "Last 3 months salary slips", "Bank statements (6 months)", "ITR (last 2 years)", "Collateral documents (if required)"],
      },
    ],
  },
  business: {
    title: "Business Loan Document Checklist",
    desc: "Business loans require both personal and business financial documents.",
    groups: [
      {
        title: "KYC Documents",
        items: ["Aadhaar & PAN of proprietor(s)", "Business registration certificate", "GST registration certificate", "Passport-size photographs"],
      },
      {
        title: "Financial Documents",
        items: ["ITR (last 2 years)", "Audited balance sheet & P&L", "Business bank statements (12 months)", "GST returns (last 6 months)", "List of existing liabilities"],
      },
    ],
  },
  medical: {
    title: "Medical Loan Document Checklist",
    desc: "Medical loans help cover urgent healthcare costs. Quick processing with minimal paperwork.",
    groups: [
      {
        title: "Identity & Address Proof",
        items: ["Aadhaar Card (front & back)", "PAN Card", "Address proof (utility bill / rental agreement)", "Passport-size photographs (2)"],
      },
      {
        title: "Income Documents",
        items: ["Last 3 months salary slips", "Bank statements (3–6 months)", "Form 16 / ITR (last year)", "Employment letter (if salaried)"],
      },
      {
        title: "Medical Documents",
        items: ["Doctor's prescription / treatment plan", "Hospital estimate / admission letter", "Medical reports / diagnostic reports", "Health insurance policy (if applicable)", "Previous medical bills (if ongoing treatment)"],
      },
    ],
  },
  travel: {
    title: "Travel Loan Document Checklist",
    desc: "Travel loans fund domestic or international trips. Here's what you'll need to get approved.",
    groups: [
      {
        title: "Identity & Address Proof",
        items: ["Aadhaar Card (front & back)", "PAN Card", "Valid Passport", "Address proof (utility bill / bank statement)", "Passport-size photographs (2)"],
      },
      {
        title: "Income Documents",
        items: ["Last 3 months salary slips", "Bank statements (3 months)", "ITR / Form 16 (last year)", "Employment / offer letter"],
      },
      {
        title: "Travel Documents",
        items: ["Confirmed flight tickets / itinerary", "Hotel booking confirmations", "Visa copy (for international travel)", "Travel insurance policy", "Tour package invoice (if applicable)"],
      },
    ],
  },
};

const TIPS = [
  { icon: FileText,   title: "Organize Before You Apply",          text: "Gather all documents before starting. Incomplete submissions are the #1 cause of delays at Shivaji Finance." },
  { icon: BadgeCheck, title: "Ensure Documents are Current",       text: "Bank statements should be no older than 3 months. Salary slips must be from the last 3 months." },
  { icon: TrendingUp, title: "Check Your CIBIL Score",             text: "A CIBIL score of 700+ significantly improves approval chances and may help you get a lower interest rate." },
  { icon: Smartphone, title: "Upload Clear Scans",                 text: "Blurry scans are rejected. Use a scanning app in good lighting for clean, readable copies." },
  { icon: Phone,      title: "Talk to an Expert",                  text: "Our loan advisors can guide you on which documents are mandatory for your specific situation." },
  { icon: Zap,        title: "Apply Online for Faster Processing",  text: "Online applications with complete documentation are processed up to 2x faster than walk-in submissions." },
];

const STATS = [
  { icon: Users,       value: "15,000+",  label: "Happy Borrowers"    },
  { icon: IndianRupee, value: "₹500 Cr+", label: "Loans Disbursed"    },
  { icon: Star,        value: "6 Types",  label: "Loan Products"      },
  { icon: Clock,       value: "48 hrs",   label: "Avg. Approval Time" },
];

export default function ApplyLoanPage() {
  const [activeTab, setActiveTab] = useState("home");
  const [checked, setChecked] = useState({});
  const [quickLoan, setQuickLoan] = useState("home");
  const [quickEmp, setQuickEmp] = useState("salaried");
  const [showApplyForm, setShowApplyForm] = useState(false);

  const toggleItem = (key) => setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  const getProgress = (tabId) => {
    const groups = CHECKLISTS[tabId].groups;
    const allItems = groups.flatMap((g) => g.items.map((item) => `${tabId}::${item}`));
    const done = allItems.filter((k) => checked[k]).length;
    return { done, total: allItems.length, pct: allItems.length ? Math.round((done / allItems.length) * 100) : 0 };
  };

  const scrollToChecklist = () =>
    document.getElementById("checklist-section")?.scrollIntoView({ behavior: "smooth" });

  const handleFinder = () => { setActiveTab(quickLoan); scrollToChecklist(); };

  const activeData = CHECKLISTS[activeTab];
  const progress = getProgress(activeTab);
  const openApply = () => setShowApplyForm(true);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#cacdd2", minHeight: "100vh", color: "#2B394B" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        select { -webkit-appearance: none; appearance: none; }
        .tab-btn { transition: all 0.2s; }
        .tab-btn:hover { background: #CACDD2 !important; border-color: #2B394B !important; color: #2B394B !important; }
        .check-row:hover { background: #CACDD2; border-radius: 8px; }
        .tip-card:hover { box-shadow: 0 8px 24px rgba(43,57,75,0.15); transform: translateY(-2px); border-color: #CACDD2 !important; }
        .btn-outline:hover { background: #CACDD2 !important; }

        /* ── Responsive breakpoints ── */

        /* Hero two-column → single column */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 60px;
          align-items: center;
          padding: 80px 60px 70px;
          max-width: 1280px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 60px 40px 50px;
          }
        }
        @media (max-width: 640px) {
          .hero-grid {
            padding: 36px 20px 40px;
            gap: 32px;
          }
        }

        /* Hero heading */
        .hero-heading {
          font-family: 'Playfair Display', serif;
          font-size: 50px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 18px;
          color: #2B394B;
        }
        @media (max-width: 768px) {
          .hero-heading { font-size: 36px; }
        }
        @media (max-width: 480px) {
          .hero-heading { font-size: 28px; }
        }

        /* Hero CTA buttons */
        .hero-cta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .hero-cta { flex-direction: column; }
          .hero-cta button { width: 100%; justify-content: center; }
        }

        /* Stats bar */
        .stats-bar {
          background: #CACDD2;
          border-top: 1px solid #B8BCC8;
          border-bottom: 1px solid #B8BCC8;
          padding: 36px 60px;
          display: flex;
          justify-content: center;
          gap: 80px;
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          .stats-bar {
            gap: 32px 48px;
            padding: 28px 24px;
          }
        }
        @media (max-width: 480px) {
          .stats-bar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 24px 20px;
          }
        }

        /* Checklist section outer padding */
        .checklist-section {
          padding: 70px 60px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .checklist-section { padding: 50px 40px; }
        }
        @media (max-width: 640px) {
          .checklist-section { padding: 36px 16px; }
        }

        /* Checklist heading */
        .checklist-heading {
          font-family: 'Playfair Display', serif;
          font-size: 34px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #2B394B;
        }
        @media (max-width: 640px) {
          .checklist-heading { font-size: 24px; }
        }

        /* Tab buttons row */
        .tabs-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        @media (max-width: 480px) {
          .tabs-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .tab-btn { justify-content: flex-start !important; }
        }

        /* Checklist card header */
        .checklist-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
          gap: 12px;
        }
        @media (max-width: 600px) {
          .checklist-card-header {
            flex-direction: column;
            align-items: stretch;
          }
          .checklist-card-header button {
            align-self: flex-start;
          }
        }

        /* Checklist card title */
        .checklist-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #2B394B;
        }
        @media (max-width: 480px) {
          .checklist-card-title { font-size: 17px; }
        }

        /* Checklist groups grid */
        .checklist-groups {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 36px;
        }
        @media (max-width: 480px) {
          .checklist-groups {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        /* Checklist card padding */
        .checklist-card {
          background: #fff;
          border: 1px solid #B8BCC8;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 2px 16px rgba(43,57,75,0.07);
        }
        @media (max-width: 640px) {
          .checklist-card { padding: 24px 16px; border-radius: 14px; }
        }

        /* Progress bar row */
        .progress-row {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid #E8EAED;
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .progress-row { gap: 8px; }
          .progress-row .progress-label { font-size: 12px; }
        }

        /* Tips section */
        .tips-section {
          padding: 0 60px 70px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .tips-section { padding: 0 40px 50px; }
        }
        @media (max-width: 640px) {
          .tips-section { padding: 0 16px 40px; }
        }

        /* Tips heading */
        .tips-heading {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 28px;
          text-align: center;
          color: #2B394B;
        }
        @media (max-width: 480px) {
          .tips-heading { font-size: 22px; margin-bottom: 20px; }
        }

        /* Tips grid */
        .tips-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .tips-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .tips-grid { grid-template-columns: 1fr; gap: 14px; }
        }

        /* Quick Finder card */
        .finder-card {
          background: #fff;
          border: 1px solid #B8BCC8;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 24px rgba(43,57,75,0.10);
        }
        @media (max-width: 1024px) {
          .finder-card { max-width: 560px; width: 100%; }
        }
        @media (max-width: 640px) {
          .finder-card { padding: 22px 16px; border-radius: 14px; }
        }
      `}</style>

            {showApplyForm && (
              <ApplyPage asModal onClose={() => setShowApplyForm(false)} />
            )}

      {/* HERO */}
      <section className="hero-grid">
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#CACDD2", border: "1px solid #B8BCC8", color: "#2B394B", fontSize: 11, fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", padding: "6px 14px", borderRadius: 30, marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, background: "#2B394B", borderRadius: "50%", display: "inline-block" }} />
            Complete Loan Document Guide
          </div>
          <h1 className="hero-heading">
            Know <em style={{ fontStyle: "normal", color: "#4A6580" }}>Exactly</em> What<br />Documents You Need<br />for Your Loan
          </h1>
          <p style={{ color: "#4A6074", fontSize: 16, lineHeight: 1.75, marginBottom: 32, maxWidth: 460 }}>
            Get organized, avoid delays, and increase your approval chances with our comprehensive document checklists for any loan type.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
            {["Detailed checklists for all 6 loan types", "Printable document organizers", "Expert tips to speed up approval"].map(f => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "#2B394B" }}>
                <CheckCircle2 size={18} color="#2B394B" style={{ flexShrink: 0 }} />
                {f}
              </div>
            ))}
          </div>
          <div className="hero-cta">
            <button onClick={scrollToChecklist} style={{ background: "#2B394B", color: "#fff", border: "none", padding: "13px 28px", borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              Find My Document List <ArrowRight size={16} />
            </button>
            <button className="btn-outline" style={{ background: "#fff", color: "#2B394B", border: "1px solid #B8BCC8", padding: "13px 28px", borderRadius: 8, fontSize: 15, fontWeight: 500, cursor: "pointer" }} onClick={openApply}>
              Apply for a Loan
            </button>
          </div>
        </div>

        {/* QUICK FINDER */}
        <div className="finder-card">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <Shield size={20} color="#2B394B" />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#2B394B", margin: 0 }}>Quick Document Finder</h3>
          </div>
          <p style={{ color: "#7A8FA0", fontSize: 13, marginBottom: 26 }}>Select your loan type to see what you need</p>

          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4A6074", marginBottom: 8 }}>What type of loan are you applying for?</label>
          <div style={{ position: "relative", marginBottom: 18 }}>
            <select value={quickLoan} onChange={e => setQuickLoan(e.target.value)}
              style={{ width: "100%", background: "#CACDD2", border: "1px solid #B8BCC8", color: "#2B394B", padding: "11px 40px 11px 14px", borderRadius: 8, fontSize: 14, cursor: "pointer", outline: "none" }}>
              {LOAN_TYPES.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
            </select>
            <ChevronDown size={16} color="#4A6074" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
          </div>

          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4A6074", marginBottom: 8 }}>What is your employment status?</label>
          <div style={{ position: "relative", marginBottom: 24 }}>
            <select value={quickEmp} onChange={e => setQuickEmp(e.target.value)}
              style={{ width: "100%", background: "#CACDD2", border: "1px solid #B8BCC8", color: "#2B394B", padding: "11px 40px 11px 14px", borderRadius: 8, fontSize: 14, cursor: "pointer", outline: "none" }}>
              <option value="salaried">Salaried Employee</option>
              <option value="self">Self-Employed / Business Owner</option>
              <option value="freelancer">Freelancer / Consultant</option>
              <option value="retired">Retired</option>
              <option value="student">Student</option>
            </select>
            <ChevronDown size={16} color="#4A6074" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
          </div>

          <button onClick={handleFinder} style={{ width: "100%", background: "#2B394B", color: "#fff", border: "none", padding: 14, borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            See My Document List <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 4 }}>
              <Icon size={18} color="#2B394B" />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#2B394B" }}>{value}</span>
            </div>
            <div style={{ fontSize: 13, color: "#4A6074" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* CHECKLIST SECTION */}
      <section id="checklist-section" className="checklist-section">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="checklist-heading">
            Document Checklists by Loan Type
          </h2>
          <p style={{ color: "#4A6074", fontSize: 15, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            Select your loan type below to see a comprehensive checklist of all required documents. Print these lists to stay organized.
          </p>
        </div>

        {/* TABS */}
        <div className="tabs-row">
          {LOAN_TYPES.map(({ id, label, icon: Icon }) => (
            <button key={id} className="tab-btn"
              onClick={() => setActiveTab(id)}
              style={{
                display: "flex", alignItems: "center", gap: 7,
                background: activeTab === id ? "#2B394B" : "#fff",
                border: activeTab === id ? "1.5px solid #2B394B" : "1.5px solid #B8BCC8",
                color: activeTab === id ? "#fff" : "#4A6074",
                padding: "10px 22px", borderRadius: 8,
                fontSize: 14, fontWeight: activeTab === id ? 700 : 500,
                cursor: "pointer",
              }}>
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {/* CHECKLIST CARD */}
        <div className="checklist-card">
          <div className="checklist-card-header">
            <h3 className="checklist-card-title">{activeData.title}</h3>
            <button onClick={() => window.print()} style={{ display: "flex", alignItems: "center", gap: 7, color: "#2B394B", background: "#CDCDE4", border: "1px solid #B8BCC8", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>
              <Printer size={14} /> Print Checklist
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
            <AlertCircle size={14} color="#7A8FA0" style={{ flexShrink: 0 }} />
            <p style={{ color: "#7A8FA0", fontSize: 13, margin: 0 }}>{activeData.desc}</p>
          </div>

          <div className="checklist-groups">
            {activeData.groups.map((group) => (
              <div key={group.title}>
                <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#2B394B", paddingBottom: 10, borderBottom: "2px solid #CACDD2", marginBottom: 14, marginTop: 0 }}>
                  {group.title}
                </h4>
                {group.items.map((item) => {
                  const key = `${activeTab}::${item}`;
                  const done = !!checked[key];
                  return (
                    <div key={item} className="check-row"
                      onClick={() => toggleItem(key)}
                      style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "9px 6px", borderBottom: "1px solid #E8EAED", cursor: "pointer", transition: "background 0.15s" }}>
                      {done
                        ? <CheckCircle2 size={18} color="#2B394B" style={{ flexShrink: 0, marginTop: 1 }} />
                        : <Circle size={18} color="#B8BCC8" style={{ flexShrink: 0, marginTop: 1 }} />
                      }
                      <span style={{ fontSize: 14, color: done ? "#7A8FA0" : "#2B394B", textDecoration: done ? "line-through" : "none", lineHeight: 1.45 }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* PROGRESS */}
          <div className="progress-row">
            <FileText size={16} color="#7A8FA0" style={{ flexShrink: 0 }} />
            <span className="progress-label" style={{ fontSize: 13, color: "#7A8FA0", whiteSpace: "nowrap" }}>Documents collected:</span>
            <div style={{ flex: 1, minWidth: 60, height: 6, background: "#CACDD2", borderRadius: 99, overflow: "hidden" }}>
              <div style={{ height: "100%", background: "linear-gradient(90deg, #2B394B, #4A6580)", borderRadius: 99, transition: "width 0.4s", width: `${progress.pct}%` }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#2B394B", whiteSpace: "nowrap" }}>{progress.done}/{progress.total} ({progress.pct}%)</span>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="tips-section">
        <h2 className="tips-heading">Expert Tips to Speed Up Approval</h2>
        <div className="tips-grid">
          {TIPS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="tip-card"
              style={{ background: "#fff", border: "1px solid #B8BCC8", borderRadius: 14, padding: 28, transition: "all 0.22s", cursor: "default" }}>
              <div style={{ width: 44, height: 44, background: "#CDCDE4", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <Icon size={20} color="#2B394B" />
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "#2B394B", marginTop: 0 }}>{title}</h4>
              <p style={{ fontSize: 13, color: "#4A6074", lineHeight: 1.65, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}