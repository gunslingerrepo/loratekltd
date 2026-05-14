'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  {
    title: 'Managed IT Services', href: '/services',
    desc: 'We operate and optimise your entire IT environment so your internal teams can focus on business, not system failures.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Custom Software Development', href: '/services',
    desc: 'We design and build enterprise software tailored to your internal workflows, reducing manual processes and improving operational efficiency.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Cybersecurity', href: '/services',
    desc: 'We protect enterprise systems against evolving threats through proactive security, monitoring, and compliance-ready frameworks.',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Training & Capacity Building', href: '/services',
    desc: "Technology investments fail when people aren't equipped. We build training programmes around your tools, your team, and your environment.",
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Cloud & Infrastructure', href: '/services',
    desc: 'We design and manage scalable cloud and hybrid infrastructure that supports business growth, resilience, and performance.',
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Business Intelligence', href: '/services',
    desc: 'Data without insight is noise. We help organisations build the pipelines, models, and dashboards that transform raw data into strategic intelligence.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
]

const models = [
  {
    num: '01', title: 'Project-Based', subtitle: '',
    desc: 'Fixed scope, fixed timeline, fixed price. Ideal for well-defined projects with clear deliverables.',
    bullets: ['Detailed project scoping', 'Milestone-based payments', 'Dedicated project manager', '60-day post-launch warranty'],
    cta: 'Get a Quote', note: '', highlight: false,
  },
  {
    num: '02', title: 'Execution Vendor', subtitle: 'Assigned Projects',
    desc: 'A trusted technology vendor that executes projects assigned directly by your organisation. Once onboarded, Loratek becomes a reliable delivery partner for implementation work across your systems and initiatives.',
    bullets: ['Pre-approved vendor for project assignments', 'Execute software, infrastructure, cloud, or cybersecurity projects', 'End-to-end delivery responsibility (build, implement, deploy)', 'Works directly with internal teams or project owners', 'SLA-backed execution and delivery timelines', 'Scalable across multiple assigned projects'],
    cta: 'Assign Project to Loratek', note: 'Best for organisations that need a reliable external vendor to execute defined technical work', highlight: true,
  },
  {
    num: '03', title: 'Staff Augmentation', subtitle: '',
    desc: 'Embed experienced Loratek engineers directly into your existing team when and where you need them.',
    bullets: ['Senior-level specialists only', 'On-site or fully remote', 'Flexible scaling up/down', 'Rapid 5-day onboarding'],
    cta: 'Talk to Us', note: '', highlight: false,
  },
]

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctaSubmitted, setCtaSubmitted] = useState(false)
  const [ctaLoading, setCtaLoading] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)
    const pts = Array.from({ length: 190 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2.5 + 1.5,
      phase: Math.random() * Math.PI * 2,
    }))
    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.phase += 0.025
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.strokeStyle = `rgba(109,255,138,${(1 - dist / 150) * 0.55})`
            ctx.lineWidth = 1.2
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke()
          }
        }
      }
      pts.forEach(p => {
        const g = 0.85 + 0.15 * Math.sin(p.phase)
        ctx.fillStyle = `rgba(109,255,138,${g})`
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  const handleCta = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCtaLoading(true)
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value
    try {
      const r = await fetch('https://formspree.io/f/mlgpojjz', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message: `Schedule a call request from: ${email}` }),
      })
      if (r.ok) setCtaSubmitted(true)
    } finally { setCtaLoading(false) }
  }

  return (
    <>
      <Navbar transparent />

      {/* ── HERO ── */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden bg-[#0a1a0f]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a0f]/92 via-[#0a1a0f]/65 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
          <h1 className="font-forum text-[clamp(52px,8vw,90px)] text-white leading-[1em] mb-6 animate-fadeup max-w-[700px]">
            Powering Africa&apos;s<br />Digital Future
          </h1>
          <p className="text-lg text-white/70 max-w-[500px] leading-relaxed mb-3 animate-fadeup1">
            We design, build, and manage secure enterprise technology systems across Africa — from cloud infrastructure and cybersecurity to custom software and data platforms.
          </p>
          <p className="text-[15px] text-white/55 max-w-[500px] leading-relaxed mb-9 animate-fadeup1">
            Helping organisations modernise operations, strengthen security, and scale with confidence.
          </p>
          <div className="flex flex-wrap gap-3 animate-fadeup2">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#0a1a0f] font-sans text-sm font-bold px-7 py-3.5 rounded-md hover:bg-blue-tag transition-colors">
              Book a Consultation
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 text-white font-sans text-sm font-medium px-7 py-3.5 rounded-md border border-white/35 hover:bg-white/10 transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-bg py-24" id="services">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <span className="inline-flex bg-[#ebebeb] text-ink-2 text-xs font-medium px-2.5 py-1 rounded-md mb-5">All in one services</span>
              <h2 className="font-forum text-[clamp(32px,4vw,52px)] text-ink leading-[1.05em]">
                End-to-end enterprise technology services designed to modernise infrastructure, improve security, and unlock data-driven performance.
              </h2>
            </div>
            <div className="pt-2">
              <p className="text-base text-ink-3 leading-relaxed">
                We deliver sharp, results-driven IT services across the core areas of enterprise technology. Whether you&apos;re modernising, securing, or transforming — we own the outcome from start to finish.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="bg-white rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-200 group no-underline">
                <div className="p-7 flex flex-col flex-1">
                  <div className="font-forum text-xl text-ink mb-2.5 leading-snug">{s.title}</div>
                  <div className="text-[13px] text-ink-3 leading-relaxed flex-1 mb-4">{s.desc}</div>
                  <div className="text-[13px] font-semibold text-blue-light flex items-center gap-1.5 mt-auto">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </div>
                </div>
                <div className="h-[200px] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[6s]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES TEASER ── */}
      <section className="bg-bg py-24 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-flex bg-[#ebebeb] text-ink-2 text-xs font-medium px-2.5 py-1 rounded-md mb-5">Industries We Serve</span>
              <h2 className="font-forum text-[clamp(28px,4vw,48px)] text-ink leading-[1.1em] mt-3 mb-5">
                You run the business.<br />We keep the technology running.
              </h2>
              <p className="text-[15px] text-ink-3 leading-relaxed mb-8">
                We work with sectors where technology failure isn&apos;t just inconvenient — it&apos;s operational, regulatory, and reputational. Financial services, oil &amp; gas, manufacturing, healthcare, consulting firms, and government.
              </p>
              <Link href="/industries" className="inline-flex items-center gap-2 bg-blue text-white font-sans text-sm font-semibold px-6 py-3 rounded-md hover:bg-blue-mid transition-colors">
                See all industries →
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[1.1]">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85" alt="Industries" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section className="bg-[#fafafa] py-24 border-t border-[#e8e8e8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-5">
              <div className="w-6 h-px bg-blue" />
              <span className="font-mono text-[10px] text-blue tracking-[.14em] uppercase">Engagement Models</span>
              <div className="w-6 h-px bg-blue" />
            </div>
            <h2 className="font-forum text-[clamp(30px,4vw,46px)] text-[#0a0a0a] leading-[1.08em] mb-4">Flexible ways to work with us</h2>
            <p className="text-[15px] text-ink-3 leading-relaxed max-w-[520px] mx-auto">Every engagement is scoped to your exact needs. Here&apos;s how most clients work with Loratek.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 border border-[#ddd] rounded-sm overflow-hidden">
            {models.map((m, i) => (
              <div key={i} className={`flex flex-col p-10 relative ${m.highlight ? 'bg-blue' : 'bg-white'} ${i === 0 ? 'border-b lg:border-b-0 lg:border-r border-[#ddd]' : i === 2 ? 'border-t lg:border-t-0 lg:border-l border-[#ddd]' : ''}`}>
                {m.highlight && <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-light to-blue-accent" />}
                <div className="mb-7">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className={`font-mono text-[9px] tracking-[.14em] uppercase ${m.highlight ? 'text-white/50' : 'text-[#888]'}`}>Model {m.num}</div>
                    {m.highlight && <span className="font-mono text-[9px] bg-blue-light text-white px-2.5 py-1 rounded-sm tracking-wider uppercase">Recommended</span>}
                  </div>
                  <div className={`font-forum text-2xl mb-1 leading-[1.1em] ${m.highlight ? 'text-white' : 'text-[#0a0a0a]'}`}>{m.title}</div>
                  {m.subtitle && <div className={`text-xs mb-2 ${m.highlight ? 'text-white/45' : 'text-ink-4'}`}>{m.subtitle}</div>}
                  <div className={`w-8 h-0.5 my-3 ${m.highlight ? 'bg-blue-accent' : 'bg-blue'}`} />
                  <p className={`text-[13.5px] leading-[1.7] ${m.highlight ? 'text-white/75' : 'text-[#555]'}`}>{m.desc}</p>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {m.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <circle cx="6.5" cy="6.5" r="6.5" fill={m.highlight ? 'rgba(96,165,250,.2)' : '#EEF2FF'} />
                        <path d="M4 6.5l2 2 3-3" stroke={m.highlight ? '#60a5fa' : '#0c2461'} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className={`text-[13.5px] leading-[1.5] ${m.highlight ? 'text-white/85' : 'text-[#333]'}`}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link href="/contact" className={`flex items-center justify-between px-4 py-3 rounded-sm text-[13px] font-semibold transition-colors ${m.highlight ? 'bg-white text-blue hover:bg-blue-tag' : 'border border-[#ddd] text-blue hover:bg-[#f0f0f0]'}`}>
                    {m.cta}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </Link>
                  {m.note && <p className={`text-[11.5px] mt-3 leading-relaxed italic ${m.highlight ? 'text-white/40' : 'text-ink-4'}`}>{m.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT DRIVES US ── */}
      <section className="relative overflow-hidden py-[110px]">
        <img src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1600&q=85" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(.28) saturate(.6)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,17,10,.45)] to-[rgba(7,17,10,.8)]" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          <span className="inline-flex bg-[rgba(109,255,138,.12)] text-[#6dff8a] border border-[rgba(109,255,138,.25)] text-xs font-medium px-2.5 py-1 rounded-md mb-5">What Drives Us</span>
          <div className="h-px bg-white/12 mb-5" />
          <div className="max-w-[750px]">
            <h2 className="font-forum text-[clamp(28px,4vw,52px)] text-white leading-[1.1em] mb-8">
              To be Africa&apos;s most trusted enterprise technology partner — delivering outcomes, not just outputs.
            </h2>
            <div className="text-base text-white/65 leading-[1.75] space-y-4">
              <p>We envision a future where African enterprises can compete globally — enabled by technology that actually works.</p>
              <p>We&apos;re not just building an IT company. We&apos;re building a new standard for how technology serves enterprise organisations across the continent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="bg-black py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-[820px] text-center">
            <p className="font-forum text-[clamp(20px,3vw,30px)] text-white leading-[1.4em] mb-5">
              &ldquo;We don&apos;t sell products. We don&apos;t pitch decks. We show up, understand the problem, and stay until it&apos;s solved.&rdquo;
            </p>
            <div className="w-10 h-px bg-[rgba(109,255,138,.5)] mx-auto mb-4" />
            <div className="font-mono text-[11px] text-white/35 tracking-[.1em] uppercase">Loratek — Enterprise Technology Partner, Africa</div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-bg pt-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-blue rounded-xl rounded-b-none px-8 md:px-16 py-[72px] text-center">
            <div className="font-mono text-[10px] text-white/40 tracking-[.12em] uppercase mb-4">Get in Touch</div>
            <h2 className="font-forum text-[clamp(28px,4vw,48px)] text-white leading-[1.1em] mb-3">Ready to transform your technology?</h2>
            <p className="text-base text-white/60 mb-9 max-w-[480px] mx-auto leading-relaxed">
              Book a free 30-minute call. No pitch — just an honest conversation about your technology challenges.
            </p>
            {ctaSubmitted ? (
              <div className="max-w-[460px] mx-auto py-8">
                <div className="w-12 h-12 bg-[rgba(74,222,128,.15)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <div className="font-forum text-2xl text-white mb-2">Message received.</div>
                <div className="text-[15px] text-white/60">We&apos;ll be in touch within 24 hours to schedule your call.</div>
              </div>
            ) : (
              <div className="max-w-[500px] mx-auto">
                <form onSubmit={handleCta}>
                  <div className="flex border border-white/20 rounded-md overflow-hidden bg-black/20">
                    <input type="email" name="email" placeholder="your@company.com" required className="flex-1 bg-transparent border-none px-5 py-3.5 text-white text-sm outline-none placeholder:text-white/35" />
                    <button type="submit" disabled={ctaLoading} className="bg-blue-light text-white border-none px-6 py-3.5 text-sm font-semibold whitespace-nowrap hover:bg-blue-mid transition-colors cursor-pointer disabled:opacity-60">
                      {ctaLoading ? 'Sending…' : 'Schedule a Call →'}
                    </button>
                  </div>
                </form>
                <div className="flex justify-center gap-10 mt-12 pt-9 border-t border-white/10">
                  {[['Phone', '+234 913 212 0188'], ['Response time', 'Within 24 hours'], ['Location', 'Lagos, Nigeria']].map(([label, val]) => (
                    <div key={label} className="text-center">
                      <div className="font-mono text-[10px] text-white/35 uppercase tracking-[.1em] mb-1.5">{label}</div>
                      <div className="text-sm text-white/70">{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
