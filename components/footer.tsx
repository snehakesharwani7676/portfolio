import Link from 'next/link'
import { Instagram, Smartphone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sneha Kesharwani</h3>
            <p className="text-sm text-muted-foreground">
              Professional makeup artist & cosmetologist dedicated to transforming beauty with skill, creativity & passion.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Me</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Smartphone size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Sneha Kesharwani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
