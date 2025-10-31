import { motion } from 'framer-motion'

const newsGradients = [
  'from-indigo-500 via-purple-500 to-pink-500',
  'from-blue-500 via-cyan-500 to-teal-500',
  'from-orange-500 via-pink-500 to-rose-500',
]

const posts = new Array(3).fill(0).map((_, i) => ({
  title: `Latest Update ${i + 1}`,
  summary: 'Short description about the news or media update goes here.',
  gradient: newsGradients[i],
}))

export default function News() {
  return (
    <section id="news" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="relative">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-xs font-semibold text-pink-300 uppercase tracking-wider">Latest Updates</span>
          </motion.div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl mb-4"
        >
          News & <span className="gradient-text">Media</span>
        </motion.h2>
        
        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * idx }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            className="group glass neon-border rounded-3xl overflow-hidden transition-all cursor-pointer hover:shadow-2xl hover:shadow-pink-500/20 bg-[#1a1a2e]/80"
          >
            <div className={`h-40 w-full bg-gradient-to-br ${p.gradient} shadow-xl relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30">
                Latest
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all mb-2">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">{p.summary}</p>
            </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


