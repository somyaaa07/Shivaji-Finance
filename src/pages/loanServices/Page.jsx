import { useState } from "react";
import {
  Home, Car, GraduationCap, Briefcase, HeartPulse, Plane,
  User, Banknote, BarChart2, Building2, Globe, ClipboardList,
  CheckCircle2, Phone, ChevronRight, Plus, Menu, X,
  Shield, Zap, MapPin, Star, ArrowRight, Landmark, Coins, Lock
} from "lucide-react";

const NAV_LINKS = ["Home", "Services", "Loans", "About Us", "Contact"];

const LOAN_TYPES = [
  { icon: Home, label: "Home Loan" },
  { icon: Car, label: "Auto Loan" },
  { icon: GraduationCap, label: "Education Loan" },
  { icon: Briefcase, label: "Business Loan" },
  { icon: HeartPulse, label: "Medical Loan" },
  { icon: Plane, label: "Travel Loan" },
];

const STEPS = [
  { step: "01", title: "Check Eligibility", desc: "Use our online eligibility checker to see if you qualify." },
  { step: "02", title: "Fill Application", desc: "Complete the online form with your personal & financial details." },
  { step: "03", title: "Upload Documents", desc: "Submit scanned copies of required KYC and income documents." },
  { step: "04", title: "Verification", desc: "Our team will review and verify your submitted information." },
  { step: "05", title: "Approval & Disbursal", desc: "Loan is approved and funds are disbursed to your account." },
];

const CONDITIONS = [
  { icon: User, title: "Age Requirement", desc: "Applicant must be between 21 to 60 years of age." },
  { icon: Banknote, title: "Minimum Income", desc: "Salaried: ₹25,000/month | Self-employed: ₹3 LPA net profit." },
  { icon: BarChart2, title: "Credit Score", desc: "CIBIL score of 700 or above is required for loan approval." },
  { icon: Building2, title: "Employment Status", desc: "Minimum 2 years of employment or 3 years of business stability." },
  { icon: Globe, title: "Citizenship", desc: "Must be an Indian resident with valid address proof." },
  { icon: ClipboardList, title: "No Existing Defaults", desc: "No current loan defaults or bankruptcy history." },
];

const DOCS_BASE = [
  { category: "Identity Proof", items: ["Aadhaar Card", "PAN Card", "Passport / Voter ID"] },
  { category: "Address Proof", items: ["Utility Bill (last 3 months)", "Rental Agreement", "Aadhaar with current address"] },
  { category: "Income Proof", items: ["Last 3 months salary slips", "Form 16 / ITR (last 2 years)", "Bank statement (6 months)"] },
  { category: "Employment Proof", items: ["Offer letter / Appointment letter", "Employment certificate", "Business registration (self-employed)"] },
];

const SIDEBAR_LINKS = [
  { label: "Personal Loan", icon: User },
  { label: "Home Loan", icon: Home },
  { label: "Business Loan", icon: Briefcase },
  { label: "Education Loan", icon: GraduationCap },
  { label: "Auto Loan", icon: Car },
  { label: "Gold Loan", icon: Coins },
  { label: "Loan Against Property", icon: Landmark },
  { label: "Medical Loan", icon: HeartPulse },
];

