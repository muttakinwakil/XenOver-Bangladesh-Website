import { motion } from 'framer-motion'

const directors = [
  {
    name: 'Fazla Rabbi Khan',
    role: 'Chief Strategy Officer',
    image: '/director1.jpg',
  },
  {
    name: 'Monir Hossain Monim',
    role: 'Executive Director',
    image: '/director2.jpg',
  },
  {
    name: 'Hossan Imam Rony',
    role: 'Chief Technology Officer',
    image: '/director3.jpg',
  },
  {
    name: 'Wakil Hassan',
    role: 'Chief Executive Officer',
    image: '/director4.jpg',
  },
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
          className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl mb-4 text-center"
        >
          About <span className="gradient-text">Us</span>
        </motion.h2>
        
        {/* Two Column Layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 flex flex-col justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              XenOver Bangladesh is a next-generation technology company offering customized software and hardware solutions across public and private sectors.
              Our mission is to build secure, scalable, and impactful systems that drive national progress.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              With expertise spanning multiple domains, we deliver innovative solutions that transform how organizations operate and serve their communities.
            </motion.p>
          </motion.div>

          {/* Right Column - Directors */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6 grid-cols-2"
          >
            {directors.map((d, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity:  1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.3 + 0.05 * idx }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group glass neon-border rounded-3xl p-6 transition-all hover:shadow-2xl hover:shadow-indigo-500/20 bg-[#1a1a2e]/80 flex flex-col items-center text-center"
              >
                {/* Circular Director Image */}
                <div className="relative mb-4">
                  <div className="relative w-25 h-30 rounded-full overflow-hidden neon-border shadow-xl">
                    <img 
                      src={d.image} 
                      alt={d.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(d.name)}&background=6366f1&color=fff&size=128`
                      }}
                    />
                  </div>
                  {/* Glowing effect around circular image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl -z-10" />
                </div>
                <div className="mt-2">
                  <div className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">{d.name}</div>
                  <div className="text-sm text-slate-400 mt-1">{d.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


