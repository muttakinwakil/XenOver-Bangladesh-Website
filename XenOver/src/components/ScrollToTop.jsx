import { useEffect, useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 rounded-xl bg-white p-3 text-slate-900 ring-1 ring-slate-200 shadow-sm backdrop-blur-md transition hover:scale-105 hover:bg-slate-50"
    >
      <FiChevronUp size={22} />
    </button>
  )
}


