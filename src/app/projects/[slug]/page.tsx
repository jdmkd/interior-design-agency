import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { ArrowRight, MapPin, Calendar, Ruler } from "lucide-react"

const projects = {
  "modern-luxury-villa": {
    title: "Modern Luxury Villa",
    category: "Residential",
    location: "Beverly Hills, CA",
    year: "2024",
    size: "5,200 sq ft",
    client: "Private Residence",
    duration: "8 months",
    budget: "$750,000",
    description:
      "A stunning contemporary villa featuring clean lines, natural materials, and panoramic city views. This project showcases our ability to create sophisticated living spaces that seamlessly blend indoor and outdoor environments.",
    challenge:
      "The main challenge was to create a cohesive design that maximized the spectacular views while maintaining privacy and comfort for the family.",
    solution:
      "We designed floor-to-ceiling windows strategically placed to frame the best views, incorporated natural materials to connect with the landscape, and created flexible living spaces that adapt to different occasions.",
    heroImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Open-concept living spaces",
      "Floor-to-ceiling windows",
      "Custom millwork throughout",
      "Integrated smart home technology",
      "Infinity pool and outdoor kitchen",
      "Master suite with private terrace",
    ],
  },
  "corporate-headquarters": {
    title: "Corporate Headquarters",
    category: "Commercial",
    location: "Downtown LA",
    year: "2023",
    size: "15,000 sq ft",
    client: "Tech Company",
    duration: "6 months",
    budget: "$1,200,000",
    description:
      "Innovative office design promoting collaboration and creativity in a Fortune 500 company. The space reflects the company's innovative culture while providing functional work environments.",
    challenge:
      "Creating a space that would foster collaboration while providing quiet areas for focused work, all within a historic building with structural limitations.",
    solution:
      "We designed flexible zones that can be reconfigured as needed, incorporated acoustic solutions for noise control, and used the building's historic features as design elements.",
    heroImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    ],
    features: [
      "Flexible collaborative spaces",
      "Acoustic privacy solutions",
      "Biophilic design elements",
      "State-of-the-art conference rooms",
      "Employee wellness areas",
      "Sustainable materials throughout",
    ],
  },
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image src={project.heroImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">{project.category}</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{project.title}</h1>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {project.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {project.year}
              </div>
              <div className="flex items-center gap-1">
                <Ruler className="h-4 w-4" />
                {project.size}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-lg text-gray-600 mb-4">{project.description}</p>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-600">{project.challenge}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-600">{project.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Client</span>
                    <p className="text-gray-900">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Location</span>
                    <p className="text-gray-900">{project.location}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Year</span>
                    <p className="text-gray-900">{project.year}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Size</span>
                    <p className="text-gray-900">{project.size}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Duration</span>
                    <p className="text-gray-900">{project.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Investment</span>
                    <p className="text-gray-900">{project.budget}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Project Gallery</h2>
            <p className="mt-0 text-lg text-gray-600 mb-4">Explore the details and craftsmanship of this project</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Inspired by This Project?</h2>
            <p className="mt-0 text-lg text-white/90 mb-4">Let's create something extraordinary for your space. Contact us to discuss your project.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/projects">View More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
