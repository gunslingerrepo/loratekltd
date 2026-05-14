'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const r = await fetch('https://formspree.io/f/mlgpojjz', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (r.ok) setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <PageHero
        tag="Get in Touch"
        title="Ready to transform your technology?<br />Let&apos;s talk."
        subtitle="Whether you need managed IT, a custom system, or cybersecurity protection — we're here."
        bgImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="bg-bg py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 rounded-xl overflow-hidden shadow-sm">
            {/* Left — info panel */}
            <div className="relative min-h-[500px] flex flex-col justify-end">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=80')", filter: 'brightness(.45) saturate(.7)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
              <div className="relative z-10 p-8">
                <h3 className="font-forum text-[22px] text-white mb-2">Have a challenge or an idea?</h3>
                <p className="text-sm text-white/65 mb-6">Fill out the form and we&apos;ll respond within 24 hours.</p>
                <div className="space-y-3">
                  <a href="mailto:info@loratek.com.ng" className="flex items-center gap-3 bg-white/10 rounded-md px-3.5 py-3 hover:bg-white/20 transition-colors">
                    <div className="w-11 h-11 bg-white rounded-md flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a4494" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </div>
                    <div>
                      <div className="text-[13px] text-white/60">Email us</div>
                      <div className="text-sm text-white font-medium">info@loratek.com.ng</div>
                    </div>
                  </a>
                  <a href="tel:+2349132120188" className="flex items-center gap-3 bg-white/10 rounded-md px-3.5 py-3 hover:bg-white/20 transition-colors">
                    <div className="w-11 h-11 bg-white rounded-md flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a4494" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" /></svg>
                    </div>
                    <div>
                      <div className="text-[13px] text-white/60">Call us</div>
                      <div className="text-sm text-white font-medium">+234 913 212 0188</div>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/loratek-ltd/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/10 rounded-md px-3.5 py-3 hover:bg-white/20 transition-colors">
                    <div className="w-11 h-11 bg-white rounded-md flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a4494" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </div>
                    <div>
                      <div className="text-[13px] text-white/60">LinkedIn</div>
                      <div className="text-sm text-white font-medium">Loratek Limited</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-blue">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="font-forum text-xl text-white">Book a free consultation</div>
              </div>
              <div className="p-7">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-12 h-12 bg-[rgba(74,222,128,.15)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <div className="font-forum text-2xl text-white mb-2">Message received.</div>
                    <div className="text-sm text-white/60 leading-relaxed">We&apos;ll be in touch within 24 hours.</div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-white/55 font-mono tracking-widest uppercase mb-1.5">First Name</label>
                        <input name="firstName" type="text" placeholder="Jane" className="w-full bg-black/15 border border-white/15 rounded-md px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-blue-accent" />
                      </div>
                      <div>
                        <label className="block text-[11px] text-white/55 font-mono tracking-widest uppercase mb-1.5">Last Name</label>
                        <input name="lastName" type="text" placeholder="Smith" className="w-full bg-black/15 border border-white/15 rounded-md px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-blue-accent" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-white/55 font-mono tracking-widest uppercase mb-1.5">Work Email</label>
                        <input name="email" type="email" placeholder="jane@company.com" required className="w-full bg-black/15 border border-white/15 rounded-md px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-blue-accent" />
                      </div>
                      <div>
                        <label className="block text-[11px] text-white/55 font-mono tracking-widest uppercase mb-1.5">Phone</label>
                        <input name="phone" type="tel" placeholder="+234 800 000 0000" className="w-full bg-black/15 border border-white/15 rounded-md px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-blue-accent" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] text-white/55 font-mono tracking-widest uppercase mb-1.5">Company</label>
                      <input name="company" type="text" placeholder="Your organisation name" className="w-full bg-black/15 border border-white/15 rounded-md px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-blue-accent" />
                    </div>
                    <div>
                      <label className="block text-[11px] text-white/55 font-mono tracking-widest uppercase mb-1.5">How can we help?</label>
                      <textarea name="message" rows={4} placeholder="Describe your challenge..." className="w-full bg-black/15 border border-white/15 rounded-md px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-blue-accent resize-none" />
                    </div>
                    <button type="submit" disabled={loading} className="flex items-center justify-between w-full bg-blue-tag text-blue font-semibold text-sm px-4 py-3.5 rounded-md hover:bg-[#bfdbfe] transition-colors disabled:opacity-60 cursor-pointer">
                      {loading ? 'Sending…' : 'Submit request'}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </button>
                    <p className="text-[11px] text-white/30 text-center">By submitting this form you agree to our Privacy Policy.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
