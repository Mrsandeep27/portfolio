

import { useRef, useState, useEffect, type ReactNode, type MouseEvent } from "react";

/* ─── 3D Tilt Card ──────────────────────────────────────────── */
function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotX = ((y - midY) / midY) * -6;
    const rotY = ((x - midX) / midX) * 6;
    setTransform(
      `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`
    );
  };

  const handleLeave = () =>
    setTransform("perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)");

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className={className}
    >
      {children}
    </div>
  );
}

/* ─── Animated Counter ──────────────────────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / 40);
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 30);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Main Component ────────────────────────────────────────── */
export function Skills() {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-400 text-sm mb-3 font-mono tracking-wider">
            {"// Tech Stack"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tools I <span className="text-green-400">Work With</span>
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Technologies I use daily to ship production applications
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto auto-rows-auto">
          {/* ━━━ Frontend ━━━ (large — 2 cols) */}
          <TiltCard className="lg:col-span-2 group">
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/60 rounded-2xl p-6 overflow-hidden relative hover:border-blue-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-white font-bold text-lg">Frontend</h3>
                    <p className="text-gray-600 text-xs mt-0.5">
                      What users see & interact with
                    </p>
                  </div>
                  <span className="text-blue-400/60 text-xs font-mono bg-blue-500/5 px-2 py-1 rounded-md">
                    primary
                  </span>
                </div>

                {/* Mini code editor */}
                <div className="bg-black/70 rounded-xl border border-gray-800/50 overflow-hidden mb-4">
                  {/* Title bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-800/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="text-gray-600 text-[10px] ml-2 font-mono">
                      page.tsx
                    </span>
                  </div>
                  {/* Code */}
                  <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto">
                    <code>
                      <span className="text-purple-400">import</span>
                      <span className="text-gray-400">{" { "}</span>
                      <span className="text-yellow-300">Hero</span>
                      <span className="text-gray-400">{" } "}</span>
                      <span className="text-purple-400">from</span>
                      <span className="text-green-400">
                        {' "@/components"'}
                      </span>
                      {"\n\n"}
                      <span className="text-purple-400">export default</span>
                      <span className="text-blue-300"> function </span>
                      <span className="text-yellow-300">App</span>
                      <span className="text-gray-400">{"() {"}</span>
                      {"\n"}
                      <span className="text-gray-500">{"  "}</span>
                      <span className="text-purple-400">return</span>
                      <span className="text-gray-400">{" ("}</span>
                      {"\n"}
                      <span className="text-gray-500">{"    "}</span>
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-green-300">Hero</span>
                      <span className="text-gray-500">{" title"}</span>
                      <span className="text-gray-400">{"="}</span>
                      <span className="text-green-400">{'"shipped"'}</span>
                      <span className="text-blue-400">{" />"}</span>
                      {"\n"}
                      <span className="text-gray-400">{"  );\n}"}</span>
                    </code>
                  </pre>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind",
                    "shadcn/ui",
                    "Framer Motion",
                  ].map((s) => (
                    <span
                      key={s}
                      className="bg-blue-500/5 border border-blue-500/10 text-blue-300/80 text-xs px-2.5 py-1 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/20 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>

          {/* ━━━ Backend ━━━ (1 col) */}
          <TiltCard className="group">
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/60 rounded-2xl p-6 overflow-hidden relative hover:border-green-500/30 transition-colors">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-1">Backend</h3>
                <p className="text-gray-600 text-xs mb-4">Server & APIs</p>

                {/* Terminal */}
                <div className="bg-black/70 rounded-lg border border-gray-800/50 p-3 font-mono text-[11px] mb-4 space-y-1.5">
                  <p>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-400"> curl /api/bills</span>
                  </p>
                  <p className="text-gray-600">{"→ "}<span className="text-green-400">200</span> OK</p>
                  <p className="text-gray-700">
                    {"  "}&#123; &quot;bills&quot;: 1,247 &#125;
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "Express", "REST APIs", "Socket.io", "JWT"].map(
                    (s) => (
                      <span
                        key={s}
                        className="bg-green-500/5 border border-green-500/10 text-green-300/80 text-[11px] px-2 py-1 rounded-lg hover:bg-green-500/10 transition-colors"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </TiltCard>

          {/* ━━━ Stats Card ━━━ */}
          <TiltCard className="group">
            <div className="h-full bg-gradient-to-br from-green-950/50 to-gray-950 border border-green-500/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-green-400/40 transition-colors">
              <p className="text-5xl lg:text-6xl font-black text-white mb-1">
                <Counter target={7} suffix="+" />
              </p>
              <p className="text-green-400 font-medium text-sm">
                Products Shipped
              </p>
              <p className="text-gray-700 text-xs mt-1">to production</p>

              <div className="w-full h-px bg-gray-800 my-4" />

              <p className="text-3xl font-bold text-white mb-1">
                <Counter target={5} suffix="" />
              </p>
              <p className="text-gray-500 text-xs">live applications</p>
            </div>
          </TiltCard>

          {/* ━━━ Database ━━━ (1 col) */}
          <TiltCard className="group">
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/60 rounded-2xl p-6 overflow-hidden relative hover:border-purple-500/30 transition-colors">
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-1">Database</h3>
                <p className="text-gray-600 text-xs mb-4">
                  Data layer & ORMs
                </p>

                {/* DB Visualization */}
                <div className="space-y-2 mb-4">
                  {[
                    { name: "PostgreSQL", w: "w-full" },
                    { name: "Supabase", w: "w-[85%]" },
                    { name: "Firebase", w: "w-[65%]" },
                    { name: "IndexedDB", w: "w-[75%]" },
                  ].map((db) => (
                    <div key={db.name}>
                      <div className="flex justify-between mb-0.5">
                        <span className="text-gray-400 text-[11px]">
                          {db.name}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800/80 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${db.w} bg-gradient-to-r from-purple-500/60 to-purple-400/40 rounded-full group-hover:from-purple-500 group-hover:to-purple-400/70 transition-all duration-700`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["MySQL", "Prisma"].map((s) => (
                    <span
                      key={s}
                      className="bg-purple-500/5 border border-purple-500/10 text-purple-300/80 text-[11px] px-2 py-1 rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>

          {/* ━━━ Mobile ━━━ (1 col) */}
          <TiltCard className="group">
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/60 rounded-2xl p-6 overflow-hidden relative hover:border-orange-500/30 transition-colors">
              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-1">Mobile</h3>
                <p className="text-gray-600 text-xs mb-4">
                  Apps & cross-platform
                </p>

                {/* Phone frame */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-36 border-2 border-gray-700 rounded-xl relative bg-black/50 group-hover:border-orange-500/40 transition-colors">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-full" />
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg mx-auto mb-1 flex items-center justify-center">
                          <span className="text-white text-[8px] font-bold">
                            PWA
                          </span>
                        </div>
                        <p className="text-gray-600 text-[8px]">Installable</p>
                      </div>
                    </div>
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gray-700 rounded-full" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["React Native", "Expo", "Capacitor", "PWA"].map((s) => (
                    <span
                      key={s}
                      className="bg-orange-500/5 border border-orange-500/10 text-orange-300/80 text-[11px] px-2 py-1 rounded-lg hover:bg-orange-500/10 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>

          {/* ━━━ AI & APIs ━━━ (2 cols) */}
          <TiltCard className="lg:col-span-2 group">
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/60 rounded-2xl p-6 overflow-hidden relative hover:border-pink-500/30 transition-colors">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      AI & Integrations
                    </h3>
                    <p className="text-gray-600 text-xs mt-0.5">
                      Smart features & third-party APIs
                    </p>
                  </div>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500" />
                  </span>
                </div>

                {/* Chat-style AI visualization */}
                <div className="space-y-3 mb-5">
                  <div className="flex gap-2 items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[9px] text-gray-400">U</span>
                    </div>
                    <div className="bg-gray-800/60 rounded-xl rounded-tl-sm px-3 py-2 max-w-[75%]">
                      <p className="text-gray-400 text-xs">
                        Analyze this resume for ATS score
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start justify-end">
                    <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/10 rounded-xl rounded-tr-sm px-3 py-2 max-w-[75%]">
                      <p className="text-gray-300 text-xs">
                        ATS Score: <span className="text-green-400 font-bold">85/100</span>
                        <span className="text-gray-600">
                          {" "}— Strong match. Add 3 keywords to reach 92+
                        </span>
                      </p>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[9px] text-white font-bold">
                        AI
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Claude AI",
                    "Google Gemini",
                    "Razorpay",
                    "WhatsApp API",
                    "Recharts",
                  ].map((s) => (
                    <span
                      key={s}
                      className="bg-pink-500/5 border border-pink-500/10 text-pink-300/80 text-xs px-2.5 py-1 rounded-lg hover:bg-pink-500/10 hover:border-pink-500/20 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>

          {/* ━━━ DevOps ━━━ (2 cols) */}
          <TiltCard className="lg:col-span-2 group">
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/60 rounded-2xl p-6 overflow-hidden relative hover:border-cyan-500/30 transition-colors">
              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-1">
                  DevOps & Deployment
                </h3>
                <p className="text-gray-600 text-xs mb-4">
                  Ship it to production
                </p>

                {/* Deploy status */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                  {[
                    {
                      name: "erp.2xg.in",
                      status: "live",
                      platform: "Coolify",
                    },
                    {
                      name: "gig-flow",
                      status: "live",
                      platform: "Vercel",
                    },
                    {
                      name: "medi-log",
                      status: "live",
                      platform: "Vercel",
                    },
                    {
                      name: "bill-karo",
                      status: "live",
                      platform: "Vercel",
                    },
                    {
                      name: "expense-app",
                      status: "live",
                      platform: "Vercel",
                    },
                    {
                      name: "bch-service",
                      status: "live",
                      platform: "OVH",
                    },
                  ].map((d) => (
                    <div
                      key={d.name}
                      className="bg-black/40 border border-gray-800/40 rounded-lg px-3 py-2 hover:border-cyan-500/20 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-gray-400 text-[11px] font-mono truncate">
                          {d.name}
                        </span>
                      </div>
                      <span className="text-gray-700 text-[10px]">
                        {d.platform}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["Git", "GitHub", "Vercel", "Coolify", "Railway", "CI/CD", "OVH"].map(
                    (s) => (
                      <span
                        key={s}
                        className="bg-cyan-500/5 border border-cyan-500/10 text-cyan-300/80 text-[11px] px-2 py-1 rounded-lg hover:bg-cyan-500/10 transition-colors"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
