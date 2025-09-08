"use client";

// pages/index.tsx
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:hello@bookkeepingisessential.com?subject=Inquiry from ${encodeURIComponent(
    name || "Website Visitor"
  )}&body=${encodeURIComponent(message + (email ? `\n\nReply to: ${email}` : ""))}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Head>
        <title>Bookkeeping Is Essential — Friendly, Accurate, On‑Time</title>
        <meta
          name="description"
          content="Bookkeeping Is Essential helps small businesses breathe easy: clean books, clear reports, and kind guidance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Top Bar */}
      <div className="w-full bg-slate-900 text-white text-sm py-2">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          <p className="opacity-90">Serving CA‑based small businesses • Remote‑friendly</p>
          <a href="tel:+12095551234" className="underline underline-offset-4">(209) 555‑1234</a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <div className="leading-tight">
              <div className="font-semibold text-lg">Bookkeeping Is Essential</div>
              <div className="text-xs text-slate-500">Friendly • Precise • On‑Time</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-emerald-600">Services</a>
            <a href="#process" className="hover:text-emerald-600">Process</a>
            <a href="#about" className="hover:text-emerald-600">About</a>
            <a href="#pricing" className="hover:text-emerald-600">Pricing</a>
            <a href="#contact" className="px-4 py-2 rounded-xl bg-emerald-600 text-white shadow hover:bg-emerald-700">Let’s Talk</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Bookkeeping that feels <span className="text-emerald-600">human</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              You bring the hustle. I’ll bring clean books, clear reports, and calm systems—so you can lead your business and your family with confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700">Free consult</a>
              <a href="#services" className="px-5 py-3 rounded-xl border border-slate-300 font-medium hover:border-slate-400">See services</a>
            </div>
            <ul className="mt-6 text-sm text-slate-500 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <li className="flex items-center gap-2"><Check /> QuickBooks cleanup</li>
              <li className="flex items-center gap-2"><Check /> Monthly closes</li>
              <li className="flex items-center gap-2"><Check /> Receipt wrangling</li>
              <li className="flex items-center gap-2"><Check /> Budget dashboards</li>
              <li className="flex items-center gap-2"><Check /> Audit‑friendly docs</li>
              <li className="flex items-center gap-2"><Check /> Kind reminders</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-emerald-100/60 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <HeroCard />
            </div>
          </div>
        </div>
      </section>

      {/* Logos / social proof */}
      <section className="mx-auto max-w-7xl px-4 pb-6">
        <div className="text-xs uppercase tracking-wider text-slate-500">Tools I work with</div>
        <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-2 opacity-80">
          <Badge>QuickBooks Online</Badge>
          <Badge>Bill.com</Badge>
          <Badge>Expensify</Badge>
          <Badge>Gusto</Badge>
          <Badge>Stripe</Badge>
          <Badge>Square</Badge>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">Services built for small businesses</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Transparent, practical, and tailored to how you actually work. No jargon. No judgment.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ServiceCard title="Monthly Bookkeeping" bullets={["Bank/CC reconciliations","Categorization & class tracking","Monthly close + KPI snapshot"]} />
          <ServiceCard title="Cleanup & Catch‑up" bullets={["Fix uncategorized/duplicates","Receipt & W‑9 chase‑down","Audit‑ready folder structure"]} />
          <ServiceCard title="Systems & Setup" bullets={["QBO chart of accounts","Bill.com & Expensify flows","Simple, visual SOPs"]} />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">A calm, clear process</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {[
            { n: "1", t: "Listen", d: "We map your goals, tools, and pain points." },
            { n: "2", t: "Clean up", d: "Tidy chart of accounts, receipts, and workflows." },
            { n: "3", t: "Close", d: "On‑time monthly closes with tea‑spoon clear summaries." },
            { n: "4", t: "Grow", d: "Dashboards + simple habits that scale with you." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white grid place-content-center font-bold">{s.n}</div>
              <div className="mt-4 font-semibold">{s.t}</div>
              <p className="text-slate-600 text-sm mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Hi, I’m Liz — your friendly numbers partner</h2>
            <p className="mt-3 text-slate-600">I help small business owners feel organized and in control. I’m a mom, a systems‑builder, and a calm voice who loves turning chaos into checkmarks. You’ll get clear communication, gentle accountability, and spotless books.</p>
            <ul className="mt-4 text-sm text-slate-600 list-disc list-inside space-y-1">
              <li>Experienced with non‑profits & service businesses</li>
              <li>QuickBooks, Bill.com, and Expensify specialist</li>
              <li>Audit‑friendly habits without the stress</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-emerald-200/40 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl grid place-content-center">
              <Logo className="h-28 w-28 mx-auto" />
              <p className="mt-4 text-center text-slate-500">The <span className="font-semibold">Caterpillar with Glasses</span> — approachable, precise, and just a little nerdy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Every plan includes monthly closes, receipt follow‑ups, and quarterly check‑ins. Custom proposals for complex setups.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <PriceCard name="Starter" price="$399/mo" features={["Up to 2 accounts","Monthly close","Email support"]} />
          <PriceCard name="Standard" price="$699/mo" featured features={["Up to 5 accounts","Close + KPI snapshot","Email + text support"]} />
          <PriceCard name="Premium" price="$1,099/mo" features={["Up to 8 accounts","Close + KPI + budget","Priority support"]} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">Let’s make your books a breeze</h2>
          <p className="mt-2 text-slate-600">Tell me a little about your business, and I’ll reply within one business day.</p>
          <form className="mt-6 grid md:grid-cols-3 gap-4" onSubmit={(e)=>{e.preventDefault(); window.location.href = mailto;}}>
            <input required placeholder="Your name" className="md:col-span-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder="Email (optional)" className="md:col-span-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button className="md:col-span-1 px-4 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700" type="submit">Send</button>
            <textarea required placeholder="What do you need help with?" className="md:col-span-3 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 min-h-[120px]" value={message} onChange={(e)=>setMessage(e.target.value)} />
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-6 w-6" />
              <span className="font-semibold">Bookkeeping Is Essential</span>
            </div>
            <p className="mt-2 text-slate-500 max-w-sm">Friendly and precise bookkeeping for small businesses across California. Remote‑friendly.</p>
          </div>
          <div>
            <div className="font-semibold">Quick links</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li><a href="#services" className="hover:text-emerald-600">Services</a></li>
              <li><a href="#process" className="hover:text-emerald-600">Process</a></li>
              <li><a href="#pricing" className="hover:text-emerald-600">Pricing</a></li>
              <li><a href="#contact" className="hover:text-emerald-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Get in touch</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li><a className="underline underline-offset-4" href="mailto:hello@bookkeepingisessential.com">hello@bookkeepingisessential.com</a></li>
              <li><a className="underline underline-offset-4" href="tel:+12095551234">(209) 555‑1234</a></li>
              <li>Tracy, CA</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} Bookkeeping Is Essential. All rights reserved.</div>
      </footer>
    </main>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs">{children}</span>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="text-emerald-600 h-4 w-4">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function ServiceCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="font-semibold text-lg">{title}</div>
      <ul className="mt-3 space-y-2 text-slate-600 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 items-start"><Check /><span>{b}</span></li>
        ))}
      </ul>
    </div>
  );
}

