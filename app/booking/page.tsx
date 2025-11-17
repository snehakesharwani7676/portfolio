'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const services = [
    { value: 'bridal', label: 'Bridal Makeup' },
    { value: 'engagement', label: 'Engagement Makeup' },
    { value: 'party', label: 'Party/Event Makeup' },
    { value: 'reception', label: 'Reception Makeup' },
    { value: 'hair', label: 'Hair Styling' },
    { value: 'nails', label: 'Nail Services' },
    { value: 'facial', label: 'Skin Treatment/Facial' },
    { value: 'package', label: 'Special Package' },
  ]

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setLoading(false)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        notes: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  if (submitted) {
    return (
      <main>
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your booking. We've received your appointment request and will confirm shortly via email and phone.
            </p>
            <div className="bg-primary/10 rounded-lg p-4 mb-6 text-left space-y-2">
              <p className="text-sm"><span className="font-semibold">Name:</span> {formData.name}</p>
              <p className="text-sm"><span className="font-semibold">Service:</span> {services.find(s => s.value === formData.service)?.label}</p>
              <p className="text-sm"><span className="font-semibold">Date:</span> {formData.date}</p>
              <p className="text-sm"><span className="font-semibold">Time:</span> {formData.time}</p>
            </div>
            <a href="/" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Back to Home
            </a>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-lg text-muted-foreground">Schedule your beauty transformation today</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold mb-2">Select Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="">Choose a service...</option>
                  {services.map(service => (
                    <option key={service.value} value={service.value}>{service.label}</option>
                  ))}
                </select>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Date *</label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Time *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="">Choose a time...</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-semibold mb-2">Additional Notes (Optional)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or preferences..."
                  rows={4}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Confirming Booking...' : 'Confirm Booking'}
              </button>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="md:col-span-1">
            <div className="bg-card rounded-xl border border-border p-8 sticky top-24 space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Booking Information</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Appointments are confirmed within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Cancellation allowed up to 24 hours before</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Travel charges apply for home services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Advance payment required for bookings</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="text-muted-foreground">Phone:</span>
                    <br />
                    <a href="tel:+91-XXXXXXXXXX" className="text-primary hover:underline">+91-XXXXXXXXXX</a>
                  </p>
                  <p>
                    <span className="text-muted-foreground">WhatsApp:</span>
                    <br />
                    <a href="https://wa.me/91XXXXXXXXXX" className="text-primary hover:underline">+91-XXXXXXXXXX</a>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Email:</span>
                    <br />
                    <a href="mailto:sneha@example.com" className="text-primary hover:underline">sneha@example.com</a>
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <p className="text-xs text-center">
                  We're located in [City]. For inquiries, call or message us anytime!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Book With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Professional', desc: 'Years of expertise and training' },
              { title: 'Personalized', desc: 'Custom services for your needs' },
              { title: 'Hygienic', desc: 'Premium hygiene standards' },
              { title: 'Reliable', desc: 'On-time and punctual service' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
