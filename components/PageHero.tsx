interface Props {
  tag: string
  title: string
  subtitle?: string
  bgImage?: string
}

export default function PageHero({ tag, title, subtitle, bgImage }: Props) {
  return (
    <section className="relative pt-[140px] pb-20 bg-dark overflow-hidden">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImage}')`, filter: 'brightness(.25) saturate(.5)' }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/85" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-3.5 py-1.5 rounded-md mb-6 font-mono tracking-wider">
          {tag}
        </div>
        <h1
          className="font-forum text-[clamp(40px,6vw,72px)] text-white leading-[1em] mb-5"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && <p className="text-lg text-white/70 max-w-[580px] leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}