function PriceCard({ name, price, features, featured }: { name: string; price: string; features: string[]; featured?: boolean }) {
  return (
    <div className={"rounded-2xl border p-6 shadow-sm bg-white " + (featured ? "border-emerald-300 shadow-lg" : "border-slate-200") }>
      <div className="flex items-baseline justify-between">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-2xl font-extrabold text-emerald-700">{price}</div>
      </div>
      <ul className="mt-4 space-y-2 text-slate-600 text-sm">
        {features.map((f) => (
          <li key={f} className="flex gap-2 items-start"><Check /><span>{f}</span></li>
        ))}
      </ul>
      <a href="#contact" className="mt-5 inline-block w-full text-center px-4 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700">Get started</a>
    </div>
  );
}

function HeroCard() {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-3">
        <Logo className="h-10 w-10" />
        <div>
          <div className="font-semibold">“Books, but make it kind.”</div>
          <div className="text-xs text-slate-500">Liz • Owner</div>
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 p-4">
        <div className="text-sm text-slate-600">Last month snapshot</div>
        <div className="mt-3 grid grid-cols-3 gap-3 text-center">
          {[{k:"Reconciled",v:"12 accts"},{k:"Receipts",v:"100%"},{k:"Close",v:"On‑time"}].map((m)=>(
            <div key={m.k} className="rounded-xl bg-slate-50 p-3 border border-slate-200">
              <div className="text-xs text-slate-500">{m.k}</div>
              <div className="font-semibold">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-900">
        <div className="font-semibold">What clients say</div>
        <p className="mt-1">“Liz keeps us organized and explains everything in plain English. My stress went way down.”</p>
      </div>
    </div>
  );
}

function Logo({ className = "h-8 w-8" }: { className?: string }) {
  // Caterpillar with glasses holding a calculator — simple, friendly SVG
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bookkeeping Is Essential logo">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#065f46"/>
        </linearGradient>
      </defs>
      {/* Body segments */}
      <circle cx="32" cy="75" r="12" fill="url(#g)"/>
      <circle cx="52" cy="70" r="14" fill="url(#g)"/>
      <circle cx="74" cy="66" r="16" fill="url(#g)"/>
      {/* Head */}
      <circle cx="92" cy="55" r="18" fill="url(#g)"/>
      {/* Glasses */}
      <circle cx="84" cy="52" r="6" fill="white" stroke="#0f172a" strokeWidth="2"/>
      <circle cx="98" cy="50" r="6" fill="white" stroke="#0f172a" strokeWidth="2"/>
      <rect x="89" y="49" width="4" height="2" fill="#0f172a"/>
      {/* Smile */}
      <path d="M86 60 q6 6 12 0" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Calculator */}
      <rect x="42" y="40" width="18" height="24" rx="2" fill="#0f172a"/>
      <rect x="45" y="44" width="12" height="6" rx="1" fill="white"/>
      {[...Array(6)].map((_,i)=>{
        const x = 45 + (i%3)*4;
        const y = 52 + Math.floor(i/3)*4;
        return <rect key={i} x={x} y={y} width={3} height={3} rx="0.5" fill="#a7f3d0"/>;
      })}
      {/* Antennae */}
      <path d="M100 33 q4 -8 10 -10" stroke="#065f46" strokeWidth="2" fill="none"/>
      <path d="M86 34 q-4 -8 -10 -10" stroke="#065f46" strokeWidth="2" fill="none"/>
    </svg>
  );
}
