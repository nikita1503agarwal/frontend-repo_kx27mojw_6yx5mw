import { useState } from 'react'
import { Menu, Search, Settings, User, ChevronDown } from 'lucide-react'

export default function TopNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between px-4 h-16">
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-xl hover:bg-white/5 text-gray-300"><Menu size={18} /></button>
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-300 shadow-[0_0_24px_rgba(59,130,246,0.6)]"></div>
              <span className="text-sm font-semibold tracking-tight text-white">Apilos</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
              {['Analysis','Workspaces','API','Settings'].map((item) => (
                <a key={item} href={`/${item.toLowerCase()}`} className="hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                <Search size={16} className="text-gray-400" />
                <input placeholder="Search" className="bg-transparent text-sm outline-none text-gray-200 placeholder:text-gray-500 w-40" />
              </div>
              <button className="p-2 rounded-xl hover:bg-white/5 text-gray-300"><Settings size={18} /></button>
              <button onClick={() => setOpen(!open)} className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-white/5 text-gray-200">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500" />
                <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
