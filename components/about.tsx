import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Youtube } from "lucide-react"

export function About() {
  const stats = [
    { number: "74", label: "Problems Solved", description: "LeetCode, GeeksforGeeks, HackerRank" },
    { number: "8+", label: "AI/ML Projects", description: "Model development and deployment" },
    { number: "5+", label: "Data Analysis Projects", description: "NumPy, Pandas, Matplotlib" },
    { number: "3+", label: "Backend Projects", description: "MongoDB and SQL databases" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gray-900 mb-6">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <p className="text-body text-gray-700">
                Experienced AI and ML developer skilled in designing, training, and deploying machine learning models to
                solve complex problems. Proficient in leading machine learning frameworks such as TensorFlow,
                Scikit-Learn, and Keras, with hands-on expertise in data preprocessing, feature engineering, and model
                optimization.
              </p>
              <p className="text-body text-gray-700">
                Strong foundation in data analysis, exploratory data analysis (EDA), and data visualization using NumPy,
                Pandas, Matplotlib, and Seaborn to derive actionable insights from large datasets.
              </p>
              <p className="text-body text-gray-700">
                Expert in working with MongoDB, SQL, and back-end development, applying object-oriented programming
                (OOP) principles to build scalable, efficient solutions. Passionate about leveraging cutting-edge AI and
                ML technologies to enhance decision-making processes, automate workflows, and optimize business
                operations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl lora-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="lora-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-caption text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Connect With Me section */}
        <div className="mt-16 text-center">
          <h3 className="heading-tertiary text-gray-900 mb-6">Connect With Me</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/akhilesh-kumar-yadav-61501b1b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors lora-medium"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/AkhilllYadav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors lora-medium"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://www.youtube.com/@Akhielesh_A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors lora-medium"
            >
              <Youtube className="h-5 w-5" />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
