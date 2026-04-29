import Image from 'next/image'
import { BackToTop } from './components/back-to-top'

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Meet Olive',   href: '#meet-olive' },
  { label: 'FAQ',          href: '#faq' },
]

function Nav() {
  return (
    <nav
      className="fixed top-6 right-6 z-50 animate-fade-in-up [animation-delay:0.5s]"
      aria-label="Site navigation"
    >
      <div className="flex items-center bg-forest/70 backdrop-blur-md border border-white/[0.09] rounded-full p-1 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="font-sans text-[11px] text-white/45 hover:text-sage hover:bg-white/[0.06] transition-colors duration-200 px-3.5 py-1.5 rounded-full"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}

function PhoneMockup() {
  return (
    <div className="relative w-[240px] shrink-0">
      <div className="rounded-[44px] bg-[#1c1c1e] p-[9px] shadow-[0_24px_64px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.1]">
        <div className="rounded-[36px] overflow-hidden relative bg-black">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[82px] h-[26px] rounded-full bg-black z-20" />
          <div
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 26%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 26%)',
            }}
          >
            <Image
              src="/app-screenshot.png"
              alt="Olive app showing CO₂ avoided, daily streak, and quick log"
              width={222}
              height={480}
              className="w-full block"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute -left-[3px] top-[84px] w-[3px] h-8 rounded-l bg-[#2c2c2e]" />
      <div className="absolute -left-[3px] top-[128px] w-[3px] h-12 rounded-l bg-[#2c2c2e]" />
      <div className="absolute -left-[3px] top-[192px] w-[3px] h-12 rounded-l bg-[#2c2c2e]" />
      <div className="absolute -right-[3px] top-[148px] w-[3px] h-16 rounded-r bg-[#2c2c2e]" />
    </div>
  )
}

const HOW_IT_WORKS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v5" stroke="#74c69d" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 3v4M8 3v4M3 11h18" stroke="#74c69d" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 14v4m0 0l-2-2m2 2l2-2" stroke="#74c69d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Log what you did',
    body: 'Type it in plain English or tap a quick action. Travel, food, shopping. Olive handles the maths.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 17l4-5 4 3 4-6 4 4" stroke="#74c69d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 21h18" stroke="#74c69d" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'See your real number',
    body: 'Not an estimate from a questionnaire. A number built from the things you actually do, every day.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C9 6 7 9 7 12a5 5 0 0010 0c0-3-2-6-5-10z" stroke="#74c69d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17v3M10 21h4" stroke="#74c69d" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Track what changes',
    body: "Daily streaks, weekly trends, a running total. You'll see exactly when your choices start to matter.",
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does it track without me doing anything?',
    a: "Olive reads your phone's location history to spot travel patterns and scans Gmail for purchase receipts. Both connections are read-only. You can also log things by hand if you prefer. Most users find they barely need to open the app.",
  },
  {
    q: 'Is my data private?',
    a: "Your data lives on your device. Olive's Gmail connection is read-only and scoped to receipts only. Nothing is sold, nothing is shared. You can disconnect any data source at any time from settings.",
  },
  {
    q: 'When is it launching?',
    a: "We're working toward a release on iOS and Android later this year. The SIGNAL research programme is already running with a small group of participants.",
  },
]

