import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { industries } from '@/lib/data'

export const metadata = { title: 'Industries We Serve — Loratek' }

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Industries We Serve"
        title="Built for organisations<br />with real complexity."
        subtitle="Every digital transformation journey starts inside your industry. Loratek delivers technology solutions shaped by the specific processes, compliance demands, and operational realities of your sector."
        bgImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="bg-bg py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <span className="inline-flex bg-[#ebebeb] text-ink-2 text-xs font-medium px-2.5 py-1 rounded-md mb-4">All Industries</span>
          <h2 className="font-forum text-[clamp(28px,3vw,44px)] mb-3 leading-[1.1em]">Select your industry</h2>
          <p className="text-base text-ink-3 max-w-[600px] mb-14 leading-relaxed">Click any industry to see how we work within it — the specific challenges we solve and the services we deliver.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="bg-white rounded-xl overflow-hidden flex flex-col border-[3px] border-white hover:border-blue-light hover:-translate-y-1 hover:shadow-xl transition-all duration-200 group no-underline">
                <div className="h-[200px] overflow-hidden">
                  <img src={ind.image} alt={ind.label} className="w-full h-full object-cover brightness-[.85] saturate-[.8] group-hover:scale-[1.04] transition-transform duration-[6s]" />
                </div>
                <div className="p-5">
                  <div className="font-mono text-[10px] text-ink-4 tracking-[.1em] uppercase mb-2.5">{ind.sub}</div>
                  <div className="font-forum text-[22px] text-ink leading-[1.1em] mb-3">{ind.label}</div>
                  <div className="text-[13px] font-semibold text-blue-light flex items-center gap-1.5">
                    Explore industry
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue py-20 text-center">
        <div className="max-w-[640px] mx-auto px-6">
          <span className="inline-flex bg-blue-tag text-blue-mid text-xs font-medium px-3 py-1.5 rounded-md mb-5">Don&apos;t see your industry?</span>
          <h2 className="font-forum text-[clamp(24px,3vw,40px)] text-white mb-4">We work across sectors.<br />Tell us your challenge.</h2>
          <p className="text-base text-white/60 max-w-[480px] mx-auto mb-9 leading-relaxed">Complex technology problems are what we do. If your industry isn&apos;t listed, we still want to hear from you.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-tag text-blue font-sans text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-[#bfdbfe] transition-colors">
            Start a conversation →
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
