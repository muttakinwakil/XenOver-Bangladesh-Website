import { motion } from 'framer-motion'

const directors = new Array(4).fill(0).map((_, i) => ({
  name: `Director ${i + 1}`,
  role: 'Board Director',
}))

const gradients = [
  'from-indigo-500 via-purple-500 to-pink-500',
  'from-blue-500 via-cyan-500 to-teal-500',
  'from-orange-500 via-pink-500 to-rose-500',
  'from-emerald-500 via-teal-500 to-cyan-500',
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="relative">
        {/* Section header with decorative line */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Who We Are</span>
          </motion.div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl mb-4"
        >
          About <span className="gradient-text">Us</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg mb-12"
        >
          XenOver Bangladesh is a next-generation technology company offering customized software and hardware solutions across public and private sectors.
          Our mission is to build secure, scalable, and impactful systems that drive national progress.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {directors.map((d, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * idx }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group glass neon-border rounded-3xl p-6 transition-all hover:shadow-2xl hover:shadow-indigo-500/20 bg-[#1a1a2e]/80"
            >
              <div className={`h-40 w-full rounded-2xl bg-gradient-to-br ${gradients[idx % gradients.length]} shadow-xl mb-4 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="mt-4">
                <div className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">{d.name}</div>
                <div className="text-sm text-slate-400 mt-1">{d.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


