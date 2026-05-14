import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Careers — Loratek',
  description: 'Join Loratek and help build the technology layer of African enterprise.',
}

const roles = [
  {
    title: 'Senior Cloud Engineer',
    dept: 'Engineering',
    location: 'Lagos (Hybrid)',
    type: 'Full-time',
    desc: 'Lead cloud architecture and migration projects for enterprise clients across financial services and government sectors.',
  },
  {
    title: 'Cybersecurity Analyst',
    dept: 'Security Operations',
    location: 'Lagos',
    type: 'Full-time',
    desc: 'Monitor client environments, respond to incidents, and execute penetration testing engagements.',
  },
  {
    title: 'Enterprise Software Developer',
    dept: 'Engineering',
    location: 'Remote (Nigeria)',
    type: 'Full-time',
    desc: 'Build and maintain custom enterprise applications for clients in banking, manufacturing, and healthcare.',
  },
  {
    title: 'IT Project Manager',
    dept: 'Delivery',
    location: 'Lagos',
    type: 'Full-time',
    desc: 'Own end-to-end delivery of client technology projects from scoping to go-live.',
  },
  {
    title: 'Business Development Manager',
    dept: 'Commercial',
    location: 'Lagos',
    type: 'Full-time',
    desc: 'Build relationships with enterprise decision-makers and develop new business across target sectors.',
  },
]

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Careers at Loratek"
        title="Build the technology layer<br />of African enterprise."
        subtitle="We're looking for senior professionals who take ownership, deliver results, and want to do their best work on meaningful problems."
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-bg py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-[680px] mb-14">
            <span className="inline-flex bg-[#ebebeb] text-ink-2 text-xs font-medium px-2.5 py-1 rounded-md mb-4">Open Roles</span>
            <h2 className="font-forum text-[clamp(30px,4vw,48px)] text-ink leading-[1.1em] mb-4">Current opportunities</h2>
            <p className="text-base text-ink-3 leading-relaxed">We hire senior-level professionals who own outcomes. If that&apos;s you, we&apos;d like to hear from you.</p>
          </div>
          <div className="space-y-4">
            {roles.map((role, i) => (
              <div key={i} className="bg-white border border-line rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:shadow-md transition-shadow">
                <div>
                  <div className="font-forum text-xl text-ink mb-2">{role.title}</div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-tag text-blue text-xs font-medium px-2.5 py-1 rounded-md">{role.dept}</span>
                    <span className="bg-[#ebebeb] text-ink-2 text-xs font-medium px-2.5 py-1 rounded-md">{role.location}</span>
                    <span className="bg-[#ebebeb] text-ink-2 text-xs font-medium px-2.5 py-1 rounded-md">{role.type}</span>
                  </div>
                  <p className="text-sm text-ink-3 leading-relaxed max-w-[560px]">{role.desc}</p>
                </div>
                <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-blue text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-blue-mid transition-colors whitespace-nowrap">
                  Apply Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-line py-20 text-center">
        <div className="max-w-[560px] mx-auto px-6">
          <h2 className="font-forum text-[clamp(26px,3.5vw,40px)] mb-4">Don&apos;t see your role?</h2>
          <p className="text-base text-ink-3 mb-8 leading-relaxed">If you&apos;re exceptional at what you do and think you belong here, send us a message regardless.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-light text-white font-sans text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-blue-mid transition-colors">
            Send a speculative application →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
