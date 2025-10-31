import { motion } from 'framer-motion'

const projectGradients = [
  'from-indigo-500 via-purple-500 to-pink-500',
  'from-blue-500 via-cyan-500 to-teal-500',
  'from-orange-500 via-pink-500 to-rose-500',
  'from-emerald-500 via-teal-500 to-cyan-500',
  'from-violet-500 via-purple-500 to-fuchsia-500',
  'from-rose-500 via-pink-500 to-orange-500',
]

const projects = new Array(6).fill(0).map((_, i) => ({
  title: `Project ${i + 1}`,
  desc: 'High-impact solution delivering measurable outcomes for clients.',
  gradient: projectGradients[i],
}))

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -z-10" />
      
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
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Portfolio</span>
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
          Projects & <span className="gradient-text">Case Studies</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg mb-12"
        >
          A selection of our impactful initiatives across sectors.
        </motion.p>
        
        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * idx }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group glass neon-border rounded-3xl overflow-hidden transition-all cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/20 bg-[#1a1a2e]/80"
            >
              <div className={`h-48 w-full bg-gradient-to-br ${p.gradient} shadow-xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all mb-2">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
