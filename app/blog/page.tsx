import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { blogPosts } from '@/lib/data'

export const metadata = {
  title: 'Blog — Loratek',
  description: 'Enterprise IT perspectives from the field.',
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <PageHero
        tag="Insights"
        title="Enterprise IT perspectives<br />from the field."
        subtitle="Practical thinking on cybersecurity, digital transformation, and technology leadership — written for IT Directors and decision-makers."
        bgImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="bg-bg py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-200 group no-underline">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[1.6] object-cover group-hover:scale-[1.03] transition-transform duration-[6s]"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="bg-[#ebebeb] text-ink-2 text-[11px] font-medium px-2 py-1 rounded-md">{post.category}</span>
                    <span className="text-xs text-ink-4">{post.date}</span>
                  </div>
                  <div className="font-forum text-xl text-ink leading-[1.3em] mb-2.5 flex-1">{post.title}</div>
                  <div className="text-[13px] text-ink-3 leading-relaxed">{post.excerpt}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
