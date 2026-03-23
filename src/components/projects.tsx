import { ExternalLink, Github, Star, GitBranch, Zap } from "lucide-react";

export function Projects() {
  const featured = {
    title: "GigFlow",
    subtitle: "AI-Powered Professional Marketplace",
    description: "Full-stack marketplace with 10 hiring modules. AI resume analyzer scores candidates via Claude API. Real-time recruiter chat, MCQ skill tests with auto-grading, fake job detection, portfolio-based hiring, and referral system.",
    tech: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Express", "Socket.io", "Claude AI"],
    github: "https://github.com/Mrsandeep27",
    demo: "https://gig-flow-work.vercel.app",
    metrics: [
      { label: "Modules", value: "10" },
      { label: "Tests", value: "43+" },
      { label: "API Endpoints", value: "24" },
    ],
  };

  const projects = [
    {
      title: "MediLog",
      subtitle: "Family Medical Records",
      description: "Healthcare PWA with AI prescription scanning (Hindi + English via Gemini), offline-first sync, QR-based doctor sharing, medicine reminders. DPDPA-compliant.",
      tech: ["Next.js", "Supabase", "Gemini AI", "Dexie.js", "PWA"],
      github: "https://github.com/Mrsandeep27",
      demo: "https://medi--log.vercel.app",
      color: "from-red-500 to-pink-500",
      icon: "MED",
    },
    {
      title: "Expense Tracker",
      subtitle: "Personal Finance PWA",
      description: "Multi-account finance tracker with bank statement auto-import (HDFC, SBI, ICICI, Axis) and 200+ merchant auto-categorization. Budget alerts, savings goals, 8 currencies.",
      tech: ["Next.js", "TypeScript", "Recharts", "shadcn/ui", "PWA"],
      github: "https://github.com/Mrsandeep27/expense-tracker",
      demo: "https://daily--expense-tracker.vercel.app",
      color: "from-yellow-500 to-orange-500",
      icon: "FIN",
    },
    {
      title: "Sandy5",
      subtitle: "Music Streaming App",
      description: "Spotify-inspired app with YouTube audio streaming, self-hosted JWT auth, Group Jam sessions (real-time sync via Socket.io), volume booster (150%), EQ presets, offline downloads.",
      tech: ["React Native", "Expo", "Express", "PostgreSQL", "Socket.io"],
      github: "https://github.com/Mrsandeep27",
      demo: "",
      color: "from-purple-500 to-indigo-500",
      icon: "SND",
    },
    {
      title: "BillKaro",
      subtitle: "Universal Shop Billing",
      description: "PWA for 6 crore+ Indian shops. Shop-type onboarding auto-configures for 14 shop types (Kirana, Cloth, Hardware, Pharmacy...). Multi-unit billing, udhar tracking, thermal printing.",
      tech: ["Next.js", "TypeScript", "Supabase", "Dexie.js", "PWA"],
      github: "https://github.com/Mrsandeep27",
      demo: "https://bill-karo.vercel.app",
      color: "from-green-400 to-emerald-500",
      icon: "BIL",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-green-400 text-xs sm:text-sm mb-2 sm:mb-3 font-mono tracking-wider">
            {"// Projects"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ls -la <span className="text-green-400">~/projects</span>
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Production applications solving real problems — not todo apps
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured project */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/60 rounded-2xl overflow-hidden mb-6 hover:border-blue-500/30 transition-colors group">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left — gradient visual */}
              <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-cyan-500 p-6 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-yellow-300" />
                    <span className="text-white/80 text-xs font-mono">FEATURED PROJECT</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">{featured.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{featured.subtitle}</p>
                </div>
                <div className="flex gap-6 relative z-10 mt-6">
                  {featured.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-white font-bold text-xl">{m.value}</p>
                      <p className="text-white/60 text-xs">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — details */}
              <div className="lg:col-span-3 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-5">
                    {featured.tech.map((t) => (
                      <span key={t} className="bg-blue-500/5 border border-blue-500/15 text-blue-300/80 text-[10px] sm:text-xs px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-lg font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <a href={featured.demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white text-black text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-gray-200 transition-colors">
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Live Demo
                  </a>
                  <a href={featured.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gray-800 text-gray-300 text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-gray-700 transition-colors">
                    <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other projects — 2x2 grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-950 border border-gray-800/60 rounded-xl overflow-hidden hover:border-gray-700 transition-all group flex flex-col">
                <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${project.color}`} />

                <div className="p-3 sm:p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-lg">{project.title}</h3>
                      <p className="text-gray-600 text-[10px] sm:text-xs">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-400 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-400 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-500 text-[10px] sm:text-sm leading-relaxed mb-2 sm:mb-4 flex-1 line-clamp-3 sm:line-clamp-none">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-gray-900 border border-gray-800 text-gray-600 text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-md font-mono hover:text-green-400 hover:border-green-400/30 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub link */}
          <div className="text-center mt-10">
            <a href="https://github.com/Mrsandeep27" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-green-400 transition-colors font-mono text-sm">
              <GitBranch className="w-4 h-4" />
              View all repositories on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
