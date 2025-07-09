import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "Java", "Kotlin"],
      color: "bg-blue-100 text-blue-700",
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "EDA"],
      color: "bg-green-100 text-green-700",
    },
    {
      category: "Machine Learning & AI",
      skills: ["TensorFlow", "Scikit-Learn", "Keras", "BERT", "CNN", "ANN", "Deep Learning", "Generative AI"],
      color: "bg-purple-100 text-purple-700",
    },
    {
      category: "Databases",
      skills: ["MongoDB", "SQL", "Firebase"],
      color: "bg-orange-100 text-orange-700",
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Node.js", "React.js", "Android SDK", "XML"],
      color: "bg-red-100 text-red-700",
    },
    {
      category: "Software Engineering",
      skills: ["OOP", "Data Structures", "Algorithms", "System Design"],
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      category: "Frameworks",
      skills: ["React", "Node.js", "Spring Boot", "Hibernate", "Bootstrap"],
      color: "bg-pink-100 text-pink-700",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gray-900 mb-6">My Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="heading-tertiary text-gray-900">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 ${category.color} rounded-full text-sm lora-medium hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </span>
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
