import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Features from './components/Features'
import DataDemo from './components/DataDemo'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#0A0F1A,#111827)] opacity-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(94,234,212,0.06),transparent_40%)]" />
      </div>

      <TopNav />
      <Sidebar />

      <main className="relative">
        <Hero />
        <Features />
        <DataDemo />
        <CTA />
      </main>
    </div>
  )
}

export default App
