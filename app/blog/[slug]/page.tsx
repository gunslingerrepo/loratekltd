import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { blogPosts } from '@/lib/data'

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return {}
  return { title: `${post.title} — Loratek`, description: post.metaDescription }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main className="max-w-[740px] mx-auto px-6 lg:px-8 pt-[120px] pb-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ink-3 hover:text-ink transition-colors mb-8">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          Back to Blog
        </Link>
        <div className="flex items-center gap-3 mb-7">
          <span className="bg-[#ebebeb] text-ink-2 text-[11px] font-medium px-2.5 py-1 rounded-md">{post.category}</span>
          <span className="text-sm text-ink-4">{post.date}</span>
        </div>
        <h1 className="font-forum text-[clamp(30px,4.5vw,48px)] text-ink leading-[1.1em] mb-6">{post.title}</h1>
        <img src={post.image} alt={post.title} className="w-full aspect-[1.9] object-cover rounded-xl mb-10" />

        <div className="space-y-5">
          {post.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i} className="font-forum text-[26px] text-ink leading-[1.2em] mt-10 mb-4">{block.content}</h2>
            if (block.type === 'h3') return <h3 key={i} className="font-forum text-xl text-ink mt-7 mb-3">{block.content}</h3>
            if (block.type === 'ul') return (
              <ul key={i} className="list-disc pl-6 space-y-2">
                {block.items?.map((item, j) => <li key={j} className="text-[15px] text-[#333] leading-[1.7]">{item}</li>)}
              </ul>
            )
            return <p key={i} className="text-base text-[#333] leading-[1.8]">{block.content}</p>
          })}
        </div>

        <div className="mt-14 pt-10 border-t border-line text-center">
          <h3 className="font-forum text-[28px] text-ink mb-3">Ready to take action?</h3>
          <p className="text-[15px] text-ink-3 mb-6 max-w-[480px] mx-auto">Talk to our team about how Loratek can help your organisation address this challenge.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-light text-white font-sans text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-blue-mid transition-colors">
            Schedule a free consultation
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
