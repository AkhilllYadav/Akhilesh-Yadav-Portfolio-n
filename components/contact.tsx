"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gray-900 mb-6">Contact Me</h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Reach out to me through the contact form or use the details below to get in touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="heading-tertiary text-gray-900">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="red-rose-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">akhilyadawa@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="red-rose-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+91 8948890610</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="red-rose-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">110017, Panchsheel Vihar, New Delhi, India</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg red-rose-semibold text-gray-900 mb-4">About Me</h3>
                <p className="text-gray-700">
                  I'm Akhilesh Kumar Yadav, a passionate developer with a love for creating beautiful and functional
                  applications. Explore my work and feel free to get in touch!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="heading-tertiary text-gray-900">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