// Dynamic content per loan type
const LOAN_DATA = {
  "Personal Loan": {
    tagline: "Meet Any Expense with Ease",
    headline: "Instant Personal Loans – No Collateral",
    description: "Whether it's a wedding, home renovation, or an unexpected expense, our personal loans offer quick disbursal with zero collateral required. Enjoy hassle-free processing with a fully digital application.",
    rate: "10.5%",
    maxAmount: "₹25 Lakhs",
    tenure: "Up to 5 Years",
    disbursal: "24 Hours",
    features: ["Zero Collateral", "Instant Approval", "Flexible EMI", "Minimal Docs"],
    image: "https://i.pinimg.com/736x/9b/a5/55/9ba5557bdae0ce36bf7232ce72a5215b.jpg",
    docs: [...DOCS_BASE],
    conditions: CONDITIONS,
    steps: STEPS,
    faqs: [
      { q: "Do I need collateral for a personal loan?", a: "No, personal loans are unsecured and require no collateral." },
      { q: "How fast is disbursal?", a: "Within 24 hours of document verification." },
      { q: "What is the maximum personal loan amount?", a: "Up to ₹25 Lakhs based on your eligibility." },
      { q: "Can I prepay my personal loan?", a: "Yes, zero prepayment charges after 6 EMIs." },
    ],
  },
  "Home Loan": {
    tagline: "Build Your Dream Home",
    headline: "Flexible Home Loans Tailored for You",
    description: "At TrustFund Finance, we believe every individual deserves access to financial support without complexity. Our home loan products are designed with transparent terms, competitive rates starting from 8.5% p.a., and a completely digital application process.",
    rate: "8.5%",
    maxAmount: "₹5 Crore",
    tenure: "Up to 30 Years",
    disbursal: "48 Hours",
    features: ["Zero Hidden Fees", "Instant Approval", "Doorstep Service", "Balance Transfer"],
    image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=600&q=80",
    docs: [
      ...DOCS_BASE,
      { category: "Property Docs", items: ["Sale deed / Agreement", "Property tax receipts", "NOC from society/builder"] },
    ],
    conditions: CONDITIONS,
    steps: STEPS,
    faqs: [
      { q: "How long does loan approval take?", a: "Typically 2–5 business days after all documents are submitted." },
      { q: "Is there a prepayment penalty?", a: "No. We offer zero prepayment charges after 6 months of the loan tenure." },
      { q: "What is the maximum loan amount?", a: "Up to ₹5 Crore for home loans." },
      { q: "Can I apply jointly?", a: "Yes, joint applications with spouse or co-applicant are accepted." },
    ],
  },
  "Business Loan": {
    tagline: "Fuel Your Business Growth",
    headline: "Business Loans for Every Scale",
    description: "Expand your business with our tailored business loans. From working capital to machinery purchase, we fund every business need with minimal documentation and fast approvals — so you can focus on what matters.",
    rate: "11%",
    maxAmount: "₹2 Crore",
    tenure: "Up to 7 Years",
    disbursal: "48 Hours",
    features: ["No Collateral (up to ₹50L)", "Tax Benefits", "Flexible Repayment", "Overdraft Facility"],
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&q=80",
    docs: [
      ...DOCS_BASE,
      { category: "Business Docs", items: ["GST Registration", "Business ITR (2 years)", "P&L Statement", "Business license/registration"] },
    ],
    conditions: [
      ...CONDITIONS.slice(0, 2),
      { icon: BarChart2, title: "Business Vintage", desc: "Minimum 2 years of business operation required." },
      ...CONDITIONS.slice(3),
    ],
    steps: STEPS,
    faqs: [
      { q: "Is collateral required for a business loan?", a: "No collateral required for loans up to ₹50 Lakhs." },
      { q: "What business types are eligible?", a: "Sole proprietors, partnerships, LLPs, and Pvt Ltd companies are all eligible." },
      { q: "Can startups apply?", a: "Startups with at least 2 years of operation and ITR filings are eligible." },
      { q: "What is the maximum business loan amount?", a: "Up to ₹2 Crore based on business turnover and credit profile." },
    ],
  },
  "Education Loan": {
    tagline: "Invest in Your Future",
    headline: "Education Loans for Every Aspiration",
    description: "Don't let finances hold back your education. Our education loans cover tuition, living expenses, and study materials — for courses in India and abroad. Repayment starts only after course completion.",
    rate: "9%",
    maxAmount: "₹50 Lakhs",
    tenure: "Up to 15 Years",
    disbursal: "72 Hours",
    features: ["Moratorium Period", "Tax Benefit (80E)", "Abroad Courses", "No Margin (up to ₹4L)"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    docs: [
      { category: "Identity Proof", items: ["Aadhaar Card", "PAN Card", "Passport"] },
      { category: "Academic Docs", items: ["Admission letter from institution", "Fee structure / prospectus", "Mark sheets (10th, 12th, Graduation)"] },
      { category: "Income Proof (Co-applicant)", items: ["Last 3 months salary slips", "Form 16 / ITR (last 2 years)", "Bank statement (6 months)"] },
      { category: "Course Docs", items: ["Course details", "Scholarship letter (if any)", "VISA documents (for abroad)"] },
    ],
    conditions: [
      { icon: User, title: "Age Requirement", desc: "Student applicant must be 18+ years. Co-applicant (parent/guardian) required." },
      { icon: GraduationCap, title: "Institution", desc: "Must be admitted to a recognized institute in India or abroad." },
      { icon: BarChart2, title: "Academic Performance", desc: "Minimum 50% marks in qualifying exam recommended." },
      { icon: Building2, title: "Co-applicant", desc: "Parent or guardian must be the co-applicant with stable income." },
      { icon: Globe, title: "Citizenship", desc: "Indian citizen or NRI with valid documents." },
      { icon: ClipboardList, title: "Course Type", desc: "Graduate, Post-graduate, Professional, and Vocational courses covered." },
    ],
    steps: STEPS,
    faqs: [
      { q: "When does repayment start?", a: "Repayment begins 6–12 months after course completion (moratorium period)." },
      { q: "Are foreign university courses covered?", a: "Yes, we fund admissions to recognized foreign universities." },
      { q: "Is co-applicant mandatory?", a: "Yes, a parent or guardian as co-applicant is required." },
      { q: "Is there a tax benefit?", a: "Yes, interest paid is deductible under Section 80E of the Income Tax Act." },
    ],
  },
  "Auto Loan": {
    tagline: "Drive Your Dream Car Today",
    headline: "Fast & Easy Auto Loans",
    description: "Get behind the wheel of your dream vehicle with our competitive auto loans. Whether it's a brand-new car or a pre-owned vehicle, we offer quick approvals, flexible tenures, and up to 100% on-road funding.",
    rate: "9.5%",
    maxAmount: "₹1.5 Crore",
    tenure: "Up to 8 Years",
    disbursal: "24 Hours",
    features: ["100% On-Road Funding", "New & Used Vehicles", "Quick Approval", "Doorstep Delivery"],
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
    docs: [
      { category: "Identity Proof", items: ["Aadhaar Card", "PAN Card", "Driving License"] },
      { category: "Address Proof", items: ["Utility Bill (last 3 months)", "Rental Agreement", "Aadhaar with current address"] },
      { category: "Income Proof", items: ["Last 3 months salary slips", "Form 16 / ITR (last 2 years)", "Bank statement (6 months)"] },
      { category: "Vehicle Docs", items: ["Proforma invoice from dealer", "Vehicle registration (used car)", "Insurance documents"] },
    ],
    conditions: CONDITIONS,
    steps: STEPS,
    faqs: [
      { q: "Can I get a loan for a used car?", a: "Yes, we finance pre-owned vehicles up to 10 years old." },
      { q: "Is 100% on-road funding available?", a: "Yes, for select vehicles and profiles." },
      { q: "How quickly is the loan disbursed?", a: "Within 24 hours of approval — directly to the dealer." },
      { q: "Is a down payment required?", a: "Minimum 10–15% down payment may be required based on the vehicle type." },
    ],
  },
  "Gold Loan": {
    tagline: "Unlock the Value of Your Gold",
    headline: "Instant Gold Loans at Best Rates",
    description: "Leverage your gold jewelry and coins to get instant funds. With minimal documentation and same-day disbursal, our gold loans are the fastest way to meet urgent financial needs. Your gold is safe with us — insured and secured.",
    rate: "7.5%",
    maxAmount: "₹1 Crore",
    tenure: "Up to 3 Years",
    disbursal: "Same Day",
    features: ["Same Day Disbursal", "Insured Gold Storage", "Minimal Docs", "Flexible Repayment"],
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=80",
    docs: [
      { category: "Identity Proof", items: ["Aadhaar Card", "PAN Card", "Passport / Voter ID"] },
      { category: "Address Proof", items: ["Utility Bill (last 3 months)", "Rental Agreement"] },
      { category: "Gold Details", items: ["Original gold ornaments / coins", "Proof of ownership (if available)", "Hallmark certificate (if any)"] },
    ],
    conditions: [
      { icon: User, title: "Age Requirement", desc: "Applicant must be between 18 to 70 years of age." },
      { icon: Coins, title: "Gold Purity", desc: "Gold must be between 18 to 24 karats. Coins up to 50g accepted." },
      { icon: BarChart2, title: "Loan-to-Value", desc: "Up to 75% of gold's current market value as per RBI norms." },
      { icon: Building2, title: "Employment Status", desc: "Any individual — salaried, self-employed, or homemaker — can apply." },
      { icon: Globe, title: "Citizenship", desc: "Must be an Indian resident with valid address proof." },
      { icon: ClipboardList, title: "No Defaults", desc: "No current loan defaults or bankruptcy history." },
    ],
    steps: [
      { step: "01", title: "Visit Branch / Doorstep", desc: "Walk into any branch or request a doorstep gold valuation." },
      { step: "02", title: "Gold Valuation", desc: "Our certified appraiser assesses gold purity and weight on the spot." },
      { step: "03", title: "Document Submission", desc: "Submit minimal KYC documents — Aadhaar and PAN." },
      { step: "04", title: "Loan Offer", desc: "Receive your loan offer based on gold value within minutes." },
      { step: "05", title: "Same-Day Disbursal", desc: "Funds credited to your account the same day." },
    ],
    faqs: [
      { q: "Is my gold safe?", a: "Yes, your gold is stored in secured vaults and fully insured." },
      { q: "What purity of gold is accepted?", a: "18 to 24 karat gold jewelry and coins (up to 50g) are accepted." },
      { q: "Can I repay only interest monthly?", a: "Yes, bullet repayment and interest-only options are available." },
      { q: "How is gold value calculated?", a: "Based on the current market rate of 22-karat gold as per BIS standards." },
    ],
  },
  "Loan Against Property": {
    tagline: "Maximize the Power of Your Property",
    headline: "High-Value Loans Against Your Property",
    description: "Unlock the equity in your residential or commercial property with our Loan Against Property. Get up to 70% of your property's market value with competitive rates and long repayment tenures — ideal for business expansion, education, or major expenses.",
    rate: "9%",
    maxAmount: "₹10 Crore",
    tenure: "Up to 20 Years",
    disbursal: "5–7 Days",
    features: ["Up to 70% LTV", "Residential & Commercial", "Balance Transfer", "Top-Up Facility"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    docs: [
      ...DOCS_BASE,
      { category: "Property Documents", items: ["Title deed / Sale deed", "Property tax receipts (last 3 years)", "Encumbrance certificate", "Approved building plan", "NOC from society/authority"] },
    ],
    conditions: CONDITIONS,
    steps: STEPS,
    faqs: [
      { q: "What types of property are accepted?", a: "Residential, commercial, and industrial properties are all accepted." },
      { q: "What is the maximum LTV ratio?", a: "Up to 70% of the property's current market value." },
      { q: "Can I use this for business purposes?", a: "Yes, LAP is ideal for business expansion and working capital." },
      { q: "Is a property valuation required?", a: "Yes, a certified valuer from our panel will assess the property." },
    ],
  },
  "Medical Loan": {
    tagline: "Health First, Finance Later",
    headline: "Instant Medical Emergency Loans",
    description: "Medical emergencies don't wait — and neither do we. Our medical loans ensure you get the funds you need within hours, with zero collateral and minimal documentation. Focus on recovery while we handle the finances.",
    rate: "11%",
    maxAmount: "₹20 Lakhs",
    tenure: "Up to 5 Years",
    disbursal: "4 Hours",
    features: ["4-Hour Disbursal", "Zero Collateral", "Hospital Tie-Ups", "Pre & Post Care Covered"],
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80",
    docs: [
      { category: "Identity Proof", items: ["Aadhaar Card", "PAN Card", "Passport / Voter ID"] },
      { category: "Address Proof", items: ["Utility Bill (last 3 months)", "Rental Agreement"] },
      { category: "Income Proof", items: ["Last 3 months salary slips", "Bank statement (3 months)"] },
      { category: "Medical Docs", items: ["Hospital admission letter", "Doctor's prescription / estimate", "Medical reports / diagnosis"] },
    ],
    conditions: [
      { icon: User, title: "Age Requirement", desc: "Applicant must be between 21 to 65 years of age." },
      { icon: Banknote, title: "Minimum Income", desc: "Salaried: ₹15,000/month. Emergency cases evaluated on a priority basis." },
      { icon: BarChart2, title: "Credit Score", desc: "CIBIL score of 650+ preferred. Emergency cases may be evaluated case-by-case." },
      { icon: Building2, title: "Employment", desc: "Salaried or self-employed individuals are eligible." },
      { icon: Globe, title: "Citizenship", desc: "Must be an Indian resident with valid address proof." },
      { icon: ClipboardList, title: "Medical Need", desc: "Valid medical estimate or admission letter from a recognized hospital required." },
    ],
    steps: [
      { step: "01", title: "Emergency Request", desc: "Call our 24x7 helpline or apply online — mention 'Medical Emergency'." },
      { step: "02", title: "Quick KYC", desc: "Submit basic Aadhaar and PAN — no lengthy forms." },
      { step: "03", title: "Medical Docs", desc: "Share hospital estimate or admission letter via WhatsApp / email." },
      { step: "04", title: "Instant Verification", desc: "Our team fast-tracks verification within 1–2 hours." },
      { step: "05", title: "4-Hour Disbursal", desc: "Funds transferred directly to hospital or your account within 4 hours." },
    ],
    faqs: [
      { q: "How fast can I get a medical loan?", a: "Funds are disbursed within 4 hours of document submission in emergency cases." },
      { q: "Can funds be sent directly to the hospital?", a: "Yes, we can disburse directly to the hospital's account." },
      { q: "Is post-hospitalization covered?", a: "Yes, medical loans cover pre and post-hospitalization expenses." },
      { q: "What if my CIBIL score is low?", a: "Medical emergencies are evaluated on a case-by-case basis with relaxed norms." },
    ],
  },
};

export default function LoanServicePage() {
  const [activeLink, setActiveLink] = useState("Home Loan");
  const [activeFaq, setActiveFaq] = useState(null);

  const data = LOAN_DATA[activeLink] || LOAN_DATA["Home Loan"];

  const handleLoanChange = (label) => {
    setActiveLink(label);
    setActiveFaq(null);
  };

  return (
    <div className="min-h-screen font-serif" style={{ backgroundColor: "#cacdd2", color: "#2b394b" }}>

   
      {/* BANNER */}
      <div className="relative overflow-hidden" style={{ minHeight: 500 }}>
        <img
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80"
          alt="Loan Banner"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(43,57,75,0.85) 0%, rgba(43,57,75,0.3) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <p className="text-xs uppercase tracking-[0.3em] mb-4 font-medium" style={{ color: "#a8bbc8" }}>Trusted Since 2005</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Your Dream,<br />
              <span style={{ color: "#cacdd2" }}>Our Support.</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg mb-8 leading-relaxed">
              Fast approvals, competitive interest rates, and flexible EMI plans — designed to meet every financial need of yours.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105 flex items-center gap-2" style={{ backgroundColor: "#cacdd2", color: "#2b394b" }}>
                Explore Loans <ArrowRight size={15} />
              </button>
              <button className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide border border-white text-white hover:bg-white hover:text-gray-800 transition-all">
                EMI Calculator
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 rounded-2xl p-8 w-full max-w-xs shadow-2xl" style={{ backgroundColor: "rgba(202,205,210,0.12)", border: "1px solid rgba(202,205,210,0.25)", backdropFilter: "blur(12px)" }}>
            {[
              { val: "₹500Cr+", label: "Loans Disbursed" },
              { val: "1.2L+", label: "Happy Customers" },
              { val: "8.5%", label: "Interest Rate p.a." },
              { val: "24 Hrs", label: "Quick Disbursal" },
            ].map((s) => (
              <div key={s.label} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                <span className="text-gray-300 text-sm">{s.label}</span>
                <span className="text-white font-bold text-lg">{s.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

     

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-sm" style={{ color: "#2b394b" }}>
          {["Home", "Services", "Loan Services"].map((b, i, arr) => (
            <span key={b} className="flex items-center gap-2">
              <a href="#" className={i === arr.length - 1 ? "font-semibold" : "opacity-60 hover:opacity-100 transition-opacity"}>{b}</a>
              {i < arr.length - 1 && <ChevronRight size={14} className="opacity-40" />}
            </span>
          ))}
        </nav>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 pb-16 flex flex-col lg:flex-row gap-8">

        {/* LEFT SIDEBAR — STICKY */}
        <aside className="lg:w-72 flex-shrink-0 space-y-6 lg:sticky lg:top-5 lg:self-start" style={{ maxHeight: "calc(100vh - 5rem)", overflowY: "auto" }}>

          {/* Loan categories */}
          <div className="rounded-2xl overflow-hidden shadow-md" style={{ backgroundColor: "#2b394b" }}>
            <div className="px-6 py-4 border-b border-white/10">
              <h3 className="text-white font-bold tracking-wide text-sm uppercase">Loan Categories</h3>
            </div>
            <ul>
              {SIDEBAR_LINKS.map((l) => {
                const Icon = l.icon;
                const isActive = activeLink === l.label;
                return (
                  <li key={l.label}>
                    <button
                      onClick={() => handleLoanChange(l.label)}
                      className="w-full text-left px-6 py-3 text-sm transition-all flex items-center justify-between group"
                      style={{
                        backgroundColor: isActive ? "#cacdd2" : "transparent",
                        color: isActive ? "#2b394b" : "#a8bbc8",
                        fontWeight: isActive ? 700 : 400,
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={15} />
                        {l.label}
                      </span>
                      <ChevronRight size={14} className={`transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Apply */}
          <div className="rounded-2xl p-6 shadow-md" style={{ backgroundColor: "#2b394b" }}>
            <h3 className="text-white font-bold mb-1">Quick Apply</h3>
            <p className="text-xs mb-4" style={{ color: "#a8bbc8" }}>Get pre-approved in 2 minutes</p>
            <div className="space-y-3">
              {["Full Name", "Phone Number", "Loan Amount (₹)"].map((ph) => (
                <input
                  key={ph}
                  placeholder={ph}
                  className="w-full rounded-lg px-4 py-2 text-sm outline-none focus:ring-2"
                  style={{ backgroundColor: "rgba(202,205,210,0.1)", color: "white", border: "1px solid rgba(202,205,210,0.2)" }}
                />
              ))}
              <button className="w-full py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#cacdd2", color: "#2b394b" }}>
                Check Eligibility
              </button>
            </div>
          </div>

          {/* Help */}
          <div className="rounded-2xl p-6 text-center shadow-md" style={{ backgroundColor: "#2b394b" }}>
            <div className="flex justify-center mb-2">
              <Phone size={32} style={{ color: "#cacdd2" }} />
            </div>
            <p className="text-white font-bold mb-1">Need Help?</p>
            <p className="text-xs mb-3" style={{ color: "#a8bbc8" }}>Mon – Sat, 9AM – 6PM</p>
            <p className="text-lg font-bold" style={{ color: "#cacdd2" }}>1800-123-4567</p>
            <p className="text-xs mt-1" style={{ color: "#a8bbc8" }}>Toll Free</p>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <main className="flex-1 space-y-10">

          {/* About section — dynamic */}
          <section className="rounded-2xl overflow-hidden shadow-md" style={{ backgroundColor: "white" }}>
            <div className="flex flex-col md:flex-row">
              <img
                src={data.image}
                alt={activeLink}
                className="md:w-56 object-cover"
                style={{ minHeight: 200 }}
              />
              <div className="p-8">
                <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full mb-4 inline-block" style={{ backgroundColor: "#cacdd2", color: "#2b394b" }}>
                  {data.tagline}
                </span>
                <h2 className="text-2xl font-bold mb-3" style={{ color: "#2b394b" }}>{data.headline}</h2>
                <p className="text-sm leading-relaxed text-gray-600">{data.description}</p>

                {/* Key stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                  {[
                    { label: "Interest Rate", val: data.rate },
                    { label: "Max Amount", val: data.maxAmount },
                    { label: "Tenure", val: data.tenure },
                    { label: "Disbursal", val: data.disbursal },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-3 text-center" style={{ backgroundColor: "#cacdd2" }}>
                      <div className="font-bold text-sm" style={{ color: "#2b394b" }}>{s.val}</div>
                      <div className="text-xs mt-0.5 opacity-70" style={{ color: "#2b394b" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-5 flex-wrap">
                  {data.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#2b394b" }}>
                      <CheckCircle2 size={16} style={{ color: "#2b394b" }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* How to Apply */}
          <section>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#2b394b" }}>How to Apply for {activeLink}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.steps.map((s) => (
                <div key={s.step} className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: "white" }}>
                  <div className="text-3xl font-black mb-3 opacity-20" style={{ color: "#2b394b" }}>{s.step}</div>
                  <h3 className="font-bold text-base mb-2" style={{ color: "#2b394b" }}>{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#2b394b" }}>Eligibility Conditions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.conditions.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="rounded-2xl p-5 flex gap-4 shadow-sm" style={{ backgroundColor: "white" }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#cacdd2" }}>
                      <Icon size={22} style={{ color: "#2b394b" }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1" style={{ color: "#2b394b" }}>{c.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Documents */}
          <section>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#2b394b" }}>Documents Required</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.docs.map((d) => (
                <div key={d.category} className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: "white" }}>
                  <h4 className="font-bold text-sm mb-3 pb-2 border-b" style={{ color: "#2b394b", borderColor: "#cacdd2" }}>{d.category}</h4>
                  <ul className="space-y-2">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#2b394b" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Promo Banner */}
          <section className="rounded-2xl overflow-hidden relative shadow-md" style={{ minHeight: 220 }}>
            <img
              src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1200&q=80"
              alt="Financial Growth"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.4)" }}
            />
            <div className="relative z-10 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#a8bbc8" }}>Limited Period Offer</p>
                <h3 className="text-3xl font-black text-white">Get 0% Processing Fee</h3>
                <p className="text-gray-300 text-sm mt-1">On all {activeLink} applications this month. T&C apply.</p>
              </div>
              <button className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:scale-105 transition-transform flex-shrink-0 flex items-center gap-2" style={{ backgroundColor: "#cacdd2", color: "#2b394b" }}>
                Claim Offer <ArrowRight size={15} />
              </button>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#2b394b" }}>Frequently Asked Questions</h2>
            <div className="space-y-3">
              {data.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm" style={{ backgroundColor: "white" }}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-sm transition-colors"
                    style={{ color: "#2b394b" }}
                  >
                    {faq.q}
                    <Plus size={18} style={{ transform: activeFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed border-t" style={{ borderColor: "#cacdd2" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}