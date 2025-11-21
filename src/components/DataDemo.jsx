export default function DataDemo() {
  return (
    <section className="relative py-16">
      <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <div className="text-xs text-gray-400 mb-3">Mock Data Upload</div>
                <div className="h-40 rounded-xl border border-dashed border-gray-700/80 bg-black/30 flex items-center justify-center text-gray-500">
                  Drop CSV / JSON here
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-gray-400">
                  <button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">Upload</button>
                  <button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">URL import</button>
                  <button className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">Paste JSON/CSV</button>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 h-full">
                <div className="text-xs text-gray-400 mb-3">AI Directives</div>
                <textarea className="w-full h-40 bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-gray-200 outline-none" placeholder="e.g., detect anomalies in revenue by region" />
                <button className="mt-4 w-full group relative inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold text-white bg-blue-500/90 hover:bg-blue-500 transition">
                  <span className="absolute -inset-px rounded-xl bg-blue-500/30 blur-xl group-hover:bg-blue-500/50 transition" aria-hidden />
                  Execute Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
