import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">SANDEEP PANDEY</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Web Designer & Frontend Developer passionate about creating user-friendly and scalable web applications.
            </p>
            <div className="text-gray-400">
              <p>Sandeeppandey70391@gmail.com</p>
              <p>(+91) 7039185207</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-300 hover:text-green-400 transition-colors">
                About
              </Link>
              <Link href="#experience" className="block text-gray-300 hover:text-green-400 transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="block text-gray-300 hover:text-green-400 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-green-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Social Links</h4>
            <div className="space-y-2">
              <Link
                href="https://www.linkedin.com/in/sandeep-pandey70391/"
                target="_blank"
                className="block text-gray-300 hover:text-green-400 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Mrsandeep27"
                target="_blank"
                className="block text-gray-300 hover:text-green-400 transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {currentYear} Sandeep Pandey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
