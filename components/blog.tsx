import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"

export function Blog() {
  const blogPosts = [
    {
      title: "Getting Started with Machine Learning: A Beginner's Guide",
      description:
        "Explore the fundamentals of machine learning, from basic concepts to practical implementation. Learn about supervised and unsupervised learning, popular algorithms, and how to start your ML journey.",
      image: "/placeholder.svg?height=250&width=400",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Machine Learning",
      link: "https://medium.com/@akhilyadawa/getting-started-with-machine-learning",
      tags: ["ML", "Python", "Beginner"],
    },
    {
      title: "Building Scalable Web Applications with React and Node.js",
      description:
        "Learn how to create robust, scalable web applications using React for the frontend and Node.js for the backend. Discover best practices, performance optimization techniques, and deployment strategies.",
      image: "/placeholder.svg?height=250&width=400",
      date: "November 28, 2024",
      readTime: "12 min read",
      category: "Web Development",
      link: "https://medium.com/@akhilyadawa/building-scalable-web-applications",
      tags: ["React", "Node.js", "JavaScript"],
    },
    {
      title: "Deep Dive into Natural Language Processing with BERT",
      description:
        "Understand the revolutionary BERT model and its applications in NLP. Learn how to implement BERT for sentiment analysis, text classification, and other NLP tasks with practical examples.",
      image: "/placeholder.svg?height=250&width=400",
      date: "November 10, 2024",
      readTime: "15 min read",
      category: "AI & NLP",
      link: "https://medium.com/@akhilyadawa/deep-dive-into-nlp-with-bert",
      tags: ["NLP", "BERT", "Deep Learning"],
    },
    {
      title: "Data Visualization Best Practices with Python",
      description:
        "Master the art of data visualization using Python libraries like Matplotlib, Seaborn, and Plotly. Learn how to create compelling visualizations that tell a story with your data.",
      image: "/placeholder.svg?height=250&width=400",
      date: "October 22, 2024",
      readTime: "10 min read",
      category: "Data Science",
      link: "https://medium.com/@akhilyadawa/data-visualization-best-practices",
      tags: ["Python", "Matplotlib", "Data Viz"],
    },
    {
      title: "Deploying Machine Learning Models to Production",
      description:
        "Learn the complete process of taking your ML models from development to production. Explore containerization, API development, monitoring, and scaling strategies for ML applications.",
      image: "/placeholder.svg?height=250&width=400",
      date: "October 5, 2024",
      readTime: "14 min read",
      category: "MLOps",
      link: "https://medium.com/@akhilyadawa/deploying-ml-models-to-production",
      tags: ["MLOps", "Docker", "API"],
    },
    {
      title: "Understanding Database Design and Optimization",
      description:
        "Dive deep into database design principles, normalization, indexing strategies, and query optimization. Learn how to build efficient database systems for modern applications.",
      image: "/placeholder.svg?height=250&width=400",
      date: "September 18, 2024",
      readTime: "11 min read",
      category: "Database",
      link: "https://medium.com/@akhilyadawa/understanding-database-design",
      tags: ["SQL", "MongoDB", "Database"],
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      "Machine Learning": "bg-purple-100 text-purple-700",
      "Web Development": "bg-blue-100 text-blue-700",
      "AI & NLP": "bg-green-100 text-green-700",
      "Data Science": "bg-orange-100 text-orange-700",
      MLOps: "bg-red-100 text-red-700",
      Database: "bg-indigo-100 text-indigo-700",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700"
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gray-900 mb-6">Latest Blog Posts</h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            Sharing insights, tutorials, and experiences in AI, Machine Learning, and Software Development. Stay updated
            with the latest trends and best practices in technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Blog Post Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={`${post.title} blog post`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs lora-semibold ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
              </div>

              <CardHeader className="flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="heading-tertiary text-gray-900 mb-3 line-clamp-2">{post.title}</CardTitle>
                <p className="text-body text-gray-600 leading-relaxed line-clamp-3">{post.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs lora-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read Button */}
                <Button asChild className="w-full group">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://substack.com/@akhileshyadav1" target="_blank" rel="noopener noreferrer">
              <BookOpen className="h-5 w-5 mr-2" />
              View All Posts on Substack.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
