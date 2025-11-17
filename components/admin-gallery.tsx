'use client'

import { useState } from 'react'
import { UploadCloud, Trash2, X } from 'lucide-react'

export default function AdminGallery() {
  const [uploads, setUploads] = useState([
    { id: 1, title: 'Bridal Makeup - Classic', category: 'bridal', type: 'image' },
    { id: 2, title: 'Hair Styling - Braid', category: 'hair', type: 'image' },
    { id: 3, title: 'Nail Art - Floral', category: 'nails', type: 'image' },
  ])

  const categories = ['bridal', 'engagement', 'hair', 'nails', 'skin']

  const handleDelete = (id: number) => {
    setUploads(uploads.filter(item => item.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <div className="bg-card rounded-xl border border-border p-8">
        <h2 className="text-2xl font-bold mb-6">Upload Media</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Upload */}
          <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
            <UploadCloud size={40} className="text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Upload Images</h3>
            <p className="text-sm text-muted-foreground mb-4">Click to select or drag and drop</p>
            <input type="file" multiple accept="image/*" className="hidden" />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Select Images
            </button>
          </div>

          {/* Video Upload */}
          <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
            <UploadCloud size={40} className="text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Upload Videos</h3>
            <p className="text-sm text-muted-foreground mb-4">Click to select or drag and drop</p>
            <input type="file" multiple accept="video/*" className="hidden" />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Select Videos
            </button>
          </div>
        </div>
      </div>

      {/* Uploads List */}
      <div className="bg-card rounded-xl border border-border p-8">
        <h2 className="text-2xl font-bold mb-6">Media Gallery ({uploads.length})</h2>
        
        <div className="space-y-4">
          {uploads.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">Category: {item.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  {item.type}
                </span>
                <button
                  onClick={() => handleDelete(item.id)}
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
