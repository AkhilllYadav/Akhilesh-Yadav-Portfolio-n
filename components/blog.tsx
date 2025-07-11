import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"

export function Blog() {
  const blogPosts = [
    {
      title: "Building an AI-Powered Video Call Assistant for Laptop Troubleshooting",
      description:
        "In an era where technology underpins almost every facet of our lives, encountering laptop issues—be it hardware malfunctions or software misconfigurations—can bring productivity to a grinding halt. While traditional support channels such as help desks, forums, and knowledge base articles aim to bridge the gap, they often leave users navigating generic, one-size-fits-all instructions. An AI‑powered video call assistant elevates this experience by delivering real‑time, personalized guidance directly to the user’s screen, combining the nuance of conversation with the clarity of visual demonstration.",
      image: "https://substackcdn.com/image/fetch/$s_!3CC5!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F316dc039-c8da-4404-b025-de9bb05e3479_1024x608.png",
      date: "April 24, 2025",
      readTime: "8 min read",
      category: "Machine Learning",
      link: "https://open.substack.com/pub/akhileshyadav18/p/building-an-ai-powered-video-call?r=36ak4d&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
      tags: ["ML", "AI", "Troubleshoot"],
    },
    {
      title: "Startup Idea: AI & Saas",
      description:
        "The world of education is evolving, and technology is at the forefront of this transformation. If you're looking for a groundbreaking startup idea that combines Artificial Intelligence (AI) and SaaS (Software-as-a-Service) to address real-world challenges, then this concept is for you.",
      image: "https://substackcdn.com/image/fetch/$s_!E5f5!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0f006af2-2d15-447b-b627-f7541f9cca97_1024x608.png",
      date: "January 04, 2025",
      readTime: "12 min read",
      category: "Web Development",
      link: "https://open.substack.com/pub/akhileshyadav18/p/startup-idea-ai-and-saas?r=36ak4d&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
      tags: ["AI", "React", "Node.js", "JavaScript", "Startup"],
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
