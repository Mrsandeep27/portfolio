

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

/* ─── Typing animation hook ─── */
function useTypewriter(texts: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = texts[textIndex];

      if (!isDeleting) {
        setDisplay(current.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          timeout = setTimeout(tick, pause);
          return;
        }
      } else {
        setDisplay(current.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }
      timeout = setTimeout(tick, isDeleting ? 40 : speed);
    };

    timeout = setTimeout(tick, 500);

    const cursorInterval = setInterval(
      () => setShowCursor((p) => !p),
      530
    );

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [texts, speed, pause]);

  return { display, cursor: showCursor ? "|" : " " };
}

/* ─── Terminal script (outside component to avoid re-creation) ─── */
const TERMINAL_SCRIPT = [
  { text: "$ git push origin main", color: "text-gray-300", delay: 600 },
  { text: "Enumerating objects: 47, done.", color: "text-gray-600", delay: 400 },
  { text: "Compressing objects: 100%", color: "text-gray-600", delay: 300 },
  { text: "remote: Build successful", color: "text-green-400", delay: 500 },
  { text: "", color: "text-gray-600", delay: 200 },
  { text: "$ deploying to production...", color: "text-gray-300", delay: 800 },
  { text: "  \u2713 erp.2xg.in", color: "text-green-400", delay: 300 },
  { text: "  \u2713 gig-flow-work.vercel.app", color: "text-green-400", delay: 300 },
  { text: "  \u2713 medi--log.vercel.app", color: "text-green-400", delay: 300 },
  { text: "  \u2713 bill-karo.vercel.app", color: "text-green-400", delay: 300 },
  { text: "  \u2713 daily--expense-tracker.vercel.app", color: "text-green-400", delay: 300 },
  { text: "", color: "text-gray-600", delay: 200 },
  { text: "$ npm test", color: "text-gray-300", delay: 600 },
  { text: "  Tests:  43 passed, 0 failed", color: "text-green-400", delay: 400 },
  { text: "  Time:   2.4s", color: "text-gray-600", delay: 200 },
  { text: "", color: "text-gray-600", delay: 300 },
  { text: "$ echo \"All systems operational\"", color: "text-gray-300", delay: 500 },
  { text: "All systems operational \u2728", color: "text-yellow-400", delay: 400 },
];

/* ─── Terminal Line Animation ─── */
function AnimatedTerminal() {
  const [lines, setLines] = useState<{ text: string; color: string }[]>([]);

  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const addLine = () => {
      if (i >= TERMINAL_SCRIPT.length) {
        timeout = setTimeout(() => {
          setLines([]);
          i = 0;
          addLine();
        }, 3000);
        return;
      }
      const line = TERMINAL_SCRIPT[i];
      setLines((prev) => [...prev, { text: line.text, color: line.color }]);
      const delay = line.delay;
      i++;
      timeout = setTimeout(addLine, delay);
    };

    timeout = setTimeout(addLine, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gray-950 border border-gray-800/80 rounded-xl overflow-hidden shadow-2xl shadow-black/50 w-full max-w-md">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-900/80 border-b border-gray-800/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-gray-500 text-xs font-mono">
          sandeep@dev ~
        </span>
        <div className="w-12" />
      </div>

      {/* Terminal body */}
      <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm h-56 sm:h-72 overflow-hidden">
        {lines.map((line, idx) => (
          <div key={idx} className={`${line.color} leading-relaxed`}>
            {line.text || "\u00A0"}
          </div>
        ))}
        <span className="text-gray-500 animate-pulse">$ _</span>
      </div>
    </div>
  );
}

/* ─── Hero Section ─── */
export function Hero() {
  const { display, cursor } = useTypewriter(
    [
      "Full Stack Developer",
      "React & Next.js Expert",
      "PWA Builder",
      "Startup Engineer",
    ],
    70,
    2000
  );

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-black relative overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="text-center lg:text-left">
            <p className="text-green-400 text-sm font-mono mb-6 tracking-wide">
              {"// Hello, World"}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-2 tracking-tight leading-none">
              Sandeep
              <br />
              <span className="text-green-400">Pandey</span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-base sm:text-xl lg:text-2xl text-gray-400 font-mono">
                {">"} {display}
                <span className="text-green-400 font-light">{cursor}</span>
              </span>
            </div>

            <p className="text-gray-600 text-base lg:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I ship production apps at startups.
              Not tutorials — real products used by real teams,
              built from scratch, deployed to production.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-2 mb-8 font-mono text-xs sm:text-sm">
              <span className="text-white">
                <span className="text-green-400 font-bold">7+</span>{" "}
                <span className="text-gray-600">products</span>
              </span>
              <span className="text-gray-800">|</span>
              <span className="text-white">
                <span className="text-green-400 font-bold">5</span>{" "}
                <span className="text-gray-600">live apps</span>
              </span>
              <span className="text-gray-800">|</span>
              <span className="text-white">
                <span className="text-green-400 font-bold">24</span>{" "}
                <span className="text-gray-600">API endpoints</span>
              </span>
              <span className="text-gray-800">|</span>
              <span className="text-white">
                <span className="text-green-400 font-bold">43+</span>{" "}
                <span className="text-gray-600">tests</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 items-center lg:items-start mb-8">
              <a href="#projects">
                <span className="bg-green-400 hover:bg-green-500 text-black font-bold px-7 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-green-400/20 inline-block cursor-pointer text-sm">
                  View My Work
                </span>
              </a>
              <a href="#contact">
                <span className="border border-gray-800 hover:border-green-400/50 text-gray-400 hover:text-green-400 font-medium px-7 py-3 rounded-lg transition-colors inline-block cursor-pointer text-sm">
                  Contact Me
                </span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Mrsandeep27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sandeep-pandey70391/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:Sandeeppandey70391@gmail.com"
                className="text-gray-700 hover:text-green-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right — Terminal */}
          <div className="flex justify-center lg:justify-end">
            <AnimatedTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
