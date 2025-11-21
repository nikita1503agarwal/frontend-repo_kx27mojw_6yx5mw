import { Github, Twitter, Linkedin } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      {/* Gradient top accent */}
      <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute -top-24 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.14),transparent)] blur-2xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8">
                <Logo size={32} />
              </div>
              <div>
                <p className="text-sm font-medium text-white/90 tracking-tight">Apilos</p>
                <p className="text-xs text-white/50">Enterprise Data Intelligence</p>
              </div>
            </div>

            <nav className="grid grid-cols-2 gap-4 text-sm text-white/70 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              <a className="hover:text-white transition-colors" href="#">About</a>
              <a className="hover:text-white transition-colors" href="#">Docs</a>
              <a className="hover:text-white transition-colors" href="#">Changelog</a>
              <a className="hover:text-white transition-colors" href="#">Status</a>
              <a className="hover:text-white transition-colors" href="#">Privacy</a>
              <a className="hover:text-white transition-colors" href="#">Terms</a>
              <a className="hover:text-white transition-colors" href="#">Contact</a>
            </nav>

            <div className="flex items-center gap-3 text-white/70">
              <a aria-label="Twitter" href="#" className="rounded-md p-2 hover:bg-white/5 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a aria-label="GitHub" href="#" className="rounded-md p-2 hover:bg-white/5 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a aria-label="LinkedIn" href="#" className="rounded-md p-2 hover:bg-white/5 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Apilos, Inc. All rights reserved.</p>
            <p className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Realtime systems nominal
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
