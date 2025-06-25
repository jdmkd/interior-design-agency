"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { X } from "lucide-react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    alt: "Modern Indian Living Room",
    category: "Living Spaces",
    project: "Modern Luxury Villa",
  },
  {
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    alt: "Contemporary Home Interior",
    category: "Bedrooms",
    project: "Penthouse Apartment",
  },
  {
    src: "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=800&q=80",
    alt: "Corporate Office Space",
    category: "Commercial",
    project: "Corporate Headquarters",
  },
  {
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    alt: "Boutique Hotel Lobby",
    category: "Hospitality",
    project: "Boutique Hotel Renovation",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    alt: "Elegant Lighting Design",
    category: "Lighting",
    project: "Lighting Design Showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury Bedroom",
    category: "Bedrooms",
    project: "Luxury Spa Resort",
  },
  {
    src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    alt: "Modern Kitchen",
    category: "Kitchens",
    project: "Penthouse Apartment",
  },
  {
    src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    alt: "Dining Room Design",
    category: "Dining Rooms",
    project: "Modern Luxury Villa",
  },
]

const categories = [
  "All",
  ...Array.from(new Set(images.map((img) => img.category))),
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Gallery</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our collection of stunning interior design and architectural projects that showcase our expertise
              and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-2 rounded-xl bg-white border border-gray-200 p-2 shadow-sm relative">
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

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-medium text-white">{image.project}</p>
                  <p className="text-xs text-white/80">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-h-full max-w-full">
            <Image
              src={filteredImages[selectedImage].src || "/placeholder.svg"}
              alt={filteredImages[selectedImage].alt}
              width={1200}
              height={800}
              className="max-h-[90vh] max-w-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-lg font-medium text-white">{filteredImages[selectedImage].project}</p>
              <p className="text-sm text-white/80">{filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
