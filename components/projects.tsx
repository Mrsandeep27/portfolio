import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      image: "/furniture.jpg",
      title: "Furniture E-Commerce",
      description:
        "A fully functional e-commerce website for a furniture store with user authentication, product listing, shopping cart, and checkout system.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
      github: "https://github.com/Mrsandeep27/Furniture-E-Commerce",
      demo: "#",
    },
    {
      image: "/weather.jpg",
      title: "Weather Website",
      description:
        "Real-time weather web application that provides current weather information using OpenWeatherMap API with responsive interface.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Mrsandeep27/WEATHER-WEBSITE",
      demo: "#",
    },
    {
      image: "/expense.jpg",
      title: "Expense Tracker",
      description:
        "A comprehensive expense tracking application built with TypeScript for better type safety and code maintainability.",
      technologies: ["TypeScript", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Mrsandeep27/expense-tracker",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-green-400 text-lg mb-4 font-mono">// Projects</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black border border-gray-800 hover:border-green-400 transition-colors group">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Link href={project.github} target="_blank">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </Link>
                  <Link href={project.demo} target="_blank">
                    <Button size="sm" className="bg-green-400 hover:bg-green-500 text-gray-900">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-green-400 text-green-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
