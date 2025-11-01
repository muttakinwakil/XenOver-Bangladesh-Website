import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useCallback, useState } from 'react'

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const t1x = useTransform(mx, [-50, 50], [-8, 8])
  const t1y = useTransform(my, [-50, 50], [-8, 8])
  const t2x = useTransform(mx, [-50, 50], [-4, 4])
  const t2y = useTransform(my, [-50, 50], [-4, 4])
  const [imageError, setImageError] = useState(false)

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width) * 100 - 50)
    my.set(((e.clientY - rect.top) / rect.height) * 100 - 50)
  }, [mx, my])

  return (
    <section id="home" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20 sm:pt-24" onMouseMove={onMouseMove}>
      {/* Background image with overlay */}
      <div className="pointer-events-none absolute inset-0">
        <img 
          src="/hero-background.png" 
          alt="Global technology network" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        {/* Dark overlay to maintain text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/80 via-[#0a0a1a]/60 to-[#0a0a1a]/80" />
      </div>

      {/* Animated glowing background accents */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div style={{ x: t1x, y: t1y }} className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-15 blur-3xl neon-glow" />
        <motion.div style={{ x: t2x, y: t2y }} className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 opacity-15 blur-3xl neon-glow" />
        {/* Glowing lines effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glow-text text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6"
            >
              Empowering the Future with <br />
              <span className="gradient-text">Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mx-auto mt-6 max-w-2xl text-balance text-base text-slate-300 sm:mt-8 sm:text-lg md:text-xl leading-relaxed lg:mx-0"
            >
              XenOver Bangladesh delivers next-generation software, hardware & IoT, government tech,
              data center & hosting, industrial software, and media production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-5 lg:justify-start"
            >
              <a href="#divisions" className="group relative w-full rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-4 text-sm font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-purple-500/50 sm:w-auto overflow-hidden">
                <span className="relative z-10">Explore XenOver</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#contact" className="w-full rounded-xl bg-transparent border-2 border-indigo-400/50 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-indigo-400 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20 sm:w-auto">
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto flex items-center justify-center">
              {!imageError ? (
                <div className="relative w-full max-w-md aspect-square">
                  <img 
                    src="/mo.jpg" 
                    alt="Technology and Innovation" 
                    className="w-full h-full object-cover rounded-full neon-border shadow-2xl shadow-indigo-500/20"
                    onError={() => setImageError(true)}
                  />
                  {/* Glowing effect around circular image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl -z-10" />
                </div>
              ) : (
                <div className="w-full max-w-md aspect-square rounded-full neon-border shadow-2xl shadow-indigo-500/20 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30 flex items-center justify-center border border-indigo-500/30">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-3">🌐</div>
                    <p className="text-white/60 text-sm">Add image to public folder</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


