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
  image: "https://media.licdn.com/dms/image/v2/D562DAQGNHWQ8O8p3ug/profile-treasury-image-shrink_800_800/B56ZfuBUCFG0Ag-/0/1752045012273?e=1752660000&v=beta&t=dY2k9riczQv0BBK4omySWLAkqK1yj9Eo_bfsKLcwrZg", // Replace with actual certificate image path
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
      image: "https://media.licdn.com/dms/image/v2/D562DAQESZ55LMFUx6Q/profile-treasury-image-shrink_800_800/B56ZfTVwp0HoAY-/0/1751597389044?e=1752660000&v=beta&t=WcErE1dkVr4XXfYVFE8QgE1rhQ5GIuXBcOge-SnRZl4",
      credentialUrl: "https://coursera.org/verify/professional-cert/IBM-AI-DEVELOPER",
      skills: ["Python", "Machine Learning", "Deep Learning", "AI Development", "TensorFlow"],
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      issuer: "Dr. Angela Yu via Udemy",
      description: "Full-stack web development course covering modern technologies and best practices.",
      year: "2024",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-3aa28803-d239-41df-a37d-2225110c8a76.jpg?v=1712639310000",
      credentialUrl: "https://www.udemy.com/certificate/UC-3aa28803-d239-41df-a37d-2225110c8a76/",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Java 17 Masterclass",
      issuer: "Tim Buchalka via Udemy",
      description: "Advanced Java programming course covering Java 17 features and enterprise development.",
      year: "2023",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-39dc2830-bc11-46d8-b315-41f23f2ddd54.jpg?v=1711993510000",
      credentialUrl: "https://www.udemy.com/certificate/UC-39dc2830-bc11-46d8-b315-41f23f2ddd54/",
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
