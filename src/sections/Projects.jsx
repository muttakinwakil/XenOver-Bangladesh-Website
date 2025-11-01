import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: 'HR-Xen',
    desc: 'HR Xen is an intelligent HR management software that automates recruitment, attendance, payroll, and performance tracking. It offers cloud-based access, real-time analytics, and employee self-service features. Designed for efficiency, security, and scalability, HR Xen simplifies workforce management and enhances productivity for organizations of any size.',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    image: '../../public/hrxen.png',
  },
  {
    title: 'Advance Industrial Resource Management System',
    desc: 'AIRMS is a next-generation software solution that optimizes production, workforce, inventory, and machinery across industrial operations. With real-time monitoring, predictive analytics, and automation, AIRMS enhances efficiency, reduces waste, and ensures seamless coordination between departments for smarter, data-driven industrial management.',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    image: '../../public/rmg.jpg',
  },
  {
    title: 'GoSafe Bangladesh',
    desc: 'GoSafe Bangladesh is a nationwide intelligent transport safety and monitoring system designed to ensure road safety, transparency, and accountability. It integrates smart surveillance, vehicle tracking, and digital verification through QR and ANPR technology, empowering passengers, drivers, and authorities with real-time data for a safer, smarter Bangladesh.',
    gradient: 'from-orange-500 via-pink-500 to-rose-500',
    image: '../../public/Gosafe.jpg',
  },
  {
    title: 'Ibadat',
    desc: 'Ibadat App is an advanced Islamic lifestyle platform integrating AI-powered prayer reminders, personalized Quran learning, Tasbeeh tracking, and virtual Qibla compass with AR. It offers live Islamic lectures, community discussions, Ramadan fasting analytics, charity tracking, and multilingual support — empowering Muslims with a complete digital worship experience.',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    image: '../../public/ibadat1.png',
  },
  {
    title: 'Store-Xen',
    desc: 'Store Xen is a smart inventory and retail management system designed to streamline product tracking, sales, and supply operations. It offers real-time stock monitoring, barcode integration, purchase and sales automation, expense tracking, and analytics dashboards — empowering businesses to manage multi-branch stores efficiently with accuracy and data-driven insights.',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    image: '../../public/store.png',
  },
  {
    title: 'Xen Cloud',
    desc: 'Xen Cloud is an advanced cloud infrastructure platform powered by Amazon Web Services (AWS). It provides secure data storage, scalable computing, and AI-driven performance optimization. With AWS reliability, 99.99% uptime, and seamless enterprise integration, Xen Cloud empowers businesses to deploy, manage, and scale applications with global-grade efficiency and security.',
    gradient: 'from-rose-500 via-pink-500 to-orange-500',
    image: '../../public/Cloud1.png',
  },
]

function ProjectCard({ project, index }) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.05 * index }}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group glass neon-border rounded-3xl overflow-hidden transition-all cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/20 bg-[#1a1a2e]/80"
    >
      <div className="h-48 w-full shadow-xl relative overflow-hidden">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${project.gradient} relative`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all mb-2">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-300">{project.desc}</p>
      </div>
    </motion.article>
  )
}

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
            <ProjectCard key={p.title} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
