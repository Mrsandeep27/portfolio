export function Experience() {
  const experiences = [
    {
      company: "Frontend Developer (Project-Based)",
      period: "Nov 2024 – Feb 2025",
      position: "Frontend Developer",
      description:
        "Developed a fully functional e-commerce website for a furniture store using HTML, CSS, JavaScript, and MySQL. Designed responsive layouts and implemented user authentication with dynamic product display.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="text-green-400 text-lg mb-4 font-mono">// Experience</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Professional
            <br />
            <span className="text-green-400">Working Experience</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-green-400 ml-4"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/experience.jpg"
                  alt="Furniture Project"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-green-400 rounded-full -ml-1.5"></div>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                    <p className="text-green-400 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-300 mb-4">{exp.position}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
