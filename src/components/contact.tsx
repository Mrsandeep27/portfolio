import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Terminal } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "917039185207";
    const text = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-green-400 text-sm mb-3 font-mono tracking-wider">
            {"// Contact"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ssh <span className="text-green-400">connect@sandeep</span>
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Have a project, a job opportunity, or just want to say hi?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left — terminal style contact info */}
          <div className="bg-black border border-gray-800/60 rounded-xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-900/40 border-b border-gray-800/40">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="text-gray-600 text-xs font-mono ml-2">contact.sh</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-4">
              <div>
                <p className="text-gray-600">
                  <span className="text-green-400">$</span> cat contact-info.json
                </p>
                <div className="mt-2 pl-2 border-l-2 border-gray-800 space-y-2">
                  <p>
                    <span className="text-gray-600">&quot;email&quot;: </span>
                    <a href="mailto:Sandeeppandey70391@gmail.com" className="text-green-400 hover:underline">
                      &quot;Sandeeppandey70391@gmail.com&quot;
                    </a>
                  </p>
                  <p>
                    <span className="text-gray-600">&quot;phone&quot;: </span>
                    <a href="tel:+917039185207" className="text-green-400 hover:underline">
                      &quot;(+91) 7039185207&quot;
                    </a>
                  </p>
                  <p>
                    <span className="text-gray-600">&quot;location&quot;: </span>
                    <span className="text-yellow-400">&quot;Bangalore, India&quot;</span>
                  </p>
                  <p>
                    <span className="text-gray-600">&quot;status&quot;: </span>
                    <span className="text-green-400">&quot;Open to opportunities&quot;</span>
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-600">
                  <span className="text-green-400">$</span> cat socials.txt
                </p>
                <div className="mt-2 space-y-1.5">
                  <a href="https://github.com/Mrsandeep27" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors">
                    <Github className="w-4 h-4" />
                    <span>github.com/Mrsandeep27</span>
                  </a>
                  <a href="https://www.linkedin.com/in/sandeep-pandey70391/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/sandeep-pandey70391</span>
                  </a>
                </div>
              </div>

              <p className="text-gray-700 animate-pulse">$ _</p>
            </div>
          </div>

          {/* Right — message form */}
          <div className="bg-black border border-gray-800/60 rounded-xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-900/40 border-b border-gray-800/40">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="text-gray-600 text-xs font-mono ml-2">send-message.sh</span>
            </div>
            <div className="p-5">
              <form className="space-y-4" onSubmit={handleWhatsApp}>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-gray-600 text-xs font-mono mb-1.5 block">name=</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full bg-gray-950 border border-gray-800 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-700 focus:border-green-400/50 focus:outline-none focus:ring-1 focus:ring-green-400/20 transition-colors font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600 text-xs font-mono mb-1.5 block">email=</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className="w-full bg-gray-950 border border-gray-800 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-700 focus:border-green-400/50 focus:outline-none focus:ring-1 focus:ring-green-400/20 transition-colors font-mono"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-600 text-xs font-mono mb-1.5 block">subject=</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-700 focus:border-green-400/50 focus:outline-none focus:ring-1 focus:ring-green-400/20 transition-colors font-mono"
                  />
                </div>
                <div>
                  <label className="text-gray-600 text-xs font-mono mb-1.5 block">message=</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-700 focus:border-green-400/50 focus:outline-none focus:ring-1 focus:ring-green-400/20 transition-colors font-mono resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-green-400/20 flex items-center justify-center gap-2 font-mono text-sm"
                >
                  <Send className="w-4 h-4" />
                  ./send-message.sh
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
