import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Youtube } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="heading-primary text-gray-900 mb-6">Welcome to My Portfolio</h1>
            <p className="text-body-large text-gray-600 mb-8">
              Discover my projects, skills, and experience in AI, Machine Learning, and Software Development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="h-5 w-5" />
                <span className="text-caption">akhilyadawa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="h-5 w-5" />
                <span className="text-caption">+91 8948890610</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5" />
                <span className="text-caption">New Delhi, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/akhilesh-kumar-yadav-61501b1b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/AkhilllYadav" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.youtube.com/@Akhielesh_A" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4 mr-2" />
                  YouTube
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="#about">Learn More About Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl">
                <img
                  src="/images/akhilesh-photo.png"
                  alt="Akhilesh Kumar Yadav - AI/ML Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-caption lora-semibold">
                AI/ML Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
