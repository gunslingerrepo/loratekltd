import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { industries } from '@/lib/data'

export function generateStaticParams() {
  return industries.map(i => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const ind = industries.find(i => i.slug === params.slug)
  return ind ? { title: `${ind.label} — Loratek Industries` } : {}
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const ind = industries.find(i => i.slug === params.slug)
  if (!ind) notFound()

  return (
    <>
      <Navbar />
      <div className="pt-[68px]">
        {/* Breadcrumb */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-7 border-b border-line">
          <nav className="flex items-center gap-2 text-sm text-ink-4">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>›</span>
            <Link href="/industries" className="hover:text-ink transition-colors">Industries</Link>
            <span>›</span>
            <span className="text-ink-2">{ind.label}</span>
          </nav>
        </div>

        {/* Hero */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 border-b border-line">
          <h1 className="font-forum text-[clamp(36px,5vw,68px)] text-ink leading-[1.05em] max-w-[900px] mb-5">{ind.headline}</h1>
          <p className="text-[17px] text-ink-3 max-w-[680px] leading-[1.7]">{ind.intro}</p>
        </div>

        {/* Sections */}
        {ind.sections.map((sec, i) => (
          <div key={i} className={`grid md:grid-cols-2 border-t border-line ${i % 2 !== 0 ? 'bg-bg' : 'bg-white'}`}>
            {sec.imageLeft ? (
              <>
                <div className="overflow-hidden min-h-[480px]">
                  <img src={sec.image} alt={sec.tag} className="w-full h-full object-cover" />
                </div>
                <div className="p-12 lg:p-20 flex flex-col justify-center">
                  <SectionContent sec={sec} />
                </div>
              </>
            ) : (
              <>
                <div className="p-12 lg:p-20 flex flex-col justify-center order-2 md:order-1">
                  <SectionContent sec={sec} />
                </div>
                <div className="overflow-hidden min-h-[480px] order-1 md:order-2">
                  <img src={sec.image} alt={sec.tag} className="w-full h-full object-cover" />
                </div>
              </>
            )}
          </div>
        ))}

        {/* CTA */}
        <div className="bg-bg border-t border-line py-20 text-center">
          <div className="max-w-[680px] mx-auto px-6">
            <h2 className="font-forum text-[clamp(24px,3vw,40px)] mb-4">Ready to transform your {ind.label.toLowerCase()} technology?</h2>
            <p className="text-base text-ink-3 mb-8 leading-relaxed">Book a free 30-minute call. We&apos;ll listen, ask the right questions, and tell you honestly whether we&apos;re the right fit.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue text-white font-sans text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-blue-mid transition-colors">
              Schedule a free consultation →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

function SectionContent({ sec }: { sec: { tag: string; heading: string; body: string; bullets: string[] } }) {
  return (
    <>
      <span className="inline-flex bg-bg text-ink-2 text-[13px] font-medium px-3 py-1.5 rounded-full border border-line mb-5">{sec.tag}</span>
      <h2 className="font-forum text-[clamp(26px,3vw,40px)] text-ink leading-[1.1em] mb-5">{sec.heading}</h2>
      <p className="text-[15px] text-ink-3 leading-[1.75] mb-5">{sec.body}</p>
      <ul className="space-y-2.5 mb-8">
        {sec.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-pale flex-shrink-0 mt-0.5 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#0c2461" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <span className="text-[15px] text-ink-2 leading-[1.6]">{b}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="inline-flex items-center gap-2 bg-blue text-white font-sans text-sm font-semibold px-6 py-3 rounded-md hover:bg-blue-mid transition-colors">
        Get in touch →
      </Link>
    </>
  )
}
