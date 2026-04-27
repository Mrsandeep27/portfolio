import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-white">
            SP<span className="text-green-400">.</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-green-400 transition-colors text-sm tracking-wide"
              >
                {item.name}
              </a>
            ))}
            <a href="https://drive.google.com/file/d/1uU_wSr0mYFIBKvwZYSndjOHe7F3Bd_9x/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <span className="bg-green-400 hover:bg-green-500 text-black text-sm font-semibold px-5 py-2 rounded-lg transition-colors inline-block cursor-pointer">
                Resume
              </span>
            </a>
          </nav>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="https://drive.google.com/file/d/1uU_wSr0mYFIBKvwZYSndjOHe7F3Bd_9x/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <span className="bg-green-400 hover:bg-green-500 text-black text-sm font-semibold px-5 py-2 rounded-lg transition-colors block text-center cursor-pointer">
                  Resume
                </span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
