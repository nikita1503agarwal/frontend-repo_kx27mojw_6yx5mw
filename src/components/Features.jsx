import { Brain, ScanLine, Activity, BarChart3 } from 'lucide-react'

const features = [
  { icon: Brain, title: 'Auto-analysis engine', desc: 'Ingest data and instantly surface patterns, trends, and outliers.' },
  { icon: ScanLine, title: 'Pattern detection', desc: 'Detect non-obvious signals with correlation mapping and heatmaps.' },
  { icon: Activity, title: 'Forecasting', desc: 'Accurate projections powered by probabilistic models.' },
  { icon: BarChart3, title: 'Real-time dashboards', desc: 'Live KPIs with anomaly detection and alerts.' },
]

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon,title,desc}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/[0.07] transition shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-300 text-white shadow-[0_0_24px_rgba(59,130,246,0.6)]">
                  <Icon size={18} />
                </div>
                <h3 className="text-white font-semibold text-sm tracking-tight">{title}</h3>
              </div>
              <p className="mt-3 text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
