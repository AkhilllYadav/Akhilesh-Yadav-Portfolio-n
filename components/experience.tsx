import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Redcube Digital Media Pvt Ltd",
      position: "Software Engineer",
      type: "Full-time",
      location: "New Delhi, India",
      period: "March 2024 - April 2025",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
      logo: "/placeholder.svg?height=120&width=120",
      website: "https://redcubedigital.com",
      responsibilities: [
        "Developed a web-based AI-powered influencer directory to streamline discovery and collaboration between brands, influencers, and marketing agencies",
        "Reduced campaign matching time by 40%",
        "Implemented features like advanced search filters, influencer-brand matching algorithms, and campaign tracking dashboards",
        "Built scalable architecture using React, Node.js, and MongoDB, ensuring smooth performance and user-friendly navigation",
      ],
    },
    {
      company: "Wemonde Pvt Ltd",
      position: "Mobile App Developer",
      type: "Internship",
      location: "New Delhi, India",
      period: "July 2023 - September 2023",
      technologies: ["XML", "Kotlin", "Android SDK", "Firebase"],
      logo: "/placeholder.svg?height=120&width=120",
      website: "https://wemonde.com",
      responsibilities: [
        "Developed Android applications using Java and XML",
        "Integrated Firebase for real-time database management and user authentication",
        "Conducted thorough testing and debugging to ensure high performance and responsiveness of applications",
        "Worked closely with cross-functional teams to gather requirements and deliver solutions on time",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gray-900 mb-6">Professional Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-green-600 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-white">
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  {/* Company Logo */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="w-28 h-28 rounded-lg overflow-hidden border-4 border-white shadow-lg bg-white p-3">
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Company Details */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <CardTitle className="heading-tertiary text-gray-900 mb-3">
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition-colors flex items-center justify-center lg:justify-start gap-2"
                      >
                        {exp.company}
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </CardTitle>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600 lora-semibold mb-2">
                      <Briefcase className="h-5 w-5" />
                      {exp.position}
                    </div>
                    <div className="text-sm text-gray-600 mb-3 lora-medium">Job Type: {exp.type}</div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4 text-sm text-gray-600">
                      <div className="flex items-center justify-center lg:justify-start gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center justify-center lg:justify-start gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="mb-6">
                  <h4 className="lora-semibold text-gray-900 mb-4">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-body leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="lora-semibold text-gray-900 mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm lora-medium hover:bg-green-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
