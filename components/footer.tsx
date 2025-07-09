import { Mail, Phone, Linkedin, Github, Youtube } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="heading-tertiary text-white mb-4">Akhilesh Kumar Yadav</h3>
            <p className="text-gray-300 mb-4">
              AI/ML Developer and Software Engineer passionate about creating innovative solutions and leveraging
              technology to solve complex problems.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">akhilyadawa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 8948890610</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-tertiary text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="heading-tertiary text-white mb-4">Connect With Me</h3>
            <div className="space-y-2 text-sm text-gray-300 mb-4">
              <p>Email: akhilyadawa@gmail.com</p>
              <p>Phone: +91 8948890610</p>
              <p>Location: New Delhi, India</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/akhilesh-kumar-yadav-61501b1b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/AkhilllYadav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@Akhielesh_A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Akhilesh Kumar Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
