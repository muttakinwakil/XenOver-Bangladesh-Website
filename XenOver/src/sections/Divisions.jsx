import { motion } from 'framer-motion'
import { FiCpu, FiCode, FiDatabase, FiGitBranch, FiServer, FiVideo } from 'react-icons/fi'

const divisions = [
  { title: 'Customized Software Development', icon: FiCode, gradient: 'from-indigo-500 to-purple-500' },
  { title: 'Hardware & IoT Solutions', icon: FiCpu, gradient: 'from-blue-500 to-cyan-500' },
  { title: 'Data Center & Hosting', icon: FiServer, gradient: 'from-emerald-500 to-teal-500' },
  { title: 'Government Technology Projects', icon: FiGitBranch, gradient: 'from-orange-500 to-pink-500' },
  { title: 'Industrial Software', icon: FiDatabase, gradient: 'from-violet-500 to-purple-500' },
  { title: 'Media & Communication Channel', icon: FiVideo, gradient: 'from-rose-500 to-pink-500' },
]

export default function Divisions() {
  return (
    <section id="divisions" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="relative">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">Our Expertise</span>
          </motion.div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl mb-4"
        >
          Our <span className="gradient-text">Divisions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg mb-12"
        >
          Discover our specialized verticals delivering end-to-end solutions.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d, idx) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group glass neon-border rounded-3xl p-6 transition-all hover:shadow-2xl hover:shadow-purple-500/20 bg-[#1a1a2e]/80"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`rounded-2xl bg-gradient-to-br ${d.gradient} p-4 text-white shadow-xl group-hover:scale-110 transition-transform neon-glow`}>
                  {d.icon && <d.icon className="text-2xl" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all">
                    {d.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                High-performance, secure, and scalable solutions tailored to your needs.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


