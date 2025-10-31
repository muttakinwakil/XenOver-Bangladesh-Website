import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function useCounter(target, duration = 1400) {
  const [value, setValue] = useState(0)
  const startRef = useRef(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const start = performance.now()
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.floor(eased * target))
      if (p < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target, duration])
  return value
}

const impactColors = [
  { gradient: 'from-indigo-600 to-purple-600', bg: 'from-indigo-50 to-purple-50' },
  { gradient: 'from-blue-600 to-cyan-600', bg: 'from-blue-50 to-cyan-50' },
  { gradient: 'from-emerald-600 to-teal-600', bg: 'from-emerald-50 to-teal-50' },
]

export default function Impact() {
  const projects = useCounter(120)
  const clients = useCounter(80)
  const systems = useCounter(35)

  return (
    <section id="impact" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="relative">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Our Achievements</span>
          </motion.div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl mb-4"
        >
          Our Impact in <span className="gradient-text">Numbers</span>
        </motion.h2>
        
        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-3">
          {[
            { value: projects, label: 'Projects Completed', icon: '🎯' },
            { value: clients, label: 'Clients Served', icon: '🤝' },
            { value: systems, label: 'Active Systems', icon: '⚡' },
          ].map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="glass neon-border rounded-3xl p-8 text-center bg-[#1a1a2e]/80 transition-all hover:shadow-2xl hover:shadow-indigo-500/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className={`text-5xl font-extrabold bg-gradient-to-r ${impactColors[idx].gradient} bg-clip-text text-transparent sm:text-6xl mb-3`}>
                  {stat.value}+
                </div>
                <div className="text-base font-semibold text-slate-300">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


