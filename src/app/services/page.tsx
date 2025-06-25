import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { ArrowRight, Home, Building, Palette, Lightbulb, Ruler, Sofa, TreePine, Wrench } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description:
      "Transform your home into a personalized sanctuary with our comprehensive residential interior design services.",
    features: ["Space Planning", "Color Consultation", "Furniture Selection", "Custom Millwork"],
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    slug: "residential-design",
  },
  {
    icon: Building,
    title: "Commercial Spaces",
    description: "Create inspiring work environments that boost productivity and reflect your brand identity.",
    features: ["Office Design", "Retail Spaces", "Restaurant Design", "Healthcare Facilities"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    slug: "commercial-spaces",
  },
  {
    icon: Palette,
    title: "Space Planning",
    description: "Optimize your space layout for maximum functionality and aesthetic appeal.",
    features: ["Layout Design", "Traffic Flow", "Furniture Arrangement", "3D Visualization"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    slug: "space-planning",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Illuminate your space with carefully planned lighting solutions that enhance ambiance.",
    features: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Smart Controls"],
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
    slug: "lighting-design",
  },
  {
    icon: Ruler,
    title: "Architectural Services",
    description: "Complete architectural solutions from concept to construction documentation.",
    features: ["Design Development", "Construction Drawings", "Permit Processing", "Construction Admin"],
    image: "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=600&q=80",
    slug: "architectural-services",
  },
  {
    icon: Sofa,
    title: "Furniture & Decor",
    description: "Curated furniture selection and custom pieces to complete your space.",
    features: ["Custom Furniture", "Art Curation", "Textile Selection", "Accessory Styling"],
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    slug: "furniture-decor",
  },
  {
    icon: TreePine,
    title: "Sustainable Design",
    description: "Eco-friendly design solutions that are beautiful and environmentally responsible.",
    features: ["Green Materials", "Energy Efficiency", "Indoor Air Quality", "LEED Certification"],
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    slug: "sustainable-design",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Complete renovation services to transform existing spaces into your dream environment.",
    features: ["Kitchen Remodeling", "Bathroom Renovation", "Whole House Remodel", "Historic Restoration"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    slug: "renovation-remodeling",
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive design solutions tailored to your unique needs and vision. From concept to completion, we
              bring your dreams to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="lg:flex">
                    <div className="relative lg:w-1/2">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="h-64 w-full object-cover lg:h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute top-4 left-4">
                        <div className="rounded-full bg-white/90 p-3">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 lg:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild>
                        <Link href={`/services/${service.slug}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-white/90">
              Let's discuss your project and create something extraordinary together.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Consultation
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
