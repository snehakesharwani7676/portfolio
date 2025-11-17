'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function About() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Makeup Artist | Hair Stylist | Skin Expert | Nail Artist'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Hello! I'm Sneha Kesharwani, a passionate and skilled professional in the beauty and cosmetology industry. With years of dedicated experience and continuous learning, I've honed my craft to deliver exceptional results.
              </p>
              <div className="h-12 bg-primary/10 rounded-lg p-4 flex items-center">
                <span className="font-semibold text-primary">{displayText}</span>
              </div>
              <p className="text-muted-foreground">
                My journey in the beauty industry has been driven by a love for transforming appearances and boosting confidence. Every client is unique, and I believe in providing personalized services that bring out their best self.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src="/professional-makeup-artist-portrait.jpg"
              alt="Sneha Kesharwani"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">My Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: '2015', title: 'Started Journey', desc: 'Began exploring beauty and cosmetology' },
              { year: '2017', title: 'Professional Training', desc: 'Completed certification programs' },
              { year: '2019', title: 'Established Practice', desc: 'Started professional beauty services' },
              { year: '2025', title: 'Premium Services', desc: 'Now offering comprehensive beauty solutions' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{item.year}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Quality', desc: 'Using premium products and techniques for best results' },
            { title: 'Creativity', desc: 'Designing unique looks that match your personality' },
            { title: 'Care', desc: 'Treating each client with respect and dedication' },
          ].map((value, idx) => (
            <div key={idx} className="p-8 bg-card rounded-xl border border-border text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
