import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-blue text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          <div>
            <Image src="/logo.png" alt="Loratek" width={110} height={24} className="h-6 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-white/50 leading-relaxed max-w-[260px]">Enterprise IT &amp; Digital Transformation Partner</p>
          </div>
          <div>
            <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest mb-4">Pages</div>
            <ul className="space-y-2.5">
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/industries', 'Industries'], ['/blog', 'Blog'], ['/contact', 'Contact'], ['/careers', 'Careers']].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-sm text-white/65 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest mb-4">Contact</div>
            <div className="mb-3">
              <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Email</div>
              <a href="mailto:info@loratek.com.ng" className="text-sm text-white/65 hover:text-white transition-colors">info@loratek.com.ng</a>
            </div>
            <div>
              <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Phone</div>
              <a href="tel:+2349132120188" className="text-sm text-white/65 hover:text-white transition-colors">+234 913 212 0188</a>
            </div>
          </div>
          <div>
            <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest mb-4">Social</div>
            <ul className="space-y-2.5">
              <li><a href="https://www.linkedin.com/company/loratek-ltd/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-white/65 hover:text-white transition-colors">Twitter / X</a></li>
            </ul>
          </div>
        </div>
        <div className="h-px bg-white/10 mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-white/30">© 2026 Loratek Limited. All rights reserved.</span>
          <span className="flex items-center gap-2 font-mono text-[11px] text-green-400/70">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-blink inline-block" />
            All Systems Operational
          </span>
        </div>
      </div>
    </footer>
  )
}
