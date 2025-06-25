import { Card, CardContent } from "@/src/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner, Mumbai",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "Luxe Design transformed our flat into a beautiful, functional home. Their attention to detail and understanding of Indian aesthetics is outstanding.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Founder, Mehta Tech Solutions",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    content:
      "Our new office space is both inspiring and practical. The team delivered on time and exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    role: "Restaurant Owner, Ahmedabad",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "The ambiance they created for our restaurant has received so many compliments from our guests. Highly recommended!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">What Our Clients Say</h2>
          <p className="mt-0 text-lg text-gray-600 mb-6">Don't just take our word for it – hear from our satisfied clients</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center shadow-lg border-0">
              <CardContent className="flex flex-col items-center p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic max-w-xs">"{testimonial.content}"</p>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover border-4 border-primary shadow"
                  />
                  <div className="font-semibold text-gray-900 mt-2">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
