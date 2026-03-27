import { useState } from "react";
import {
  CheckCircle2, Circle, FileText, Printer, ChevronDown,
  BadgeCheck, Users, IndianRupee, Clock, Shield, Smartphone,
  Phone, Zap, Star, ArrowRight, Car, GraduationCap,
  Briefcase, Home, TrendingUp, AlertCircle, HeartPulse, Plane
} from "lucide-react";

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

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#CDCDE4", minHeight: "100vh", color: "#2B394B" }}>

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
      `}</style>

      {/* HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 60, alignItems: "center", padding: "80px 60px 70px", maxWidth: 1200, margin: "0 auto" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#CACDD2", border: "1px solid #B8BCC8", color: "#2B394B", fontSize: 11, fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", padding: "6px 14px", borderRadius: 30, marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, background: "#2B394B", borderRadius: "50%", display: "inline-block" }} />
            Complete Loan Document Guide
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 50, fontWeight: 900, lineHeight: 1.1, marginBottom: 18, color: "#2B394B" }}>
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
          <div style={{ display: "flex", gap: 14 }}>
            <button onClick={scrollToChecklist} style={{ background: "#2B394B", color: "#fff", border: "none", padding: "13px 28px", borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              Find My Document List <ArrowRight size={16} />
            </button>
            <button className="btn-outline" style={{ background: "#fff", color: "#2B394B", border: "1px solid #B8BCC8", padding: "13px 28px", borderRadius: 8, fontSize: 15, fontWeight: 500, cursor: "pointer" }}>
              Apply for a Loan
            </button>
          </div>
        </div>

        {/* QUICK FINDER */}
        <div style={{ background: "#fff", border: "1px solid #B8BCC8", borderRadius: 20, padding: 32, boxShadow: "0 4px 24px rgba(43,57,75,0.10)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <Shield size={20} color="#2B394B" />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#2B394B" }}>Quick Document Finder</h3>
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
      <div style={{ background: "#CACDD2", borderTop: "1px solid #B8BCC8", borderBottom: "1px solid #B8BCC8", padding: "36px 60px", display: "flex", justifyContent: "center", gap: 80 }}>
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
      <section id="checklist-section" style={{ padding: "70px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, marginBottom: 12, color: "#2B394B" }}>
            Document Checklists by Loan Type
          </h2>
          <p style={{ color: "#4A6074", fontSize: 15, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            Select your loan type below to see a comprehensive checklist of all required documents. Print these lists to stay organized.
          </p>
        </div>

        {/* TABS */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
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
        <div style={{ background: "#fff", border: "1px solid #B8BCC8", borderRadius: 20, padding: 40, boxShadow: "0 2px 16px rgba(43,57,75,0.07)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2B394B" }}>{activeData.title}</h3>
            <button onClick={() => window.print()} style={{ display: "flex", alignItems: "center", gap: 7, color: "#2B394B", background: "#CDCDE4", border: "1px solid #B8BCC8", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              <Printer size={14} /> Print Checklist
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
            <AlertCircle size={14} color="#7A8FA0" />
            <p style={{ color: "#7A8FA0", fontSize: 13, margin: 0 }}>{activeData.desc}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 36 }}>
            {activeData.groups.map((group) => (
              <div key={group.title}>
                <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#2B394B", paddingBottom: 10, borderBottom: "2px solid #CACDD2", marginBottom: 14 }}>
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
          <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid #E8EAED", display: "flex", alignItems: "center", gap: 14 }}>
            <FileText size={16} color="#7A8FA0" />
            <span style={{ fontSize: 13, color: "#7A8FA0", whiteSpace: "nowrap" }}>Documents collected:</span>
            <div style={{ flex: 1, height: 6, background: "#CACDD2", borderRadius: 99, overflow: "hidden" }}>
              <div style={{ height: "100%", background: "linear-gradient(90deg, #2B394B, #4A6580)", borderRadius: 99, transition: "width 0.4s", width: `${progress.pct}%` }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#2B394B", whiteSpace: "nowrap" }}>{progress.done}/{progress.total} ({progress.pct}%)</span>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section style={{ padding: "0 60px 70px", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, marginBottom: 28, textAlign: "center", color: "#2B394B" }}>
          Expert Tips to Speed Up Approval
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {TIPS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="tip-card"
              style={{ background: "#fff", border: "1px solid #B8BCC8", borderRadius: 14, padding: 28, transition: "all 0.22s", cursor: "default" }}>
              <div style={{ width: 44, height: 44, background: "#CDCDE4", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <Icon size={20} color="#2B394B" />
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "#2B394B" }}>{title}</h4>
              <p style={{ fontSize: 13, color: "#4A6074", lineHeight: 1.65, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}