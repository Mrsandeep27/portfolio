import { Briefcase } from "lucide-react";

export function Experience() {
  const commits = [
    {
      hash: "a7f3d2e",
      branch: "HEAD -> main",
      date: "Present",
      role: "Full Stack Developer",
      company: "2XG-Growth",
      location: "Bangalore (Startup)",
      active: true,
      changes: [
        {
          file: "earn-crm/",
          desc: "Multi-tenant lead CRM — WhatsApp integration (Meta API), incentive engine, QR spin wheel, RBAC for 4 roles",
          additions: 12400,
        },
        {
          file: "erp-dashboard/",
          desc: "4-module analytics (Sales, Logistics, Care, CRM) — 24 REST endpoints, live at erp.2xg.in",
          additions: 8200,
        },
        {
          file: "bch-service/",
          desc: "Bike repair PWA — job queue, payment processing, parts inventory, offline-first with IndexedDB",
          additions: 9600,
        },
        {
          file: "ivr-bdc/",
          desc: "Call center ops — role-based dashboards, biometric auth, Capacitor Android deployment",
          additions: 5100,
        },
        {
          file: "infra/coolify/",
          desc: "Self-hosted Coolify on OVH — CI/CD, SSL, zero-downtime for 5+ production apps",
          additions: 1800,
        },
      ],
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "IndexedDB", "Socket.io", "Razorpay", "Coolify"],
    },
    {
      hash: "c2b8e91",
      branch: "internship",
      date: "Internship",
      role: "Web Development Intern",
      company: "Frontend Developer",
      location: "India",
      active: false,
      changes: [
        {
          file: "components/",
          desc: "Built reusable React components and dynamic UI with JavaScript (ES6+)",
          additions: 3200,
        },
        {
          file: "api/",
          desc: "Integrated REST APIs for real-time data handling",
          additions: 1400,
        },
        {
          file: "features/",
          desc: "Enhanced web application features using React.js, REST APIs, and SQL",
          additions: 2800,
        },
      ],
      tech: ["React.js", "JavaScript", "REST APIs", "SQL", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-green-400 text-xs sm:text-sm mb-2 sm:mb-3 font-mono tracking-wider">
            {"// Experience"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            git log <span className="text-green-400">--oneline</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {commits.map((commit, idx) => (
            <div key={idx} className="bg-black border border-gray-800/60 rounded-xl overflow-hidden hover:border-gray-700 transition-colors">
              {/* Commit header — compact on mobile */}
              <div className="px-3 sm:px-5 py-2 sm:py-3 bg-gray-900/40 border-b border-gray-800/40 font-mono text-xs sm:text-sm">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-yellow-500">commit</span>
                  <span className="text-gray-500">{commit.hash}</span>
                  {commit.active ? (
                    <span className="text-[10px] sm:text-xs bg-green-400/10 text-green-400 border border-green-400/20 px-1.5 sm:px-2 py-0.5 rounded-full">
                      {commit.branch}
                    </span>
                  ) : (
                    <span className="text-[10px] sm:text-xs bg-gray-800 text-gray-500 px-1.5 sm:px-2 py-0.5 rounded-full">
                      {commit.branch}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-0.5 sm:mt-1 hidden sm:block">
                  Author: Sandeep Pandey &lt;sandeeppandey70391@gmail.com&gt;
                </p>
                <p className="text-gray-600">{commit.active ? "Present" : commit.date}</p>
              </div>

              {/* Commit body */}
              <div className="px-3 sm:px-5 py-3 sm:py-4">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 ${commit.active ? "bg-green-400/10" : "bg-gray-800"}`}>
                    <Briefcase className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${commit.active ? "text-green-400" : "text-gray-500"}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base">{commit.role}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">{commit.company} — {commit.location}</p>
                  </div>
                </div>

                {/* Diff-style changes */}
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {commit.changes.map((change, cIdx) => (
                    <div key={cIdx} className="bg-gray-950/50 rounded-lg px-2.5 sm:px-3 py-2 border border-gray-800/30">
                      <span className="text-blue-400 font-mono text-[10px] sm:text-xs">{change.file} </span>
                      <span className="text-gray-500 text-[10px] sm:text-sm">{change.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1">
                  {commit.tech.map((t) => (
                    <span key={t} className="bg-gray-900 border border-gray-800 text-gray-500 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md font-mono hover:text-green-400 hover:border-green-400/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
