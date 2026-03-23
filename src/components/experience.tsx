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
    <section id="experience" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-green-400 text-sm mb-3 font-mono tracking-wider">
            {"// Experience"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            git log <span className="text-green-400">--oneline</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {commits.map((commit, idx) => (
            <div key={idx} className="bg-black border border-gray-800/60 rounded-xl overflow-hidden hover:border-gray-700 transition-colors">
              {/* Commit header */}
              <div className="px-5 py-3 bg-gray-900/40 border-b border-gray-800/40 font-mono text-sm">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-yellow-500">commit</span>
                  <span className="text-gray-500">{commit.hash}</span>
                  {commit.active ? (
                    <span className="text-xs bg-green-400/10 text-green-400 border border-green-400/20 px-2 py-0.5 rounded-full">
                      {commit.branch}
                    </span>
                  ) : (
                    <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">
                      {commit.branch}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-1">
                  Author: Sandeep Pandey &lt;sandeeppandey70391@gmail.com&gt;
                </p>
                <p className="text-gray-600">Date: {commit.date}</p>
              </div>

              {/* Commit body */}
              <div className="px-5 py-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${commit.active ? "bg-green-400/10" : "bg-gray-800"}`}>
                    <Briefcase className={`w-4 h-4 ${commit.active ? "text-green-400" : "text-gray-500"}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{commit.role}</h3>
                    <p className="text-gray-500 text-sm">{commit.company} — {commit.location}</p>
                  </div>
                </div>

                {/* Diff-style changes */}
                <div className="space-y-2 mb-4">
                  {commit.changes.map((change, cIdx) => (
                    <div key={cIdx} className="flex gap-3 items-start bg-gray-950/50 rounded-lg px-3 py-2.5 border border-gray-800/30">
                      <div className="flex-1 min-w-0">
                        <span className="text-blue-400 font-mono text-xs block sm:inline">{change.file}</span>
                        <span className="text-gray-500 text-xs sm:text-sm block sm:inline">{change.desc}</span>
                      </div>
                      <span className="text-green-500 font-mono text-xs shrink-0 hidden sm:block">+{change.additions.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {commit.tech.map((t) => (
                    <span key={t} className="bg-gray-900 border border-gray-800 text-gray-500 text-xs px-2 py-1 rounded-md font-mono hover:text-green-400 hover:border-green-400/30 transition-colors">
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
