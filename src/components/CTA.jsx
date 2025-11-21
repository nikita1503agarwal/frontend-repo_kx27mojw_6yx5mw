export default function CTA() {
  return (
    <section className="relative py-16">
      <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-purple-400/10 p-8 backdrop-blur-xl text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <h3 className="text-white text-2xl font-semibold tracking-tight">Start analyzing data instantly.</h3>
          <p className="text-gray-400 mt-2 text-sm">Upload your data and let Apilos auto-detect insights, patterns, and forecasts.</p>
          <div className="mt-6">
            <a className="group relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-500/90 hover:bg-blue-500 transition">
              <span className="absolute -inset-px rounded-xl bg-blue-500/30 blur-xl group-hover:bg-blue-500/50 transition" aria-hidden />
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
