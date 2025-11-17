'use client'

import { useState } from 'react'
import { Lock } from 'lucide-react'

interface AdminLoginProps {
  onLogin: () => void
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple password check (in production, use proper authentication)
    if (password === 'sneha2025') {
      localStorage.setItem('adminAuth', 'true')
      onLogin()
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-card rounded-xl border border-border p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-2">Admin Access</h1>
          <p className="text-center text-muted-foreground mb-8">Secure login to manage content</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-200 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Demo Note */}
          <div className="mt-8 p-4 bg-secondary/50 rounded-lg border border-border text-center">
            <p className="text-xs text-muted-foreground">
              Demo Password: <span className="font-mono font-semibold text-foreground">sneha2025</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
