import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Services — Loratek',
  description: 'End-to-end enterprise technology services: Managed IT, Cybersecurity, Custom Software, Cloud Infrastructure, Training, and Business Intelligence.',
}

const services = [
  {
    id: 'managed-it',
    title: 'Managed IT Services',
    tag: 'Infrastructure & Cloud',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    headline: 'We operate and optimise your entire IT environment so your internal teams can focus on business, not system failures.',
    bullets: ['24/7 infrastructure monitoring and helpdesk support', 'Network design, management, and optimisation', 'Cloud infrastructure management (Azure, AWS, GCP)', 'End-user computing and device management', 'SLA-backed response and resolution times'],
    imgLeft: true,
  },
  {
    id: 'software',
    title: 'Custom Software Development',
    tag: 'Web · Mobile · ERP · AI',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
    headline: 'We design and build enterprise software tailored to your internal workflows, reducing manual processes and improving operational efficiency.',
    bullets: ['Web and mobile application development', 'ERP implementation and customisation', 'API integration with third-party systems', 'AI-powered tools and automation', 'Full IP ownership transferred to you'],
    imgLeft: false,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    tag: 'SOC · Pen Testing · Compliance',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    headline: 'We protect enterprise systems against evolving threats through proactive security, monitoring, and compliance-ready frameworks.',
    bullets: ['24/7 Security Operations Centre (SOC)', 'Penetration testing and vulnerability assessments', 'NDPR and ISO 27001 compliance programmes', 'Phishing simulation and staff awareness training', 'Incident response planning and execution'],
    imgLeft: true,
  },
  {
    id: 'training',
    title: 'Training & Capacity Building',
    tag: 'Enterprise Training',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
    headline: "Technology investments fail when people aren't equipped. We build training programmes around your tools, your team, and your environment.",
    bullets: ['Role-based IT and security training', 'System-specific onboarding programmes', 'Cybersecurity awareness and phishing training', 'IT leadership and strategy workshops', 'Certification preparation programmes'],
    imgLeft: false,
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    tag: 'Cloud · Hybrid · On-Premises',
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=900&q=80',
    headline: 'We design and manage scalable cloud and hybrid infrastructure that supports business growth, resilience, and performance.',
    bullets: ['Cloud strategy, design, and migration', 'Hybrid infrastructure architecture', 'Disaster recovery and business continuity planning', 'Infrastructure as Code (IaC) implementation', 'Ongoing cloud cost optimisation'],
    imgLeft: true,
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    tag: 'Data · Analytics · Dashboards',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    headline: 'Data without insight is noise. We help organisations build the pipelines, models, and dashboards that transform raw data into strategic intelligence for faster, smarter, more confident business decisions.',
    bullets: ['Data warehouse design and implementation', 'ETL pipeline development', 'Business intelligence dashboards (Power BI, Tableau)', 'Predictive analytics and modelling', 'Data governance frameworks'],
    imgLeft: false,
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Our Services"
        title="End-to-end enterprise<br />technology services."
        subtitle="From infrastructure and cybersecurity to custom software and data platforms — we deliver across the full technology stack."
        bgImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
      />

      {services.map((svc, i) => (
        <div key={svc.id} id={svc.id} className={`grid md:grid-cols-2 border-t border-line ${i % 2 === 0 ? 'bg-white' : 'bg-bg'}`}>
          {svc.imgLeft ? (
            <>
              <div className="overflow-hidden min-h-[480px]">
                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <ServiceContent svc={svc} />
              </div>
            </>
          ) : (
            <>
              <div className="p-12 lg:p-20 flex flex-col justify-center order-2 md:order-1">
                <ServiceContent svc={svc} />
              </div>
              <div className="overflow-hidden min-h-[480px] order-1 md:order-2">
                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover" />
              </div>
            </>
          )}
        </div>
      ))}

      <section className="bg-blue py-20 text-center">
        <div className="max-w-[640px] mx-auto px-6">
          <h2 className="font-forum text-[clamp(28px,4vw,44px)] text-white mb-4">Not sure which service you need?</h2>
          <p className="text-base text-white/60 mb-9 max-w-[480px] mx-auto leading-relaxed">Talk to us. We&apos;ll assess your environment and recommend what makes sense for your organisation — with no obligation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-tag text-blue font-sans text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-[#bfdbfe] transition-colors">
            Book a free consultation →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

function ServiceContent({ svc }: { svc: typeof services[0] }) {
  return (
    <>
      <span className="inline-flex bg-bg text-ink-2 text-xs font-medium px-3 py-1.5 rounded-full border border-line mb-5">{svc.tag}</span>
      <h2 className="font-forum text-[clamp(28px,3vw,44px)] text-ink leading-[1.1em] mb-5">{svc.title}</h2>
      <p className="text-[15px] text-ink-3 leading-[1.75] mb-5">{svc.headline}</p>
      <ul className="space-y-2.5 mb-8">
        {svc.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-pale flex-shrink-0 mt-0.5 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#0c2461" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
