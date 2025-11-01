import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiCpu, FiCode, FiDatabase, FiGitBranch, FiServer, FiVideo } from 'react-icons/fi'

// Technology-themed random images - each division gets random tech images
// Using different technology keywords for variety
const getRandomTechImage = (seed) => {
  const timestamp = Date.now()
  const techKeywords = [
    'programming,code,software,development,computer',
    'hardware,electronics,circuit,iot,technology',
    'server,datacenter,network,technology,cloud',
    'technology,digital,innovation,business,tech',
    'database,software,data,technology,server',
    'communication,media,technology,broadcast,network'
  ]
  const keyword = techKeywords[seed % techKeywords.length]
  return `https://source.unsplash.com/800x600/?${keyword}&sig=${timestamp + seed}`
}

const divisions = [
  { 
    title: 'Customized Software Development', 
    icon: FiCode, 
    gradient: 'from-emerald-500 to-teal-500', 
    image: '../../public/untitled design.png',
    description: 'High-performance, secure, and scalable solutions tailored to your needs.'
  },
  { 
    title: 'Hardware & IoT Solutions', 
    icon: FiCpu, 
    gradient: 'from-pink-400 to-pink-400', 
    image: '../../public/service-8.jpg',
    description: 'Innovative hardware and IoT solutions that connect devices and enable smart ecosystems.'
  },
  { 
    title: 'Data Center & Hosting', 
    icon: FiServer, 
    gradient: 'from-sky-300 to-sky-300', 
    image: '../../public/top-software-companies.jpg',
    description: 'Reliable data center infrastructure and cloud hosting services for optimal performance.'
  },
  { 
    title: 'Government Technology Projects', 
    icon: FiGitBranch, 
    gradient: 'from-sky-300 to-sky-300', 
    image: '../../public/govt.webp',
    description: 'Secure and compliant technology solutions designed for government and public sector needs.'
  },
  { 
    title: 'Industrial Software', 
    icon: FiDatabase, 
    gradient: 'from-orange-400 to-orange-400', 
    image: '../../public/AI-in-Manufacturing.webp',
    description: 'Enterprise-grade software solutions that streamline industrial operations and processes.'
  },
  { 
    title: 'Media & Communication Channel', 
    icon: FiVideo, 
    gradient: 'from-red-500 to-red-600', 
    image: '/TheOpenInsightLogo.png',
    description: 'Advanced media platforms and communication channels for engaging and connecting audiences.'
  },
]

function DivisionCard({ division, index }) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group glass neon-border rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/20 bg-[#1a1a2e]/80"
    >
      {/* Division Image */}
      {division.image && (
        <div className="relative w-full h-80 overflow-hidden">
          {!imageError ? (
            <img
              src={division.image}
              alt={division.title}
              className="w-full h-full object-cover group-hover:scale-150 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${division.gradient} flex items-center justify-center`}>
              {division.icon && <division.icon className="text-4xl text-white/50" />}
            </div>
          )}
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-transparent to-transparent" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`rounded-2xl bg-gradient-to-br ${division.gradient} p-4 text-white shadow-xl group-hover:scale-110 transition-transform neon-glow flex-shrink-0`}>
            {division.icon && <division.icon className="text-2xl" />}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all">
              {division.title}
            </h3>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          {division.description || 'High-performance, secure, and scalable solutions tailored to your needs.'}
        </p>
      </div>
    </motion.div>
  )
}

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
            <DivisionCard key={d.title} division={d} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}


