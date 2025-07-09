import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Download } from "lucide-react"

export function Certificates() {
  const certificates = [
    {
  title: "Artificial Intelligence and Machine Learning for Industry",
  issuer: "Indian Institute of Technology Delhi (IIT Delhi)",
  description:
    "A 6-month advanced certification program by IIT Delhi's Yardi School of Artificial Intelligence and Continuing Education Programme (CEP), covering machine learning, deep learning, generative AI, graph neural networks, and real-world industry applications.",
  year: "2025",
  image: "//images/IIT-Delhi-Certificate.jpg", // Replace with actual certificate image path
  credentialUrl: "https://ceppay.iitd.ac.in/certificate/verification/70a190719265f16f4927fbe2bda6f21e", // Or a public certificate link if available
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Graph Neural Networks",
    "Natural Language Processing",
    "AI for Industry",
    "Data Science",
    "Transformers"
  ],
},

    {
      title: "IBM AI Developer Professional Certificate",
      issuer: "IBM via Coursera",
      description:
        "Comprehensive certification covering AI development, machine learning, and practical implementation of AI solutions.",
      year: "2024",
      image: "/placeholder.svg?height=300&width=400",
      credentialUrl: "https://coursera.org/verify/professional-cert/IBM-AI-DEVELOPER",
      skills: ["Python", "Machine Learning", "Deep Learning", "AI Development", "TensorFlow"],
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      issuer: "Dr. Angela Yu via Udemy",
      description: "Full-stack web development course covering modern technologies and best practices.",
      year: "2024",
      image: "/placeholder.svg?height=300&width=400",
      credentialUrl: "https://udemy.com/certificate/web-development-bootcamp",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Java 17 Masterclass",
      issuer: "Tim Buchalka via Udemy",
      description: "Advanced Java programming course covering Java 17 features and enterprise development.",
      year: "2023",
      image: "/placeholder.svg?height=300&width=400",
      credentialUrl: "https://udemy.com/certificate/java-17-masterclass",
      skills: ["Java 17", "OOP", "Spring Framework", "Enterprise Development"],
    },
  ]

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gray-900 mb-6">Certificates & Achievements</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Certificate Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={`${cert.title} certificate`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-500 text-white p-2 rounded-full shadow-lg">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <CardHeader className="flex-grow">
                <CardTitle className="heading-tertiary text-gray-900 mb-3">{cert.title}</CardTitle>
                <p className="text-blue-600 lora-semibold text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-3 lora-medium">{cert.year}</p>
                <p className="text-body text-gray-700 leading-relaxed">{cert.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Skills */}
                <div className="mb-6">
                  <h4 className="lora-semibold text-gray-900 mb-3">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs lora-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Verify
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={cert.image} download={`${cert.title}.png`}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
