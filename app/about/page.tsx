import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'About — Loratek',
  description: 'Learn about Loratek — our mission, approach, and commitment to African enterprise technology.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="About Loratek"
        title="We are Africa&apos;s enterprise<br />technology delivery partner."
        subtitle="Founded to close the gap between enterprise technology ambition and operational reality — we consult, build, and manage."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Story */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <span className="inline-flex bg-[#ebebeb] text-ink-2 text-xs font-medium px-2.5 py-1 rounded-md mb-5">Our Story</span>
              <h2 className="font-forum text-[clamp(30px,4vw,48px)] text-ink leading-[1.1em] mb-6">
                Built for African enterprises. Designed around outcomes.
              </h2>
              <div className="space-y-4 text-base text-ink-3 leading-relaxed">
                <p>Loratek was founded on a straightforward observation: African enterprises were spending significant budgets on technology initiatives that weren&apos;t delivering results — not because the technology didn&apos;t exist, but because the implementation and ongoing management weren&apos;t being done well.</p>
                <p>We exist to change that. Every engagement we take on starts with a commitment to outcomes — not deliverables, not billable hours, not sold licences. If your technology isn&apos;t working, our job isn&apos;t done.</p>
                <p>We work with organisations across financial services, oil &amp; gas, manufacturing, healthcare, government, and logistics — sectors where technology failure carries real operational and regulatory consequences.</p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                { label: 'Our Mission', text: "To be Africa's most trusted enterprise technology partner — delivering outcomes, not just outputs." },
                { label: 'Our Approach', text: 'We start with the problem, not the solution. Every engagement begins with discovery before we commit to anything.' },
                { label: 'Our Standard', text: 'Senior-level delivery on every project. No juniors learning on your systems. No hand-off to account managers after the sale.' },
              ].map(item => (
                <div key={item.label} className="border border-line rounded-xl p-6">
                  <div className="font-mono text-[10px] text-blue uppercase tracking-widest mb-3">{item.label}</div>
                  <p className="text-base text-ink-2 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What drives us */}
      <section className="relative overflow-hidden py-24">
        <img
          src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1600&q=85"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(.28) saturate(.6)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-dark/85" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          <span className="inline-flex bg-[rgba(109,255,138,.12)] text-[#6dff8a] border border-[rgba(109,255,138,.25)] text-xs font-medium px-2.5 py-1 rounded-md mb-5">What Drives Us</span>
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

      {/* CTA */}
      <section className="bg-bg py-20 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-forum text-[clamp(28px,3.5vw,44px)] mb-4">Ready to work with us?</h2>
          <p className="text-base text-ink-3 mb-8 max-w-[480px] mx-auto leading-relaxed">Tell us what you&apos;re working on. We&apos;ll tell you honestly if we&apos;re the right fit.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-light text-white font-sans text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-blue-mid transition-colors">
            Schedule a conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
