import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-1">
              Sandeep Pandey
            </h3>
            <p className="text-gray-500 text-sm">
              Full Stack Developer &bull; Bangalore, India
            </p>
          </div>

          {/* Center - nav */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {["About", "Skills", "Experience", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-green-400 transition-colors text-sm"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Right - socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Mrsandeep27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-pandey70391/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:Sandeeppandey70391@gmail.com"
              className="text-gray-600 hover:text-green-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-8 pt-6 text-center">
          <p className="text-gray-700 text-sm">
            &copy; {currentYear} Sandeep Pandey. Built with Next.js & Tailwind
            CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
