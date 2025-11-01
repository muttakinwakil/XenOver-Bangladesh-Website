import { motion } from 'framer-motion'

const clients = ['Gov Agency', 'Telecom Co', 'FinTech', 'Industry Corp', 'Media Org', 'University']

const clientColors = ['indigo', 'purple', 'pink', 'blue', 'cyan', 'emerald']

export default function Clients() {
  return (
    <section id="clients" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="relative">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Trusted Partners</span>
          </motion.div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl mb-4"
        >
          Our Clients & <span className="gradient-text">Partners</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg mb-12"
        >
          Trusted by leading organizations and government agencies.
        </motion.p>
        
        <div className="mt-12 grid items-center justify-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((c, idx) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.03 * idx }}
              whileHover={{ scale: 1.1, y: -6, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
              className="glass neon-border flex h-24 items-center justify-center rounded-2xl px-4 text-sm font-semibold text-white/80 transition-all hover:text-white hover:shadow-xl hover:shadow-indigo-500/20 bg-[#1a1a2e]/80"
            >
              {c}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">What Our Clients Say</h3>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass neon-border rounded-3xl p-6 text-sm text-slate-300 transition-all hover:shadow-xl hover:shadow-indigo-500/20 relative bg-[#1a1a2e]/80"
              >
                <div className="absolute top-4 left-4 text-4xl text-indigo-400/30 font-serif">"</div>
                <div className="mb-4 text-base font-semibold leading-relaxed text-white pl-6">XenOver delivered beyond expectations with robust execution.</div>
                <div className="text-xs font-medium text-indigo-300 pt-4 border-t border-indigo-500/20">— Client {i}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


