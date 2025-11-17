'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Welcome to Beauty Excellence</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-balance">
            Professional Makeup Artist & Cosmetologist
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            Transforming beauty with skill, creativity & passion. Specializing in bridal makeup, hair styling, nail art, and premium skin treatments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              View Portfolio
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/booking"
              className="px-8 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors border border-border"
            >
              Book Appointment
            </Link>
          </div>

          {/* Shimmer Animation */}
          {mounted && (
            <div className="mt-12 relative h-64 rounded-xl overflow-hidden shimmer bg-gradient-to-r from-transparent via-primary/20 to-transparent">
              <img
                src="/makeup-artist-professional-photoshoot.jpg"
                alt="Professional makeup artistry showcase"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Signature Services</h2>
          <p className="text-muted-foreground">Expert services tailored to enhance your natural beauty</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '💄',
              title: 'Makeup Artistry',
              description: 'From everyday makeup to bridal excellence, creating stunning looks tailored to you.',
            },
            {
              icon: '✨',
              title: 'Hair Services',
              description: 'Professional hair styling, treatments, and transformations for all occasions.',
            },
            {
              icon: '💅',
              title: 'Nail & Skin',
              description: 'Expert nail art, manicures, pedicures, and premium skin treatments.',
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Look?</h2>
          <p className="text-muted-foreground mb-8">
            Schedule your appointment today and experience professional beauty services.
          </p>
          <Link
            href="/booking"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  )
}
