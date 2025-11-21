import APILOSWordmark from './APILOSWordmark'

export default function BrandHero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-36">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-20 left-1/2 h-80 w-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.18),transparent)] blur-3xl" />
        </div>

        <div className="flex flex-col items-center gap-8 text-center">
          <APILOSWordmark size={88} />
          <p className="max-w-2xl text-sm text-white/70">
            A powerful, minimal, and futuristic identity infused with electric-blue flame energy.
            Built for a world where Apple VisionOS aesthetics meet Vercel precision and AI technology.
          </p>
        </div>
      </div>
    </section>
  )
}
