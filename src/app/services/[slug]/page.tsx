import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { ArrowRight, Check, Clock, Users, Award } from "lucide-react"

const services = {
  "residential-design": {
    title: "Residential Design",
    subtitle: "Transform Your Home Into a Personal Sanctuary",
    description:
      "Our residential design services create beautiful, functional living spaces that reflect your personality and enhance your daily life. From single rooms to whole-house renovations, we bring your vision to life.",
    image: "/placeholder.svg?height=600&width=1200",
    features: [
      "Complete space planning and layout design",
      "Custom color schemes and material selection",
      "Furniture selection and placement",
      "Lighting design and fixture selection",
      "Custom millwork and built-in solutions",
      "Art and accessory curation",
      "Project management from start to finish",
    ],
    process: [
      { step: 1, title: "Initial Consultation", description: "We meet to discuss your vision, needs, and budget" },
      {
        step: 2,
        title: "Design Development",
        description: "Create detailed plans, 3D renderings, and material selections",
      },
      { step: 3, title: "Implementation", description: "Coordinate with contractors and oversee installation" },
      { step: 4, title: "Final Styling", description: "Add finishing touches and style your completed space" },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  "commercial-spaces": {
    title: "Commercial Spaces",
    subtitle: "Create Inspiring Work Environments",
    description:
      "Design commercial spaces that boost productivity, reflect your brand identity, and create positive experiences for employees and customers alike.",
    image: "/placeholder.svg?height=600&width=1200",
    features: [
      "Office space planning and design",
      "Retail environment design",
      "Restaurant and hospitality design",
      "Healthcare facility design",
      "Brand integration and identity",
      "Ergonomic workspace solutions",
      "Sustainable design practices",
    ],
    process: [
      { step: 1, title: "Needs Assessment", description: "Analyze your business requirements and brand identity" },
      { step: 2, title: "Space Planning", description: "Optimize layout for workflow and customer experience" },
      { step: 3, title: "Design Implementation", description: "Execute design with minimal business disruption" },
      { step: 4, title: "Post-Occupancy", description: "Follow up to ensure space meets your needs" },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
}

const heroImage = "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
const galleryImages = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=600&q=80",
]

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image src={heroImage} alt="Hero Image" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Service</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{service.title}</h1>
            <p className="mt-6 text-xl leading-8 text-white/90">{service.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-8 text-gray-600 mb-8">{service.description}</p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Timeline</h3>
                <p className="text-gray-600">4-12 weeks</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Team Size</h3>
                <p className="text-gray-600">3-5 experts</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Guarantee</h3>
                <p className="text-gray-600">100% satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What's Included</h2>
            <p className="mt-4 text-lg text-gray-600">Comprehensive services to bring your vision to life</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-lg text-gray-600">A proven approach to delivering exceptional results</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Work</h2>
            <p className="mt-4 text-lg text-gray-600">Examples of our {service.title.toLowerCase()} projects</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`${service.title} example ${index + 1}`}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-white/90">
              Let's discuss your {service.title.toLowerCase()} project and create something extraordinary.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
