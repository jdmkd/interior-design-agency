import Image from "next/image"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Award, Users, Target, Heart } from "lucide-react"

const team = [
  {
    name: "Aarav Sharma",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
    bio: "With over 15 years of experience, Aarav leads our creative vision and ensures every project exceeds expectations.",
  },
  {
    name: "Priya Patel",
    role: "Senior Architect",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=300&q=80",
    bio: "Priya brings architectural expertise and innovative solutions to create spaces that are both beautiful and functional.",
  },
  {
    name: "Rohan Verma",
    role: "Interior Design Lead",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80",
    bio: "Rohan specializes in residential design and has a keen eye for creating personalized, livable spaces.",
  },
  {
    name: "Ananya Singh",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=300&q=80",
    bio: "Ananya ensures every project runs smoothly from concept to completion, maintaining our high standards.",
  },
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every detail, delivering exceptional results that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for design drives us to create spaces that truly resonate with our clients.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, listening to their needs and bringing their vision to life.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace new ideas and technologies to create cutting-edge design solutions.",
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Luxe Design</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are passionate designers and architects dedicated to creating extraordinary spaces that inspire and
              delight.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary">Our Story</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  15 Years of Design Excellence
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Founded in 2009, Luxe Design Studio has grown from a small boutique firm to one of the most respected
                  interior design and architecture companies in California. Our journey began with a simple mission: to
                  create beautiful, functional spaces that enhance people's lives.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Today, we've completed over 1,200 projects, won 25+ industry awards, and built lasting relationships
                  with clients who trust us to bring their visions to life. Our success is built on a foundation of
                  creativity, craftsmanship, and unwavering commitment to excellence.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
                alt="Modern Indian luxury interior"
                width={800}
                height={600}
                className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[36rem] md:w-[40rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Talented professionals passionate about creating exceptional spaces
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="mx-auto h-32 w-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
