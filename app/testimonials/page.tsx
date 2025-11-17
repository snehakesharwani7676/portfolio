'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Bride',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Sneha made me feel absolutely beautiful on my wedding day! Her attention to detail and professionalism was outstanding. Highly recommended!',
      service: 'Bridal Makeup'
    },
    {
      name: 'Anjali Verma',
      role: 'Event Attendee',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'The party makeup was flawless and lasted the entire event. Sneha is truly an artist with the brush. Will definitely book again!',
      service: 'Party Makeup'
    },
    {
      name: 'Neha Patel',
      role: 'Engagement Bride',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Best decision to get Sneha for my engagement. She understood my vision perfectly and executed it beautifully. Thank you!',
      service: 'Engagement Makeup'
    },
    {
      name: 'Meera Singh',
      role: 'Regular Client',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'I visit Sneha for all my beauty needs - makeup, hair, and skincare. She\'s professional, skilled, and always makes me look my best!',
      service: 'Complete Beauty Services'
    },
    {
      name: 'Kavya Desai',
      role: 'Bride',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Sneha\'s bridal makeup package included hair and nail art too! Everything was coordinated perfectly. She\'s worth every penny!',
      service: 'Bridal Package'
    },
    {
      name: 'Pooja Nair',
      role: 'Skin Client',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'The facial treatment was relaxing and my skin has never looked better. Sneha\'s expertise in skincare is exceptional!',
      service: 'Facial Treatment'
    },
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '100%', label: 'Satisfaction' },
    { number: '10+', label: 'Years Experience' },
  ]

  return (
    <main>
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-lg text-muted-foreground">Read what our happy clients have to say</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 line-clamp-4">{testimonial.text}</p>

              {/* Service Badge */}
              <div className="mb-6 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                {testimonial.service}
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Video Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Priya\'s Wedding Day', title: 'Bridal Transformation' },
              { name: 'Anjali\'s Engagement', title: 'Engagement Makeup Look' },
            ].map((video, idx) => (
              <div key={idx} className="group relative bg-card rounded-xl overflow-hidden border border-border h-64">
                <img
                  src={`/testimonial-video-.jpg?height=300&width=500&query=testimonial_video_${idx}`}
                  alt={video.name}
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
                  <p className="font-semibold">{video.name}</p>
                  <p className="text-sm text-gray-200">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Happy Clients</h2>
        <p className="text-muted-foreground mb-8">
          Experience professional beauty services that transform your look and confidence.
        </p>
        <a
          href="/booking"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Book Your Appointment
        </a>
      </section>
    </main>
  )
}
