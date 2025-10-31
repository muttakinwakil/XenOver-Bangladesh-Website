export default function Footer() {
  return (
    <footer className="mt-16 border-t border-indigo-500/20 glass bg-[#1a1a2e]/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="text-lg font-semibold sm:text-xl">
              <span className="gradient-text">XenOver</span>
              <span className="text-white/80"> Bangladesh</span>
            </div>
            <p className="mt-2 text-sm text-slate-300">Empowering the Future with Technology</p>
          </div>
          <div className="text-sm text-slate-300">
            <p className="font-medium text-white mb-1">Contact</p>
            <p>Address: Dhaka, Bangladesh</p>
            <p>Email: contact@xenover-bd.com</p>
            <p>Phone: +880 1XXX-XXXXXX</p>
          </div>
          <div className="text-sm text-slate-300">
            <div className="mb-2 font-medium text-white">Follow</div>
            <div className="flex gap-4">
              <a href="#" className="transition-colors hover:text-indigo-300 hover:underline">Facebook</a>
              <a href="#" className="transition-colors hover:text-indigo-300 hover:underline">LinkedIn</a>
              <a href="#" className="transition-colors hover:text-indigo-300 hover:underline">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-indigo-500/20 pt-6 text-center text-xs text-slate-400">
          © XenOver Bangladesh 2025. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


