export default function Careers() {
  const jobs = [
    { title: 'Software Engineer (React)', type: 'Full-time', location: 'Dhaka' },
    { title: 'IoT Hardware Intern', type: 'Internship', location: 'Dhaka' },
  ]
  return (
    <section id="careers" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-2xl font-bold text-slate-900">Careers</h2>
      <p className="mt-2 max-w-3xl text-slate-600">Join a team building the future of technology in Bangladesh.</p>
      <div className="mt-8 grid gap-4">
        {jobs.map((j) => (
          <div key={j.title} className="glass neon-border flex items-center justify-between rounded-2xl p-5">
            <div>
              <div className="font-semibold">{j.title}</div>
              <div className="text-xs text-slate-600">{j.type} — {j.location}</div>
            </div>
            <a href="#contact" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 shadow-sm hover:bg-slate-50">Apply Now</a>
          </div>
        ))}
      </div>
    </section>
  )
}


