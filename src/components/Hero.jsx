import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#0A0F1A, #111827)]" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="py-12">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 mb-6">
              Enterprise-grade analytics
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="text-blue-400">DataViz</span> Intelligence Engine
            </h1>
            <p className="mt-5 text-gray-400 text-lg">
              Enterprise-grade analytics with zero speculation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="group relative inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-blue-500/90 hover:bg-blue-500 transition focus:outline-none">
                <span className="absolute -inset-px rounded-xl bg-blue-500/30 blur-xl group-hover:bg-blue-500/50 transition" aria-hidden />
                Launch DVIE
              </a>
              <button className="px-5 py-3 rounded-xl text-sm font-semibold text-white/90 border border-white/10 hover:bg-white/5 transition">Upload Data</button>
              <button className="px-5 py-3 rounded-xl text-sm font-semibold text-white/90 border border-white/10 hover:bg-white/5 transition">API Docs</button>
            </div>
          </div>
          <div className="h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
