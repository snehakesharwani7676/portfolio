'use client'

import { useState } from 'react'
import { LogOut, UploadCloud, Trash2, Edit, Settings, Image, FileText, MessageSquare } from 'lucide-react'
import AdminGallery from './admin-gallery'
import AdminServices from './admin-services'
import AdminTestimonials from './admin-testimonials'

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('gallery')

  const tabs = [
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'services', label: 'Services', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage your portfolio and content</p>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'gallery' && <AdminGallery />}
        {activeTab === 'services' && <AdminServices />}
        {activeTab === 'testimonials' && <AdminTestimonials />}
        {activeTab === 'settings' && <AdminSettings />}
      </div>
    </div>
  )
}

function AdminSettings() {
  const [settings, setSettings] = useState({
    phone: '+91-XXXXXXXXXX',
    email: 'sneha@example.com',
    location: '[City Name]',
    hours: 'Mon-Sun: 9 AM - 9 PM',
  })

  const handleSave = () => {
    alert('Settings updated successfully!')
  }

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-8">
        <h2 className="text-2xl font-bold mb-6">Business Settings</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Location</label>
            <input
              type="text"
              value={settings.location}
              onChange={(e) => setSettings({ ...settings, location: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Business Hours</label>
            <input
              type="text"
              value={settings.hours}
              onChange={(e) => setSettings({ ...settings, hours: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          <button
            onClick={handleSave}
            className="px-8 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
