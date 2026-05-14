'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const serviceLinks = [
  { href: '/services', label: 'Managed IT', sub: 'Infrastructure & cloud' },
  { href: '/services', label: 'Custom Software', sub: 'Web, mobile & ERP' },
  { href: '/services', label: 'Cybersecurity', sub: 'SOC, pen testing & NDPR' },
  { href: '/services', label: 'Training', sub: 'Capacity building' },
  { href: '/services', label: 'Cloud & Infrastructure', sub: 'Cloud & hybrid infra' },
  { href: '/services', label: 'Business Intelligence', sub: 'Data & analytics' },
]
const industryLinks = [
  { href: '/industries/financial-services', label: 'Financial Services' },
  { href: '/industries/oil-gas', label: 'Oil & Gas' },
  { href: '/industries/manufacturing', label: 'Manufacturing' },
  { href: '/industries/healthcare', label: 'Healthcare' },
  { href: '/industries/government', label: 'Government' },
  { href: '/industries/logistics-maritime', label: 'Logistics & Maritime' },
  { href: '/industries/real-estate-construction', label: 'Real Estate' },
]

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!transparent) return
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [transparent])

  const solid = !transparent || scrolled

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center transition-all duration-300 ${solid ? 'bg-white/95 backdrop-blur border-b border-line' : 'bg-transparent border-b border-white/20'}`}>
        <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-6 lg:px-8">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Loratek"
              width={110}
              height={28}
              className={`h-7 w-auto transition-all ${solid ? '' : 'brightness-0 invert'}`}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/about" className={`text-sm font-medium px-3 py-1.5 rounded-full transition-colors ${solid ? 'text-ink-2 hover:bg-bg' : 'text-white/85 hover:bg-white/15'}`}>About</Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button className={`text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors ${solid ? 'text-ink-2 hover:bg-bg' : 'text-white/85 hover:bg-white/15'}`}>
                Services
                <svg className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 -translate-y-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 bg-white border border-line rounded-xl p-2 shadow-xl w-56 z-50">
                {serviceLinks.map((s, i) => (
                  <Link key={i} href={s.href} className="block px-3 py-2 rounded-lg hover:bg-bg text-sm font-medium text-ink-2 transition-colors">
                    {s.label}
                    <span className="block text-xs text-ink-4 font-normal">{s.sub}</span>
                  </Link>
                ))}
                <div className="h-px bg-line my-1" />
                <Link href="/services" className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-blue-light hover:bg-blue-pale transition-colors">
                  View all services <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                </Link>
              </div>
            </div>

            {/* Industries dropdown */}
            <div className="relative group">
              <button className={`text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors ${solid ? 'text-ink-2 hover:bg-bg' : 'text-white/85 hover:bg-white/15'}`}>
                Industries
                <svg className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 -translate-y-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 bg-white border border-line rounded-xl p-2 shadow-xl w-56 z-50">
                {industryLinks.map((s, i) => (
                  <Link key={i} href={s.href} className="block px-3 py-2 rounded-lg hover:bg-bg text-sm font-medium text-ink-2 transition-colors">{s.label}</Link>
                ))}
                <div className="h-px bg-line my-1" />
                <Link href="/industries" className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-blue-light hover:bg-blue-pale transition-colors">
                  View all industries <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                </Link>
              </div>
            </div>

            {['Blog', 'Contact', 'Careers'].map(n => (
              <Link key={n} href={`/${n.toLowerCase()}`} className={`text-sm font-medium px-3 py-1.5 rounded-full transition-colors ${solid ? 'text-ink-2 hover:bg-bg' : 'text-white/85 hover:bg-white/15'}`}>{n}</Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/contact" className={`text-sm font-medium border rounded-md px-4 py-1.5 transition-colors ${solid ? 'text-ink-2 border-line hover:bg-bg' : 'text-white/90 border-white/40 hover:bg-white/10'}`}>Contact</Link>
            <Link href="/contact" className="text-sm font-semibold bg-blue-light text-white rounded-md px-4 py-2 hover:bg-blue-mid transition-colors">Schedule a Call</Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(true)} className={`lg:hidden border rounded-md p-2 flex flex-col gap-1 ${solid ? 'border-line' : 'border-white/40'}`}>
            <span className={`block w-4 h-0.5 ${solid ? 'bg-ink' : 'bg-white'}`} />
            <span className={`block w-4 h-0.5 ${solid ? 'bg-ink' : 'bg-white'}`} />
            <span className={`block w-4 h-0.5 ${solid ? 'bg-ink' : 'bg-white'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-white z-[200] flex flex-col items-center justify-center transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setMobileOpen(false)} className="absolute top-5 right-5 w-10 h-10 bg-bg border border-line rounded-lg flex items-center justify-center text-xl text-ink-3">✕</button>
        <ul className="list-none w-full max-w-xs">
          {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/industries', 'Industries'], ['/blog', 'Blog'], ['/contact', 'Contact'], ['/careers', 'Careers']].map(([href, label]) => (
            <li key={href} className="border-b border-line first:border-t">
              <Link href={href} onClick={() => setMobileOpen(false)} className="block py-[18px] px-6 font-forum text-[22px] text-ink hover:text-blue-light transition-colors">{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
