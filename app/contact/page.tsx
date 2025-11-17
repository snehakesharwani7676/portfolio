'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main>
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">We'd love to hear from you. Send us a message anytime!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <a href="tel:+91-XXXXXXXXXX" className="text-muted-foreground hover:text-primary transition-colors">
                  +91-XXXXXXXXXX
                </a>
                <p className="text-sm text-muted-foreground mt-1">Mon-Sun: 9 AM - 9 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <a href="mailto:sneha@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  sneha@example.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">
                  [City Name]<br />
                  Available for home visits & salon services
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon-Sun: 9:00 AM - 9:00 PM<br />
                  By appointment only
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors">
                  📷
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors">
                  💬
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors">
                  ▶️
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">Message Sent!</h3>
                <p className="text-green-800 dark:text-green-200">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-xl border border-border p-8">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Visit Our Studio</h2>
          <div className="rounded-xl overflow-hidden border border-border h-96 bg-card flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Studio location map will be displayed here</p>
              <p className="text-sm text-muted-foreground mt-2">Address: [Studio Address], [City]</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: 'Do you offer home visit services?',
              a: 'Yes! We provide services at your location. Travel charges apply based on distance.'
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept cash, UPI, online transfers, and all major payment methods. Advance payment is required for bookings.'
            },
            {
              q: 'Can I reschedule my appointment?',
              a: 'Yes, you can reschedule up to 24 hours before your appointment without any charges.'
            },
            {
              q: 'Do you use hygienic products?',
              a: 'We use premium, certified, and hygienic products from trusted brands only.'
            },
            {
              q: 'What if I have skin allergies?',
              a: 'Please inform us beforehand so we can use products suitable for your skin type.'
            },
            {
              q: 'How long does bridal makeup take?',
              a: 'Typically, bridal makeup takes 1.5 to 2.5 hours depending on complexity and additional services.'
            },
          ].map((faq, idx) => (
            <div key={idx} className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
