'use client'

import { useState } from 'react'
import { Trash2, Edit, Star } from 'lucide-react'

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: 'Priya Sharma', rating: 5, text: 'Amazing bridal makeup!', service: 'Bridal Makeup' },
    { id: 2, name: 'Anjali Verma', rating: 5, text: 'Great party makeup', service: 'Party Makeup' },
  ])

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    rating: 5,
    text: '',
    service: '',
  })

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTestimonial.name && newTestimonial.text) {
      setTestimonials([...testimonials, {
        id: Math.max(...testimonials.map(t => t.id), 0) + 1,
        ...newTestimonial
      }])
      setNewTestimonial({ name: '', rating: 5, text: '', service: '' })
    }
  }

  const handleDelete = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Add Testimonial Form */}
      <div className="bg-card rounded-xl border border-border p-8">
        <h2 className="text-2xl font-bold mb-6">Add Testimonial</h2>
        
        <form onSubmit={handleAddTestimonial} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Client Name</label>
              <input
                type="text"
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                placeholder="Client name"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Service</label>
              <input
                type="text"
                value={newTestimonial.service}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, service: e.target.value })}
                placeholder="Service name"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Rating</label>
              <select
                value={newTestimonial.rating}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, rating: parseInt(e.target.value) })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              >
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Testimonial Text</label>
            <textarea
              value={newTestimonial.text}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, text: e.target.value })}
              placeholder="What did the client say?"
              rows={4}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Add Testimonial
          </button>
        </form>
      </div>

      {/* Testimonials List */}
      <div className="bg-card rounded-xl border border-border p-8">
        <h2 className="text-2xl font-bold mb-6">Testimonials ({testimonials.length})</h2>
        
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.text}</p>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors">
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
