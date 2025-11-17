'use client'

import { useState } from 'react'
import { Trash2, Edit } from 'lucide-react'

export default function AdminServices() {
  const [services, setServices] = useState([
    { id: 1, name: 'Bridal Makeup', category: 'makeup', price: '₹7,000 - ₹12,000' },
    { id: 2, name: 'Hair Styling', category: 'hair', price: '₹1,500 - ₹3,000' },
    { id: 3, name: 'Nail Art', category: 'nails', price: '₹1,500 - ₹4,000' },
  ])

  const [newService, setNewService] = useState({
    name: '',
    category: 'makeup',
    price: '',
    description: '',
  })

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault()
    if (newService.name && newService.price) {
      setServices([...services, {
        id: Math.max(...services.map(s => s.id), 0) + 1,
        ...newService as any
      }])
      setNewService({ name: '', category: 'makeup', price: '', description: '' })
    }
  }

  const handleDelete = (id: number) => {
    setServices(services.filter(s => s.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Add Service Form */}
      <div className="bg-card rounded-xl border border-border p-8">
        <h2 className="text-2xl font-bold mb-6">Add New Service</h2>
        
        <form onSubmit={handleAddService} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Service Name</label>
              <input
                type="text"
                value={newService.name}
                onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                placeholder="e.g., Bridal Makeup"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Category</label>
              <select
                value={newService.category}
                onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              >
                <option value="makeup">Makeup</option>
                <option value="hair">Hair</option>
                <option value="nails">Nails</option>
                <option value="skin">Skin</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Price Range</label>
              <input
                type="text"
                value={newService.price}
                onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                placeholder="₹1,000 - ₹5,000"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Description</label>
            <textarea
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              placeholder="Service description..."
              rows={3}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Add Service
          </button>
        </form>
      </div>

      {/* Services List */}
      <div className="bg-card rounded-xl border border-border p-8">
        <h2 className="text-2xl font-bold mb-6">Services ({services.length})</h2>
        
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex-1">
                <h3 className="font-semibold">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded capitalize">
                  {service.category}
                </span>
                <button className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors">
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
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
