import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Blog } from "@/components/blog"
import { Certificates } from "@/components/certificates"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
