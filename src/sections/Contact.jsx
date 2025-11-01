import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="relative">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Get In Touch</span>
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
          <span className="gradient-text">Contact</span> Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg mb-12"
        >
          Let's discuss how we can help transform your business with innovative technology solutions.
        </motion.p>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass neon-border rounded-3xl p-6 sm:p-8 transition-all hover:shadow-xl hover:shadow-indigo-500/20 bg-[#1a1a2e]/80"
          >
            <div className="grid gap-5">
              <input className="w-full rounded-xl bg-white/5 border border-indigo-500/30 px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all placeholder:text-slate-400 text-white" placeholder="Your Name" />
              <input type="email" className="w-full rounded-xl bg-white/5 border border-indigo-500/30 px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all placeholder:text-slate-400 text-white" placeholder="Email" />
              <input className="w-full rounded-xl bg-white/5 border border-indigo-500/30 px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all placeholder:text-slate-400 text-white" placeholder="Subject" />
              <textarea rows="6" className="w-full rounded-xl bg-white/5 border border-indigo-500/30 px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all resize-none placeholder:text-slate-400 text-white" placeholder="Message" />
            </div>
            <button type="button" className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              Send Message
            </button>
          </motion.form>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass neon-border overflow-hidden rounded-3xl transition-all hover:shadow-xl hover:shadow-indigo-500/20 bg-[#1a1a2e]/80"
          >
            <iframe
              title="Google Map"
              className="h-[300px] w-full sm:h-full sm:min-h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20639.649148698172!2d90.3987872285059!3d23.86801538996247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1761974990148!5m2!1sen!2sbd"
              allowFullScreen
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
