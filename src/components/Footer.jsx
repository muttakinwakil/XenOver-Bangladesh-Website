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
            <p>Address: Uttara, Dhaka, Bangladesh</p>
            <p>Email: contact@xenoverbangladesh.com</p>
            <p>Phone: +880 1626-949506</p>
          </div>
          <div className="text-sm text-slate-300">
            <div className="mb-2 font-medium text-white">Follow</div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61576825140649" className="transition-colors hover:text-indigo-300 hover:underline">Facebook</a>
              <a href="https://www.linkedin.com/company/xenover-bangladesh/posts?lipi=urn%3Ali%3Apage%3Aorganization_admin_admin_page_posts_published%3B5c1b05f8-8b65-4721-8f87-468ee72fea37" className="transition-colors hover:text-indigo-300 hover:underline">LinkedIn</a>
              <a href="https://youtube.com/@theopeninsight?si=aXyEFrLBQj9WGIHo" className="transition-colors hover:text-indigo-300 hover:underline">YouTube</a>
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


