"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Filter } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Advanced Sentiment Analysis of Product Reviews",
      description:
        "A comparative evaluation of Machine Learning and Deep Learning models for sentiment analysis using Amazon Fine Food Reviews dataset.",
      technologies: ["Python", "BERT", "LSTM", "TF-IDF", "NLP", "Machine Learning"],
      image: "https://cdn.shulex-tech.com/blog-media/uploads/2022/12/sentiment-analysis.png",
      githubUrl: "https://github.com/AkhilllYadav/Sentiment-Analysis-on-Product-Reviews",
      liveUrl: "https://github.com/AkhilllYadav/Sentiment-Analysis-on-Product-Reviews",
      category: "AI/ML/LLM",
      highlights: [
        "BERT model significantly outperformed traditional approaches",
        "LSTM showed strong performance in capturing sequential patterns",
        "SVM and XGBoost achieved competitive results among traditional models",
      ],
    },
    {
      title: "Business Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard built with Streamlit for visualizing and analyzing business metrics across sales, marketing, and customer reviews.",
      technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Data Visualization"],
      image: "https://media.licdn.com/dms/image/v2/D562DAQF1VoCru2jz_A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738779034658?e=1752663600&v=beta&t=-FNu_bE2lrxhFLZO-Oy4Vw2JdtXgS031Uhfngtmop0o",
      githubUrl: "https://github.com/AkhilllYadav/Business-Analytics",
      liveUrl: "https://github.com/AkhilllYadav/Business-Analytics",
      category: "SaaS",
      highlights: [
        "Interactive visualizations for business metrics",
        "Real-time data analysis capabilities",
        "Comprehensive reporting features",
      ],
    },
    {
      title: "Indeed Clone",
      description: "A full-stack job portal clone with job listings, user profiles, and application functionality.",
      technologies: ["React", "Spring Boot", "Hibernate", "MongoDB"],
      image: "/placeholder.svg?height=250&width=400",
      githubUrl: "https://github.com/AkhilllYadav/indeed-clone",
      liveUrl: "https://indeed-clone-demo.vercel.app",
      category: "Website",
      highlights: [
        "Complete job portal functionality",
        "User authentication and profiles",
        "Job application management system",
      ],
    },
    {
      title: "Movie Data Analysis on Netflix",
      description:
        "Exploratory data analysis on Netflix's movie dataset to uncover trends and insights about popular genres, duration patterns, and ratings.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      image: "/placeholder.svg?height=250&width=400",
      githubUrl: "https://github.com/AkhilllYadav/netflix-data-analysis",
      liveUrl: "https://netflix-analysis-dashboard.streamlit.app",
      category: "AI/ML/LLM",
      highlights: [
        "Comprehensive EDA on Netflix dataset",
        "Genre and rating distribution analysis",
        "Data cleaning and visualization",
      ],
    },
    {
      title: "Interactive Drum Kit",
      description:
        "A fun and interactive web-based drum kit that allows users to explore musical creativity through keyboard and mouse interactions.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=250&width=400",
      githubUrl: "https://github.com/AkhilllYadav/drum-kit",
      liveUrl: "https://interactive-drum-kit.vercel.app",
      category: "Website",
      highlights: ["Interactive drum simulation", "Keyboard and mouse controls", "Sound effects and animations"],
    },
    {
      title: "Digital Project + Razorpay Integration",
      description: "E-commerce product cards with integrated Razorpay payment gateway for seamless transactions.",
      technologies: ["JavaScript", "Razorpay API", "HTML", "CSS"],
      image: "/placeholder.svg?height=250&width=400",
      githubUrl: "https://github.com/AkhilllYadav/razorpay-integration",
      liveUrl: "https://razorpay-demo.vercel.app",
      category: "SaaS",
      highlights: ["Secure payment integration", "Product catalog management", "Transaction handling"],
    },
    {
      title: "AI-Powered Influencer Directory",
      description:
        "Web-based AI-powered platform for streamlining discovery and collaboration between brands and influencers.",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML", "Express"],
      image: "/placeholder.svg?height=250&width=400",
      githubUrl: "https://github.com/AkhilllYadav/influencer-directory",
      liveUrl: "https://influencer-directory.vercel.app",
      category: "SaaS",
      highlights: ["AI-powered matching algorithms", "Advanced search and filtering", "Campaign tracking dashboard"],
    },
    {
      title: "Mobile Task Manager App",
      description: "Android application for task management with Firebase integration and real-time synchronization.",
      technologies: ["Kotlin", "Android SDK", "Firebase", "XML"],
      image: "/placeholder.svg?height=250&width=400",
      githubUrl: "https://github.com/AkhilllYadav/task-manager-app",
      liveUrl: "https://play.google.com/store/apps/details?id=com.akhilesh.taskmanager",
      category: "App",
      highlights: ["Real-time task synchronization", "Offline functionality", "Push notifications"],
    },
  ]

  const categories = ["All", "AI/ML/LLM", "Website", "SaaS", "App"]
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML/LLM": "bg-purple-100 text-purple-700 border-purple-200",
      Website: "bg-blue-100 text-blue-700 border-blue-200",
      SaaS: "bg-green-100 text-green-700 border-green-200",
      App: "bg-orange-100 text-orange-700 border-orange-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200"
  }

  const getFilterButtonStyle = (category: string) => {
    if (activeFilter === category) {
      const activeColors = {
        All: "bg-gray-900 text-white border-gray-900",
        "AI/ML/LLM": "bg-purple-600 text-white border-purple-600",
        Website: "bg-blue-600 text-white border-blue-600",
        SaaS: "bg-green-600 text-white border-green-600",
        App: "bg-orange-600 text-white border-orange-600",
      }
      return activeColors[category as keyof typeof activeColors] || "bg-gray-900 text-white border-gray-900"
    }
    return "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gray-900 mb-6">My Projects</h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto mb-8">
            Explore my diverse portfolio of projects spanning AI/ML, web development, SaaS solutions, and mobile
            applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-gray-600 mr-4">
            <Filter className="h-5 w-5" />
            <span className="lora-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              onClick={() => setActiveFilter(category)}
              className={`transition-all duration-200 ${getFilterButtonStyle(category)}`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-2 text-xs bg-black bg-opacity-20 px-2 py-0.5 rounded-full">
                  {projects.filter((p) => p.category === category).length}
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Projects Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 lora-medium">
            Showing {filteredProjects.length} of {projects.length} projects
            {activeFilter !== "All" && <span className="text-gray-500"> in {activeFilter}</span>}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs lora-semibold border ${getCategoryColor(project.category)}`}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader className="flex-grow">
                <CardTitle className="heading-tertiary text-gray-900 mb-3">{project.title}</CardTitle>
                <p className="text-body text-gray-600 leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-4">
                  <h4 className="lora-semibold text-gray-900 mb-3">Key Highlights:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="lora-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs lora-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h3 className="heading-tertiary text-gray-600 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}