export default function Home() {
  return (
    <>
      <Nav />

      {/* ─── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 px-8 lg:px-20 py-24">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <Image
            src="/olive-branch.svg"
            alt=""
            width={40}
            height={40}
            className="mb-8 animate-fade-in-up"
            aria-hidden="true"
            priority
          />
          <h1 className="font-fraunces font-semibold text-offwhite text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in-up [animation-delay:0.1s]">
            Know your footprint.<br />Own your future.
          </h1>
          <p className="font-sans text-sage text-lg md:text-xl leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            Olive is a personal carbon tracker built around the things you already do.
          </p>
          <div className="mt-8 animate-fade-in-up [animation-delay:0.3s]">
            <span className="font-sans text-xs text-white/45 border border-white/12 rounded-full px-4 py-1.5 flex items-center gap-2 w-fit">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 7h6M9 12h6M9 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Coming soon · iOS &amp; Android
            </span>
          </div>
        </div>

        <div className="animate-fade-in-up [animation-delay:0.35s]">
          <PhoneMockup />
        </div>

        <div
          className="absolute bottom-8 left-1/2"
          style={{ animation: 'scroll-hint 2s ease-in-out infinite', transform: 'translateX(-50%)' }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="#74c69d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>
        </div>
      </section>


      {/* ─── 2. PROBLEM ──────────────────────────────────────── */}
      <section className="px-8 lg:px-20 py-24 lg:py-32 text-center">
        <p className="font-fraunces font-semibold text-sage text-8xl md:text-9xl leading-none mb-6">7t</p>
        <p className="font-sans text-white/50 text-sm max-w-xs mx-auto leading-relaxed">
          The average person&apos;s annual carbon footprint. Most of it hides in the ordinary: the commute, the shop, the meal.
        </p>
      </section>


      {/* ─── 3. HOW IT WORKS ─────────────────────────────────── */}
      <section id="how-it-works" className="scroll-mt-20 px-8 lg:px-20 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/30 text-center mb-5">
            How it works
          </p>
          <p className="font-fraunces font-semibold text-offwhite/75 text-xl md:text-2xl text-center leading-snug mb-16 max-w-xl mx-auto">
            No questionnaires. No manual entry. Your phone handles it quietly in the background.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.title} className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <h2 className="font-fraunces font-semibold text-offwhite text-base">{item.title}</h2>
                <p className="font-sans text-white/55 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── 4. MEET OLIVE ───────────────────────────────────── */}
      <section id="meet-olive" className="scroll-mt-20 px-8 lg:px-20 py-24 lg:py-32">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-10 h-10 rounded-full bg-sage/15 ring-1 ring-sage/20 mx-auto mb-6 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#74c69d" strokeWidth="1.5"/>
              <path d="M8 12s1.5 2 4 2 4-2 4-2" stroke="#74c69d" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="9" cy="10" r="1" fill="#74c69d"/>
              <circle cx="15" cy="10" r="1" fill="#74c69d"/>
            </svg>
          </div>
          <h2 className="font-fraunces font-semibold text-offwhite text-2xl mb-4">Meet Olive</h2>
          <p className="font-sans text-white/60 text-base leading-relaxed">
            Every number comes with a coach. Olive explains what your footprint actually means, answers your questions in plain language, and suggests changes that fit around your life, not the other way around.
          </p>
        </div>
      </section>


      {/* ─── 5. MISSION ──────────────────────────────────────── */}
      <section className="px-8 lg:px-20 py-24 lg:py-32">
        <div className="max-w-lg mx-auto text-center space-y-5">
          <p className="font-sans text-white/70 text-base leading-relaxed">
            Most people want to live more sustainably but have no idea where their carbon
            actually comes from. Olive tracks your travel and purchases quietly in the
            background, without questionnaires or manual logging. You get a real number
            built from your real life.
          </p>
          <p className="font-sans text-white/70 text-base leading-relaxed">
            We built it because carbon guilt is everywhere and carbon clarity is almost nowhere.
          </p>
        </div>
      </section>


      {/* ─── 6. FAQ ──────────────────────────────────────────── */}
      <section id="faq" className="scroll-mt-20 px-8 lg:px-20 py-24 lg:py-32">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/30 text-center mb-14">
          Questions
        </p>
        <div className="max-w-xl mx-auto space-y-10">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <h3 className="font-fraunces font-semibold text-offwhite text-base mb-2">{item.q}</h3>
              <p className="font-sans text-white/55 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
          <div className="pt-6 border-t border-white/[0.07]">
            <p className="font-sans text-xs text-white/30 text-center flex items-center justify-center gap-2">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              Your data is stored on your device. We don&apos;t sell it or share it.
            </p>
          </div>
        </div>
      </section>


      <BackToTop />

      {/* ─── 7. FOOTER ───────────────────────────────────────── */}
      <footer className="px-8 py-10 text-center space-y-2 border-t border-white/[0.07]">
        <p className="font-sans text-xs text-white/30">© 2026 Olive</p>
        <p className="font-sans text-[10px] text-white/20 tracking-wide">
          Part of the SIGNAL research initiative · studying how carbon awareness shapes everyday behaviour
        </p>
      </footer>

    </>
  )
}
