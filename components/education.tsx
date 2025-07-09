import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  const education = [
    {
      institution: "IIT DELHI",
      degree: "AI/ML for Industries",
      location: "New Delhi",
      period: "2024 - 2025",
      type: "Professional Certification",
      subjects: ["Python", "Data Visualization", "EDA", "Deep Learning", "ANN", "CNN", "Generative AI"],
      logo: "https://images.seeklogo.com/logo-png/48/2/indian-institute-of-technology-delhi-logo-png_seeklogo-483677.png",
      degreeImage: "IIT Delhi Certificate.jpg",
    },
    {
      institution: "Dr. APJ Abdul Kalam Technical University",
      degree: "B.Tech in Computer Science & Engineering",
      location: "Lucknow, UP",
      period: "2020 - 2024",
      type: "Bachelor's Degree",
      subjects: ["Data Structures", "DBMS", "Software Engineering", "Operating Systems"],
      logo: "/placeholder.svg?height=100&width=100",
      degreeImage: "/placeholder.svg?height=300&width=400",
    },
    {
      institution: "Pawanagar Mahaveer Intermediate College (UP Board)",
      degree: "Intermediate in Science",
      location: "Kushinagar, UP",
      period: "2019 - 2020",
      type: "Higher Secondary",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      logo: "/placeholder.svg?height=100&width=100",
      degreeImage: "/placeholder.svg?height=300&width=400",
    },
    {
      institution: "Ramshewak High School (UP Board)",
      degree: "High School",
      location: "Kushinagar, UP",
      period: "2017 - 2018",
      type: "Secondary",
      subjects: ["Science", "Mathematics", "English"],
      logo: "/placeholder.svg?height=100&width=100",
      degreeImage: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gray-900 mb-6">Education</h2>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <Card key={index} className="border-l-4 border-l-blue-600 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  {/* College Logo */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white p-2">
                      <img
                        src={edu.logo || "/placeholder.svg"}
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Institution Details */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <CardTitle className="heading-tertiary text-gray-900 mb-3">{edu.institution}</CardTitle>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-600 lora-semibold mb-2">
                      <GraduationCap className="h-5 w-5" />
                      {edu.degree}
                    </div>
                    <div className="text-sm text-gray-600 mb-3 lora-medium">{edu.type}</div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4 text-sm text-gray-600">
                      <div className="flex items-center justify-center lg:justify-start gap-2">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center justify-center lg:justify-start gap-2">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  {/* Degree Image */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="w-48 h-36 rounded-lg overflow-hidden border-2 border-gray-200 shadow-md bg-gray-50">
                      <img
                        src={edu.degreeImage || "/placeholder.svg"}
                        alt={`${edu.degree} certificate`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>

              {edu.subjects.length > 0 && (
                <CardContent className="pt-6">
                  <h4 className="lora-semibold text-gray-900 mb-4">Key Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, subIndex) => (
                      <span
                        key={subIndex}
                        className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm lora-medium hover:bg-blue-200 transition-colors"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
