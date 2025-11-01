import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'divisions', label: 'Divisions' },
  { id: 'projects', label: 'Projects' },
  { id: 'clients', label: 'Clients' },
  { id: 'news', label: 'News' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass neon-border mx-auto max-w-7xl rounded-b-2xl px-4 py-3 sm:px-6 bg-[#1a1a2e]/90 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            {!logoError ? (
              <img 
                src="/logo.png" 
                alt="XenOver Logo" 
                className="h-8 w-auto object-contain max-w-[150px]"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="text-white/70 font-sans font-medium text-lg tracking-tight">
                <span className="text-white/80">X</span>enOver<span className="text-white/60">.</span>
              </div>
            )}
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy
                smooth
                offset={-96}
                duration={500}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-all hover:text-white hover:bg-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/20"
                activeClass="text-white bg-indigo-500/30 font-semibold shadow-lg shadow-indigo-500/30"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-white/70 transition-colors hover:text-white hover:bg-indigo-500/20 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

          {open && (
          <div className="mt-3 grid gap-1 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy
                smooth
                offset={-96}
                duration={500}
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-all hover:text-white hover:bg-indigo-500/20"
                activeClass="text-white bg-indigo-500/30 font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
