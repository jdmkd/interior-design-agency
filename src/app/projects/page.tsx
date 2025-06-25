"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react"

const projects = [
  {
    title: "Modern Luxury Villa",
    category: "Residential",
    location: "Beverly Hills, CA",
    year: "2024",
    size: "5,200 sq ft",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "A stunning contemporary villa featuring clean lines, natural materials, and panoramic city views.",
    slug: "modern-luxury-villa",
  },
  {
    title: "Corporate Headquarters",
    category: "Commercial",
    location: "Downtown LA",
    year: "2023",
    size: "15,000 sq ft",
    image: "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=600&q=80",
    description: "Innovative office design promoting collaboration and creativity in a Fortune 500 company.",
    slug: "corporate-headquarters",
  },
  {
    title: "Boutique Hotel Renovation",
    category: "Hospitality",
    location: "Santa Monica, CA",
    year: "2023",
    size: "8,500 sq ft",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    description: "Complete transformation of a historic building into a luxury boutique hotel.",
    slug: "boutique-hotel-renovation",
  },
  {
    title: "Penthouse Apartment",
    category: "Residential",
    location: "West Hollywood, CA",
    year: "2024",
    size: "3,800 sq ft",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    description: "Sophisticated urban living with custom millwork and curated art collection.",
    slug: "penthouse-apartment",
  },
  {
    title: "Tech Startup Office",
    category: "Commercial",
    location: "Silicon Valley, CA",
    year: "2023",
    size: "12,000 sq ft",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
    description: "Dynamic workspace designed to foster innovation and team collaboration.",
    slug: "tech-startup-office",
  },
  {
    title: "Luxury Spa Resort",
    category: "Hospitality",
    location: "Napa Valley, CA",
    year: "2022",
    size: "20,000 sq ft",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "Serene wellness retreat blending natural elements with modern luxury.",
    slug: "luxury-spa-resort",
  },
]

const categories = ["All", "Residential", "Commercial", "Hospitality"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Projects</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our portfolio of exceptional design projects that showcase our commitment to excellence and
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 rounded-xl bg-white border border-gray-200 p-1 shadow-sm relative">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`relative px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none z-10
                    ${selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"}
                  `}
                  style={{ minWidth: 120 }}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  {selectedCategory === category && (
                    <span
                      className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-80 animate-fade-in"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900 hover:bg-white">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <div className="space-y-2 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.size}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      View Project
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="mt-4 text-lg text-white/90">
              Let's create something extraordinary together. Contact us for a free consultation.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
