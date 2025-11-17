'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState(0)

  const serviceCategories = [
    {
      icon: '💄',
      title: 'Makeup Services',
      description: 'Professional makeup for every occasion',
      services: [
        { name: 'Self Makeup', price: '₹1,500 - ₹2,500', description: 'Perfect makeup for daily wear and personal events' },
        { name: 'Teenage Makeup', price: '₹2,000 - ₹3,000', description: 'Age-appropriate makeup for teens and young adults' },
        { name: 'Reception Makeup', price: '₹3,500 - ₹5,000', description: 'Elegant makeup for reception events' },
        { name: 'Engagement Makeup', price: '₹4,000 - ₹6,000', description: 'Special makeup for engagement ceremonies' },
        { name: 'Bridal Makeup', price: '₹7,000 - ₹12,000', description: 'Premium bridal makeup with HD finish' },
        { name: 'Glam Makeup', price: '₹3,500 - ₹5,500', description: 'Bold and glamorous makeup looks' },
        { name: 'Bronze/Tan Look', price: '₹2,500 - ₹4,000', description: 'Bronzed and tanned beauty look' },
        { name: 'Fantasy Makeup', price: '₹4,000 - ₹7,000', description: 'Creative and artistic makeup designs' },
        { name: 'Model Bride', price: '₹8,000 - ₹15,000', description: 'High-fashion bridal makeup' },
      ]
    },
    {
      icon: '✨',
      title: 'Hair Services',
      description: 'Professional hair care and styling',
      services: [
        { name: 'Hair Do', price: '₹1,500 - ₹3,000', description: 'Stylish hair arrangements' },
        { name: 'Twist Hand Puff', price: '₹800 - ₹1,500', description: 'Trendy puff hairstyle' },
        { name: 'Caterine Hairstyle', price: '₹2,000 - ₹3,500', description: 'Catherine wheel inspired hairstyle' },
        { name: 'Waterfall Braid', price: '₹1,500 - ₹2,500', description: 'Elegant waterfall braid styling' },
        { name: 'Rebonding', price: '₹3,500 - ₹6,000', description: 'Hair rebonding treatment for smooth, straight hair' },
        { name: 'Botox Hair Treatment', price: '₹2,500 - ₹5,000', description: 'Protein-rich hair smoothing treatment' },
        { name: 'Keratin Smoothing', price: '₹3,000 - ₹5,500', description: 'Chemical-free hair smoothing' },
        { name: 'Anti-Hairfall Treatment', price: '₹2,000 - ₹4,000', description: 'Treatment to reduce hair fall' },
        { name: 'Anti-Dandruff Treatment', price: '₹1,500 - ₹3,000', description: 'Specialized dandruff elimination' },
        { name: 'Indian Head Massage', price: '₹800 - ₹1,500', description: 'Traditional relaxing head massage' },
      ]
    },
    {
      icon: '💅',
      title: 'Nail Services',
      description: 'Nail care, art, and design',
      services: [
        { name: 'Nail Anatomy', price: '₹500 - ₹1,000', description: 'Educational nail health consultation' },
        { name: 'Clear Job (Gel & Acrylic)', price: '₹1,500 - ₹2,500', description: 'Clear nail extensions with gel or acrylic' },
        { name: 'Gel Extensions', price: '₹2,000 - ₹3,500', description: 'Long-lasting gel nail extensions' },
        { name: 'Nail Shape Analysis', price: '₹500 - ₹1,000', description: 'Professional nail shape consultation' },
        { name: 'Dry Manicure', price: '₹800 - ₹1,500', description: 'Manicure without soaking' },
        { name: 'Nail French Chart', price: '₹1,000 - ₹2,000', description: 'Classic French manicure design' },
        { name: 'Nail Art', price: '₹1,500 - ₹4,000', description: 'Custom nail art designs' },
        { name: 'Gel Manicure', price: '₹1,500 - ₹2,500', description: 'Long-lasting gel manicure' },
        { name: 'Pedicure', price: '₹1,000 - ₹2,000', description: 'Complete foot care and nail service' },
      ]
    },
    {
      icon: '✨',
      title: 'Skin Services',
      description: 'Premium skincare treatments',
      services: [
        { name: 'Skin Analysis', price: '₹300 - ₹500', description: 'Professional skin type assessment' },
        { name: 'Harmonization', price: '₹1,500 - ₹2,500', description: 'Skin tone balancing treatment' },
        { name: 'Exfoliation', price: '₹1,000 - ₹1,500', description: 'Deep exfoliation for fresh skin' },
        { name: 'Bleaches', price: '₹800 - ₹1,500', description: 'Professional facial bleaching' },
        { name: 'Fruit Facial', price: '₹1,500 - ₹2,500', description: 'Natural fruit extract facial' },
        { name: 'Normal Facial', price: '₹1,200 - ₹2,000', description: 'Standard cleansing facial' },
        { name: 'Brushing Unit Facial', price: '₹2,000 - ₹3,000', description: 'Advanced facial with brush technology' },
        { name: 'Deep Cleanser Facial', price: '₹2,500 - ₹4,000', description: 'Intensive deep cleaning facial' },
        { name: 'Chemical Peel', price: '₹3,000 - ₹5,000', description: 'Professional chemical peel treatment' },
      ]
    },
    {
      icon: '💆',
      title: 'Beauty Services',
      description: 'Additional beauty treatments',
      services: [
        { name: 'Manicure', price: '₹800 - ₹1,500', description: 'Professional hand and nail care' },
        { name: 'Pedicure', price: '₹1,000 - ₹2,000', description: 'Professional foot and nail care' },
        { name: 'Waxing', price: '₹500 - ₹1,500', description: 'Hair removal waxing service' },
        { name: 'Eyebrow Shaping', price: '₹400 - ₹800', description: 'Professional eyebrow design' },
        { name: 'Threading', price: '₹300 - ₹600', description: 'Traditional hair removal threading' },
        { name: 'Lip Care', price: '₹500 - ₹1,000', description: 'Specialized lip treatment' },
      ]
    },
  ]

  return (
    <main>
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground">Comprehensive beauty services tailored to your needs</p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="space-y-4">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className="border border-border rounded-lg overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => setExpandedCategory(expandedCategory === idx ? -1 : idx)}
                className="w-full p-6 bg-card hover:bg-secondary/50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <ChevronDown
                  size={24}
                  className={`transition-transform ${expandedCategory === idx ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Category Services */}
              {expandedCategory === idx && (
                <div className="bg-background/50 border-t border-border p-6">
                  <div className="space-y-4">
                    {category.services.map((service, serviceIdx) => (
                      <div key={serviceIdx} className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{service.name}</h3>
                          <span className="text-primary font-semibold text-sm whitespace-nowrap ml-4">{service.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Package Options */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Special Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Bridal Package',
                price: '₹15,000 - ₹25,000',
                services: ['Makeup', 'Hair Styling', 'Skin Treatment', 'Nail Art'],
                highlight: true
              },
              {
                name: 'Complete Beauty',
                price: '₹8,000 - ₹12,000',
                services: ['Makeup', 'Hair Do', 'Facial', 'Manicure'],
                highlight: false
              },
              {
                name: 'Party Ready',
                price: '₹5,000 - ₹8,000',
                services: ['Makeup', 'Hair Styling', 'Quick Facial', 'Eyebrow'],
                highlight: false
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-8 border transition-all ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50 scale-105'
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                {pkg.highlight && <div className="text-sm font-semibold text-primary mb-2">⭐ POPULAR</div>}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-lg text-primary font-bold mb-6">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
        <p className="text-muted-foreground mb-8">
          Choose your service and schedule an appointment today. Customized packages available on request.
        </p>
        <a
          href="/booking"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Book Now
        </a>
      </section>
    </main>
  )
}
