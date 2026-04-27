import {
  Monitor,
  Server,
  Smartphone,
  Cloud,
  Rocket,
  Zap,
} from "lucide-react";

export function About() {
  const areas = [
    {
      icon: Monitor,
      title: "Frontend",
      desc: "React, Next.js, TypeScript, Tailwind — pixel-perfect UIs that load fast",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/10 hover:border-blue-500/30",
    },
    {
      icon: Server,
      title: "Backend",
      desc: "Node.js, Express, REST APIs, Socket.io — 24+ endpoints serving real data",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/10 hover:border-green-500/30",
    },
    {
      icon: Smartphone,
      title: "Mobile & PWA",
      desc: "React Native, Expo, Capacitor — offline-first apps for 2GB RAM phones",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/10 hover:border-orange-500/30",
    },
    {
      icon: Cloud,
      title: "DevOps",
      desc: "Vercel, Coolify on OVH, Railway — CI/CD pipelines for 5+ production apps",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/10 hover:border-cyan-500/30",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-950 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-green-400 text-sm mb-3 font-mono tracking-wider">
            {"// About Me"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            I Don&apos;t Just Code.
            <br />
            <span className="text-green-400">I Ship.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto">
          {/* Code-style intro */}
          <div className="bg-black border border-gray-800/60 rounded-xl overflow-hidden mb-6 sm:mb-12">
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-900/50 border-b border-gray-800/40">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/70" />
              <span className="text-gray-600 text-[10px] sm:text-xs font-mono ml-2">
                about.ts
              </span>
            </div>
            <div className="p-3 sm:p-6 font-mono text-[11px] sm:text-sm leading-relaxed sm:leading-loose overflow-x-auto">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">sandeep</span>{" "}
                <span className="text-gray-600">=</span>{" "}
                <span className="text-gray-500">{"{"}</span>
              </p>
              <p className="pl-6">
                <span className="text-gray-500">role:</span>{" "}
                <span className="text-green-400">
                  &quot;Full Stack Developer&quot;
                </span>
                <span className="text-gray-700">,</span>
              </p>
              <p className="pl-6">
                <span className="text-gray-500">company:</span>{" "}
                <span className="text-green-400">
                  &quot;2XG-Growth (Bangalore)&quot;
                </span>
                <span className="text-gray-700">,</span>
              </p>
              <p className="pl-6">
                <span className="text-gray-500">shipped:</span>{" "}
                <span className="text-yellow-300">7</span>
                <span className="text-gray-700">,</span>{" "}
                <span className="text-gray-700">
                  // production apps at startup
                </span>
              </p>
              <p className="pl-6">
                <span className="text-gray-500">superpower:</span>{" "}
                <span className="text-green-400">
                  &quot;Turning ideas into deployed products, fast&quot;
                </span>
                <span className="text-gray-700">,</span>
              </p>
              <p className="pl-6">
                <span className="text-gray-500">stack:</span>{" "}
                <span className="text-gray-500">[</span>
                <span className="text-green-400">
                  &quot;React&quot;, &quot;Next.js&quot;, &quot;Node.js&quot;,
                  &quot;TypeScript&quot;, &quot;PostgreSQL&quot;
                </span>
                <span className="text-gray-500">]</span>
                <span className="text-gray-700">,</span>
              </p>
              <p className="pl-6">
                <span className="text-gray-500">building:</span>{" "}
                <span className="text-green-400">
                  &quot;Offline-first apps for 6 crore Indian shops&quot;
                </span>
              </p>
              <p>
                <span className="text-gray-500">{"}"}</span>
              </p>
            </div>
          </div>

          {/* What I do grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-12">
            {areas.map((area, i) => (
              <div
                key={i}
                className={`bg-black/50 border ${area.border} rounded-xl p-3 sm:p-5 transition-all group`}
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 ${area.bg} rounded-lg flex items-center justify-center mb-2 sm:mb-4`}
                >
                  <area.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${area.color}`} />
                </div>
                <h3 className="text-white font-bold text-xs sm:text-sm mb-1">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs leading-relaxed hidden sm:block">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Key facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-black/50 border border-gray-800/50 rounded-xl p-3 sm:p-5 flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-400/10 rounded-lg flex items-center justify-center shrink-0">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">
                  Startup Speed
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  At 2XG-Growth, I&apos;m the primary developer shipping CRMs,
                  ERP dashboards, service management PWAs, and payment
                  platforms — all from architecture to deployment.
                </p>
              </div>
            </div>
            <div className="bg-black/50 border border-gray-800/50 rounded-xl p-3 sm:p-5 flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-400/10 rounded-lg flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">
                  Built for India
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Offline-first with IndexedDB, works on 2GB RAM phones,
                  Hindi support, UPI integration, thermal bill printing —
                  solving real problems for 6 crore+ shops.
                </p>
              </div>
            </div>
          </div>

          {/* Resume CTA */}
          <div className="text-center mt-10">
            <a
              href="https://drive.google.com/file/d/15DgoapkYgdV5YsXdrtFh4bP9SBJIa-0w/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2 bg-green-400 hover:bg-green-500 text-black font-bold px-7 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-green-400/20 cursor-pointer text-sm">
                View Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
