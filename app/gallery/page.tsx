'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryItems = [
    // Bridal Makeup
    { id: 1, category: 'bridal', type: 'image', title: 'Bridal Makeup - Classic Elegance', image: '/bridal-makeup-classic-look.jpg' },
    { id: 2, category: 'bridal', type: 'image', title: 'Bridal Makeup - Golden Glow', image: '/bridal-makeup-gold-look.jpg' },
    { id: 3, category: 'bridal', type: 'image', title: 'Bridal Makeup - Rose Tones', image: '/bridal-makeup-rose-pink.jpg' },
    { id: 4, category: 'bridal', type: 'image', title: 'Bridal Makeup - Modern Bride', image: '/modern-bridal-makeup-artist.jpg' },

    // Engagement Makeup
    { id: 5, category: 'engagement', type: 'image', title: 'Engagement Makeup - Radiant', image: '/engagement-makeup-glowing.jpg' },
    { id: 6, category: 'engagement', type: 'image', title: 'Engagement Makeup - Bold', image: '/engagement-party-makeup.jpg' },
    { id: 7, category: 'engagement', type: 'image', title: 'Engagement Makeup - Soft', image: '/engagement-soft-makeup.jpg' },
    { id: 8, category: 'engagement', type: 'image', title: 'Engagement Makeup - Glamorous', image: '/glamorous-engagement-look.jpg' },

    // Hair Styling
    { id: 9, category: 'hair', type: 'image', title: 'Hair Styling - Bridal Bun', image: '/bridal-hair-bun-updo.jpg' },
    { id: 10, category: 'hair', type: 'image', title: 'Hair Styling - Waterfall Braid', image: '/waterfall-braid-hairstyle.jpg' },
    { id: 11, category: 'hair', type: 'image', title: 'Hair Styling - Half Updo', image: '/half-updo-hair-styling.jpg' },
    { id: 12, category: 'hair', type: 'image', title: 'Hair Styling - Curls & Waves', image: '/curled-waves-hair-style.jpg' },

    // Nail Art
    { id: 13, category: 'nails', type: 'image', title: 'Nail Art - Wedding Design', image: '/wedding-nail-art-design.jpg' },
    { id: 14, category: 'nails', type: 'image', title: 'Nail Art - Floral', image: '/floral-nail-art-flowers.jpg' },
    { id: 15, category: 'nails', type: 'image', title: 'Nail Art - Glitter & Gems', image: '/glitter-gemstone-nails.jpg' },
    { id: 16, category: 'nails', type: 'image', title: 'Nail Art - French Manicure', image: '/placeholder.svg?height=400&width=400' },

    // Skin Treatments
    { id: 17, category: 'skin', type: 'image', title: 'Skin Treatment - Glow Facial', image: '/placeholder.svg?height=400&width=400' },
    { id: 18, category: 'skin', type: 'image', title: 'Skin Treatment - Brightening', image: '/placeholder.svg?height=400&width=400' },
    { id: 19, category: 'skin', type: 'image', title: 'Skin Treatment - Anti-Aging', image: '/placeholder.svg?height=400&width=400' },
    { id: 20, category: 'skin', type: 'image', title: 'Skin Treatment - Deep Cleanse', image: '/placeholder.svg?height=400&width=400' },
  ]

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'bridal', label: 'Bridal Makeup' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'hair', label: 'Hair Styling' },
    { id: 'nails', label: 'Nail Art' },
    { id: 'skin', label: 'Skin Treatments' },
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <main>
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Gallery & Portfolio</h1>
          <p className="text-lg text-muted-foreground">Showcase of our professional work and client transformations</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-card border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Transformation Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bridal Transformation',
                before: '/placeholder.svg?height=300&width=300',
                after: '/placeholder.svg?height=300&width=300',
                description: 'Professional bridal makeup with HD finish'
              },
              {
                title: 'Party Glam Makeup',
                before: '/placeholder.svg?height=300&width=300',
                after: '/placeholder.svg?height=300&width=300',
                description: 'Bold and glamorous party look'
              },
              {
                title: 'Hair Styling',
                before: '/placeholder.svg?height=300&width=300',
                after: '/placeholder.svg?height=300&width=300',
                description: 'Elegant updo hairstyle'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card rounded-xl overflow-hidden border border-border">
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground font-semibold">BEFORE</p>
                      <img src={item.before || "/placeholder.svg"} alt="Before" className="w-full h-40 object-cover rounded" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground font-semibold">AFTER</p>
                      <img src={item.after || "/placeholder.svg"} alt="After" className="w-full h-40 object-cover rounded" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Portfolio */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Video Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Bridal Makeup Tutorial', description: 'Step-by-step bridal makeup process' },
            { title: 'Hair Styling Showcase', description: 'Professional hair styling techniques' },
            { title: 'Client Testimonial', description: 'Happy client sharing their experience' },
            { title: 'Makeup Transformation', description: 'Complete makeup transformation video' },
          ].map((video, idx) => (
            <div key={idx} className="group relative bg-card rounded-xl overflow-hidden border border-border h-64">
              <img
                src={`/placeholder.svg?height=300&width=500&query=video_thumbnail_${idx}`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-foreground fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-200">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Portfolio Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '300+', label: 'Happy Clients' },
              { number: '50+', label: 'Services' },
              { number: '10+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Inspired by Our Work?</h2>
        <p className="text-muted-foreground mb-8">
          Let's create your perfect look. Book an appointment or contact us for custom packages.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/booking"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Book Appointment
          </a>
          <a
            href="/contact"
            className="px-8 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}
