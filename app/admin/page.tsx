'use client'

import { useState, useEffect } from 'react'
import { LogOut, UploadCloud, Trash2, Edit, Eye, Lock } from 'lucide-react'
import AdminLogin from '@/components/admin-login'
import AdminDashboard from '@/components/admin-dashboard'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const auth = localStorage.getItem('adminAuth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    setIsAuthenticated(false)
  }

  if (!mounted) return null

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <main className="min-h-screen bg-background">
      <AdminDashboard onLogout={handleLogout} />
    </main>
  )
}
