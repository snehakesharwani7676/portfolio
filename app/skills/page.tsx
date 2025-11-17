'use client'

import { useEffect, useState } from 'react'

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    {
      category: 'Makeup Artistry',
      level: 95,
      items: ['Bridal Makeup', 'Engagement Makeup', 'Party Makeup', 'Fantasy Makeup', 'Reception Makeup']
    },
    {
      category: 'Hair Styling',
      level: 90,
      items: ['Hair Treatments', 'Rebonding', 'Keratin Smoothing', 'Braiding', 'Hair Design']
    },
    {
      category: 'Nail Services',
      level: 88,
      items: ['Gel Extensions', 'Acrylic Nails', 'Nail Art', 'Manicures', 'Pedicures']
    },
    {
      category: 'Skin Treatments',
      level: 92,
      items: ['Facials', 'Skin Analysis', 'Bleaching', 'Exfoliation', 'Treatment Protocols']
    },
    {
      category: 'Cosmetology',
      level: 91,
      items: ['Color Theory', 'Product Knowledge', 'Client Consultation', 'Safety Standards', 'Hygiene']
    },
    {
      category: 'Customer Service',
      level: 96,
      items: ['Client Relations', 'Communication', 'Problem Solving', 'Feedback Management']
    },
  ]

  return (
    <main>
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Professional Skills</h1>
          <p className="text-lg text-muted-foreground">Expertise developed through years of dedicated practice</p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, idx) => (
            <div key={idx} className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{skill.category}</h3>
                <span className="text-primary font-bold text-lg">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              {mounted && (
                <div className="mb-6 bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              )}

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '10+', label: 'Years Experience' },
              { number: '100%', label: 'Quality Assured' },
              { number: '50+', label: 'Services Offered' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
