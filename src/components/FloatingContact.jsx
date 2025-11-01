import { FiMessageCircle } from 'react-icons/fi'

export default function FloatingContact() {
  const handleClick = () => {
    const mailto = 'mailto:contact@xenover-bd.com?subject=Inquiry%20from%20Website'
    window.location.href = mailto
  }
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm text-slate-900 ring-1 ring-slate-200 shadow-sm backdrop-blur-md transition hover:scale-105 hover:bg-slate-50"
    >
      <FiMessageCircle />
      Get in Touch
    </button>
  )
}


