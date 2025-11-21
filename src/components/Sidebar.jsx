import { Home, LineChart, Layers, Database, Settings, Folder, FileText } from 'lucide-react'

const items = [
  { icon: Home, label: 'Home' },
  { icon: LineChart, label: 'Analysis' },
  { icon: Layers, label: 'Workspaces' },
  { icon: Database, label: 'Data' },
  { icon: FileText, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 z-30 pt-24">
      <div className="mx-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 py-4 flex flex-col items-center gap-2">
        {items.map(({icon:Icon,label}) => (
          <button key={label} className="group p-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
            <Icon size={18} />
          </button>
        ))}
      </div>
    </aside>
  )
}
