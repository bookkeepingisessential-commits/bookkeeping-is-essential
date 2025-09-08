"use client";
import React from "react";

// --- Inline brand palette ---
const BRAND = {
  navy: "#1F3A5F",
  emerald: "#2D6A4F",
  sage: "#B7E4C7",
  gray: "#F2F2F2",
  ink: "#0E1726",
};

// --- Simple inline SVG mascot (caterpillar + ledger book) ---
const Logo = ({ size = 72 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bookkeeping is Essential logo">
    <path d="M12 84c0-6 6-10 12-10h56c8 0 12 4 12 10v14H24c-8 0-12-4-12-10V84z" fill={BRAND.navy} />
    <path d="M24 76h68v21H24c-6 0-10-3-10-7.5S18 76 24 76z" fill={BRAND.gray} />
    <g stroke={BRAND.navy} strokeWidth="2" opacity=".7">
      <line x1="28" y1="90" x2="86" y2="90" />
      <line x1="28" y1="98" x2="86" y2="98" />
      <line x1="28" y1="106" x2="86" y2="106" />
    </g>
    <g>
      <circle cx="54" cy="52" r="12" fill="#7ED957" stroke={BRAND.navy} strokeWidth="3" />
      <circle cx="70" cy="60" r="12" fill="#77CF57" stroke={BRAND.navy} strokeWidth="3" />
      <circle cx="86" cy="66" r="11" fill="#6BC951" stroke={BRAND.navy} strokeWidth="3" />
      <circle cx="102" cy="70" r="9" fill="#63C24C" stroke={BRAND.navy} strokeWidth="3" />
    </g>
    <circle cx="39" cy="44" r="14" fill="#8BE06A" stroke={BRAND.navy} strokeWidth="3" />
    <path d="M31 30c-3-6-9-6-11-3" stroke={BRAND.navy} strokeWidth="3" strokeLinecap="round"/>
    <path d="M47 30c3-6 9-6 11-3" stroke={BRAND.navy} strokeWidth="3" strokeLinecap="round"/>
    <circle cx="34" cy="44" r="7" stroke={BRAND.navy} strokeWidth="3" fill="white" />
    <circle cx="46" cy="44" r="7" stroke={BRAND.navy} strokeWidth="3" fill="white" />
    <line x1="41" y1="44" x2="39" y2="44" stroke={BRAND.navy} strokeWidth="3" />
    <path d="M36 50c3 2 5 2 8 0" stroke={BRAND.navy} strokeWidth="2" strokeLinecap="round" />
    <rect x="78" y="36" width="22" height="28" rx="3" fill={BRAND.gray} stroke={BRAND.navy} strokeWidth="3" />
    <rect x="82" y="40" width="14" height="6" rx="1" fill={BRAND.navy} />
    <g fill={BRAND.navy}>
      {[...Array(6)].map((_, i) => (
        <rect key={i} x={82 + (i % 3) * 5} y={50 + Math.floor(i / 3) * 6} width="4" height="4" rx="1" />
      ))}
    </g>
  </svg>
);

const Section = ({ children, id, style = {} }: {children: React.ReactNode, id?: string, style?: React.CSSProperties}) => (
  <section id={id} className="w-full py-20" style={style}>
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

const Pill = ({ children }: {children: React.ReactNode}) => (
  <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm"
        style={{ backgroundColor: BRAND.sage, color: BRAND.ink }}>
    {children}
  </span>
);

export default function BookkeepingIsEssentialSite() {
  return (
    <div className="min-h-screen" style={{ background: "white", color: BRAND.ink }}>
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b" style={{ borderColor: "#eee" }}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <span className="font-semibold text-lg" style={{ color: BRAND.navy }}>Bookkeeping is Essential</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <a href="#contact" className="ml-4 rounded-lg px-4 py-2 text-white" style={{ backgroundColor: BRAND.emerald }}>
            Free Consult
          </a>
        </div>
      </header>

      {/* Hero */}
      <Section id="hero" style={{ background: `linear-gradient(180deg, ${BRAND.gray}, #fff)` }}>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: BRAND.navy }}>
              Friendly, precise bookkeeping for growing small businesses
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              I make numbers clear and systems simple—so you can focus on serving your customers and scaling your impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-lg px-5 py-3 text-white" style={{ backgroundColor: BRAND.emerald }}>
                Get a Free Consult →
              </a>
              <a href="#services" className="rounded-lg px-5 py-3 border"
                 style={{ borderColor: BRAND.navy, color: BRAND.navy }}>
                View Service Menu
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-700">
              <Pill>✔︎ Timely, audit-ready reports</Pill>
              <Pill>✔︎ Clear communication & kindness</Pill>
              <Pill>✔︎ Month-end checklists that prevent surprises</Pill>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="p-6 rounded-3xl shadow-lg" style={{ backgroundColor: "white", border: `2px solid ${BRAND.sage}` }}>
              <Logo size={180} />
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: BRAND.navy }}>Service Tiers</h2>
          <p className="mt-2 text-gray-600">Pick the support that fits your stage. Upgrade any time.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Starter",
              price: "from $399/mo",
              bullets: [
                "Monthly categorization & reconciliation",
                "P&L + Balance Sheet",
                "Email support within 2 biz days",
              ],
            },
            {
              title: "Growth",
              price: "from $699/mo",
              bullets: [
                "Weekly transaction review",
                "Budget vs. Actuals dashboard",
                "Quarterly calls & tax-time prep",
              ],
            },
            {
              title: "Essential Plus",
              price: "custom",
              bullets: [
                "AR/AP workflows & vendor mgmt",
                "Receipt systems (Expensify/Dext)",
                "Audit-ready close checklist",
              ],
            },
          ].map((p, i) => (
            <div key={i} className="rounded-2xl shadow-md border p-6 flex flex-col"
                 style={{ borderColor: BRAND.gray }}>
              <div className="flex items-baseline justify-between">
                <div className="text-lg font-semibold" style={{ color: BRAND.emerald }}>{p.title}</div>
                <div className="text-sm text-gray-500">{p.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                {p.bullets.map((b, j) => (
                  <li key={j}>✔︎ {b}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-4 w-full text-center rounded-lg px-4 py-2 text-white"
                 style={{ backgroundColor: BRAND.navy }}>
                Choose {p.title}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Niches */}
      <Section id="niches" style={{ backgroundColor: BRAND.gray }}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold" style={{ color: BRAND.navy }}>Who I Serve</h2>
          <p className="text-gray-700">Approachable support for mission-driven owners.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Childcare & Youth Programs", desc: "P&L by site/class, grant coding, clean receipts." },
            { title: "Local Service Businesses", desc: "Real-time categorization and monthly close you can trust." },
            { title: "Nonprofits & Faith-based", desc: "Stewardship-minded reporting with clarity & care." },
          ].map((n, i) => (
            <div key={i} className="rounded-2xl border p-6 bg-white" style={{ borderColor: BRAND.gray }}>
              <div className="font-semibold mb-1" style={{ color: BRAND.emerald }}>{n.title}</div>
              <div className="text-gray-700">{n.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold" style={{ color: BRAND.navy }}>A Simple, Calm Process</h2>
          <p className="text-gray-600">Clarity in every transaction.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Discovery", desc: "Quick call to learn your needs and systems." },
            { step: "2", title: "Set-Up", desc: "Chart of accounts, classes, and receipt flow." },
            { step: "3", title: "Monthly Close", desc: "Reconcile, review, and deliver clean reports." },
            { step: "4", title: "Growth", desc: "Budgets, insights, and stress-free audits." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border p-6" style={{ borderColor: BRAND.gray }}>
              <div className="text-sm text-gray-500">Step {s.step}</div>
              <div className="font-semibold">{s.title}</div>
              <div className="text-gray-700 mt-2">{s.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" style={{ backgroundColor: BRAND.gray }}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold" style={{ color: BRAND.navy }}>Kind Words</h2>
          <p className="text-gray-700">Clients appreciate clarity, care, and on-time books.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Elizabeth made our P&L by site make sense—finally.",
            "Super responsive and so patient explaining the why behind the numbers.",
            "Month-end used to be chaos. Now it’s a checklist.",
          ].map((q, i) => (
            <div key={i} className="rounded-2xl border p-6 bg-white" style={{ borderColor: BRAND.gray }}>
              <div className="mb-2">★★★★★</div>
              <p className="text-gray-800">“{q}”</p>
            </div>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: BRAND.navy }}>
              Hi, I’m Elizabeth — your calm, systems-minded bookkeeper.
            </h2>
            <p className="mt-4 text-gray-700">
              I blend warmth and professionalism with a builder’s mindset. I love turning messy, overwhelming books into clear, reliable reports
              that help you lead with confidence. You’ll always get transparency, kindness, and audit-ready accuracy.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔︎ Experienced with QuickBooks, Expensify/Bill.com, multi-site class tracking</li>
              <li>✔︎ Clear monthly closes & on-time P&Ls</li>
              <li>✔︎ Gentle accountability and proactive communication</li>
            </ul>
          </div>
          <div className="rounded-3xl shadow-md border p-6 bg-white" style={{ borderColor: BRAND.gray }}>
            <div className="font-semibold mb-4">Mini Brand Kit</div>
            <div className="flex items-center gap-4">
              <Logo size={56} />
              <div>
                <div className="font-semibold" style={{ color: BRAND.navy }}>Bookkeeping is Essential</div>
                <div className="text-sm text-gray-600">Navy {BRAND.navy} · Emerald {BRAND.emerald} · Sage {BRAND.sage}</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[BRAND.navy, BRAND.emerald, BRAND.sage].map((c) => (
                <div key={c} className="h-10 rounded-xl border" style={{ backgroundColor: c, borderColor: "#e5e7eb" }} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" style={{ backgroundColor: BRAND.gray }}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold" style={{ color: BRAND.navy }}>Let’s Get Your Books Calm & Clear</h2>
          <p className="text-gray-700">Send a note and I’ll reply within 1–2 business days.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: BRAND.gray }}>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! I’ll be in touch soon."); }} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input className="w-full rounded-md border px-3 py-2" placeholder="Your name" required />
                <input className="w-full rounded-md border px-3 py-2" type="email" placeholder="Email" required />
              </div>
              <input className="w-full rounded-md border px-3 py-2" placeholder="Business name" />
              <textarea className="w-full rounded-md border px-3 py-2" placeholder="Tell me what you need help with…" rows={5} />
              <button type="submit" className="w-full rounded-lg px-4 py-2 text-white" style={{ backgroundColor: BRAND.emerald }}>
                Request a Free Consult
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center p-6 rounded-2xl bg-white" style={{ border: `2px solid ${BRAND.sage}` }}>
            <div className="text-gray-800">📧 hello@bookkeepingisessential.com</div>
            <div className="mt-3 text-gray-800">📞 (555) 555-0123</div>
            <p className="mt-4 text-gray-600 text-sm">Prefer a quick intro call? Send a time that works and I’ll confirm.</p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10" style={{ backgroundColor: BRAND.navy, color: "white" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <span className="text-sm">© {new Date().getFullYear()} Bookkeeping is Essential</span>
          </div>
          <div className="text-sm opacity-90">Clarity in every transaction.</div>
        </div>
      </footer>
    </div>
  );
}
